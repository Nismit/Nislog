---
date: "2017-07-19T08:05:10Z"
description: Web制作者の方々の大半は入れてあるだろうnode.jsのパッケージ管理ツールであるnpm。package.jsonをある程度作ったら後はnpm
  installするだけになってしまい、他のコマンドを忘れがちではないでしょうか？私自身忘れてしまう為備忘録としてnpmのコマンドをまとめました。
draft: false
eyecatch: /images/eyecatch/eye-npm.jpg
lastmod: "2020-01-27T22:31:51-08:00"
tags:
- npm
title: '[npm]意外と忘れてしまうnpmコマンドまとめ'
toc: false
---

# グローバルパッケージ

グローバルインストールされたパッケージ群に対して使用するコマンドをまとめました。

npmのバージョン確認

```js
npm -v
```

npm自身のアップデート/ダウングレード

```js
// 最新バージョンにアップデート
npm install npm@latest -g
// 特定バージョンをインストール
npm install npm@5.0.0 -g
```

インストール済みのパッケージの確認

```js
// --depthオプションで依存ファイルの表示を変更可能
npm ls -g --depth=0
```

パッケージのアップデート確認

```js
npm outdated -g
```

パッケージのアップデート

```js
npm update
```

パッケージのアンインストール

```js
npm uninstall package_name -g
```

# ローカルパッケージ

package.jsonの生成

```js
npm init
// もしくはデフォルト値で生成させる
npm init -y
```

プラグインのインストール

```js
//package.jsonのdependencies項目に含む
npm install package_name
//package.jsonのdevDependencies項目に含む
npm install package_name --save-dev
```

プラグインのアンインストール

```js
npm uninstall package_name
// package.jsonのdependencies項目から削除
npm uninstall package_name --save
// package.jsonのdevDependencies項目から削除
npm uninstall package_name --save-dev
```
**Change Log**

2020/01/27 - サムネイル画像を追加
