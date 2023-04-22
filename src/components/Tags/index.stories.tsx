import type { Meta, StoryObj } from "@storybook/react";
import TagsComponrnt from "./index";

const meta = {
  title: "Tags",
  component: TagsComponrnt,
} satisfies Meta<typeof TagsComponrnt>;

export default meta;
type Story = StoryObj<typeof meta>;

const tagsMock = ["test", "example", "tagTest", "vancouver"];

export const Tags: Story = {
  args: {
    data: tagsMock,
  },
};
