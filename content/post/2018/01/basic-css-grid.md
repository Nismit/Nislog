---
date: "2018-01-28T18:47:39-08:00"
description: IEのみプレフィックスがいるものの、モダンブラウザでは実装済みのCSS Grid Layoutを試して見た
draft: true
eyecatch: ""
lastmod: "2019-04-28T15:17:16-07:00"
tags:
- css
- css-grid
title: CSS Grid Layoutを調べて、サンプルを作って見た
toc: true
---

# CSS Grid Layoutとは
簡単にいうとグリッド状に配置出来るやつです。テーブルに近いけども、基本形はテーブルよりもタグは少ないです。
またテーブルレイアウトと違う部分は、セルの順番を変更出来たり、セルの固定などが出来ます。CSS Grid Layoutを使うことでテーブルレイアウトよりHTMLをセマンティック、本来の意味を持ったドキュメント構造に出来る。Twitter BootstrapとかFoundationなどのフレームワークで採用されているグリッドレイアウトをCSSのプロパティとして持ったという感じです。

## 各ブラウザの対応状況
現在(2018-01-28時点)で[Can I use...](https://caniuse.com/#feat=css-grid)で確認すると、Chrome, Firefox, Safari, モバイルとIE10から対応。
IEのみ **prefixが必要** かつGrid Layoutの書き方が現行のものと異なる点に注意しないといけないです😇
だけども、モバイルも対応しているし微妙に記述が違うだけなのでどんどん活用していく方がいいと思います:)

# 簡単なサンプル
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
コンテナの子要素は全て **アイテム** になることとGrid Layoutの影響を受けます。またアイテムの順序は指定次第でなんとでもなります。アイテムの子要素はGrid Layoutの影響は受けないので、現実的にはアイテムの中に装飾用のdivを置いてスタイリングしていく感じになると思います✨

## コンテナ
いよいよ作っていきます。コンテナはレイアウトの大枠の情報を乗せていく感覚です。

```
.container {
  display: grid;
  grid-template-columns: 1fr 300px;
  grid-template-rows: 1fr 1fr 1fr;
}
```

まずは絶対必要な `display: grid;` 他の値は `inline-grid` と `subgrid` があるようですが、まだ調べていません🙇🏻
次に `grid-template-columns: 1fr 300px;` ここでカラム数を決める。2個値があるので横2列がわかる。(単位については後述)
列を決めたら、最後に行を指定する `grid-template-rows: 1fr 1fr 1fr;` ここは3つ値があるので、縦3行がわかる。

## frについて
ここで新たに `fr` という単位が出てきましたが使える幅まで伸びたり、均等に分けたりしてくれる、伸縮自在な単位です。
これではイマイチわからんので、簡単な例を。先ほど出てきたカラムの設定で `grid-template-columns: 1fr 300px;` がありましたがこの場合の `fr` の計算は
コンテナの幅 - 300px = 1fr となります。上の例ではコンテナに幅の指定が無いので `100% - 300px = 1fr` になります。

その他の例としては、`2fr 1fr 500px` の場合、コンテナの幅 - 500px = 残りの幅から2:1の割合で長さが設定される。簡単に言うと3等分した残りの幅を2/3と1/3に分ける感じです。

`grid-template-rows: 1fr 1fr 1fr;`　はコンテナの高さを1/3づつ分けています。こういった場合は省略可能なので、`grid-template-rows: 1fr;` と書けます👍

## その他の単位
基本的にはほとんどのCSSの単位は使えます。ですが、マイナス値は使えません。\
[grid-template-columns - CSS | MDN](https://developer.mozilla.org/en-US/docs/Web/CSS/grid-template-columns#Syntax)

## アイテム
アイテムは順序やどれぐらいの幅を取るなどの指定をするので、それぞれのタグやクラス毎に決める必要があります。
サンプルとして、一番上に持っていきたい `header` を設定します。

```
header {
 grid-column-start: 1;
 grid-column-end: 3;

 grid-row-start: 1;
 grid-row-end: 2;
}
```

## グリッドの特徴
解説の前にいくつかCSS Grid Layoutには特徴があるので、それを把握してからだと一瞬で理解できると思います✨

ライン - グリッドを分ける線の事を指す。
