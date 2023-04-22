import type { Meta, StoryObj } from "@storybook/react";
import PostDate from "./index";

const meta = {
  title: "Post Date",
  component: PostDate,
} satisfies Meta<typeof PostDate>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    publishDate: "2021/02/23",
  },
};

export const Modified: Story = {
  args: {
    publishDate: "2021/02/22",
    lastModifiedDate: "2021/02/23",
  },
};

export const WithoutIcon: Story = {
  args: {
    publishDate: "2021/02/22",
    withoutIcon: true,
  },
};
