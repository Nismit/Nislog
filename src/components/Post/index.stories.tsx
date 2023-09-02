import type { Meta, StoryObj } from "@storybook/react";
import { PostMock } from "../../utils/postMock";
import PostComponent from "./index";

const meta: Meta<typeof PostComponent> = {
  title: "Post",
  component: PostComponent,
};

export default meta;
type Story = StoryObj<typeof meta>;

export const Single: Story = {
  args: {
    post: PostMock,
  },
};

export const Multiple: Story = {
  args: {
    post: PostMock,
  },
  render: () => (
    <>
      <PostComponent post={PostMock} />
      <PostComponent post={PostMock} />
      <PostComponent post={PostMock} />
    </>
  ),
};
