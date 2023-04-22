import type { Meta, StoryObj } from "@storybook/react";
import FooterComponent from "./index";

const meta = {
  title: "Footer",
  component: FooterComponent,
} satisfies Meta<typeof FooterComponent>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Footer: Story = {};
