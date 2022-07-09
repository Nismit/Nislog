import React from "react";
import { unified } from "unified";
import rehypeParse from "rehype-parse";
import rehypeReact, { Options } from "rehype-react";
import { markdownToHtml } from "../lib/transpiler";
import HeadMeta from "../components/HeadMeta";
import Layout from "../components/Layout";
import Header from "../components/Header";
import Footer from "../components/Footer";
import Content from "../components/Content";

type Props = {
  content: string;
};

const rehypeReactOptions: Options = {
  passNode: true,
  Fragment: React.Fragment,
  createElement: React.createElement,
  components: {},
};

const processor = unified()
  .use(rehypeParse, { fragment: true })
  .use(rehypeReact, rehypeReactOptions);

const article = `
誰が得をするのか全くわからない僕の簡単なプロフィールです🚀 良かったら見てください🙇🏻

# 日本に居たころの経歴🇯🇵
情報系の大学を卒業後、日本の小さなWeb制作会社で2年半ほど働いていました。メインはフロントエンドでしたが、ディレクションしたりレンタルサーバーの設定などバックエンドのような事も含め幅広くしてました。。

主にWordPressサイトを制作していました。

カナダに渡る前のスキルセットはこんな感じでした🇯🇵

- HTML5
- CSS3(CSSアニメーションがそれなりに出来るぐらい)
- jQuery(プラグインか簡単なアニメーションの実装)
- PHP(WordPressから受けた何かしらのデータのソートとか整形とか簡単なもの)
- SCSS(1年ぐらい業務で書いてました)
- 簡単なサーバー設定(主に日本のレンタルサーバーの設定)
- Photoshop/Illustrator/Fireworksの基本的な使い方

# バンクーバーに渡ったあと🇨🇦
カナダのバンクーバーに渡加後、語学学校に約1年ほど通い英語力を伸ばしました。

その後、モバイルアプリ開発コースの専門学校に1年通って、現在は現地のWeb制作会社で働いています。

就職直前までに身につけたスキルセットはこんな感じ🇨🇦

- iOS/Androidの基本的なアプリ制作スキル
- React Native(一通り形に出来るレベル)
- Docker(WordPressのローカル開発環境の構築)
- VPSを借りてゼロからWebサーバー構築
- バックエンドサイドでのWordPress高速化手法
- React/Vue.jsの基本的なスキル
- WordPressのスターターキットテーマでの実務経験(Underscores/Sage)

# 現在のスキルセット
2022年7月1日時点でのスキルセットです。

- HTML/CSS
- JavaScript (ES2020+)
- WebGL/Three.js (シェーダーを用いた簡単な表現)
- React
- TypeScript
- Firebase
- CIを用いた自動化

# パーソナリティ
FPSゲーマー。(主にCoDシリーズ、BFシリーズが好きです)\
90年代のHipHop好き。(これで何人か仲良くなった現地の人は居るので嬉しい)\
大学時代にブレイクダンスをしてました。\
ビートボックスが出来ます(こっちだと超ウケる。3秒で友達になれる。)

もしここまで見てくれて、何かビビッときたら是非[Twitter](https://twitter.com/nismit_)で友達になってください！！\
&nbsp;\
&nbsp;\
`;

const About: React.FC<Props> = ({ content }) => {
  const meta = {};

  return (
    <Layout>
      <HeadMeta tags={meta} />
      <Header />
      <Content>{processor.processSync(content).result}</Content>
      <Footer />
    </Layout>
  );
};

export async function getStaticProps() {
  const contentHTML = await markdownToHtml(article);
  const content = contentHTML.toString();
  return {
    props: {
      content: content,
    },
  };
}

export default About;
