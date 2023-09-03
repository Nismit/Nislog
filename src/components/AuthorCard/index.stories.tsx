import type { Meta, StoryObj } from "@storybook/react";
import AuthorCardComponent from "./index";

const meta: Meta<typeof AuthorCardComponent> = {
  title: "Author Card",
  component: AuthorCardComponent,
};

export default meta;
type Story = StoryObj<typeof meta>;

export const AuthorCard: Story = {
  args: {
    authorImagePath: "/images/500x500-mock.jpg",
  },
};
