---
date: "2020-05-03T23:40:26-07:00"
description: 私が実務で使っているWordPressのプラグインを10個紹介します。日本の時も今も使っているものもあり、定番のプラグインはほぼ決まったかなと思います。
draft: false
eyecatch: /images/eyecatch/eye-wordpress.jpg
lastmod: "2020-05-04T00:07:18-07:00"
tags:
- wordpress
title: Web制作会社のディベロッパーが実務で使っているWordPressプラグイン10選
toc: true
---

# はじめに
私は今現在カナダのバンクーバーで現地のデザインエージェンシー、所謂Web制作会社に勤めています。こちらでは早めにロックダウンした事もあり、リモートワークは既に1ヶ月半程経過しました。全てのデータは基本的にオンライン上にあった為、リモートワークに移行するのは簡単でしたが今までの作業のプロセスとは少し異なっているので全員が慣れるまでに少し時間がかかりましたね。

そんな事は置いといて、今回は実務で使っているWordPressプラグインを紹介しようと思います。日本とこちらで合わせて7年ぐらいはWordPressと関わって来ました。確か初めて触ったバージョンはv3.1かv3.2だと思います。ほとんどのWebサイトに関しては、紹介するプラグインでカバー出来ると思います✨

# Advanced Custom Fields
![Advanced Custom Fields](/images/2020/wp-plugin-acf.png)

