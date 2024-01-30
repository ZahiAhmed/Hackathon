import React, { useEffect } from "react";
import { useMediaQuery } from "react-responsive";

export function useColorScheme() {
  const systemPrefersDark = useMediaQuery(
    {
      query: "(prefers-color-scheme: dark)",
    },
    undefined
  );

  const isDarkStored = localStorage.getItem("isDarkMode");
  const initialIsDark = isDarkStored === "true" ? true : systemPrefersDark;

  const [isDark, setIsDark] = React.useState(initialIsDark);

  useEffect(() => {
    localStorage.setItem("isDarkMode", isDark.toString());
    if (isDark) {
      document.body.classList.add("dark");
    } else {
      document.body.classList.remove("dark");
    }
  }, [isDark]);

  return {
    isDark,
    setIsDark,
  };
}
