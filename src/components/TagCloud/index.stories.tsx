import React from "react";
import { ComponentStory, ComponentMeta } from "@storybook/react";

import TagCloudComponent from "./index";

export default {
  title: "Tag Cloud",
  component: TagCloudComponent,
} as ComponentMeta<typeof TagCloudComponent>;

const tagsMock = ["test", "example", "tagTest", "vancouver"];

export const TagCloud: ComponentStory<typeof TagCloudComponent> = () => (
  <TagCloudComponent tags={tagsMock} />
);
