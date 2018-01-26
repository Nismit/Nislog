+++
draft = false
date = 2018-01-25T20:46:46-08:00
title = "基礎からやっていくJavaScript再入門 - #2"
description = "JavaScriptの基本の文法やJSにまつわる慣例的な書き方を勉強しました"
tags = ["javascript", "js-series"]
eyecatch = ""
toc = true
+++

# JavaScript と ECMAScript
ここ最近、ES5やECMAScriptという言葉を目にするようになって何か違うのか気になって調べたのでメモ。
ECMAScriptはJavaScriptの標準、つまり仕様である。JavaScriptはECMAScriptの仕様に沿って各ブラウザが実装する感じ。
ECMAScript5の5は5th Edition。(2009年12月公開)


ES6はECMAScript 2015 (2015年6月公開)に呼び方を変えた事と毎年ごとの公開にサイクルを変えたようです。
それと、ES5からES2015のアップデートで変更点が多いこととJavaScriptにはバージョンとかはないので、
ES5の書き方だったりES2015の書き方みたいな言い方になって行った感じだそうです。なげえ。

IE11以降、その他モダンブラウザではES5の実装は済んでいるのでES2015で登場した機能かつ、そのまま使えない場合のみ注釈を入れます🙏

# Strict Mode
ES5からStrict Mode(厳格モード)が実装されました。今までエラーにならなかった曖昧な部分が的確にエラーを出すようになるそうです。
勉強する際はStrict Modeで書いていく。メリットというか、標準である為。使い方は簡単で、JavaScriptの先頭に `'use strict';` と書くだけ。
ここはあまり奥深くまでは調べない事にしました(新しいJavaScriptの書き方にしていくので)

# 変数
変数の名前の始まりは、文字、アンダースコア、$のどれかから。(最初の文字以外なら日本語もいけるらしい😳)

## 変数宣言
変数宣言は`var`を使って宣言する `var a = 1` もし `a = 1` と書くとStrict Modeでエラーを出してくれる。

## 2つの新しい変数宣言
早速、ES2015が関係している内容になります😱\
ES2015から新しい変数宣言が登場。`let`, `const`です。今やよく見るやつ。
IE11, その他のモダンブラウザで基本的にそのまま使うことが出来るのでどんどん活用していく。\

`var, let` と `const` にはわかりやすい大きな違いが一つ。理由は **再代入不可** かどうか。
つまり `const` は定数的扱いとして宣言する。

```
var a = 1;
let b = 2;

// var, let は再代入可能
a = 3;
b = 5;

let c; // Uncaught SyntaxError
let c = 10;

c = 20; // Assignment to constant variable
```

## もう少し深く
`var` と `let, const` の違いは変数が有効なスコープの範囲が異なる。
JavaScriptには、グローバルスコープと関数スコープの二つだったのが、ES2015からブロックスコープ(簡単に言うと`{ }`)が追加された。
グローバルスコープは、一番外側で宣言した変数や関数がどこからでもアクセス出来る。

```
var a = 5; // グローバルスコープ

// 関数スコープ
function test() {
  var foo = 10;
  foo = 15;　// 関数内しかアクセス出来ない
}
```

`let, const` がブロックスコープ内で有効である。これはコードで見た方が早い気がする。。

```
if(true) {
  var a = 5;
}
console.log(a); // 5 -> varはグローバルスコープ

if(true) { // ブロックスコープ
  let b = 10;
}
console.log(b); // ReferenceError -> letはブロックスコープなので外からは参照出来ない
```

## 関数の場合
JavaScriptには **巻き上げ** と呼ばれる変な考え？がある。まずは巻き上げに入る前のテストから。

```
var foo = 'blah';

function test() {
  console.log(foo); // blah -> グローバルスコープのfooを参照している
}
test();
```

ここまではなんとか。次が独特すぎる。

```
var foo = 'blah';

function test() {
  console.log(foo); // undefined
  var foo = 'wow';
  console.log(foo); // wow -> 関数内のfooを参照
}
test();
```

ここで何故か `undefined` が。この現象が巻き上げらしい。関数内で宣言された変数のみが対象となる。
コメントアウトで書くとこうなる。

```
var foo = 'blah';

function test() {
  // var foo; -> 暗黙的に一番上で宣言だけしている
  console.log(foo); // undefined -> だからここがundefined
  var foo = 'wow';
  console.log(foo); // wow
}
test();
```

`let` だとこの現象はエラーになる。変なところで宣言や参照しているとすぐにわかるので安全なコードに近づく✨

```
let bar = 'blah blah';

function show() {
  console.log(bar); // blah blah -> グローバルスコープのbarを参照
}
show();

let check = true;

function test() {
  console.log(check); // ReferenceError
  let check = false;
  console.log(check);
}
test();
```

あまり関数内の途中で変数宣言する人は少ないとは思いますが、こういったことがある事と基本的に `let, const` でこれからは変数宣言していく。`let` の方がなんか使いやすい感じがするけど、`const` を重視して使うようにするのが安全なコードを書く一歩だと感じる。

それにしても、レガシーブラウザ以外は認識してくれるのでそれ以外での `var` の使い道は現状わかりませんでした。昔の名残みたいな事になる🤔?

# JSの慣例的な命名規則
機能とかには一切関係ないですが、再入門するにあたってこう行った小さい所をクセにしておきたい派です。
他のプログラミング言語でもよく出てくるものが多い気がする。

## 定数は大文字でアンダースコアで単語を繋ぐ

```
const API_KEY = 'aaabbb';
```

## 変数や関数にはキャメルケース

```
var firstName = 'John',
    lastName = 'Doe';
```

## コンストラクタは大文字スタート

```
var redCar = new Car();
```

## プライベートプロパティや変数はアンダースコアから

```
var _userID = 123;
```

## thisはself, thatを使う
プライベートプロパティなどで使う場合はアンダースコアから始める。

```
var self = this;
var that = this;
```

# お願い
なるべく間違いがないように、しっかりと自分の中で勉強、実際にコードを書いて確認した上で書いていますが間違った考えやさらに良い案などがあれば、是非是非教えてください。\
ものすごく感謝します！！ めっちゃフランクに言ってください [@nismit_](https://twitter.com/nismit_) ✨
