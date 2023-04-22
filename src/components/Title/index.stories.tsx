import type { Meta, StoryObj } from "@storybook/react";
import TitleComponent from "./index";

const meta = {
  title: "Title",
  component: TitleComponent,
} satisfies Meta<typeof TitleComponent>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Title: Story = {
  args: {
    h1: true,
    children: "Heading 1",
  },
};
