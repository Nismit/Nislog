import React from "react";
import { ComponentStory, ComponentMeta } from "@storybook/react";

import { PostMock } from "../../utils/postMock";
import PostComponent from "./index";

export default {
  title: "Post",
  component: PostComponent,
} as ComponentMeta<typeof PostComponent>;

export const Single: ComponentStory<typeof PostComponent> = () => (
  <PostComponent post={PostMock} />
);

export const Multiple: ComponentStory<typeof PostComponent> = () => (
  <>
    <PostComponent post={PostMock} />
    <PostComponent post={PostMock} />
    <PostComponent post={PostMock} />
  </>
);
