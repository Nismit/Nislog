import React from "react";
import { ComponentStory, ComponentMeta } from "@storybook/react";

import AuthorCardComponent from "./index";

export default {
  title: "Author Card",
  component: AuthorCardComponent,
} as ComponentMeta<typeof AuthorCardComponent>;

const Template: ComponentStory<typeof AuthorCardComponent> = (args) => (
  <AuthorCardComponent {...args} />
);

export const AuthorCard = Template.bind({});

AuthorCard.args = {
  authorImagePath: "/images/500x500-mock.jpg",
};
