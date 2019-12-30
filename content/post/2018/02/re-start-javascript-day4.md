+++
draft = true
date = 2018-02-18T23:18:15-08:00
title = "基礎からやっていくJavaScript再入門 - #4"
description = "JavaScriptにおいて最も重要な要素であるオブジェクトについて調べてみた"
tags = ["javascript", "js-series"]
eyecatch = "/images/eyecatch/eye-javascript.png"
toc = true
+++

# オブジェクト
JavaScriptにおいて、最も重要で奥が深いオブジェクトの基礎周りについて調べてみました✨ 少しづつ理解していけば多分大丈夫なハズ！着実に学んで行きましょう:)

## そもそもオブジェクトとは
JavaScriptにおけるオブジェクトとは、プロパティの集まり。このプロパティは名前と値の組み合わせで成り立つ。

プロパティの名前は変数と同じルール ( [基礎からやっていくJavaScript再入門 - #3]({{< ref "re-start-javascript-day3.md" >}}) ), 値はどんなデータ型でも入れることが出来る。さらに、値には関数も入れることが出来るこれをメソッドと呼ぶ。

つまりオブジェクトはプロパティとメソッドで出来ている、ということですね😇


# オブジェクトの生成方法
オブジェクトの生成方法はいくつかあります。

- オブジェクトリテラル `{}`
- `new Object()`
- `Object.create(Object.prototype)`

これらはどれを使っても結果は変わりません*が、オブジェクトリテラルでの生成が推奨されています。理由としては、生成パフォーマンスが `new Object()` や `Object.create(Object.prototype)` よりも早い事とより短い記述でオブジェクトを生成出来るからだそうです。

参考リンク: [JavaScriptでなぜ Object.create(null) を使うのか？ - Qiita](https://qiita.com/tady/items/1215a801e178c98deb35#%E3%83%91%E3%83%95%E3%82%A9%E3%83%BC%E3%83%9E%E3%83%B3%E3%82%B9)

```
const literalObj = {};
const newObj = new Object();
const methodObj = Object.create(Object.prototype);

console.log('Literal:', literalObj); // -> Literal: {}
console.log('New:', newObj); // -> New: {}
console.log('Method:', methodObj); // -> Method: {}
```

[\*][@ginpei_jp](https://twitter.com/ginpei_jp)さんに助けてもらいました。Thanks a lot🎉

# プロパティの設定
プロパティ名のルールは少し特殊で、JavaScriptで有効な全ての文字列もしくは文字列に変換出来るものが設定出来る。
なので、数字や文字列(空白を含んだ文字列でもいける)さらには空文字も可能。

プロパティ名は文字列型に変換される。

```
const person = {
	test: 'standard',
	'full name': 'nismit',
	27: 'age',
	'': 'This is a secret'
};

// result

// "": "This is a secret" -> 空文字
// 27: "age" -> 文字列型の数字
// full name: "nismit" -> 空白込みの文字列
// test: "standard" -> シングルクオート/ダブルクオート無しでも文字列に変換される
```

## プロパティのアクセス
プロパティへのアクセスはドット記法で基本的にアクセス出来るが、数字から始まるプロパティ名や空白込みの文字列などは `[]` を使ってしかアクセス出来ない。

## オブジェクトとプリミティブ
前回のデータ型でオブジェクト型以外は全てプリミティブ型になるというのを勉強しました。
オブジェクトはプロパティの集まりであるのに対しプリミティブはプロパティを持ちません。言い換えると、プリミティブは値しか持ちません。

ですが、JavaScriptの世界は **ほとんどがオブジェクトである** のです。プリミティブ型の一つ、文字列を例にしてみます。

```
var str = "JavaScript";
str.length; // -> 10
```

この場合だと、変数 `str` は文字列しか持たないプリミティブ型のはずなのに、`str.length`
