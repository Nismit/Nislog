+++
draft = true
date = 2018-01-15T21:12:41-08:00
title = "基礎からやっていくJavaScript再入門 - その1"
description = "フロントエンドでは今や必須スキルとなったJavaScriptを基礎知識をしっかりつけて一緒に再入門しましょう！"
tags = ["javascript", "js-series"]
eyecatch = ""
toc = false
+++

# はじめに
このシリーズの記事は、自分自身がJavaScriptの基礎を再復習して最新のJavaScriptやフレームワークを理解するまでに行ったこと、
学んだことをまとめている備忘録であります。
レベル的には、jQuery全盛期にWebサイトの動き(DOM/CSS)や配列操作をしている程度で止まっていました😇
ほとんど素のJavaScriptは書いてなくて、最近ちょっと勉強したら全くわからなかったです🙄

## 何が足りないかを知る
そもそも今の自分にはどの知識が足りないかをまず考えました。足りないという判断材料は言葉で説明が出来るか否かという事にしました。

- オブジェクト
- プロトタイプ
- 配列(もう少し深め)
- DOM
- イベントタイプ
- ES5
- ES6

ほとんど基礎は理解してないですね😱

## 再入門する際に決めた事
とにかく **自分自身** でコードを書いて結果を確認するのを徹底する事にしました。
人によって学習スタイルは違うと思うんですけど、見て理解はできないので実践スタイルが僕にはあってるなーと✨

# JavaScriptの基礎
さらっとおさらいしておく、変数宣言。ECMAScript 2015/ES6 から `let`, `const` 変数が追加されてた。
ここはES6を学ぶ時にもう少し深く理解したい。

<script async src="//jsfiddle.net/nismit/1esatv6j/embed/js,result/"></script>

次はデータの型。JavaScriptは `number`, `string`, `boolean`, `undefined`, `null` と `object`
ほとんどのものがオブジェクト。

<script async src="//jsfiddle.net/nismit/b7hzohd0/embed/js,result/"></script>

最後にリテラル。固定値。
配列のリテラルなどは、他のプログラミング言語でも大体同じですね。

<script async src="//jsfiddle.net/nismit/5cyad3eo/embed/js/"></script>


オブジェクトをちゃんと理解できるかどうかがJavaScriptの初級から中級・上級に上がる鍵だなあと感じました👍
