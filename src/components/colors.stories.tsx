import type { Meta, StoryObj } from "@storybook/react";
import Layout from "./Layout";

const meta = {
  title: "Global/Colors",
  component: Layout,
} satisfies Meta<typeof Layout>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Colors: Story = {
  args: {
    children: (
      <div
        style={{
          display: "flex",
          flexWrap: "wrap",
          justifyContent: "space-between",
          gap: "1rem",
        }}
      >
        <div>
          <div
            style={{
              width: "100px",
              height: "100px",
              backgroundColor: "var(--primary)",
              boxShadow: "0 2px 5px rgba(0, 0, 0, 0.25)",
            }}
          ></div>
          Primary
        </div>
        <div>
          <div
            style={{
              width: "100px",
              height: "100px",
              backgroundColor: "var(--secondary)",
              boxShadow: "0 2px 5px rgba(0, 0, 0, 0.25)",
            }}
          ></div>
          Secondary
        </div>
        <div>
          <div
            style={{
              width: "100px",
              height: "100px",
              backgroundColor: "var(--tertiary)",
              boxShadow: "0 2px 5px rgba(0, 0, 0, 0.25)",
            }}
          ></div>
          Tertiary
        </div>
        <div>
          <div
            style={{
              width: "100px",
              height: "100px",
              backgroundColor: "var(--accent)",
              boxShadow: "0 2px 5px rgba(0, 0, 0, 0.25)",
            }}
          ></div>
          Accent
        </div>
        <div>
          <div
            style={{
              width: "100px",
              height: "100px",
              backgroundColor: "var(--card)",
              boxShadow: "0 2px 5px rgba(0, 0, 0, 0.25)",
            }}
          ></div>
          Card
        </div>
        <div>
          <div
            style={{
              width: "100px",
              height: "100px",
              backgroundColor: "var(--cta)",
              boxShadow: "0 2px 5px rgba(0, 0, 0, 0.25)",
            }}
          ></div>
          Cta
        </div>
        <div>
          <div
            style={{
              width: "100px",
              height: "100px",
              backgroundColor: "var(--background)",
              boxShadow: "0 2px 5px rgba(0, 0, 0, 0.25)",
            }}
          ></div>
          Background
        </div>
      </div>
    ),
  },
};
