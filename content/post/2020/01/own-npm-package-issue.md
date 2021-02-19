---
date: "2020-01-27T21:49:34-08:00"
description: 初めて自作パッケージを作ってnpm上に公開していたんですが、Reactで使ってみるとエラーが出てなんとか解決したという話です。
draft: false
eyecatch: /images/eyecatch/eye-npm.jpg
lastmod: "2020-01-27T22:32:14-08:00"
tags:
- npm
- javascript
title: 初めて作ったライブラリが変なエラーで困ってた話
toc: false
---

# npmパッケージを公開してみた
2019年になりますが、自作ライブラリを作ってnpm上に公開してみました。初めてだったので色々調べながら作っていました。無事に公開したのでReactで使ってみようと思ってインストールしてみると変なエラーが出てしまいました。

Reactのコードはこんな感じで `create-react-app` のTypeScriptのテンプレートを使っていました。

![React Code](/images/2020/own-npm-pkg-issue.png)

出たエラーはこちら。

```
Module not found: Can't resolve 'nisgl-ts' in /path/to/react-project/src/
```

最初は全然手がかりが無くて色々調べて `package-lock.json` と `node_modules` の削除からの再インストールを試したのですが治らず。ライブラリをローカルでインストールすると上手く動いたのでReact側かと思ったのですが、他のライブラリをインストールして試してみるとエラーは出なかったので、原因はReact側ではなく自作ライブラリ側にあると考えました。

# ライブラリ
ライブラリは至ってシンプルなもので、dependenciesもありましたがその時は使っていませんでした。また出力としてはUMD形式とTypescriptでの出力のみでした。UMD形式で出力するためにWebpackでバンドルしていたので初めはWebpackの設定をチェックしました。他の上手く動いたライブラリと設定はほぼ一緒だったのでWebpackに問題はなさそうでした。

最後に行き着いたのは `package.json` でした。色々みていると `main` フィールドのファイル名が出力しているファイル名と違っていました。これを合わせると無事に直りました。

# main field
package.jsonの[mainフィールド](https://docs.npmjs.com/files/package.json#main)を見てみると、パッケージ名がfooの場合で、ユーザーが `require('foo')` を実行するとmain fieldに載っているモジュールを
返すとの事なので、出力しているファイル名と一致しない場合、モジュールが存在しないと解釈されます。

最初にnpmでpackage.jsonを作った時はデフォルトだとindex.jsがmainに設定されるので、出力ファイル名を変える際は変更を忘れずに🙌

GitHubなどで公開されているOSSではこんな事はないと思いますが、プライベート環境でnpmパッケージを作る時には気をつけてください。
