// import React from "react";
import * as NextImage from "next/image";
import "../src/styles-prepare.css";
// import { ThemeProvider } from "../src/components/ThemeProvider";
export const parameters = {
  darkMode: {
    darkClass: "dark",
    lightClass: "light",
    classTarget: "html",
    stylePreview: true,
  },
};

const OriginalNextImage = NextImage.default;

Object.defineProperty(NextImage, "default", {
  configurable: true,
  value: (props) => <OriginalNextImage {...props} unoptimized />,
});

// export const decorators = [
//   (Story) => (
//     <ThemeProvider>
//       <Story />
//     </ThemeProvider>
//   ),
// ];