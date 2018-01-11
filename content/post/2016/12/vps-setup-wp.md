+++
draft = true
date = 2016-12-07T19:04:13Z
title = "[VPS]CentOS7.2の初期設定(4) -WordPress編-"
description = "CentOS7.2の初期設定 その4 WordPress編です。MariaDBのデータベース作成から、wp-config.phpの追加の方法とBackWPupやphpmyadminからエクスポートしたsqlファイルを追加する方法等を記載してます。"
tags = ["server", "vps"]
eyecatch = ""
toc = true
+++

以前のブログで書いた記事を再編集しました。(2018/01/06)\
[前回]({{< ref "vps-db-apache-settings.md" >}})Apacheの設定とMariaDBの設定をしました。

今回は最後のWordPressのインストールとバックアップファイルからのリストアの方法を記載します。

WordPressを新規でインストールした後、リストアの方法を記載します。

設定環境\
ローカル: MacOS: Mac Sierra\
VPS: [ConoHa VPS](https://www.conoha.jp/referral/?token=LzqWKoEVPLE9NxlhMZLBT_RTAnBxkAThfKmD8lDJirkrQsD0cYg-GD6)\
OS: CentOS Linux release 7.2.1511 (Core)\
作業用ユーザ名: devuser\
SFTPユーザ名: sfuser\


# MariaDBのデータベース設定
始めにMariaDBでデータベースの設定を行います。
ターミナルを使って、SSHでVPSにアクセスし下記のコマンドを実行します。

```
$ mysql -u root -p
//前回設定したrootのパスワードを入力

MariaDB [(none)]> CREATE DATABASE db_wp_test;
Query OK, 1 row affected (0.00 sec)
MariaDB [(none)]> GRANT ALL PRIVILEGES ON db_wp_test.* TO test_wp@localhost IDENTIFIED BY "pass_wordpress";
Query OK, 0 rows affected (0.00 sec)
MariaDB [(none)]> FLUSH PRIVILEGES;
Query OK, 0 rows affected (0.00 sec)
MariaDB [(none)]> EXIT
Bye
```
今回はテストとして\
データベース名: `db_wp_test`\
データベースユーザ名: `test_wp`\
データベースパスワード: `pass_wordpress`\
として作成していきます！

## WordPressのインストール
データベース及びユーザも作成したので、WordPressを入れていきます。
WordPressを本家サイトよりダウンロードした後、私の設定ではsftp専用ユーザを作成しているので
FTPクライアント等で適当な所にWordPressをアップロードします。

アップロードが完了したら、SSH側の作業に戻ります。

rootユーザに切り替えて、WordPressが置いてある階層まで移動します。

```
$ su
# cd /home/sfuser/public_html/example.com/wordpress/
```

`wp-config.php` ファイルをサンプルからコピーします。

```
# cp wp-config-sample.php wp-config.php
```

先ほど設定したデータベースの情報に書き換えていきます。

```
# vi wp-config.php

// ** MySQL settings - You can get this info from your web host ** //
/** The name of the database for WordPress */
// データベース名
define('DB_NAME', 'db_wp_test’);

/** MySQL database username */
// ユーザ名
define('DB_USER', 'test_wp');

/** MySQL database password */
// パスワード
define('DB_PASSWORD', 'pass_wordpress’);

// saltの設定も必要なので、下記サイトにアクセスしてsaltをコピーして、
// wp-config.php の中の部分を書き換えてください。
// 中の値はサンプルです。
// https://api.wordpress.org/secret-key/1.1/salt/

define('AUTH_KEY', 'N>^oG{f#YM0+~D15}{T?.+Vq+K3x|Sc_[x|Rv15C9]+=5ZLCrjjU&J72|oejofRy');
define('SECURE_AUTH_KEY', '8t^P.? p|k3ioefioIxe-SE-xp:4iH%?!1/d_6n0JcN>x&SwI/9aQ{kLV+>O6X;8h>J');
define('LOGGED_IN_KEY', 'K@F|fsaih&#_0bC!3R@rQZ,Y64vBd&q3MU5-mn0PiFwAO.=N!K`$_B)I.F/}D');
define('NONCE_KEY', ',iZ)>}g~lVXiOeRe(q1w6=-|*X7 >ZP :ncGDrpiYOkUZJw5Z|/ m#CIwnyBghU');
define('AUTH_SALT', 'uW)p*V4OY/Aj&t[f}9qwax|HKXrW@jpIoO-=:GLMh90.NcY^@]mv$EOC6*=pl&/?');
define('SECURE_AUTH_SALT', 'Tf5k=?_=%=PL-we9h4#Lo.yhN]+~K2A=FQR<F9SmL:c3>M#R]3Q-rYi}gfDLu_EK');
define('LOGGED_IN_SALT', 'Xq9((9DNn5k$p_tC5OhwGZ#|$w]@U@td[wQFtyE[s?>/*q@lC*X+|LiUSx|p;#UI');
define('NONCE_SALT', '!70YNC64JS[2$4Y,n|X;x95h|M<y5%.G$nos_V}b#{fd2 :3jlqSPjoIZMn+S5y&');
```

また、コピーした際にファイルの所有者が変わってしまうはずなので、書き換えが終了したら
ファイルの所有者を変更します。

```
# chown sfuser:sfuser wp-config.php
```

後は、WordPressの置いた部分にブラウザからアクセスすればWordPressのインストールが始まると思います。
http://example.com/wordpress/

## データベースバックアップからのインポート
BackWPUpやphpmyadminなどで取得したデータベースのバックアップファイルをMariaDBにインポートする方法は以下のコマンドで.sqlファイルを読み込ませる事ができます。

```
$ mysql -u root -p < xxxx.sql
```

動作しない場合

このブログを写した際に起こった事ですが、ファイルやフォルダのパーミッションはよく確認してください。
パーミッションが全てFTPクライアントの設定でアップロードした際に書き換わっていました。

## プラグイン/バージョンの更新をSFTPで行う
これは予期していなかったのですが、WordPressはSFTPでの通信はまだサポートされていません。\
なので、私はSSH SFTP Updater Supportというプラグインを利用しています。
SSH2を選択し、秘密鍵のアップロードもしくはペーストしパスフレーズを設定している場合は、パスワードの欄に記入してください。
今回の設定だと、FTPのポートは解放していないのでSFTP以外で通信している場合は、アップデートが失敗するはずです。
色々アップデートのテストを行なってみましたがちゃんと動作しているようです。

かなり細かく書いたつもりですが、私自身も調べながら設定をしたので変な設定をしているかもしれません。
ただ、色々調べた中で各セクション毎でしか記事を見つける事が出来ずかなり苦労しました。。
一通りの流れは書けたかと思いますので、それぞれの記事がこれから設定する方の手助けになれば幸いです。

おかしい部分やセキュリティ的にこの設定は危ない等ありましたら是非教えてください！
番外編として、
Let’s Encryptを取得してサイトをHTTPS化にする
PHPアクセラレーション等を駆使してWordPressの高速化を図る の2つの記事も書いてます。


# 参考サイト
[Centos7にWordpressを新規導入のあれこれ(1) - Qiita](http://qiita.com/wynnkengeofu/items/89d2454fd92b9cfd932f)
