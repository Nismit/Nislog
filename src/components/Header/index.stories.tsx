import type { Meta, StoryObj } from "@storybook/react";
import HeaderComponent from "./index";

const meta = {
  title: "Header",
  component: HeaderComponent,
} satisfies Meta<typeof HeaderComponent>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Header: Story = {};
