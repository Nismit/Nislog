import React, { useState, useEffect, useMemo, createContext } from "react";

const COLOR_THEME_KEY = "colorTheme";

type ContextType = {
  colorMode: string | undefined;
  setColorMode: (value: THEME_TYPE) => void;
};

export const THEME_COLORS = {
  LIGHT: "light",
  DARK: "dark",
} as const;

type THEME_TYPE = typeof THEME_COLORS[keyof typeof THEME_COLORS];

export const ThemeContext = createContext({} as ContextType);

export const ThemeProvider: React.FC = ({ children }) => {
  const [colorMode, _setColorMode] = useState<THEME_TYPE | undefined>();

  useEffect(() => {
    const root = window.document.documentElement;
    const rootClassName = root.getAttribute("class") as THEME_TYPE;
    localStorage.setItem(COLOR_THEME_KEY, rootClassName);
    _setColorMode(rootClassName);
  }, []);

  const contextValue = useMemo(() => {
    const setColorMode = (value: THEME_TYPE) => {
      const root = window.document.documentElement;
      root.className = "";
      root.classList.add(value);
      localStorage.setItem(COLOR_THEME_KEY, value);
      _setColorMode(value);
    };

    return {
      colorMode,
      setColorMode,
    };
  }, [colorMode, _setColorMode]);

  return (
    <ThemeContext.Provider value={contextValue}>
      {children}
    </ThemeContext.Provider>
  );
};
