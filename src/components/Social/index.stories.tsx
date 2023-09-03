import type { Meta, StoryObj } from "@storybook/react";
import { SocialList } from "../../../types/social";
import SocialComponent from "./index";

const meta: Meta<typeof SocialComponent> = {
  title: "Social",
  component: SocialComponent,
};

export default meta;
type Story = StoryObj<typeof meta>;

export const Social: Story = {
  args: {
    items: [
      { type: SocialList.GITHUB, name: "test" },
      { type: SocialList.LINKEDIN, name: "test2" },
      { type: SocialList.RSS, name: "" },
    ],
  },
  render: (args) => (
    <div className="parent">
      <SocialComponent items={args.items} />
    </div>
  ),
};
