import type { Meta, StoryObj } from "@storybook/react";
import ContentHeader from "./index";

const meta: Meta<typeof ContentHeader> = {
  title: "Content Header",
  component: ContentHeader,
};

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    title: "あのイーハトーヴォのすきとおった風",
    date: "2021/02/28",
    eyecatch: "https://source.unsplash.com/uwrWzRKRd3M/1200x630/",
  },
};

export const Modified: Story = {
  args: {
    title: "あのイーハトーヴォのすきとおった風",
    date: "2021/02/28",
    lastmod: "2021/03/01",
    eyecatch: "https://source.unsplash.com/uwrWzRKRd3M/1200x630/",
  },
};

export const WithoutImage: Story = {
  args: {
    title: "あのイーハトーヴォのすきとおった風",
    date: "2021/02/28",
  },
};
