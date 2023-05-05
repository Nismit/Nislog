import type { Meta, StoryObj } from "@storybook/react";
import Layout from "../Layout";

import {
  ReloadOutline,
  Calendar,
  Hatena,
  Feedly,
  Pocket,
  Twitter,
  Linkedin,
  Github,
  Rss,
  ChevronForward,
  ChevronBack,
  ChevronCircle,
  ArrowForward,
  ArrowForwardCircle,
} from "./index";

const meta = {
  title: "Icons",
  component: Layout,
} satisfies Meta<typeof Layout>;

const svgStyle = {
  width: "64px",
  height: "64px",
};

export default meta;
type Story = StoryObj<typeof meta>;

export const Icons: Story = {
  args: {
    children: (
      <div
      style={{
        display: "flex",
        flexWrap: "wrap",
        justifyContent: "space-between",
        gap: "2rem",
      }}
    >
      <div style={svgStyle}>
        <ReloadOutline />
      </div>
      <div style={svgStyle}>
        <Calendar />
      </div>
      <div style={svgStyle}>
        <Hatena />
      </div>
      <div style={svgStyle}>
        <Feedly />
      </div>
      <div style={svgStyle}>
        <Pocket />
      </div>
      <div style={svgStyle}>
        <Twitter />
      </div>
      <div style={svgStyle}>
        <Linkedin />
      </div>
      <div style={svgStyle}>
        <Github />
      </div>
      <div style={svgStyle}>
        <Rss />
      </div>
      <div style={svgStyle}>
        <ChevronForward />
      </div>
      <div style={svgStyle}>
        <ChevronBack />
      </div>
      <div style={svgStyle}>
        <ChevronCircle />
      </div>
      <div style={svgStyle}>
        <ArrowForward />
      </div>
      <div style={svgStyle}>
        <ArrowForwardCircle />
      </div>
    </div>
    ),
  },
};

