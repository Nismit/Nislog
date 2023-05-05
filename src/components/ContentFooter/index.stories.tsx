import type { Meta, StoryObj } from "@storybook/react";
import ContentFooterComponent from "./index";

const meta = {
  title: "Content Footer",
  component: ContentFooterComponent,
} satisfies Meta<typeof ContentFooterComponent>;

export default meta;
type Story = StoryObj<typeof meta>;

export const ContentFooter: Story = {
  args: {
    slug: 'some-slug',
    title: 'Example Title'
  }
};
