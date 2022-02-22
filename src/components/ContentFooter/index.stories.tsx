import React from "react";
import { ComponentStory, ComponentMeta } from "@storybook/react";

import ContentFooterComponent from "./index";

export default {
  title: "Content Footer",
  component: ContentFooterComponent,
} as ComponentMeta<typeof ContentFooterComponent>;

export const ContentFooter: ComponentStory<
  typeof ContentFooterComponent
> = () => <ContentFooterComponent slug="/some-slug" title="Example Title" />;
