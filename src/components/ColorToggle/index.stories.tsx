import type { Meta, StoryObj } from "@storybook/react";
import { ThemeProvider } from "../ThemeProvider";
import ColorToggleComponent from "./index";

const meta: Meta<typeof ColorToggleComponent> = {
  title: "Color Toggle",
  component: ColorToggleComponent,
};

export default meta;
type Story = StoryObj<typeof meta>;

export const ColorToggle: Story = {};
ColorToggle.decorators = [
  (Story) => (
    <ThemeProvider>
      <Story />
    </ThemeProvider>
  ),
];
