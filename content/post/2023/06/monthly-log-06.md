---
draft: false
date: "2023-06-25T20:54:18-07:00"
title: Monthly Log - 2023-06
description: 2023年6月のログ
eyecatch: /images/eyecatch/eye-monthly-log-06.jpg
tags:
- monthly-log
toc: false
---

# 2023年06月のログ

今回はちゃんと月末までに間に合った

- 新しい分割キーボードを注文した
    - 以前から色々と探していた所、[この動画](https://www.youtube.com/watch?v=Mks7QDxFreY)が出てきた
        - Crkbdと同じ配列(3x6)でエルゴノミクスかつトラックボールが付いているもの
        - まさしく探し求めていたものだった
    - [3x5はフルキット](https://bastardkb.com/product/charybdis-nano-kit/)が作者のサイト売っていた
        - その後調べていると作者のDiscord上で同じ質問をしている方がいた
        - 3x6の電子パーツ類は販売可能だが、3Dプリントのケース類は自分で発注するか、自分でプリントする必要があるとのこと
        - 幸い日本の自作キーボード界隈では3Dプリントの発注方法を懇切丁寧に公開してくれているので、それを参考し自分で発注した
        - ビルドはかなり難しそうなんですが。。また出来たらビルドログを書こうと思います
        - やり始めるところは[こんな感じ](https://twitter.com/nismit_/status/1672795004039995393)
- [Drege](https://store.steampowered.com/app/1562430/DREDGE/)をクリアした
    - 全てのサブクエもクリアした
        - 全種類集めるなどは出来ていないけども
    - そこそこプレイして個人的には結構おもしろかった
    - 適度なダークファンタジーが上手く釣りゲーとマッチしてて良かった
- [Outlast Trials](https://store.steampowered.com/app/1304930/The_Outlast_Trials/)をクリアした
    - 最終ステージ(プログラム)はソロではかなり厳しい無茶苦茶な設定
    - 野良パーティーでする場合自分のしたいステージに提案などが出来ない
        - 全ステージをクリアしていかないといけないのに、野良と組んで、結局最後の最後のステージを3回もクリアすることとなった
        - 上手くパーティーとマッチしなくてかなりステージ選択が重複してしまって結構面倒になってしまった
    - ラストも若干不満があるがネタバレにはしたくないので特に言及はしない
    - レベルが10ぐらいになるまでは色々と工夫が必要なのと恐怖があって面白かった
        - それ以降は正直ちょっと作業感が出てしまったかな・・・
- Google DomainsがドメインサービスをSquarespaceに移譲することが[発表](https://support.google.com/domains/answer/13689670)された
    - Squarespace側は12ヶ月間値段の変更はしないと書いている
        - 裏を返せば来年以降には上がるということ
    - Squarespaceにアカウントを作るかGoogleのアカウントでログインするか
        - Squarespace側に何も起きたくないのと、結局値上がりはほぼ確定なのでCloudflareに移管する予定
- Frog主催の大交流会に行ってきた
    - 40人程の参加で相変わらずほとんど知らない人ばかりだった
    - Cornerstone(Frog内ではとても有名な私立カレッジ)に行っているor卒業生がかなり多い
        - Coop + ワーホリの2年就労中に永住権申請コースはまだ王道っぽいのかな
    - 就職に不安、苦戦している人が多数
        - そうなるのは仕方ないなと思う(特に今はレイオフ、リセッション、AIなどTech業界は意外と影響していると思う)
    - そろそろ就職して2-3年の人がぼちぼち出てきていると思うので今その人たちがどうしているのか気になる
        - 特に未経験で就職できた人の次の習得する技術の選び方とかスキルをどの方向へ伸ばしているのかとか
            - 色々経験者は今まで紆余曲折を経て来ていると思うので今は捨てたスキルとか色々情報収集して決めていったスキルセットだと思うので(私もPHP, Docker, Objective-C, Javaとかやったりしてたが今は全く触ってない)
            - 未経験で時間的制限がある中でこっちの就職率を上げるなら大体React + Typescript一択だと思うのでそれに絞って勉強してたと思う
            そうなればビルドツールの遷移とかもそこまで知らないと思うしGulp → Webpack → Vite、さらにNext.jsとか使ってたらWebpackの存在もほとんど気にしなくて良い
            - どんな感じかわかんないけども、上記のような感じなら次の技術への注目って難しくないかなと感じた(今はフロントはまだ安定しているけどReactのRSCがどうなっていくのか。。)
- なんとなく作りたいアプリが浮かんできたのでぼちぼち始めた
    - 新しいものをやはり使いたいなと思ったので[Supabase](https://supabase.com/)を試している
        - Auth, Cronなども入ってるのでロックインはしてしまうけど個人的なものだし良いかなと
        - NoSQLではなくPostgressなのでデータベースの設計も学ぶ
    - 今のところクローズでお試しぐらい