[Advanced Custom Fields](https://www.advancedcustomfields.com/) 通称ACFはクライアントワークにおいて必須だと思います。これは日本にいた時から使用しています。このプラグインの特徴はなんといっても自由に設定したカスタムフィールドを投稿ページ内やサイト全体で使えたり等、柔軟性が高いです。また最近のv5.8ではGutenbergにもほぼ対応しており、少々使用するにはコードを追加する必要がありますが難しくはないです。文句なしのド定番プラグインです。料金プランが変わってしまいましたがPROの方が圧倒的に良いです。

# Contact Form7
![Contact Form7](/images/2020/wp-plugin-cf7.png)

[Contact Form7](https://contactform7.com/) このプラグインは簡単なコンタクトフォームを作るのに非常に便利です。これも昔からある定番のプラグインの一つですね。バンクーバーでも使っている所は結構見ますがこちらはMailChimpなどと組み合わせて使う事も多いですが、大体Add-onのプラグインが揃っているので楽です。フォーム内のレイアウトを組むのが少し面倒という点と確認画面を作るには少し工夫が必要です。こちらでは確認画面を求められた事は幸いにも無いのでこちらで十分です。

# MW WP Form
![MW WP Form](/images/2020/wp-plugin-mw.png)

[MW WP Form](https://plugins.2inc.org/mw-wp-form/) これは日本に居た時に使っていた別のコンタクトフォームのプラグインです。日本の案件だとほぼ100%で確認画面が必要だった為、このプラグインにしていました。(最近のサイトは確認画面はあるんですかね？)こちらは標準で確認画面がついていたりバリデーションを細かく設定出来たりとContact Form7が無い物を持っているプラグインです。案件に応じてそれぞれのプラグインを使い分けるのが良いと思います。

# Yoast SEO
![Yoast SEO](/images/2020/wp-plugin-yoast.png)

[Yoast SEO](https://yoast.com/wordpress/plugins/seo/) SEOの定番プラグインです。これも昔からあるプラグインでサイト全体のタイトルやOGP周りの設定から、個別のページなども細かく設定が出来るのでこれを入れてある程度埋めているだけでSEO対策はかなり出来てしまいます。またサイトマップも提供してくれるので対GoogleはもちろんBingなども色々対応してくれます。WordPressがSEOに強いのは多分この辺りのプラグインのおかげだと思ってる。それぐらい強いです🚀

# All-in-One WP Migration
![All-in-One WP Migration](/images/2020/wp-plugin-aiowpm.png)

[All-in-One WP Migration](https://en-ca.wordpress.org/plugins/all-in-one-wp-migration/) マイグレーション用のプラグインです。ステージング環境へのデータ移行などはこれで行っています。また逆にプロジェクトに途中で参加した場合もこのプラグインでデータをローカルの開発環境へ移しています。画像が多いとデータの肥大化がすごいですがエラーが起きる事は今まで無かったので非常に便利でした。除外オプションが結構便利で、要らないファイルなどを選択出来てデータの肥大化を防げるのが良いです🙌 会社ではMultisite Extensionを併用してインポートのデータ制限を無くしています。

# UpdraftPlus WordPress Backup Plugin
![UpdraftPlus WordPress Backup Plugin](/images/2020/wp-plugin-updraft.png)

[UpdraftPlus WordPress Backup Plugin](https://updraftplus.com/) バックアップ用のプラグインです。Amazon S3にスケジューリングでデータベースのバックアップやサイト全体のフルバックアップをしています。一応参考になるかわかりませんが、データベースのバックアップは週1でフルバックアップは2週間に1度行っています。ストックするバックアップはそれぞれ4つまでにしています。またリストアも簡単なので、非常におすすめです。

# WPS Hide Login
![WPS Hide Login](/images/2020/wp-plugin-wps-hide.png)

[WPS Hide Login](https://wordpress.org/plugins/wps-hide-login/) WordPressのログインページのURLを変更するプラグインです。WordPressのサイトはソースコードを少し見れば一発でわかってしまう事とログインページも基本的に同じなので攻撃を受けやすいです。ログインページのURLを変えるだけで本当のログインページにアクセスされる事が劇的に減るので、パスワードが突破されるリスクはかなり減ります。ログインページのURLを忘れないようにする事とマルチサイトでの導入はおすすめしません。(挙動がおかしい)

# Really Simple SSL
![Really Simple SSL](/images/2020/wp-plugin-ssl.png)

[Really Simple SSL](https://wordpress.org/plugins/really-simple-ssl/) WordPressのサイトアクセスをSSLに変更するプラグインです。昨今はSSL導入は当たり前ですがSSLの準備などで一度HTTPで上げてしまい、全てが揃った後にSSL化にする事が多いです。大抵はCloudflareの設定をするので設定が完了するまで他の作業を行ったりする為こちらのプラグインで切り替えを行っています。

# Google Tag Manager for WordPress
![Google Tag Manager for WordPress](/images/2020/wp-plugin-gtm.png)

[Google Tag Manager for WordPress](https://wordpress.org/plugins/duracelltomi-google-tag-manager/) Google Tag Managerを設定するプラグインです。こちらもドメインの設定などを行った後にAnalyticsなどの設定をするので、テーマに埋め込むのではなくプラグインで対応しています。

# W3 Total Cache
![W3 Total Cache](/images/2020/wp-plugin-w3.png)

[W3 Total Cache](https://wordpress.org/plugins/w3-total-cache/) こちらも有名なキャッシュのプラグインです。ただし毎回導入している訳ではなく、まずはCloudflareのキャッシュなどを活用しパフォーマンスをチェックします。それでもあまり良く無い場合にこちらのキャッシュプラグインを導入します。ディベロッパーなど操作に慣れていれば、何か更新した後にキャッシュのパージを行うと思いますがクライアントワークだと大体「更新したのにサイトで反映されない」と良く言われるので先にどういった事が起きるかを説明した上で導入しています。他にも[WP Super Cache](https://en-ca.wordpress.org/plugins/wp-super-cache/) もありますが、効果はほとんど同じなので、どちらを導入しても構わないと思います🙌  

これらが現在クライアントワークで必ず使用しているプラグインでした。案件によってはさらに追加のプラグインがありますが、なるべく少なくするようにしています。マイグレーションのプラグインに関しては開発中は使用していますが、本番サイトにはマイグレーションが完了した後にプラグインは削除します。アップデートの作業を少しでも減らす為です😇

ただ今後の流れとしては、フロント側をReactやVueで表示するような形になってくると思うのでフロントで使うプラグインなどは使わなくなっていくと思っています。その代わりにGutenbergのカスタマイズが増えていくんじゃないかなぁと感じています。
