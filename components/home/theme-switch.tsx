"use client";

import { useMm } from "@/store/useMm";
import { useEffect, useState } from "react";
import { BsMoon, BsSun } from "react-icons/bs";

type Theme = "light" | "dark";

export default function ThemeSwitch() {
  const { theme, setTheme } = useMm();

  const toggleTheme = () => {
    if (theme === "light") {
      setTheme("dark");
      window.localStorage.setItem("porto-1-theme", "dark");
      document.documentElement.classList.add("dark");
    } else {
      setTheme("light");
      window.localStorage.setItem("porto-1-theme", "light");
      document.documentElement.classList.remove("dark");
    }
  };

  useEffect(() => {
    const localTheme = window.localStorage.getItem("porto-1-theme") as Theme | null;
    if (localTheme) {
      setTheme(localTheme);
      if (localTheme === "dark") {
        document.documentElement.classList.add("dark");
      }
    } else if (window.matchMedia("(prefers-color-scheme: dark)").matches) {
      document.documentElement.classList.add("dark");
    }
  }, [setTheme]);

  return (
    <button
      onClick={toggleTheme}
      type="button"
      aria-label="theme"
      className="bg-white/40 backdrop-blur size-12 rounded-full flex items-center justify-center"
    >
      {theme === "light" ? <BsMoon /> : <BsSun />}
    </button>
  );
}
