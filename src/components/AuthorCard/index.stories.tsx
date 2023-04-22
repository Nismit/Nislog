import type { Meta, StoryObj } from "@storybook/react";
import AuthorCardComponent from "./index";

const meta = {
  title: "Author Card",
  component: AuthorCardComponent,
} satisfies Meta<typeof AuthorCardComponent>;

export default meta;
type Story = StoryObj<typeof meta>;


export const AuthorCard: Story = {
  args: {
    authorImagePath: "/images/500x500-mock.jpg",
  },
};
