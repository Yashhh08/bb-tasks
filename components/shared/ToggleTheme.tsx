"use client";

import React, { useContext } from "react";
import { Button } from "../ui/button";
import { IoMdMoon, IoMdSunny } from "react-icons/io";
import { themeContext } from "./ThemeProvider";

const ToggleTheme = () => {
  const { theme, toggleTheme } = useContext(themeContext);

  return (
    <Button
      className="w-fit flex justify-center items-center gap-1"
      onClick={() => {
        toggleTheme();
      }}
    >
      <span>{theme === "light" ? <IoMdMoon /> : <IoMdSunny />}</span>
      <span>{theme === "light" ? "Dark" : "Light"}</span>
    </Button>
  );
};

export default ToggleTheme;
