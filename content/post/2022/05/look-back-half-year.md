---
draft: false
date: "2022-05-25T21:22:00-08:00"
title: バンクーバーのスタートアップに転職して半年間の振り返り
description: バンクーバーのスタートアップに転職して半年が過ぎたのでざっと振り返りメモです。
eyecatch: /images/eyecatch/eye-look-back-half-year.jpg
tags:
- vancouver
- start-up
toc: true
---

# スタートアップに転職して半年が経った

[前回の記事](/post/2022/02/career-change)時点では既に3ヶ月ほど働いていて、そこからさらに3ヶ月が過ぎて半年経ったので転職してから今までどうだったかをざっくりと振り返っておこうと思います。個人的な感覚ですが半年過ぎれば色んな事に慣れて、プロダクトの知識がある程度溜まっていると思います。

## 振り返り

最初に少し補足だけしておくと、フルタイムで始まる前からパートタイム(週10時間)で約2ヶ月ほど働いていたので全くのゼロからのスタートではないです。前回でも書いている通りもしパートタイムで軽くプロダクトに関わってからフルタイムに移行出来るとかなりスムーズに仕事が始めれます。

### 〜1ヶ月

- 主にUI周りのタスク
- 自分のタスクをこなすだけで手一杯な状態
- 自分が予測していた時間よりも出来るまでに時間がかかっている
- 中々余裕はない状態

### 〜3ヶ月

- UI周りからロジックも含めての実装のタスク
- まだまだ自分のタスクをこなすだけで手一杯な状態
- プロダクトの一部を徐々に理解していく(データの流れや構造など)
- コードレビューはまだまだされる側

### 〜4ヶ月

- 少しずつ機能の実装のタスクに余裕が出てくる
- 別のディベロッパーが入社して少しずつレビューする側になる
- プロダクトの理解が深まっていく

### 〜5ヶ月

- 実装よりもレビューの割合が増えていく
- ドキュメントの整備やリリースノートの作成、デプロイ作業の一部を担う

### 〜6ヶ月

- レビュー半日、自分のタスク半日ぐらいの割合
- 実装だけでなくデザイナーとのやりとりやタスク整備なども行う
- 旧機能や現在までの遷移などが少し説明出来るぐらいの理解度に上がっている
- デプロイ作業の担当

ざっくりと振り返るとこんな感じで、今はディベロッパーの半分が海外にいるのでプロダクトの会社あるあるだと思うのですが時差問題に直面していて、これが噂の時差問題なのか!となっています。簡単に言うと、プルリクエストのレビューが来て修正依頼を頼んでも完了しているのが次の日の朝になっているのでリリース直前になるとこちら側で色々と巻き取り・修正を行っています。

## おわりに

こんな感じで書くとまるで自分が色々出来るようになった風に見えてしまうのですが、やはりデザインエージェンシー出身なのでロジック周りは未だに綺麗に書けないです。。

`Array.reduce()`や`Array.map()`などデータの整形がまだまだ弱くもうちょっと勉強しないとなあと感じますし、レビューをしていても自分自身がIntermidiateレベルなのでロジック周りのレビューが難しく、もう少し効率良く書けそうと思うものの具体的な提案が出せないのが今の課題です。

そしてWebアプリ系のフロントエンドディベロッパーの採用基準の一つにアルゴリズムが重要視される理由も色々と納得しました。データの取得がGraphQLのようなフロント側で欲しいデータのみを選択出来る場合は少し違うと思うものの大体採用されているのはREST APIやデータベースにアクセスするような形(NoSQL系)だと思います。

要はリクエストして返ってくるデータが欲しいデータだけではないという事でフロント側で使うにはデータの整形が必要な事が多くその際にアルゴリズムでデータを効率良く整形や変換(オブジェクトから配列に変換など)する事がたくさんあります。こういったことから採用の際にはアルゴリズムやコンピューターサイエンスの基礎が重視されるんだなあと思いました。

よりレビューを具体的なコードと共に提案できるように頑張っていこうと思います🔥