import type { Meta, StoryObj } from "@storybook/react";
import { PostMock } from "../utils/postMock";

import { ThemeProvider } from "./ThemeProvider";
import Layout from "./Layout";
import Header from "./Header";
import Post from "./Post";
import Pagination from "./Pagination";
import TagCloud from "./TagCloud";
import Footer from "./Footer";

const meta: Meta<typeof Layout> = {
  title: "Page/Home",
  component: Layout,
};

export default meta;
type Story = StoryObj<typeof meta>;

export const Home: Story = {
  args: {
    children: (
      <>
        <Header />
        <Post post={PostMock} />
        <Post post={PostMock} />
        <Post post={PostMock} />
        <Post post={PostMock} />
        <Post post={PostMock} />
        <Pagination totalCounts={42} currentPageNumber={1} />
        <TagCloud tags={["test", "vancouver", "mock", "tags", "Init"]} />
        <Footer />
      </>
    ),
  },
};

Home.decorators = [
  (Story) => (
    <ThemeProvider>
      <Story />
    </ThemeProvider>
  ),
];
