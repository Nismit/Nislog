import type { Meta, StoryObj } from "@storybook/react";
import HeaderComponent from "./index";

const meta: Meta<typeof HeaderComponent> = {
  title: "Header",
  component: HeaderComponent,
};

export default meta;
type Story = StoryObj<typeof meta>;

export const Header: Story = {};
