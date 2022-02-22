import React from "react";
import { ComponentStory, ComponentMeta } from "@storybook/react";

import HeaderComponent from "./index";

export default {
  title: "Header",
  component: HeaderComponent,
} as ComponentMeta<typeof HeaderComponent>;

export const Header: ComponentStory<typeof HeaderComponent> = () => (
  <HeaderComponent />
);
