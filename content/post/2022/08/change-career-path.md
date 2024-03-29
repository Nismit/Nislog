---
draft: false
date: "2022-08-01T18:02:23-08:00"
title: バンクーバーのデザインエージェンシーを辞めてキャリアパスを変えた
description: 日本を含め、長らくデザインエージェンシーで働いていましたが辞めてキャリアパスを変えました。そこに至るまでの考えなどをメモしています。
eyecatch: /images/eyecatch/eye-change-career-path.jpg
tags:
- vancouver
- career
toc: false
---

かなり長くデザインエージェンシーで働いていましたがついに辞めて、主にフロントエンド領域のWebアプリケーションエンジニアにキャリアを変えました。そこに至るまでの経緯や考えなどをまとめましたが、かなり長い文章になってしまいました。

# tldr;

- WordPressでサイトを作っていくのは個人的に今はもう辛い
- 元々WordPressをメインで使っている組織からWordPressを無くす(剥がす)のはかなり難しい
- 最近の技術スタックを知っているもしくは好きならデザインエージェンシーは個人的にはオススメできない

# はじめに

私は日本でWeb制作会社(海外だとデザインエージェンシー)に2年半、カナダで2社合計4年程働きました。日本もカナダも基本的にはWordPressでサイトを構築していました。前職で働いていくうちに色々な不満が溜まっていき、大きく分けて2つ、**プロジェクトの進め方や会社側の体制の不満点**と**WordPressで開発していく上での不満点**、それらと同時に将来のキャリアパスを考えた際に最終的には辞める決断をしました。

## プロジェクトの管理や体制について

日本もカナダもどちらも同じような問題点があるのではないかなと思いますが、以下の点が段々と不満となっていきました。

- 受注方式での製作
- プロジェクトのスケジュールの難しさ
- 納品先がバラバラ
- デザイナーと開発側の意識のズレ
- プロジェクトマネージャー(PM)の開発に関する知識や引き継ぎ等

### 受注方式での製作

この問題点は受注であるが故にキャッシュフローが回りにくいのではと感じています。もちろん財政的なものは全く開発側からは知る事はないです。ですが先行きがあまり読めないからなのか、人を雇っては解雇もしくは辞めていくみたいなことがずっと起こっていました。\
特にPMが短いスパンで人が変わっていくので知識の共有や引き継ぎなどがほとんど出来ておらず何度も同じような事を説明しなければなりませんでした。また、常に開発のリソースが足りない状況に陥っていました。

### プロジェクトのスケジューリングの難しさ

受注方式の製作はスケジューリングにも影響していると思っていて、プロジェクトが決まり完成までのロードマップとおおよその時間を割り出すことが必要だと思うんですが、前職ではワイヤーフレームや必要な機能をあまり知れる事は無く過去の経験から大体これぐらいの時間として勝手に割り出されていました。
その為、開発間近になりようやく必要な機能などが判明し、やたらと複雑なものだったという事も何度もありました。

基本的におおよそで割り当てられた開発時間は毎回オーバーしており、各プロジェクトが終わる際には振り返りをチームでした方が良いと提案したものの、一度しか実施されず改善はされませんでした。

この振り返りの提案が出来たのは前々職のお陰で、前々職ではプロジェクトが終わる毎にチームで振り返りを行い、良かった点や良くなかった点などを話し合いドキュメントにまとめます。またワイヤーフレーム段階でデザイナーと開発側とPMで共有されており、機能の確認やページ構成などを前もって話すことが出来た事と開発時間も大幅にオーバーする事はほとんど無かったです。 なのでこの問題はおそらく解決もしくは改善出来るはずです。

### 納品先がバラバラ

サイト製作あるあるだと思いますが、納品先がバラバラです。あるプロジェクトではクライアントが持っているサーバーにこちらがセットアップとデータ移行をしたり、zipで成果物を固めて送ったり、自社のサーバーで管理したり、謎のホスティングサービスにアップしたりです。

例えばですがGoogle Cloud PlatformやAzureなどコンテナ式のところはフォームのメール送信は基本的には動かないです。なのでサードパーティ製のメールサービスを使う必要があります。事前にPMやクライアント聞いていても中々レスポンスはなく、納品間近で知らされる事が多くここでも追加作業が度々発生しました。
さらに料金体系なども変わる為、直前でホスティング先が変わるなどもありました。

### デザイナーと開発側の意識のズレ

これはワークフローの問題とリソース不足の問題から来ていて、デザインが完全に出来上がってから開発側に投げられるので、開発側はここで初めてデザインを見ることになります。なので実装の難易度が高いデザインになってることが多いです。

またデスクトップファーストでデザインをするのでモバイルやタブレットのデザインが無かったり、レスポンシブの概念があまり分かっておらず実装が結構難しいものが多かったです。

