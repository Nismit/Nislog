import type { Meta, StoryObj } from "@storybook/react";
import PostType from "../../../types/post";
import PaginationComponent from "./index";

const meta: Meta<typeof PaginationComponent> = {
  title: "Pagination",
  component: PaginationComponent,
};

const PostMock: PostType = {
  slug: "test-mock",
  title: "あのイーハトーヴォのすきとおった風",
  date: "2021/02/28",
  lastmod: "2021/03/01",
  eyecatch: "https://source.unsplash.com/1200x630/",
  description:
    "あのイーハトーヴォのすきとおった風、夏でも底に冷たさをもつ青いそら、うつくしい森で飾られたモリーオ市、郊外のぎらぎらひかる草の波",
  tags: ["blog", "vancouver"],
  content: "Test Content",
};

export default meta;
type Story = StoryObj<typeof meta>;

export const Pagination: Story = {
  args: {
    totalCounts: 42,
    currentPageNumber: 2,
  },
};
