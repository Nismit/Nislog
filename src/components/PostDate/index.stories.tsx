import React from "react";
import { ComponentStory, ComponentMeta } from "@storybook/react";

import PostDate from "./index";

export default {
  title: "Post Date",
  component: PostDate,
} as ComponentMeta<typeof PostDate>;

const Template: ComponentStory<typeof PostDate> = (args) => (
  <PostDate {...args} />
);

export const Default = Template.bind({});

Default.args = {
  publishDate: "2021/02/23",
};

export const Modified = Template.bind({});

Modified.args = {
  publishDate: "2021/02/22",
  lastModifiedDate: "2021/02/23",
};

export const WithoutIcon = Template.bind({});

WithoutIcon.args = {
  publishDate: "2021/02/22",
  withoutIcon: true,
};
