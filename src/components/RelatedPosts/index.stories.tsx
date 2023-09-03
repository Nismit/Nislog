import type { Meta, StoryObj } from "@storybook/react";
import { PostMock } from "../../utils/postMock";
import PostType from "../../../types/post";
import RelatedPostsComponent from "./index";

const meta: Meta<typeof RelatedPostsComponent> = {
  title: "Related Posts",
  component: RelatedPostsComponent,
};

export default meta;
type Story = StoryObj<typeof meta>;

const post = PostMock;
const relatedPostMock: PostType[] = [post, post];

export const RelatedPosts: Story = {
  args: {
    posts: relatedPostMock,
  },
};
