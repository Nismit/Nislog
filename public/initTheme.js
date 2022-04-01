(() => {
  const isSystemDarkMode =
    window.matchMedia &&
    window.matchMedia("(prefers-color-scheme: dark)").matches;
  const theme = localStorage.getItem("colorTheme");
  if (theme !== null) {
    document.querySelector("html").classList.add(theme);
    return;
  }

  if (isSystemDarkMode) {
    document.querySelector("html").classList.add("dark");
  } else {
    document.querySelector("html").classList.add("light");
  }
})();
