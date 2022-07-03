---
date: "2015-02-19T11:16:00Z"
description: YouTubeの動画サムネイルを取得する方法を調べていたら、URLを入れるだけで簡単に取得出来る事がわかりましたのでご紹介。需要はあまりないかもしれませんが、参考になれば幸いです。
draft: false
eyecatch: ""
lastmod: "2017-12-29T00:49:36-08:00"
tags:
- youtube
- api
title: YouTubeの動画のサムネイル取得が思った以上に簡単だった件
toc: false
---

# YouTubeの動画のサムネイルを取得したい
クライアントさまから、「WordPressを使って、YouTubeにアップした動画を紹介したいが、動画自体はYouTubeのサイトの方で見せたい」という要望があり、
アップした動画のIDをカスタムフィールドに入れてもらって・・等を考えてたのですが、
サムネイルはどうしようかと思いYouTube側から取れないか調べてみたら、めちゃくちゃ簡単にサムネイルが取得できました。

## URLを入れるだけ
参考サイトでも紹介されているように、URLを入れるだけでサムネイルが取得出来ました。  
//i.ytimg.com/vi/**動画ID**/**画像サイズ**.jpg  
動画IDは  
//youtube.com/watch?v=**xTU0K5q7Zbo**  
太字の部分ですね。自分でアップした動画からサムネイルを取って、一覧にしましたので、ご参考になれば幸いです。

| 画像 | サイズ | URL |
---|---|---
![!120×90](/images/2015/default.jpg)|120&#215;90|http://i.ytimg.com/vi/xTU0K5q7Zbo/default.jpg
![!120×90](/images/2015/1.jpg)|120&#215;90|http://i.ytimg.com/vi/xTU0K5q7Zbo/1.jpg
![!120×90](/images/2015/2.jpg)|120&#215;90|http://i.ytimg.com/vi/xTU0K5q7Zbo/2.jpg
![!120×90](/images/2015/3.jpg)|120&#215;90|http://i.ytimg.com/vi/xTU0K5q7Zbo/3.jpg
![!320x180](/images/2015/mqdefault.jpg)|320&#215;180|http://i.ytimg.com/vi/xTU0K5q7Zbo/mqdefault.jpg
![!480x360](/images/2015/hqdefault.jpg)|480&#215;360|http://i.ytimg.com/vi/xTU0K5q7Zbo/hqdefault.jpg
![!480x360](/images/2015/0.jpg)|480&#215;360|http://i.ytimg.com/vi/xTU0K5q7Zbo/0.jpg
![!640x480](/images/2015/sddefault.jpg)|640&#215;480|http://i.ytimg.com/vi/xTU0K5q7Zbo/sddefault.jpg
![!1280x720](/images/2015/maxresdefault.jpg)|1280&#215;720|http://i.ytimg.com/vi/xTU0K5q7Zbo/maxresdefault.jpg


動画をアップした際にYouTube側で自動的に抽出される、3つのサムネイルがそれぞれあるみたいですね。
カスタムサムネイルを入れていると、そちらがdefaultに設定されるようです。また、上下に黒い帯がついているのは、公式APIで説明されていました。

> アップロードされたサムネイル画像が必要な寸法に一致しない場合、その画像はアスペクト比を変更することなく、正しいサイズに合わせてサイズ変更されます。画像はトリミングされませんが、サイズが正しくなるように黒いバーが含まれる場合があります。
[Thumbnails – YouTube  Google Developers](https://developers.google.com/youtube/v3/docs/thumbnails) より引用