改善されましたが、以前は1920pxのカンバスサイズでデザインしており、そこからなんといきなりタブレットサイズ(768px)までサイズダウンしていました。中間のデザインが無いので非常に困りました。ただこれは、最初に述べたようにワークフローとリソース不足が問題で、デザインが少し出来てきた段階で開発側とのレビューを挟む事が出来れば回避出来る事と、プロジェクトの振り返りを行う事でレスポンシブの概念など注意点の知見が溜まっていくのでより良くなっていくはずです。ですが、こちらも提案したものの実施はされませんでした。

### PMの開発に関する知識

サイト制作はほとんどWordPressをメインに制作しているのですが、PMは基本的にWordPressのことをあまり知らないです。なのでクライアントの要望を基本的に100%承諾してしまい、かなり辛い追加機能だったりします。そしてWordPress上でコンテンツをPM自身でも編集出来るのにも関わらず修正をこちらに投げて来ます。基本的に開発側に投げられます。
上で書いたように短いスパンでPMが入れ替わったりする為引き継ぎや知識のドキュメント化などがされていませんでした。

## WordPressで開発していく上での不満点

WordPressは非常に自由度が高く色んな形態のWebサイトが制作出来るものの、開発としてはかなり大変です。そもそもブログ用のソフトウェアというのがベースであるにも関わらずECサイトや会員サイトなどブログの域を越えたサイト制作がたくさんありました。もちろんWordPressがこれだけ発展したのも、これらをカバーできるプラグインの存在によるものですがそれにより開発やメンテナンスが非常に大変になることがほとんどでした。ただデザインエージェンシーで働いてきて感じたのは以下のものが上手く解決出来ず不満点となっていきました。

- 有料プラグインの存在
- ACFの依存
- メンテナンスのしんどさ
- チームでの開発の難しさ

### 有料プラグインの存在

WordPressには無料/有料のプラグインが存在しており、有料のプラグインはやはり人気のものが多く使い勝手が良いです。一方で有料プラグインをダウンロードするにはライセンスキーなどを通して認証を済ます必要があります。

前職ではローカルの開発環境の自動化に取り組みcomposerを使ってセットアップはほとんど自動で出来るようになったものの、この有料プラグインのダウンロードが曲者でランダムでダウンロードが失敗しました。ローカル上でもCIのようなものでもランダムです。キャッシュのクリアなども試しても失敗していました。\
他の同じようなプロジェクトでは発生せず、結局のところ原因は掴めなかったです。またダウンロードも色々と制限があってかなりストレスが溜まる開発環境です。出来れば有料プラグインは環境構築がややこしくなるので出来れば外したいのですが、次に延べるプラグインの依存がある以上外すのは困難です。

### ACFの依存

ACFとはAdvanced Custom Fields Pluginの略でWordPressでは絶大な人気を誇っていると思います。おそらくWordPressを使っているデザインエージェンシーはほぼ100%ACFに依存しているのかなと思います。有料版を使っているのはもちろんですが、このACFの依存度が100%でとにかくほとんどのコンテンツはこのACFを使って編集可能にしています。\
ACFがなんとかGutenbergに対応した事で、ACFを使ってGutenbergのコンポーネントを作っていますがフロント側もバックエンド側もがっつり依存しているので、これを取っ払うことは非常に難しいです。

### メンテナンスのしんどさ

メンテナンスは基本的にプラグインのアップデートやWordPressのコアのアップデートがメインです。まずはローカル上でアップデートのテストをしてからステージング、ライブサイトのアップデートを行っていきます。

ローカルに環境が無い場合まずは構築をしなければなりません。ステージングにアクセスしてデータベースのDumpを取って、アップロードされている画像などをダウンロードします。それらを新規で立ち上げたローカル上のWordPressに入れて環境構築をしていきますが非常に面倒です。古いプロジェクトほど自動化が出来ていないので環境設定に時間がかかります。

また有料プラグインのライセンスなどで本番環境しかインストールされていない、ということもあり非常にメンテナンスタスクは精神的に良くなかったです。

余談ですが開発環境はその当時のものとなるので古いものだと今では懐かしいGruntなどが動いていたりします。古すぎるとダウンロード先が無くなっているという事態もあるのでメンテナンスはあまりしたくなかったです。

### チームでの開発の難しさ

リソースの問題も大きいですが、WordPressのテーマ開発をチームで行うのは非常に大変で、特にCSS周りのコンフリクトが大量に発生します。またACFのフィールド設定がJSONで管理されているので先祖返りなどが起こったりしてしまいます。そしてプレビューするにはステージングに上げるしか無いのでチームで開発を行うより一人で完遂した方が問題は起こりづらいです。その代わりスケジュールがずれ込むとかなり大変になっていきます。

#### 脱WordPress 

こういった事から脱WordPressをしたかったのですが、

- 開発チームの学習コスト
- コンテンツ側チームの学習コスト

