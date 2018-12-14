+++
draft = true
date = 2018-03-05T18:28:57-08:00
title = "バンクーバーのあるWeb製作会社の開発環境"
description = "こちらはFrog Advent Calendar 2018の15日目の記事です! バンクーバーのあるWeb製作会社の開発環境についてつらつらと書いています"
tags = ["blog", "vancouver", "advent-calendar"]
eyecatch = ""
toc = true
+++

# はじめに
こちらは[Frog Advent Calendar 2018](https://adventar.org/calendars/2875)の15日目の記事になります！
担当は[@Nismit_](https://twitter.com/nismit_)がお送りいたします。

現在、バンクーバーのあるWeb製作会社でFront-endメインのFullstack Developerとして働いています。
＊たまにサーバーの設定や `.htaccess` などでリダイレクトしたり、`Dockerfile` 書かされたり・・・

# 主な仕事
会社はWordPressを主軸としたWeb製作とSEOやアクセス解析などのマーケティングもこなすフルサービスの会社です。
経験した範囲内では99%はWordPressのサイトを製作しています。例外として担当したのはhootsuiteのキャンペーンサイトの製作ぐらいです。

## Developerの割合
現在はFront-endが4人、Back-endが6人ですが何人かはどっちもやる(やらさせる)感じです。

# 開発環境
肝心な開発環境ですが、結構ありきたりな感じで自社製WordPressテーマをベースに各プロジェクト用に拡張していく感じです。
でそのテーマは、[Timber](https://www.upstatement.com/timber/)と[Twig](https://twig.symfony.com/) を使用してます。
その他の依存性は[ACF](https://www.advancedcustomfields.com/)プラグインがあります。
他にもプラグインは入りますが、プロジェクトによってまちまちです。SEOプラグインは[Yoast SEO](https://yoast.com/)を使用してます。理由は知りませんw

ソースコードは[bitbucket](https://bitbucket.org/product)と[Git](https://git-scm.com/)を使ってバージョン管理してます。

後はどこかのサーバー会社から専用サーバーを借りて、サーバー上でWordPressを動かしています。(VPSではないです)

会社全体のコミュニケーションツールとして[Slack](https://slack.com/)を使用しています。

プロジェクトのドキュメントは[Confluence](https://www.atlassian.com/software/confluence)にまとめつつも、Googleのスプレッドシートなども併用しています。

## Front-endの開発環境
これはアップデートが繰り返され、古いプロジェクトや新しいプロジェクトで開発環境が異なりますが古い順でいくと

- Ruby Sass + Compass
- Grunt
- Gulp
- Webpack

といった感じです。今までの歴史を感じさせます。これと言ってはなんですが、一番新しいWebpackの開発環境は昔のリーダーが残したv3のベース(よく読んだら結構適当にしてた)
を自分がv4へとアップデートと改良を加えました。(後述します)

最新の開発環境では、ES6+のコードが書けるようになりましたがまだ `jQuery` にいくつかコンポーネントやらが依存しています。
脱jQueryを目指し目下作業中ですが、なかなか面倒です。正直、Web製作であればDOMの書き換えなどはそこまで発生せずアニメーションはCSSで出来てしまうことが多いです。

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
どんなエディタを使って作業しているか聞いてみた所、10人中9人がメインエディタとして[VS Code](https://code.visualstudio.com/)で、1人だけ[PHPStorm](https://www.jetbrains.com/phpstorm/)という感じでした。サブエディタとしてはみんな色んなものを使っていて、[Atom](https://atom.io/), [Coda](https://panic.com/coda/), Vimなどでした。