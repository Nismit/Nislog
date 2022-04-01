import React from "react";
import { ComponentStory, ComponentMeta } from "@storybook/react";

import { PostMock } from "../../utils/postMock";
import PostType from "../../../types/post";
import RelatedPostsComponent from "./index";

export default {
  title: "Related Posts",
  component: RelatedPostsComponent,
} as ComponentMeta<typeof RelatedPostsComponent>;

const post = PostMock;
const relatedPostMock: PostType[] = [post, post];

export const RelatedPosts: ComponentStory<
  typeof RelatedPostsComponent
> = () => <RelatedPostsComponent posts={relatedPostMock} />;
