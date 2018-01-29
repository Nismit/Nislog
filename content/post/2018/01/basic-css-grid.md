+++
draft = true
date = 2018-01-28T18:47:39-08:00
title = "CSS Grid Layoutを調べて、サンプルを作って見た"
description = "IEのみプレフィックスがいるものの、モダンブラウザでは実装済みのCSS Grid Layoutを試して見た"
tags = ["css", "css-grid"]
eyecatch = ""
toc = false
+++

# CSS Grid Layoutとは
簡単にいうとグリッド状に配置出来るやつです。テーブルに近いけども、基本形はテーブルよりもタグは少ないです。
またテーブルレイアウトと違う部分は、セルの順番を変更出来たり、セルの固定などが出来ます。CSS Grid Layoutを使うことでテーブルレイアウトよりHTMLをセマンティック、本来の意味を持ったドキュメント構造に出来る。Twitter BootstrapとかFoundationなどのフレームワークで採用されているグリッドレイアウトをCSSのプロパティとして持ったという感じです。

## 各ブラウザの対応状況
現在(2018-01-28時点)で[Can I use...](https://caniuse.com/#feat=css-grid)で確認すると、Chrome, Firefox, Safari, モバイルとIE10から対応。
IEのみ **prefixが必要** かつGrid Layoutの書き方が現行のものと異なる点に注意しないといけないです😇
だけども、モバイルも対応しているし微妙に記述が違うだけなのでどんどん活用していく方がいいと思います:)

# シンプルなサンプル
header, main, aside, footerのシンプルな構成で2カラムレイアウトを作ってみました。

<p data-height="365" data-theme-id="dark" data-slug-hash="gvYNao" data-default-tab="result" data-user="nismit" data-embed-version="2" data-pen-title="Fundamental of CSS Grid 2nd" class="codepen">See the Pen <a href="https://codepen.io/nismit/pen/gvYNao/">Fundamental of CSS Grid 2nd</a> by NISMIT (<a href="https://codepen.io/nismit">@nismit</a>) on <a href="https://codepen.io">CodePen</a>.</p>
<script async src="https://production-assets.codepen.io/assets/embed/ei.js"></script>

## 構成
HTMLの構成は以下のような感じ。

```
<div class="container">
  <div class="item"></div>
  ...
</div>
```

Grid Layoutを有効にする為に、divなどで包む必要があります。これを **コンテナ** と言います。
コンテナの子要素は全て **アイテム(もしくはセル)** になることとGrid Layoutの影響を受けます。なので現実的にはアイテムの中に装飾用のdivを置いてスタイリングしていく感じになると思います✨
