---
date: "2020-07-19T22:28:42-07:00"
description: 先日、HTML/CSSを学び始めた方からどのように勉強するべきかという質問が来たので自分が思う勉強の道標的なことをリストアップしてみました
draft: false
eyecatch: /images/eyecatch/eye-beginner-learning-html.jpg
lastmod: "2020-08-02T19:12:20-07:00"
tags:
- html
- css
title: HTML/CSSを学習する人に当たっての個人的な道標
toc: true
---

# tl;dr
結論から先に言うと、

- 最初の段階ではJavaScriptの勉強はすべきでない
- どのサイトでも良いのでツールを駆使しながら模写を行う
- 最終的にFacebook, Twitterのサイトを一からコピー出来ればかなり出来ると言える

# きっかけ
とある事情で偶然にも最近HTML/CSSの勉強を始めましたという方と知り合う事になったので、何かあれば質問してくださいと伝えた所以下のような質問が来た。

> 少し学習を進め、フレームワークなどである程度の内容を書き出した後実際に組んでみようとすると上手く作れない。そして同時並行でJavaScriptの勉強もしているがイマイチ理解が出来ない。どうやって勉強していくのが良いのか？

昔同じようなメンターもしていたんですが、その時はメンターも初めてで上手く初期段階の学習をサポート出来なかったので現時点で考えていることを残しておこうと思います。またこの先HTML/CSSもJSと同じように色々と進化していくのでまた考え方も変わっていくと思います。

# HTML
HTMLは5になってからは大きな変化は無く、ほぼ書き方は統一されたと感じます。最初はタグがいっぱいあって大変そうに思えるが覚えるのはそんなに無いし、むしろこの時ぐらいしかゼロから書くという経験しないんじゃ無いかなーと感じます。[1]書いていれば主要なタグは覚えていくので、他のタグなどは検索でさっと出せるならそれで十分なのでふんわり存在を覚えておけば良いと思います。それよりもsectionやarticleタグのHTML上でのルールを覚えた方が良いです。それとタグには色々と付け加える事が出来ます。

- `section`,`article` などのHTML上のルール
- `input` タグのtypeの存在を把握
- `meta` タグの存在を把握
- idとclassの違いは何か
- data-*とは何か
- WAI-ARIAとは何か

data-*/WAI-ARIAに関しては結構複雑になるので、こういう仕様があるぐらいで止めて後で勉強しても良いです。ですが他は必須だと思います。把握すると書いてあるのはタグ自体を覚えるというより色々な種類があることを覚えておき、必要そうな時に調べるという事で大丈夫だと思います。私自身も全部のタグは覚えていませんが、XXみたいなタグがあった気がする->検索->目的のものを見つけるなのは結構あります。大体2-3分で見つけています。

[1]理由としては、React/Vueだと `create-react-app` や `vue create xxx` などで開発に必要なファイルや最低限のHTMLファイルなどが出力される。WordPressに関してもUnderscores(今も使われるのかは知らない)などスターターキットなどがある。なんならVSCodeに標準で付属されてるEmmetなら、`html:5` と書いてTabキーを押すだけでテンプレが出る。

# CSS
CSSはHTMLと密接に関係していて、Webサイト上の**見た目**を担う。どこのタグがどのような見た目にするかを決めるがその際にHTML上でタグに書いたidとclassを参照する事が出来、これをセレクタと呼びます。一応タグそのものを指定する事が出来るが使用する際には注意が必要。CSSで一番重要なのはセレクタで色んな指定方法があるのでここを勉強していくのが良いんだけど、おそらくここが最初の鬼門だと思います。学ぶべきポイントは

- `display` プロパティの違い(ボックスモデル等)
- `margin`, `padding` の特性
- `box-sizing` の特性
- `position` の特性

CSSに関しては勉強方法のところでさらに追記します✨

# JavaScript
HTML/CSSが静だとすると、JavaScriptは動になる。基本的に何かが起こった時にJavaScriptが何かをする。アニメーションだったり、ポップアップを出したり等々。ただ個人的にJavaScriptの勉強をするのは、まずHTML/CSSをある程度理解した上で始めるのが良いと思います。

