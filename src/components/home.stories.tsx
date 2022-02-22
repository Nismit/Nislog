import React from "react";
import { ComponentStory, ComponentMeta } from "@storybook/react";

import { PostMock } from "../utils/postMock";

import { ThemeProvider } from "./ThemeProvider";
import Layout from "./Layout";
import Header from "./Header";
import Post from "./Post";
import Pagination from "./Pagination";
import TagCloud from "./TagCloud";
import Footer from "./Footer";

export default {
  title: "Page/Home",
  component: Layout,
} as ComponentMeta<typeof Layout>;

const Template: ComponentStory<typeof Layout> = () => (
  <Layout>
    <Header />
    <Post post={PostMock} />
    <Post post={PostMock} />
    <Post post={PostMock} />
    <Post post={PostMock} />
    <Post post={PostMock} />
    <Pagination totalCounts={42} currentPageNumber={1} />
    <TagCloud tags={["test", "vancouver", "mock", "tags", "Init"]} />
    <Footer />
  </Layout>
);

export const Home = Template.bind({});

Home.decorators = [
  (Story) => (
    <ThemeProvider>
      <Story />
    </ThemeProvider>
  ),
];
