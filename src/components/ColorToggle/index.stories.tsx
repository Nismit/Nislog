import React from "react";
import { ComponentStory, ComponentMeta } from "@storybook/react";

import { ThemeProvider } from "../ThemeProvider";
import ColorToggleComponent from "./index";

export default {
  title: "Color Toggle",
  component: ColorToggleComponent,
} as ComponentMeta<typeof ColorToggleComponent>;

const Template: ComponentStory<typeof ColorToggleComponent> = () => (
  <ColorToggleComponent />
);

export const ColorToggle = Template.bind({});
ColorToggle.decorators = [
  (Story) => (
    <ThemeProvider>
      <Story />
    </ThemeProvider>
  ),
];
