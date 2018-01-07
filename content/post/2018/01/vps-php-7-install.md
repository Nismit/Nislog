+++
draft = true
date = 2018-01-06T13:13:02-08:00
title = "CentOS7.2 PHP7.xのインストール方法"
description = "CentOS 7.2での最新版PHPの7.x系インストール方法の備忘録です。"
tags = ["centos", "php"]
eyecatch = ""
toc = false
+++

CentOS7の標準レポジトリのPHP5.4ですが、PHPの現時点での最新バージョンは`7.2.1` です。
(2018/01/06 時点)
またバージョン7からは大幅な改良がされて実行速度をはじめ、色んなものがアップデートされているので、
特別な事がない限りはアップグレードした方が色々恩恵を受けれます。

# PHP7.xにアップデート
yumの標準レポジトリでは最新版をインストール出来ない為、最新版をリリースしている外部レポジトリを追加する必要があります

## EPELレポジトリの追加

```
$ sudo yum install epel-release
```

## Remiレポジトリの追加
このレポジトリは最新版のPHPをFedoraやエンタープライズ向けLinuxに提供する事を目的としているレポジトリです。
メンテナーはRedHatに勤める人なので、ほぼ公式レポジトリと変わらないと思ってます。

```
$ rpm -Uvh http://rpms.famillecollet.com/enterprise/remi-release-7.rpm
```

### 古いPHPの削除
yumで管理されていたPHP5を念のため削除します。\
この際にphp.iniを色々書き換えている場合はバックアップを取っておいた方が良いと思います。
新しいPHPをインストールした時点で、php.iniが書き換わる為です。

```
$ sudo yum remove php-*
Loaded plugins: fastestmirror, langpacks
Resolving Dependencies
--> Running transaction check
---> Package php.x86_64 0:5.4.16-36.3.el7_2 will be erased
-省略-
Remove 7 Packages

Installed size: 19 M
Is this ok [y/N]:y

Removed:
php.x86_64 0:5.4.16-36.3.el7_2 php-cli.x86_64 0:5.4.16-36.3.el7_2
php-common.x86_64 0:5.4.16-36.3.el7_2 php-gd.x86_64 0:5.4.16-36.3.el7_2
php-mbstring.x86_64 0:5.4.16-36.3.el7_2 php-mysql.x86_64 0:5.4.16-36.3.el7_2
php-pdo.x86_64 0:5.4.16-36.3.el7_2

Complete!
```

## 🚀 PHP7のインストール
Remiレポジトリの追加、古いPHPも削除もしたので、いよいよPHP7をインストールします。
インストール時は `--enablerepo` オプションをつけます。

```
// PHP7.0系
$ sudo yum --enablerepo=remi-php70 install php php-cli.x86_64 php-pdo.x86_64 php-gd.x86_64 php-mbstring.x86_64 php-common.x86_64 php-mysql
// PHP 7.1系
$ sudo yum --enablerepo=remi-php71 install php php-cli.x86_64 php-pdo.x86_64 php-gd.x86_64 php-mbstring.x86_64 php-common.x86_64 php-mysql
// PHP 7.2系
$ sudo yum --enablerepo=remi-php72 install php php-cli.x86_64 php-pdo.x86_64 php-gd.x86_64 php-mbstring.x86_64 php-common.x86_64 php-mysql
```

下のはPHP7.0系をインストールした時のものです。

```
$ sudo yum --enablerepo=remi-php70 install php php-cli.x86_64 php-pdo.x86_64 php-gd.x86_64 php-mbstring.x86_64 php-common.x86_64 php-mysql

Loaded plugins: fastestmirror, langpacks
remi-php70 | 2.9 kB 00:00:00
remi-php70/primary_db | 164 kB 00:00:01

Install 7 Packages (+4 Dependent packages)

Total download size: 8.9 M
Installed size: 34 M

Total 657 kB/s | 8.9 MB 00:00:13
Retrieving key from file:///etc/pki/rpm-gpg/RPM-GPG-KEY-remi
Importing GPG key 0x00F97F56:
Userid : "Remi Collet <RPMS@FamilleCollet.com>"
Fingerprint: 1ee0 4cce 88a4 ae4a a29a 5df5 004e 6f47 00f9 7f56
Package : remi-release-7.2-1.el7.remi.noarch (installed)
From : /etc/pki/rpm-gpg/RPM-GPG-KEY-remi
Is this ok [y/N]: y

Installed:
php.x86_64 0:7.0.13-1.el7.remi php-cli.x86_64 0:7.0.13-1.el7.remi
php-common.x86_64 0:7.0.13-1.el7.remi php-gd.x86_64 0:7.0.13-1.el7.remi
php-mbstring.x86_64 0:7.0.13-1.el7.remi php-mysqlnd.x86_64 0:7.0.13-1.el7.remi
php-pdo.x86_64 0:7.0.13-1.el7.remi

Dependency Installed:
fontconfig.x86_64 0:2.10.95-7.el7 fontpackages-filesystem.noarch 0:1.44-8.el7
gd-last.x86_64 0:2.2.3-1.el7.remi php-json.x86_64 0:7.0.13-1.el7.remi

Complete!

$ php -v
PHP 7.0.13 (cli) (built: Nov 8 2016 20:16:29) ( NTS )
Copyright (c) 1997-2016 The PHP Group
Zend Engine v3.0.0, Copyright (c) 1998-2016 Zend Technologies
```

アップデートした後は、php.iniがクリアされているのでバックアップから復元もしくは
書き換える等を忘れずに🙏
