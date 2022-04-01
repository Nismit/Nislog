// typography.stories.tsx

import React from "react";

import { ComponentStory, ComponentMeta } from "@storybook/react";

import Layout from "./Layout";

export default {
  /* 👇 The title prop is optional.
   * See https://storybook.js.org/docs/react/configure/overview#configure-story-loading
   * to learn how to generate automatic titles
   */
  title: "Global/Typography",
  component: Layout,
} as ComponentMeta<typeof Layout>;

//👇 We create a “template” of how args map to rendering
// const Template: ComponentStory<typeof Layout> = (argsssss) => <Layout>{argsssss}</Layout>;

// export const Primary = Template.bind({});

// export const Primary: ComponentStory<typeof Layout> = () => <Layout><div>Test</div></Layout>;

export const Typography: ComponentStory<typeof Layout> = () => (
  <Layout>
    <h1>Heading 1, Lorem ipsum dolor sit amet lobortis.</h1>
    <h2>
      Heading 2 Lorem ipsum dolor sit amet, consectetur adipiscing elit quisque
      lobortis erat
    </h2>
    <h3>
      Heading 3 Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque
      lobortis erat vulputate facilisis dignissim.
    </h3>
    <h4>
      Heading 4 Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque
      lobortis erat vulputate facilisis dignissim.
    </h4>
    <h5>
      Heading 5 Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque
      lobortis erat vulputate facilisis dignissim.
    </h5>
    <h6>
      Heading 6 Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque
      lobortis erat vulputate facilisis dignissim.
    </h6>
    <p>
      Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque lobortis
      erat vulputate facilisis dignissim. Praesent gravida arcu et libero
      iaculis facilisis. Nam a erat sit amet turpis commodo aliquet. Nulla
      lobortis tortor in magna maximus facilisis. Nulla laoreet, lorem suscipit
      euismod sodales, lectus libero semper leo, eu vehicula leo lacus sagittis
      metus. Cras pretium magna in augue pellentesque accumsan. Curabitur
      feugiat magna non convallis maximus. Nullam pretium orci laoreet, pharetra
      sapien non, consectetur turpis. Donec eget consequat nulla.
    </p>
  </Layout>
);
