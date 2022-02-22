import React from "react";
import { ComponentStory, ComponentMeta } from "@storybook/react";

// import { serialize } from "next-mdx-remote/serialize";
// import { MDXRemote, MDXRemoteSerializeResult } from "next-mdx-remote";
import { PostMock } from "../utils/postMock";

import { ThemeProvider } from "./ThemeProvider";
import Layout from "./Layout";
import Header from "./Header";
import Article from "./Article";
import ContentHeader from "./ContentHeader";
import Content from "./Content";
import Tags from "./Tags";
import ContentFooter from "./ContentFooter";
import AuthorCard from "./AuthorCard";
import RelatedPosts from "./RelatedPosts";
import Footer from "./Footer";

export default {
  title: "Page/Post Detail",
  component: Layout,
} as ComponentMeta<typeof Layout>;

const post = PostMock;
const relatedPostsMock = [post, post, post, post, post];

const Template: ComponentStory<any> = () => (
  <Layout>
    <Header />
    <Article>
      <ContentHeader
        title={post.title}
        date={post.date}
        lastmod={post.lastmod}
        eyecatch={post.eyecatch}
      />
      <Content>
        <>
          <h1>Heading 1 タイトル</h1>
          <p>
            あのイーハトーヴォのすきとおった風、夏でも底に冷たさをもつ青いそら、うつくしい森で飾られたモリーオ市、郊外のぎらぎらひかる草の波。
            またそのなかでいっしょになったたくさんのひとたち、ファゼーロとロザーロ、羊飼のミーロや、顔の赤いこどもたち、地主のテーモ、山猫博士のボーガント・デストゥパーゴなど、
            いまこの暗い巨きな石の建物のなかで考えていると、みんなむかし風のなつかしい青い幻燈のように思われます。
            では、わたくしはいつかの小さなみだしをつけながら、しずかにあの年のイーハトーヴォの五月から十月までを書きつけましょう。
          </p>
          <h1>Heading 1 タイトル</h1>
          <p>
            あのイーハトーヴォのすきとおった風、夏でも底に冷たさをもつ青いそら、うつくしい森で飾られたモリーオ市、郊外のぎらぎらひかる草の波。
            またそのなかでいっしょになったたくさんのひとたち、ファゼーロとロザーロ、羊飼のミーロや、顔の赤いこどもたち、地主のテーモ、山猫博士のボーガント・デストゥパーゴなど、
            いまこの暗い巨きな石の建物のなかで考えていると、みんなむかし風のなつかしい青い幻燈のように思われます。
            では、わたくしはいつかの小さなみだしをつけながら、しずかにあの年のイーハトーヴォの五月から十月までを書きつけましょう。
          </p>
          <h2>Heading 2 タイトル</h2>
          <p>
            あのイーハトーヴォのすきとおった風、夏でも底に冷たさをもつ青いそら、うつくしい森で飾られたモリーオ市、郊外のぎらぎらひかる草の波。
            またそのなかでいっしょになったたくさんのひとたち、ファゼーロとロザーロ、羊飼のミーロや、顔の赤いこどもたち、地主のテーモ、山猫博士のボーガント・デストゥパーゴなど、
            いまこの暗い巨きな石の建物のなかで考えていると、みんなむかし風のなつかしい青い幻燈のように思われます。
            では、わたくしはいつかの小さなみだしをつけながら、しずかにあの年のイーハトーヴォの五月から十月までを書きつけましょう。
          </p>
          <h3>Heading 3 タイトル</h3>
          <p>
            あのイーハトーヴォのすきとおった風、夏でも底に冷たさをもつ青いそら、うつくしい森で飾られたモリーオ市、郊外のぎらぎらひかる草の波。
            またそのなかでいっしょになったたくさんのひとたち、ファゼーロとロザーロ、羊飼のミーロや、顔の赤いこどもたち、地主のテーモ、山猫博士のボーガント・デストゥパーゴなど、
            いまこの暗い巨きな石の建物のなかで考えていると、みんなむかし風のなつかしい青い幻燈のように思われます。
            では、わたくしはいつかの小さなみだしをつけながら、しずかにあの年のイーハトーヴォの五月から十月までを書きつけましょう。
          </p>
          <h4>Heading 4 タイトル</h4>
          <p>
            あのイーハトーヴォのすきとおった風、夏でも底に冷たさをもつ青いそら、うつくしい森で飾られたモリーオ市、郊外のぎらぎらひかる草の波。
            またそのなかでいっしょになったたくさんのひとたち、ファゼーロとロザーロ、羊飼のミーロや、顔の赤いこどもたち、地主のテーモ、山猫博士のボーガント・デストゥパーゴなど、
            いまこの暗い巨きな石の建物のなかで考えていると、みんなむかし風のなつかしい青い幻燈のように思われます。
            では、わたくしはいつかの小さなみだしをつけながら、しずかにあの年のイーハトーヴォの五月から十月までを書きつけましょう。
          </p>
          <h5>Heading 5 タイトル</h5>
          <p>
            あのイーハトーヴォのすきとおった風、夏でも底に冷たさをもつ青いそら、うつくしい森で飾られたモリーオ市、郊外のぎらぎらひかる草の波。
            またそのなかでいっしょになったたくさんのひとたち、ファゼーロとロザーロ、羊飼のミーロや、顔の赤いこどもたち、地主のテーモ、山猫博士のボーガント・デストゥパーゴなど、
            いまこの暗い巨きな石の建物のなかで考えていると、みんなむかし風のなつかしい青い幻燈のように思われます。
            では、わたくしはいつかの小さなみだしをつけながら、しずかにあの年のイーハトーヴォの五月から十月までを書きつけましょう。
          </p>
          <h6>Heading 6 タイトル</h6>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque
            lobortis erat vulputate facilisis dignissim. Praesent gravida arcu
            et libero iaculis facilisis. Nam a erat sit amet turpis commodo
            aliquet. <code>function double(x: number) return (x * x)</code>{" "}
            Nulla lobortis tortor in magna maximus facilisis. Nulla laoreet,
            あのイーハトーヴォのすきとおった風、夏でも底に冷たさをもつ青いそら、うつくしい森で飾られたモリーオ市、郊外のぎらぎらひかる草の波。
            またそのなかでいっしょになったたくさんのひとたち、ファゼーロとロザーロ、羊飼のミーロや、顔の赤いこどもたち、地主のテーモ、山猫博士のボーガント・デストゥパーゴなど、
            いまこの暗い巨きな石の建物のなかで考えていると、みんなむかし風のなつかしい青い幻燈のように思われます。
            では、わたくしはいつかの小さなみだしをつけながら、しずかにあの年のイーハトーヴォの五月から十月までを書きつけましょう。
          </p>
          <p>
            <a
              href="https://www.aozora.gr.jp/cards/000081/files/1935_19925.html"
              target="_blank"
              rel="noreferrer"
            >
              あのイーハトーヴォのすきとおった風
            </a>
            、夏でも底に冷たさをもつ青いそら、うつくしい森で飾られたモリーオ市、郊外のぎらぎらひかる草の波。
            またそのなかでいっしょになったたくさんのひとたち、ファゼーロとロザーロ、羊飼のミーロや、顔の赤いこどもたち、地主のテーモ、山猫博士のボーガント・デストゥパーゴなど、
            いまこの暗い巨きな石の建物のなかで考えていると、みんなむかし風のなつかしい青い幻燈のように思われます。
            では、わたくしはいつかの小さなみだしをつけながら、しずかにあの年の
            <strong>イーハトーヴォ</strong>
            の五月から十月までを書きつけましょう。
          </p>
          <ul>
            <li>
              List Item リストアイテム
              <ul>
                <li>List Item 2 リストアイテム2</li>
                <li>List Item 2 リストアイテム2</li>
                <li>
                  List Item 2 リストアイテム2
                  <ul>
                    <li>List Item 3 リストアイテム3</li>
                    <li>List Item 3 リストアイテム3</li>
                    <li>List Item 3 リストアイテム3</li>
                  </ul>
                </li>
              </ul>
            </li>
            <li>List Item リストアイテム</li>
            <li>List Item リストアイテム</li>
            <li>List Item リストアイテム</li>
            <li>List Item リストアイテム</li>
          </ul>
          <ul>
            <li>
              List Item リストアイテム
              <ul>
                <li>List Item 2 リストアイテム2</li>
                <li>List Item 2 リストアイテム2</li>
                <li>
                  List Item 2 リストアイテム2
                  <ul>
                    <li>List Item 3 リストアイテム3</li>
                    <li>List Item 3 リストアイテム3</li>
                    <li>List Item 3 リストアイテム3</li>
                  </ul>
                </li>
              </ul>
            </li>
            <li>List Item リストアイテム</li>
            <li>List Item リストアイテム</li>
            <li>List Item リストアイテム</li>
            <li>List Item リストアイテム</li>
          </ul>
          <blockquote>
            <p>
              山路を登りながら、こう考えた。智に働けば角が立つ。情に棹させば流される。意地を通せば窮屈だ。とかくに人の世は住みにくい。
              住みにくさが高じると、安い所へ引き越したくなる。どこへ越しても住みにくいと悟った時、詩が生れて、画が出来る。
            </p>
          </blockquote>
        </>
      </Content>
      <Tags data={["test", "vancouver", "mock"]} />
      <ContentFooter slug={post.slug} title={post.title} />
    </Article>
    <AuthorCard authorImagePath="https://source.unsplash.com/500x500/?beach" />
    <RelatedPosts posts={relatedPostsMock} />
    <Footer />
  </Layout>
);

export const PostDetail = Template.bind({});

PostDetail.decorators = [
  (Story) => (
    <ThemeProvider>
      <Story />
    </ThemeProvider>
  ),
];