開発チームはjQueryしか触った事が無い、ES20XXなどを知らないなど学習面においてかなり時間を要する事が判明しました。またCMSを外部サービスに移行するとなるとコンテンツチームの学習も必要になってきます。もし会社がこういった事を積極的に支援していくれる方針などであれば業務内で勉強が出来ますが現実はそんな時間も無く、色々とあれやこれやと提案や相談をしましたが却下されてしまいました。この辺りはビジネスサイドにも影響してくるので中々WordPressをコア事業から外すという選択肢は難しいと感じました。

以上のようなこともあり、今後のキャリアを考えていく上で私はかなり不安になりました。さらに、

- WordPressの今後の方向性があまりわからない (Gutenberg導入以来)
- WordPressというソフトウェアへの依存
- 単価の安さ
- ここ近年のJavaScriptの進化のスピード

特にここ数年のJavaScriptの進化のスピードは凄まじく、今ではデファクトスタンダードであるTypeScriptなどの知識も自習で追従するのはかなり難しく、
WordPressがjQueryをコアに入っている以上最近のES20XXなどは使うことがほぼ無いです。

# キャリアパス

以上のように色んな問題に直面しこれ以上この会社で働くのは難しいと思いましたし、また今後の事を考えるとデザインエージェンシーで働いていくのは中々に辛くなっていくと個人的には思いました。

- 簡単に昨今のデファクトスタンダードな技術スタックに移れない
- 給料交渉がシニアになると難しい
- Webでの表現力が豊富になり、より尖ったスキルが必要になってくる

### 技術スタックの移行

昨今だとWebアプリケーションではReact(or Vue) + TypeScriptがスタンダードだと思いますし、Web制作でもReactやVueを使っている所が徐々に増えてきていると感じます。そんな中、この技術スタックに移れないのでいつまで経ってもJavaScriptのアップデートが出来ません。上でも述べたようにES20XXなどは使うことが無く、jQueryを触っていたりES5辺りが限界でした。

個人的に細々とReact/Next.js + TypeScriptの勉強を続けていたのでより会社での開発環境とのギャップを感じてしまいました。やはり開発体験が良いのはモチベーションにもつながります。

### 給料交渉がシニアになると難しい

これはバンクーバーだからなのかもしれませんが、そこらのデザインエージェンシーの給料はそこまで高くないように思えます。情報があるわけではないですが、トップエージェンシー以外ではシニアの上限値は$80Kぐらいなんじゃないかなぁと思います。その先はリードやディレクターなどになって、よりプロジェクトの管理やリソース管理などプレイヤーでいるのは難しいのでは無いかなと私は感じました。ちなみに私は給料交渉をしましたがコロナを理由に上げてもらえませんでした。このことから少し先の未来ですら厳しいと感じました。(インフレなどを考慮しました)

一方でプロダクトのスタートアップなどはジュニアでも$70Kだったり、$80Kとかも割と居るようなのでここ最近のインフレなどにも追従している感はあります。

### Webでの表現力の進化

IE11が終了したこともあり、一気にCSSやJSでデフォルトで使えるものが増えました。CSS GridやVariablesなどかなり柔軟にスタイル出来るようになりました。またWebGLを採用するサイトがどんどん増えており、3Dや2Dを上手く使っての表現が出てきて表現力が一気に底上げされたと感じます。色々会社でそういった新しい表現を模索するような環境であれば良かったですが、中々並のエージェンシーではそういったことをする余力がないと思います。

個人的にWebGLは楽しかったので勉強していましたが、一日で勉強できる量はかなり限られてくるので実案件に持っていくのは厳しかったです。どのような表現をしたいのかが分からない事や、知識不足からのおおよその作業時間などの割り出しが出来なかったからです。3Dと一言でいっても3Dモデルは誰が作るのか発注するにしてもどのように注文していけばいいかなど、あらゆる面で知識やノウハウが不足していました。

# 転職

こうして、色んなことが働いていくうちに出てきて転職活動をぼちぼちと始めました。上で述べたことによりデザインエージェンシーで働いていくのは辛いなぁと思ったので、プロダクト側に転職する為に実際のプロダクトの欠片みたいなプロジェクトをちょこちょこと作っている途中でしたが、たまたま上手くリファラルでの転職をすることが出来ました。ですが個人的にはデザインエージェンシー→プロダクトに移るのは難しいと思います。私自身がもっと勉強しておけば良かったと思うのは以下の内容です。

- アルゴリズム (特にソート、オーダー計算量周り)
- TypeScriptの型システム
- 個人プロジェクトとして十分なので、APIを使い、データベースにデータを格納、それを表示するアプリを一つは作る (ログイン機能付きだとなお良し)

デザインエージェンシーではこの辺りの知識がほぼ養われないので自分自身で学んでいく必要があります。たまたまリファラル効果で転職出来ましたがこの辺りの知識で詰まることが多いです。

ざっと当時メモしていた内容を少し加筆や修正してますが、あんまり何が言いたかったのかよく分からないです。とにかく色々とストレスが溜まっていたのは間違いないので無事抜け出せれたのは良かったと思います。
