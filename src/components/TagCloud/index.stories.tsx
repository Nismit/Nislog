import type { Meta, StoryObj } from "@storybook/react";
import TagCloudComponent from "./index";

const meta: Meta<typeof TagCloudComponent> = {
  title: "Tag Cloud",
  component: TagCloudComponent,
};

export default meta;
type Story = StoryObj<typeof meta>;

const tagsMock = ["test", "example", "tagTest", "vancouver"];

export const TagCloud: Story = {
  args: {
    tags: tagsMock,
  },
};
