+++
draft = false
date = 2016-12-07T19:02:34Z
title = "[VPS]CentOS7.2の初期設定(2) -LAMPインストール編"
description = "ConoHa VPSでCentOS7.2の初期設定 LAMP環境の構築編です。MariaDB(MySQL),PHPのインストールとApache/MariaDBの起動と自動起動の設定を行います。"
tags = ["server", "vps"]
eyecatch = ""
toc = true
+++

以前のブログで書いた記事を再編集しました。(2018/01/06)\
CentOS7.2の初期設定 LAMPインストール編
[前回]({{< ref "vps-ssh-setup.md" >}})の続きとなりますが、設定環境及び作業用ユーザ名は以下となります。

設定環境\
ローカル: MacOS: Mac Sierra\
VPS: [ConoHa VPS](https://www.conoha.jp/referral/?token=LzqWKoEVPLE9NxlhMZLBT_RTAnBxkAThfKmD8lDJirkrQsD0cYg-GD6)\
OS: CentOS Linux release 7.2.1511 (Core)\
作業用ユーザ名: devuser


SSHの設定、SSHのショートカットコマンドについては、[前回の投稿]({{< ref "vps-ssh-setup.md" >}})の最後で説明しております。

# PHPのインストール
サーバーにアクセスしたら、早速yumでphpのファイル群をインストールします。\
最新のPHP7をインストールには[こちら]({{< ref "vps-php-7-install.md" >}})の記事をご覧ください。

```
$ ssh conoha
$ sudo yum -y install php-mysql php php-gd php-mbstring
```

yum -y でyes/noと聞かれる部分を自動でyesと答えるオプションです。

```
Installed:
php.x86_64 0:5.4.16-36.3.el7_2 php-gd.x86_64 0:5.4.16-36.3.el7_2
php-mbstring.x86_64 0:5.4.16-36.3.el7_2 php-mysql.x86_64 0:5.4.16-36.3.el7_2

Dependency Installed:
libXpm.x86_64 0:3.5.11-3.el7 libzip.x86_64 0:0.10.1-8.el7
php-cli.x86_64 0:5.4.16-36.3.el7_2 php-common.x86_64 0:5.4.16-36.3.el7_2
php-pdo.x86_64 0:5.4.16-36.3.el7_2 t1lib.x86_64 0:5.1.2-14.el7

Complete!
```

依存するパッケージも一緒にインストールされていました。
またWordPress等でXMLを使用している場合は `php-xml` もインストールする必要があります。
私の場合だと、WordPressのJetpackプラグインがXMLを使用していたのでエラーが出ていました。

## phpのインストールチェック+バージョン確認

```
$ php --version
PHP 5.4.16 (cli) (built: Aug 11 2016 21:24:59)
Copyright (c) 1997-2013 The PHP Group
Zend Engine v2.4.0, Copyright (c) 1998-2013 Zend Technologies
```

最新のPHP7をインストールには[こちら]({{< ref "vps-php-7-install.md" >}})の記事をご覧ください。

## php.ini の設定
PHPをインストールしたら、php.iniの設定を行います。
php.iniのパスは、/etc/php.ini です。
以下、書き換えた部分を記載してます。

```
$ sudo vi /etc/php.ini
default_charset = "UTF-8"
date.timezone = Asia/Tokyo
mbstring.language = Japanese
mbstring.internal_encoding = UTF-8
mbstring.http_input = auto
mbstring.http_output = UTF-8

expose_php = Off
short_open_tag = Off
```

この辺りはもう少し調べる必要がありそうです。

# MariaDB(MySQL)のインストール
CentOS7.x から MySQLでは無く、互換性のあるMariaDBに変更になったようです。
気になる点と言えば、<del>WordPressが問題なく動作するかどうかなので、色々調べましたが大丈夫そうです。
ですが、私のように移行を考えている方は、LAMP環境を整えた後にテスト環境を構築して、一度テストする事を強くお勧めします。</del>\
なんの問題もなくWordPressは動作しています(2018/01/06)

```
$ sudo yum -y install mariadb mariadb-server

Installed:
mariadb.x86_64 1:5.5.50-1.el7_2 mariadb-server.x86_64 1:5.5.50-1.el7_2

Dependency Installed:
perl-Compress-Raw-Bzip2.x86_64 0:2.061-3.el7 perl-Compress-Raw-Zlib.x86_64 1:2.061-4.el7
perl-DBD-MySQL.x86_64 0:4.023-5.el7 perl-DBI.x86_64 0:1.627-4.el7
perl-Data-Dumper.x86_64 0:2.145-3.el7 perl-IO-Compress.noarch 0:2.061-2.el7
perl-Net-Daemon.noarch 0:0.48-5.el7 perl-PlRPC.noarch 0:0.2020-14.el7

Complete!
```

これで、MariaDBのインストールが完了しました。念のためインストールチェックを行います。

```
$ mysql --version
mysql Ver 15.1 Distrib 5.5.50-MariaDB, for Linux (x86_64) using readline 5.1
```

# Apacheのインストール
ConoHaではデフォルトでApacheはインストールされておりました。
一応以下にコマンドを載せておきます。

```
$ sudo yum -y install httpd
```

# MariaDBとApacheの自動起動の設定
MariaDB,Apacheのインストールが完了しましたが、データベースもWebサーバーもまだ動いていません。\
また、DBやApacheの起動後にVPSの再起動などを行うと自動起動が有効になっていないため、手動で動かす必要があります。
それぞれの起動と自動起動の設定手順となります。\
サーバー上でMariaDBとApacheが起動しているのかをチェックします。

```
$ systemctl list-units | grep -e mariadb -e httpd
```

`grep -e xxx` で複数キーワードを指定できます。一つの場合は `grep xxx` となります。
何も表示されない場合は起動していないという事です。
`$ systemctl list-units` で現在どのようなサービスが起動しているかを一覧できます。

サーバーの再起動の際に自動で起動するかどうかもチェックします。

```
$ systemctl list-unit-files | grep -e mariadb -e httpd
httpd.service disabled
mariadb.service disabled
```

disabledなので、無効となっております。

## MariaDBの起動
`systemctl` コマンドでMariaDBを起動します。パスワードを聞かれるので、入力してください。

```
$ systemctl start mariadb.service
// パスワード入力
==== AUTHENTICATION COMPLETE ===
```

`AUTHENTICATION COMPLETE` と出ていれば起動しています。一応確認。

```
$ systemctl list-units | grep mariadb
mariadb.service loaded active running MariaDB database server
```

`running` になっているのでちゃんと起動していますね。

## 自動起動の登録

```
$ systemctl enable mariadb.service
```

シンボリックリンクの生成の為、パスワードは2回聞かれました。

```
Created symlink from /etc/systemd/system/multi-user.target.wants/mariadb.service to /usr/lib/systemd/system/mariadb.service.
```

## 自動設定の確認

```
$ systemctl list-unit-files | grep mariadb
mariadb.service enabled
```

enabledで有効となっています。\
Apacheも同じように起動と自動起動の登録を行います。

```
$ systemctl start httpd.service
$ systemctl enable httpd.service

$ systemctl list-units | grep httpd
httpd.service loaded active running The Apache HTTP Server
$ systemctl list-unit-files | grep httpd
httpd.service enabled
```

# HTTPポートの開放
このままだと、ConoHaではhttp(80番)ポートが空いていないのでまずはfirewallでhttpのポートを空ける作業をします。
前回の記事では設定の反映をさせるreloadオプションしか使用していませんでしたが、今回はもう少し触ります。

まずは、どこが空いているかチェックします。
現在どのポートが空いているのかチェックするのは、`firewall-cmd` のオプションで `--list-all` です。前回少しだけ触ったかと思います。

```
$ firewall-cmd --list-all
public (default, active)
interfaces: eth0
sources:
services: dhcpv6-client ssh
ports:
masquerade: no
forward-ports:
icmp-blocks:
rich rules:
```

servicesのところに `ssh` がありますね、ConoHaのデフォルトでSSHのポートは開けられています。
次に追加できるサービスを確認します。

```
$ firewall-cmd --get-services
RH-Satellite-6 amanda-client bacula bacula-client dhcp dhcpv6 dhcpv6-client
dns freeipa-ldap freeipa-ldaps freeipa-replication ftp
high-availability http https imaps ipp ipp-client ipsec iscsi-target kerberos
kpasswd ldap ldaps libvirt libvirt-tls mdns mountd ms-wbt mysql nfs
ntp openvpn pmcd pmproxy pmwebapi pmwebapis pop3s postgresql proxy-dhcp
radius rpc-bind rsyncd samba samba-client smtp ssh telnet tftp tftp-client
transmission-client vdsm vnc-server wbem-https
```

色々ありますが、httpがありますね。これが今回追加するサービス(80番ポート)です。
また、自分が使用したいサービスが無い場合は独自のものも追加可能ですし、ポート番号指定でも空ける事が可能です。

```
$ sudo firewall-cmd --permanent --zone=public --add-service=http
success
```

`--permanent` オプションでサービスを恒久的に追加する

※逆に削除する方法は以下となります。

```
$ sudo firewall-cmd --permanent --zone=public --remove-service=http
```

firewallの変更をした後は必ずreloadして設定を反映してください。

```
$ sudo firewall-cmd --reload
success
$ firewall-cmd --list-all
public (default, active)
interfaces: eth0
sources:
services: dhcpv6-client http ssh
ports:
masquerade: no
forward-ports:
icmp-blocks:
rich rules:
```

servicesの項目に、httpが追加されていると思います。これでhttpのポートは開いています。

[CentOS7のfirewalldをまじめに使うはじめの一歩（systemdも少し） - Qiita](http://qiita.com/shrkw/items/8410e9cb65eb789a40e1)

Webブラウザで http://xxx.xxx.xxx.xxx でApacheのテストページが表示されると思います。
次回は、Apache/MariaDBの設定を行います。

# 参考サイト
[CentOS 7 でLAMP(Apache+MariaDB(MySQL)+PHP)インストールからWordPressを動かすまで(Apache編) | レンタルサーバー・自宅サーバー設定・構築のヒント](http://qiita.com/shrkw/items/8410e9cb65eb789a40e1)

[ConoHaでCentOS7.1入れてウェブサーバ建てた備忘録（２） - shuto_log.aep](http://shutosg.hatenadiary.com/entry/2015/12/01/125220)

[【PHP】PHPをインストールしたらやっておきたい設定 - Qiita](http://qiita.com/knife0125/items/0e1af52255e9879f9332)
