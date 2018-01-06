+++
draft = false
date = 2016-12-07T19:01:51Z
title = "[VPS]CentOS7.2の初期設定(1) -SSH編"
description = "CentOS7.2の初期設定 その1 SSH編です。サーバーを立てた段階では色々と設定が必要ですが、まずはセキュアな通信を行いサーバーにアクセスする必要があります。今回は、作業用ユーザを作成後、ポート変更や公開鍵方式のログイン、ローカルからのSSH接続のショートカットの設定を行います。"
tags = ["server", "vps"]
eyecatch = ""
toc = true
+++

# はじめに
以前のブログで書いた記事を再編集しました。(2018/01/06)\
VPSは今回が初めてで知識レベルとしてはほぼ初心者であり、Webで色々調べながら設定をしています。
間違った設定ではないと思いますが、回りくどい設定をしている可能性があります。その点はご了承ください！\
参考までに、Macのターミナルを使ったことがあり、viエディタの文字挿入、保存などのコマンドも理解している程度です。\
\
設定環境\
ローカル: MacOS: Mac Sierra\
VPS: [ConoHa VPS](https://www.conoha.jp/referral/?token=LzqWKoEVPLE9NxlhMZLBT_RTAnBxkAThfKmD8lDJirkrQsD0cYg-GD6)\
OS: CentOS Linux release 7.2.1511 (Core)

## SSHでの接続
VPSは起動したまま、IPアドレスがマシンに割り当てられてるはずなので以下のコマンドをMacのターミナルで実行。

```
ssh root@xxx.xxx.xxx.xxx
```

先程設定したrootパスワードを入力\
初めての接続なので、Are you sure you want to continue connecting? と聞かれるはずです。\

```
The authenticity of host ‘xxx.xxx.xxx.xxx (xxx.xxx.xxx.xxx)' can't be established.
ECDSA key fingerprint is SHA256:F0CEV0RPB9vP1VNLqNjkvnDVdTVUfNm2SI9Ps4tAnD8.
Are you sure you want to continue connecting (yes/no)? yes
Warning: Permanently added 'xxx.xxx.xxx.xxx' (ECDSA) to the list of known hosts.
root@xxx.xxx.xxx.xxx's password: //パスワードを入力

[root@xxx.xxx.xxx.xxx ~]#
```

これで、アクセスが出来ました。\
今後は省略として、#はrootでのコマンドライン、$は後ほど設定する作業用ユーザまたはローカル環境のコマンドラインとします。\

## パッケージのアップデート

```
# yum update
```

アップデートしても良いか聞かれるので、y をタイプし、パッケージのアップデートをします。
しばらく時間が掛かります。 `Complete!` が出たらアップデート完了です。

# 作業用ユーザの作成
rootユーザは絶対権限を持っている事、ほぼ全てのLinuxにrootユーザは存在する為、セキュリティの観点から作業用ユーザを作成します。
今後は作業用ユーザをメインで使用していきます。仮の名前としてdevuserとしておきます。

```
# adduser devuser
```

パスワードの設定

```
# passwd devuser
```

## sudoコマンドの実行権限の付与

ターミナルを使用した事がある方ならば、使った事があるはずのsudoコマンドを実行できるように先程作ったユーザに権限を付与します。
wheelというグループに所属させる、という感じですが、wheelグループはsudoコマンドを実行可能という事です。

```
# gpasswd -a devuser wheel
```

suコマンドを制限する\
suコマンドはユーザの切り替えが可能である為、セキュリティを少しでも上げる為にwheelグループ以外からのsuコマンドを実行出来ないようにします。

```
# vi /etc/pam.d/su
auth required pam_wheel.so use_uid
```

上に書いている一文があるので、#を消して有効にしてください。

## ユーザの切り替え

```
# su devuser
// パスワード入力
[devuser@xxx.xxx.xxx.xxx ~]$
```

ターミナルの左側の名前がrootから作業用ユーザ名に切り替わっていればOK!\
作業用ユーザに切り替えたら、sudoコマンドが実行できるかチェックしておきます。

```
$ sudo echo “test”;
//作業用ユーザのパスワードを入力
test
```

となっていれば、成功です。

# SSHの公開鍵と秘密鍵の設定
パスワードの接続よりさらに強固な公開鍵方式の接続に変えて行きます。

ホームディレクトリに移動

```
$ cd ~/
$ pwd
/home/devuser/
```

`/home/xxxx/`となっていれば、移動出来ているので大丈夫です。

## .sshディレクトリの作成とパーミッションの変更

```
$ mkdir .ssh
$ chmod 700 .ssh
```

鍵を作成するのですが、私はここでVPS側で鍵は生成せず、自分のパソコン側で作成しましたので、そちらの方法で書きます。
ひとまずexitコマンドでSSHを切断します。

```
$ exit
logout
Connection to xxx.xxx.xxx.xxx closed.
```

切断したら、以下のメッセージが表示され、Macのローカルのユーザの表示になっているはずです。

## ローカル側で秘密鍵と公開鍵の作成
ここからはローカルでの作業です。
ローカルで秘密鍵と公開鍵を作った後にサーバへ公開鍵をアップロードします。

```
$ cd
$ mkdir .ssh
$ cd .ssh
```

ホームディレクトリに移動した後、.sshディレクトリの作成を行い、移動します。
移動した後は以下のコマンドで鍵を作成します。

```
$ ssh-keygen -t rsa -b 2048
```

今回は例として、testというファイル名にしてみます。

```
Generating public/private rsa key pair.
Enter file in which to save the key (/Users/ユーザ名/.ssh/id_rsa): test
Enter passphrase (empty for no passphrase): // パスフレーズ(5文字以上)
Enter same passphrase again: // もう一度同じパスフレーズを入力
Your identification has been saved in test.
Your public key has been saved in test.pub.
The key fingerprint is:
SHA256:pXG8z/gEMzgyLIOjPYLgBS+ZkeHjQos6uJiIngDSSog ユーザ名@Macbook.local
The key's randomart image is:
+---[RSA 2048]----+
| +o              |
|..*. .           |
|.Boo. . +        |
|X+=. . . B .     |
|E=+ o S =        |
|Bo . o . B       |
|* . +            |
|=+. o            |
|Bo .             |
+----[SHA256]-----+
```

＊テストで作成したものです。パスフレーズによってこの絵みたいなのは変わります。
無事に生成されているかチェック。

```
$ ls
test test.pub
```

という二つの鍵が生成されます。.pubが公開鍵で付いてない方が秘密鍵です。

## 秘密鍵と公開鍵パーミッションの変更

```
$ chmod 600 test
$ chmod 600 test.pub
```

## 公開鍵の名前を変更する

```
$ mv test.pub authorized_keys
```

これは、[ConoHa](https://www.conoha.jp/referral/?token=LzqWKoEVPLE9NxlhMZLBT_RTAnBxkAThfKmD8lDJirkrQsD0cYg-GD6)のサーバーのSSHの設定で公開鍵のファイル名がこうなっているので変更しておきます。

## サーバに公開鍵をアップロード

```
$ scp authorized_keys devuser@xxx.xxx.xxx.xxx:/home/devuser/.ssh
devuser@xxx.xxx.xxx.xxx's password: パスワードを入力
authorized_keys 100% 409 0.4KB/s 00:00
```

これでローカルの作業は終了です。この辺りで大体半分ぐらい終わりました！
サーバーの作業に移ります。

```
$ ssh devuser@xxx.xxx.xxx.xxx
$ cd .ssh
$ ls
authorized_keys
```

公開鍵がアップロードされているはずです。
されてない場合は、ローカルからサーバにアップロードしましょう。

# 最低限のセキュアなSSH設定
書き換えた部分のみを書いておきます。それ以外は、何も触っていません。
不安な場合はcpコマンド等でバックアップを取ってください。
viでは `/` で単語の検索、`shift + g`で編集しているファイルの一番下にジャンプ出来ます。(他にも色々ありますが、今回は省略します。)
最後にざっくりと各項目についてわかった事を書いておきます。
最初はめちゃくちゃ不安で調べまくった上に徐々に書き換えをしていましたが、
2回目の設定で一気に変更してみましたが、無事に出来ました。

```
$ sudo vi /etc/ssh/sshd_config

//ポートの変更(一般的に、49152番 - 65535番はプライベートポートとなっています)
//例として59876とします
#Port 22
Port 59876

//使わない認証のコメントアウト
#HostKey /etc/ssh/ssh_host_ecdsa_key
#HostKey /etc/ssh/ssh_host_ed25519_key

//rootログインの無効化
PermitRootLogin no

//コメントアウトを消して公開鍵通信の有効化
RSAAuthentication yes
PubkeyAuthentication yes

//パスワード認証の許可（何故か2個ありましたが、両方noにしました
PasswordAuthentication no

PasswordAuthentication no

//GSSAPI認証というものらしいですが使ってないのでno
GSSAPIAuthentication no
```

ひとまず、SSHのconfigファイルを触りましたが接続するポートを変更しているので、ポートの設定を変更します。
Cent OS7.x系では、iptablesからfirewallというものに変更になりコマンド等が大きく違うようです。

[ConoHa](https://www.conoha.jp/referral/?token=LzqWKoEVPLE9NxlhMZLBT_RTAnBxkAThfKmD8lDJirkrQsD0cYg-GD6)ではデフォルトでfirewallが自動起動になっていると思いますが、念のためチェック。

```
$ systemctl status firewalld.service
Active: active (running)
```

緑色で active になっていれば、起動しています。

**Firewallデフォルトの設定ファイルからユーザ設定ディレクトリにファイルをコピーする**

作業用ユーザだとアクセス権限が無く、tabキーの補完機能が動いてくれないので一時的にrootユーザに変更します。

```
$ su root
# cp /usr/lib/firewalld/services/ssh.xml /etc/firewalld/services/ssh.xml
# vi /etc/firewalld/services/ssh.xml

<?xml version="1.0" encoding="utf-8"?>
<service>
<short>SSH</short>
<description>Secure Shell (SSH) is a protocol for logging into and executing commands on remote machines. It provides secure encrypted communications. If you plan on accessing your machine remotely via SSH over a firewalled interface, enable this option. You need the openssh-server package installed for this option to be useful.</description>
<port protocol="tcp" port="22”/> #下記に書き換える
<port protocol="tcp" port="59876"/>
</service>
```

port=“22” から “59876”に変更します。

この時点でもかなり初めての方には大変だと思います。詳しい説明は、以下のリンクにて書かれております。時間があるときにゆっくりと読んでみてください。

[CentOS7のfirewalldをまじめに使うはじめの一歩（systemdも少し） - Qiita](http://qiita.com/shrkw/items/8410e9cb65eb789a40e1)

書き換わったことを確認して、firewallのリロードを行います。

```
# firewall-cmd —reload
success
```

となれば設定ファイルの再読み込みが行われるそうです。
今後もfirewallのコマンドはいくつか使っていきます。
rootのままSSHの設定も再読み込みを行います。

```
# systemctl restart sshd.service
```

何も表示はされなければ大丈夫です。

```
# exit
$ exit
logout
Connection to xxx.xxx.xxx.xxx closed.
```

でrootとSSHを切断します。SSHでポートを指定して、再接続

```
$ ssh devuser@xxx.xxx.xxx.xxx -p 59876
The authenticity of host ‘[xxx.xxx.xxx.xxx]:59876 ([xxx.xxx.xxx.xxx]:49152)' can't be established.
RSA key fingerprint is SHA256:GoIsriJaq/KUXFh1aHsFeihioeH155SkuQfDuJnoqurGAfgc.
Are you sure you want to continue connecting (yes/no)? yes
```

以下の表示が出ても大丈夫です。

```
Permission denied (publickey)
```

秘密鍵の名前を変更している場合、オプションで秘密鍵の場所を指定してあげる必要があります。

# SSH接続のショートカットの作成
秘密鍵の名前を変更している、またはIPアドレスやポートをイチイチ打つのが面倒という場合はショートカットを作成します。
SSHに接続している場合は一度切断してください、**ローカル側** で作業します。

```
$ cd
$ cd .ssh
```

ホームディレクトリに移動し、.sshディレクトリに移動します。
そして以下のコマンドでconfigファイルを作成します。

```
$ sudo vi config

// #の中はコメントアウトになります
Host conoha
HostName xxx.xxx.xxx.xxx
User devuser
Port 59876
IdentityFile ~/.ssh/id_rsa // または秘密鍵のファイル名
```

で保存します。

```
$ ssh conoha
```

と打ち込むだけでSSH接続が可能だと思います。
またショートカットを作成しない場合はsshのオプション `-i /path/to/rsa_key` という感じで指定してあげます。
それでも接続出来ない場合は、私が見落としていたポイントを列挙します。

- サーバ側の.sshディレクトリのパーミッション変更忘れ</li>
- 秘密/公開鍵のパーミッション変更忘れ</li>
- sshd_configファイルの設定漏れ</li>
- sshdの設定の再読み込みのし忘れ</li>

SSHで接続出来なくても、[ConoHa](https://www.conoha.jp/referral/?token=LzqWKoEVPLE9NxlhMZLBT_RTAnBxkAThfKmD8lDJirkrQsD0cYg-GD6)のサーバページからコンソールで直接アクセス可能ですので、諦めないでください。

特にパーミッション周りで忘れていて、かなりハマったので設定する方はこの辺りに気をつけてください。
本当に詰まった時はサーバ再構築も可能ですので失敗を恐れずにどんどん試してみましょう！

# 参考サイト
[ConohaにVPSを設置して、SSHログイン、ポート番号変更、rootログイン禁止までを30分で！ - Qiita](http://qiita.com/ongaeshi/items/bb17ebfbd4d22057c8fd)\

[サーバをセキュアにするために最低限やっておくべきOpenSSHの設定 | CentOS | daily memorandum 3.0.0](http://lovepeers.org/2012/09/18/openssh-minimum-configs/)\

[ConoHaでVPSを借りて、SSH接続などの初期設定 - tkm_71のブログ](http://tkm-71.hatenablog.com/entry/2016/03/20/153825)\

[TCPやUDPにおけるポート番号の一覧 - Wikipedia](https://ja.wikipedia.org/wiki/TCP%E3%82%84UDP%E3%81%AB%E3%81%8A%E3%81%91%E3%82%8B%E3%83%9D%E3%83%BC%E3%83%88%E7%95%AA%E5%8F%B7%E3%81%AE%E4%B8%80%E8%A6%A7)
