import type { Meta, StoryObj } from "@storybook/react";
import FooterComponent from "./index";

const meta: Meta<typeof FooterComponent> = {
  title: "Footer",
  component: FooterComponent,
};

export default meta;
type Story = StoryObj<typeof meta>;

export const Footer: Story = {};
