import type { Meta, StoryObj } from "@storybook/react";
import { ThemeProvider } from "../ThemeProvider";
import ColorToggleComponent from "./index";

const meta = {
  title: "Color Toggle",
  component: ColorToggleComponent,
} satisfies Meta<typeof ColorToggleComponent>;

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
