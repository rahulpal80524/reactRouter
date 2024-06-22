import React, { useEffect, useState } from "react";
import { ThemeProvider } from "../contexts/Theme";
import ThemeBtn from "./ThemeBtn";
import Card from "./Card";

export default function Theme() {
  const [themeMode, setThemeMode] = useState("light"); // Default to light theme

  const darkTheme = () => {
    setThemeMode("dark");
  };

  const lightTheme = () => {
    setThemeMode("light");
  };

  useEffect(() => {
    const htmlElement = document.querySelector("html");
    if (htmlElement && themeMode) {
      htmlElement.classList.remove("light", "dark");
      htmlElement.classList.add(themeMode);
    }
  }, [themeMode]);

  return (
    <ThemeProvider value={{ themeMode, darkTheme, lightTheme }}>
      <div className="flex flex-wrap min-h-screen items-center">
        <div className="w-full">
          <div className="w-full max-w-sm mx-auto flex justify-end mb-4">
            <ThemeBtn />
          </div>

          <div className="w-full max-w-sm mx-auto">
            <Card />
          </div>
        </div>
      </div>
    </ThemeProvider>
  );
}
