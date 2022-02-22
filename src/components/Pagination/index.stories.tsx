import React from "react";
import { ComponentStory, ComponentMeta } from "@storybook/react";
import PostType from "../../../types/post";
import PaginationComponent from "./index";

export default {
  title: "Pagination",
  component: PaginationComponent,
} as ComponentMeta<typeof PaginationComponent>;

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

export const Pagination: ComponentStory<typeof PaginationComponent> = () => (
  <PaginationComponent totalCounts={42} currentPageNumber={2} />
);
