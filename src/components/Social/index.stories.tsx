import React from "react";
import { ComponentStory, ComponentMeta } from "@storybook/react";

import { SocialList } from "../../../types/social";
import SocialComponent from "./index";

export default {
  title: "Social",
  component: SocialComponent,
} as ComponentMeta<typeof SocialComponent>;

export const Social: ComponentStory<typeof SocialComponent> = () => (
  <div className="parent">
    <SocialComponent
      items={[
        { type: SocialList.GITHUB, name: "test" },
        { type: SocialList.LINKEDIN, name: "test2" },
        { type: SocialList.RSS, name: "" },
      ]}
    />
  </div>
);
