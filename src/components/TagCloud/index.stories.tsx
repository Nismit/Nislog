import type { Meta, StoryObj } from "@storybook/react";
import TagCloudComponent from "./index";

const meta = {
  title: "Tag Cloud",
  component: TagCloudComponent,
} satisfies Meta<typeof TagCloudComponent>;

export default meta;
type Story = StoryObj<typeof meta>;

const tagsMock = ["test", "example", "tagTest", "vancouver"];

export const TagCloud: Story = {
  args: {
    tags: tagsMock,
  },
};
