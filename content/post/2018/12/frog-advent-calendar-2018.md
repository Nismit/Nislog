---
date: "2018-12-15T11:45:57-08:00"
description: こちらはFrog Advent Calendar 2018の15日目の記事です! バンクーバーのあるWeb製作会社の開発環境についてつらつらと書いています
draft: false
eyecatch: /images/eyecatch/eye-frog-advent-2018.jpg
lastmod: "2020-01-12T18:41:01-08:00"
tags:
- blog
- vancouver
- advent-calendar
title: バンクーバーのあるWeb製作会社の開発環境
toc: true
---

# はじめに
こちらは[Frog Advent Calendar 2018](https://adventar.org/calendars/2875)の15日目の記事になります！
担当は[@Nismit_](https://twitter.com/nismit_)がお送りいたします。

現在、バンクーバーのあるWeb製作会社でFront-endメインのFullstack Developerとして働いています。
＊たまにサーバーの設定や `.htaccess` などでリダイレクトしたり、`Dockerfile` 書かされたり・・・

# 会社について
会社はWordPressを主軸としたWeb製作とSEOやアクセス解析などのマーケティングもこなすフルサービスの会社です。
経験した範囲内では99%はWordPressのサイトを製作しています。例外として担当したのはhootsuiteのキャンペーンサイトの製作ぐらいです。
バンクーバーに本社があり、その他はトロントとアメリカのニューヨークにそれぞれオフィスがあります。
人数の規模はバンクーバーに約70人ほど、トロント、ニューヨークはそれぞれ10人未満ぐらいで100人には届いてないくらいです。

## Developerの割合
現在はFront-endが4人、Back-endが6人ですが何人かはどっちもやる(やらさせる)感じです。

# 開発環境
肝心な開発環境ですが、結構ありきたりな感じで自社製WordPressテーマをベースに各プロジェクト用に拡張していく感じです。
でそのテーマは、[Timber](https://www.upstatement.com/timber/)と[Twig](https://twig.symfony.com/) を使用してます。
その他の依存性は[ACF](https://www.advancedcustomfields.com/)プラグインがあります。
他にもプラグインは入りますが、プロジェクトによってまちまちです。SEOプラグインは[Yoast SEO](https://yoast.com/)を使用してます。理由は知りませんw

## その他の開発周り
ソースコードは[bitbucket](https://bitbucket.org/product)と[Git](https://git-scm.com/)を使ってバージョン管理してます。
Gitは個人ブランチ、devブランチ、stagingブランチで分けてます。基本的にクライアントが見れるのはstagingのみとしています。

後はどこかのサーバー会社から専用サーバーを借りて、サーバー上でWordPressを動かしています。(確かベアメタル)
＊専用サーバーから外部サービスに移行を検討中です。現状サーバー内でWordPressを動かしているので色々とキツくなってきた感じです。Dockerベースのローカル開発環境も構築中なので、来年にはガラッと変わっていると思います。

会社全体のコミュニケーションツールとして[Slack](https://slack.com/)を使用しています。

プロジェクトのドキュメントは[Confluence](https://www.atlassian.com/software/confluence)にまとめつつも、Googleのスプレッドシート、ドキュメントなども併用しています。基本的にはConfluenceにまとまってます。

## Front-endの開発環境
これはアップデートが繰り返され、古いプロジェクトや新しいプロジェクトで開発環境が異なりますが古い順でいくと

- Ruby Sass + Compass
- Grunt
- Gulp
- Webpack

といった感じです。今までの歴史を感じさせます。これと言ってはなんですが、一番新しいWebpackの開発環境は昔のリーダーが残したv3のベース(よく読んだら結構適当にしてた)
を自分がv4へとアップデートと改良を加えました。(後述します)

最新の開発環境では、ES6+のコードが書けるようになりましたが、まだ `jQuery` にいくつかコンポーネントやらが依存しています。
脱jQueryを目指し目下作業中ですが、なかなか面倒です。正直、Web製作であればDOMの書き換えなどはそこまで発生せずアニメーションはCSSで出来てしまうことが多いのと、そこまでjQueryを使ってないのでなかなか進まず。。

## Webpack v4へのアップデート
自分が担当したので、どんな感じにアップデートをしたかを一応書いておこうと思います。

- Webpackコアをv4にアップデート
- v4に対応していないプラグイン等の削除および代替プラグインのインストール
- `webpack.config.js` の書き換え
- `npm` or `yarn` の両方に対応チェック
- Mac or Windowsの両方に対応チェック
- Gitの `pre-push` 時にメッセージが出るようにシェルスクリプトを書いた

現状悩んでいるのは、lockファイルの扱いについて。インストール時間が減るのとか色々あるので導入するかどうか。。

### bitbucket pipelineの導入
さらに追加で[bitbucket pipeline](https://bitbucket.org/product/features/pipelines)導入テストをしています。
簡単に言うとステージング環境にプッシュする場合にWebpackのProduction buildの自動化を考えています。(その他諸々いらないファイルも消す等)

# おまけ
どんなエディタを使って作業しているか聞いてみた所、10人中9人がメインエディタとして[VS Code](https://code.visualstudio.com/)で、1人だけ[PHPStorm](https://www.jetbrains.com/phpstorm/)という感じでした。特に指定はされてないですが、自然にこうなりました。今ではおすすめのプラグインなどを共有したりしてます。
サブエディタとしてはみんな色んなものを使っていて、[Atom](https://atom.io/), [Coda](https://panic.com/coda/), Vimなどでした。

**Change Log**

2020/01/12 - サムネイル画像を追加
