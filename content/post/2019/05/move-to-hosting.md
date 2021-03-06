---
date: "2019-05-10T20:25:40-07:00"
description: VPSを管理していく事がだんだんと辛くなっていったので、完全に静的サイトホスティングに切り替えました
draft: false
eyecatch: /images/eyecatch/eye-move-to-hosting.jpg
lastmod: "2019-05-10T23:24:43-07:00"
tags:
- server
- vps
title: VPSを辞めて、静的サイトホスティングに切り替えました
toc: true
---

# VPSを辞めるに至るまで
レンタルサーバーからVPSに切り替えてから約2年程経過しましたが、技術の移り変わりの速さを感じます。
VPSに切り替えた理由としては、以下の事がしたかった🚀

- サーバーサイドでのWordPressの高速化を図る
- Webサーバーの構築及び管理
- Let's Encryptによるhttps化

一応全て達成はしてサーバーサイドの知識や経験も出来ました。その後の管理もcronを上手く使いながらメンテナンスを行っていました。

ですが、後々Let's Encryptの自動更新が上手く更新出来ず、手動で管理していました。
またブログをWordPressからHugoに移した事によってほぼ静的サイトをホスティングしているだけになって行きました。  
＊移した理由は[こちらの記事](/post/2017/12/move-to-hugo-from-wp)に書いてます

業務でVPSを使って何かをする事も無かったのも大きく、静的サイトホスティングに切り替える事にしました。

## VPSの良いところ
VPS自体はとても良いと思います。サーバーの知識やセキュリティ、アップデートなど安定に稼働させる為に色々な経験が出来ます。さらに、ちょっとしたサービスを立ち上げたり開発環境の構築なども出来ます。

最新のものを試したりする事も可能なので自由度は高い点がVPSの良いところだと思います。
レンタルサーバーとは違い、リソースは確保されているので他のサイトにパワーが取られる事はないはず(おそらく)

cronなどで日々のアップデート自動化やCIとの組み合わせでデプロイの自動化なども魅力の一つだと思います。

## VPSのあまり良くない所
逆に言えば自由度が高い分、様々な事を自分でしなければなりません。セキュリティも含め対策をしなければならない事が多いのは事実です。
あまりサービスや複数サイトを管理していないのであれば、オーバースペックになりがちとも思います。

また僕自身にはサーバー管理の経験が無かったので、色々とエラーなどで苦労しました。
初めてVPSを導入する際はいろんな障害が最初の頃は起きてしまうと思います

# 静的サイトホスティング
今ではサーバーレスと言う言葉も出来るぐらい、サーバーの維持に対してコストを掛けるより開発に力を入れる流れになって来たと思います。また様々な静的サイトホスティングサービスが誕生し、しかもほぼ無料で使えるところが多いです。これは個人サイトを管理している人にとっては良いことだと思います

僕が今まで使った(もしくは使っている)のは以下となります。

- [Firebase Hosting](https://firebase.google.com/)
- [Netlify](https://www.netlify.com/)
- [Now.sh](https://zeit.co/now)
- [GitHub Pages](https://pages.github.com/)

まずどのサービスもすごいのが**無料**で使える事！✨気軽にトライ出来るのが良いですね
そして標準のごとく、独自ドメインの対応、CDN、Let's Encryptでのhttps化(自動更新付き)が付いてます。

個人サイトぐらいであれば、正直WordPressを使うよりかは静的サイトで十分だと感じます。
また、CIを導入する事によってデプロイの自動化も可能です。

# 最後に
どちらも経験した後で思う事は、それぞれの良さ、悪さがあると思います。
WordPressなどのCMSを使っている方であれば、レンタルサーバーからVPSに切り替えるだけでかなり速度は上がると思います。
静的サイトで十分と言う方は静的サイトホスティングでサーバーの管理から解放されるのもとても良い事だと思います。

ぶっちゃけ、WordPressのコンテンツ管理は本当にすごいと思います。めっちゃ簡単ですしネットさえあればどこでも、どのデバイスでも記事を書く事が出来るのはすごいと思います。またSEOの関してもプラグイン一つ入れておけば効果は抜群です。
この辺りは静的サイトでは色々と頑張らないといけない部分なので疲れます。。

なので、サービス側を考えているのであればVPSもトライしてみても良いと思いますしNextやNuxtなどで静的サイトを作るのであれば静的サイトホスティングがおすすめだと思います🙌
