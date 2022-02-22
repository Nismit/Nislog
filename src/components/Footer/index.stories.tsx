import React from "react";
import { ComponentStory, ComponentMeta } from "@storybook/react";

import FooterComponent from "./index";

export default {
  title: "Footer",
  component: FooterComponent,
} as ComponentMeta<typeof FooterComponent>;

export const Footer: ComponentStory<typeof FooterComponent> = () => (
  <FooterComponent />
);
