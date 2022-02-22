import { useState } from "react";

export const useTheme = () => {
  const [colorMode, _setColorMode] = useState(undefined);

  const setColorMode = (value: any) => {
    const root = window.document.documentElement;
    console.log(root);
    localStorage.setItem("theme", value);
    _setColorMode(value);
  };

  return { colorMode, setColorMode };
};
