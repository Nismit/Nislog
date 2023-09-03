import type { Meta, StoryObj } from "@storybook/react";
import ContentComponent from "./index";

const meta: Meta<typeof ContentComponent> = {
  title: "Content",
  component: ContentComponent,
};

const ExampleContent = () => (
  <>
    <h1>Heading 1 タイトル</h1>
    <h2>Heading 2 タイトル</h2>
    <h3>Heading 3 タイトル</h3>
    <h4>Heading 4 タイトル</h4>
    <h5>Heading 5 タイトル</h5>
    <h6>Heading 6 タイトル</h6>
    <p>
      Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque lobortis
      erat vulputate facilisis dignissim. Praesent gravida arcu et libero
      iaculis facilisis. Nam a erat sit amet turpis commodo aliquet.{" "}
      <code>function double(x: number) return (x * x)</code> Nulla lobortis
      tortor in magna maximus facilisis. Nulla laoreet, lorem suscipit euismod
      sodales, lectus libero semper leo, eu vehicula leo lacus sagittis metus.
      Cras pretium magna in augue pellentesque accumsan. Curabitur feugiat magna
      non convallis maximus. Nullam pretium orci laoreet, pharetra sapien non,
      consectetur turpis. Donec eget consequat nulla.
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
      <strong>イーハトーヴォ</strong>の五月から十月までを書きつけましょう。
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
    <p>Code Block</p>
    <pre>
      <code>
        {`#define RGBLED_NUM 54
#undef RGBLED_SPLIT
#define RGBLED_SPLIT { 27, 27 }`}
      </code>
    </pre>
  </>
);

export default meta;
type Story = StoryObj<typeof meta>;

export const Content: Story = {
  args: {
    children: ExampleContent(),
  },
};
