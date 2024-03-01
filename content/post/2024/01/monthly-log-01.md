---
draft: false
date: "2024-01-31T20:15:09-08:00"
title: Monthly Log - 2024-01
description: 2024年1月のログ
eyecatch: /images/eyecatch/eye-monthly-log-24-01.jpg
tags:
- monthly-log
toc: false
---

# 2024年1月のログ

遅くなってしまったけども色々と残している

- 大晦日は友人達と色々話した
    - バックエンドの友人がフロントは色々大変そうという話に
    - フロントエンドがしんどいのには色々理由がありそう
        - フロントに関する全てのライブラリが群雄割拠であること
        - そしてブームが存在し、2-3年サイクルで入れ替えが発生していること(いわゆる[式年遷宮](https://ja.wikipedia.org/wiki/%E7%A5%9E%E5%AE%AE%E5%BC%8F%E5%B9%B4%E9%81%B7%E5%AE%AE))
        - キャッチアップを定期的にしないとすぐに流行りが分からなくなってしまう
            - 流行りを追うのが良いのかは分からないがデファクトスタンダードは知っておきたい
            - 例で言うとReactのスターターキットは長らくCreate React Appだったが、現在ではdeprecatedになり、公式ではviteやフレームワークの使用を推奨している
                - しかし、npm エコシステムの仕組み上まだCRAは普通に動く
            - こういった今の”標準”を知るにはどうすれば良いのか分からない
        - 現在はJSの関連ツールがRustに置き換えられつつあり、今後は安定していくかも？
- 今後仕事を続けていく上でこんなにもコロコロと入れ替わるものを続けるのはあまり良くないのではと感じている
    - Rustかどうか分からないけどあまり大きく変わらないもの
    - いわゆるちょっと低レイヤ寄りの言語を強くしていきたいなぁとは思う
    - もしくはフロントでも設計周りなど上流層に移動していく
        - Reactではなくともデータの受け取り方とかインターフェースの設計は変わらない
- https://satoru-takeuchi.hatenablog.com/entry/2024/01/07/154230
    - 前と捉え方は自分も違うけど、そもそもWeb制作を辞めたのが大きい
- カナダで時給$100超える職種が山ほどあるというツイートを見た
    - https://twitter.com/momoy1a/status/1745429919495000254
    - 流石に山ほどあるというのはちょっと盛りすぎな気がするのと、おそらく一時的に$100超えるだけだと思う
    - 年収$200Kはデータ的にも多くないので実際は年収$70K-$100Kぐらいに収束しそう
        - 日本でも期間工とかだと月々の給料はめちゃくちゃ高いけどずっと出来るわけではない
        - そういう仕事はそもそもワーホリでも就けるのかな
    - https://twitter.com/momoy1a/status/1745422810225250815
        - 関連ツイートで1年目で月収$5,000-$7,500稼いでいたということ
        - 間をとって、月収$6,000で税金をきっちり払うと手取りは$4,352 (年収は$72,000)
        - Twitterでよく見るやつは税金引いてない事が多いので、それを引いてみるとあんまり稼いでるなとは思わない。。
        - Tax Returnちゃんと払ってたらめちゃくちゃ支払いあると思うので、こういうツイートはうーんと思ってしまう。給料体系でTipある人、Tax Return払った後も本当に稼いでる感あるか？？
- Notionがカレンダー機能を出した
    - https://twitter.com/NotionHQ/status/1747666573874389354
    - なんか色んな機能を出してきて、段々と心配になってきた
        - NotionはEvernoteと同じ道を歩む事にはならないのか
        - フリープランでデバイス制限かノートの数の制限が出たら終わりの一歩な気がする
- 左翼学生に人種差別者扱いされたアメリカの上院議員の回答をYouTubeで見た
    - https://www.youtube.com/watch?v=J-BLn971g7A
    - 他での発言を知らないしこの人の事は詳しく知らないのだけど、この場での回答はとても良かった
        - 学生が本質を突かれた時に首を横に振って否定しているけど、そこに関してはちゃんと認めるべきではあると思った
    - 左翼とか保守とかそういったものは関係なしに今の自分の世代や若い世代は本当に考えが凝り固まっている人が多いように思える
        - すごい変な主張をする人や団体が増えた(エコーチャンバーの影響もあると思うが)
        - 特に人種、性別に関するものは極端な主張が変に目立ってしまっている
    - 受けとる側の事を考えた事があるのだろうかと思ってしまう
        - SNSでも同じで  ”言われる側” を想像したら、あんまり極端な事とかネガティブな事は言えないが。。
- Revision 2024の公式サイトが作られた
    - 提出を目標としていたが色々考えた結果断念することに
        - Raymarching, SDFに関しての知識、経験不足を痛感した
        - そのベースとなるものに加え、カメラワークやポストエフェクト、さらに音楽までカバーするとなると圧倒的に時間が足りない
        - 11月頃からテンプレート作りに空いている時間のほぼ全てを費やして来たんだけど、やってない事が多すぎて3ヶ月ぐらいかけてようやくRaymarchingの作り込みに来れた
        - まだ上記のものが残っていると考えると提出には間に合わない
- Demo は途中まで作るの楽しかったがそこから先は苦しくなってしまった
    - それとプライベートで早めに対処しないといけないことが出てきてdemoとかやってる場合じゃなくなった (これが一番大きい)
    - 作っていく途中でわかった事として
        - Shaderのコードリーディングをもっと増やす (主にShadertoy)
        - Raymarching, SDF でのモデリングをもっと書く、こなす (場数、手札の少なさが露見した)
        - カメラと音のSync (いわゆるビートシンク)
        - ポストエフェクトの手数を増やす
            - Bloom
            - DoF
            - SSAO (ポストエフェクトになるのかもよく分かってない)
            - Tone Mapping (これも結構重要だと思った, 色味を抑えないとすぐ 1 = 白に到達する)
- 目標は早くも1月で達成不可能になったけど、それも人生。やってみたからこそ、得れた収穫は多かったし、この1年じっくり時間掛けて作っていく感じでも良いかな