import React from "react";
import { ComponentStory, ComponentMeta } from "@storybook/react";

import TitleComponent from "./index";

export default {
  title: "Title",
  component: TitleComponent,
} as ComponentMeta<typeof TitleComponent>;

//👇 We create a “template” of how args map to rendering
const Template: ComponentStory<typeof TitleComponent> = (args) => (
  <TitleComponent {...args} />
);

export const Title = Template.bind({});

Title.args = {
  h1: true,
  children: "Heading 1",
};

// export const Default: ComponentStory<typeof TitleComponent> = () => (
//   <>
//     <TitleComponent h1>Title</TitleComponent>
//     <TitleComponent h2 h3>Title</TitleComponent>
//   </>
// );