理由としてはHTML/CSSの勉強の段階でJavaScriptを使うのは主にアニメーションだと思います。そうなるとclassをJavaScriptで付けたり、消したり、cssを操作したりとなるのでHTML/CSSの理解が必要になります。ここが疎かだとJavaScriptを勉強し始めても、classって何？とかidってなんだ、CSSで何を足せば良いのか・・・となってモチベーションが下がるんじゃ無いかなと感じます。また勉強を始めたとしていきなりアルゴリズムやソートよりかアニメーション等の方がブラウザ上で違いが見えるので楽しいと思います。

# おすすめの勉強方法
HTML/CSSを学んでいく上で良いと思う勉強方法は、どこかのサイト、ただしアニメーションが多用されていないサイトが良いです。そのサイトの1ページを模写していくんですが、Google Chromeなどで[開発ツール](https://developers.google.com/web/tools/chrome-devtools)、もしくはインスペクターという名前の便利ツールが搭載されていてHTMLがどう書かれているのかCSSがどんな名前でどんなスタイルが設定されているのかを見る事が出来ます。最初はちょっと使うのが難しいとは思いますが今後もずっと付き合う最強のツールなので頑張って覚えましょう。

答えを見ながら順番に組んでいきます。1ページ完成する頃には少し掴めていると思います。出来れば2-3サイトでシンプルなレイアウトよりも複雑そうだなと思うサイトを選ぶとより良く、合計3ページぐらい模写するのが理想です。ここからさらにブラウザのサイズを小さくして、それらのサイトを見てください。おそらくレイアウトなどが変化すると思います。全部インスペクターに情報はあるのでレスポンシブも勉強していきましょう。ここで学んでいくのは

- HTMLのタグの構成
- id/classの使われ方
- CSSのセレクタ/プロパティ
- CSSの上書き
- CSSでのレイアウト
- CSSでの単位の使われ方
- レスポンシブデザインに対応するCSSの切り替え

実際公開されているサイトで使われているので勉強の教材としては良いと思いました。HTML/CSSでわからない部分はおそらく検索でほぼヒットすると思います。おそらく過去に誰か同じように詰まって解決してると思うので✨

また詰まった所は**メモ**して、解決した方法も残して置くと良いと思います。同じように詰まった時はそれを見返せば良いし、ある程度勉強が進んだ後に見返してみると、なんでこんな事で詰まったんだろうと思うでしょう。実際メンターした時も振り返ってもらうと、すごい簡単なところで詰まってたとか、なんで悩んでいたのか思い出せないし今ならすぐ出来るなど自分の成長を実感出来て非常に良かったのでかなりオススメです。

補足\
どんなサイトが良いのか、あまり分からないという質問が来たので補足しておきます。自分の好きな事もしくは物とかでサイトを探してみてください。例えば服が好きならファッション系のサイトとか、ネットショッピングのサイト等です。逆にアニメーションが多用されているサイトとは、例えばですが https://www.powerhouse-company.com/ こちらのサイトはJavaScriptでゴリゴリに処理されています。ソースコードを見てもほとんどHTMLの記述はありません。こういうのは真似をしようとしても答え合わせが難しいのでオススメしていません :)

## 最終課題
自分の中である程度理解したと思った時の最終課題としては、Facebook/Twitterのログイン後のページを答えを見ないで組んで行きます。この二つのサイトは結構複雑に出来ていて、さらに普段使っている人が多いんじゃないかなと感じます。見慣れているサイトを作ると、色々発見する事があると思います。この二つを作る事が出来ればHTML/CSSでほとんどのサイトは作れると思います。HTML/CSSで表現しきれない部分がJavaScriptの部分になってくるので、ここからJavaScriptの勉強を始めるとより理解しやすくなると思います⚡️

補足  
最終課題はいわゆる力試しと現状の自分の理解度の確認です。出来る/出来ないだけで受け取るのではなく、レイアウトなどは組めるようになってきた、margin/paddingなどの違いが分かってきたなど、出来た部分を感じるのが良いです。全部組めたらかなり出来ると言えるレベルなのでおそらく自分自身の中でも「HTML/CSSの大まかな事は分かり、デザインがあればほぼ組める」ぐらいにはなっていると思います

# その後
何を勉強していくかは自由になりますが、この段階辺りで一度ポートフォリオ、つまり自分の作ったものを見せるサイトを作ってみるのもオススメです。レベルが上がった時にまた作りなおしたり、修正していけば良いと思いますし自分の進行度なども確認出来るのでモチベーションの維持にも繋がると思います！
