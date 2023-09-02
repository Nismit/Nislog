import type { Meta, StoryObj } from "@storybook/react";
import ContentFooterComponent from "./index";

const meta: Meta<typeof ContentFooterComponent> = {
  title: "Content Footer",
  component: ContentFooterComponent,
};

export default meta;
type Story = StoryObj<typeof meta>;

export const ContentFooter: Story = {
  args: {
    slug: "some-slug",
    title: "Example Title",
  },
};
