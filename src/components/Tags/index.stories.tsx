import React from "react";
import { ComponentStory, ComponentMeta } from "@storybook/react";

import TagsComponrnt from "./index";

export default {
  title: "Tags",
  component: TagsComponrnt,
} as ComponentMeta<typeof TagsComponrnt>;

const tagsMock = ["test", "example", "tagTest", "vancouver"];

export const Tags: ComponentStory<typeof TagsComponrnt> = () => (
  <TagsComponrnt data={tagsMock} />
);
