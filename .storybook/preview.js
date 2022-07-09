// import React from "react";
import * as NextImage from "next/image";
import "../src/styles.css";

const OriginalNextImage = NextImage.default;

Object.defineProperty(NextImage, "default", {
  configurable: true,
  value: (props) =>
    typeof props.src === "string" ? (
      <OriginalNextImage {...props} unoptimized blurDataURL={props.src} />
    ) : (
      <OriginalNextImage {...props} unoptimized />
    ),
});

// Object.defineProperty(NextImage, "__esModule", {
//   configurable: true,
//   value: true,
// });

// import { ThemeProvider } from "../src/components/ThemeProvider";
export const parameters = {
  darkMode: {
    darkClass: "dark",
    lightClass: "light",
    classTarget: "html",
    stylePreview: true,
  },
};

// export const decorators = [
//   (Story) => (
//     <ThemeProvider>
//       <Story />
//     </ThemeProvider>
//   ),
// ];
