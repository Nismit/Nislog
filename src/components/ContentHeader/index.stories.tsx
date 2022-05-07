import React from "react";
import { ComponentStory, ComponentMeta } from "@storybook/react";

import ContentHeader from "./index";

export default {
  title: "Content Header",
  component: ContentHeader,
} as ComponentMeta<typeof ContentHeader>;

const Template: ComponentStory<typeof ContentHeader> = (args) => (
  <ContentHeader {...args} />
);

export const Default = Template.bind({});

Default.args = {
  title: "あのイーハトーヴォのすきとおった風",
  date: "2021/02/28",
  eyecatch: "https://source.unsplash.com/uwrWzRKRd3M/1200x630/",
};

export const Modified = Template.bind({});

Modified.args = {
  title: "あのイーハトーヴォのすきとおった風",
  date: "2021/02/28",
  lastmod: "2021/03/01",
  eyecatch: "https://source.unsplash.com/uwrWzRKRd3M/1200x630/",
};

export const WithoutImage = Template.bind({});

WithoutImage.args = {
  title: "あのイーハトーヴォのすきとおった風",
  date: "2021/02/28",
};
