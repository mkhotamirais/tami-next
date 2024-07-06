"use client";

import { useMm } from "@/store/useMm";
import MainMenu from "./main-menu";
import ThemeSwitch from "./theme-switch";
import { FaChevronDown } from "react-icons/fa6";
import { motion } from "framer-motion";
import SourceCode from "./source-code";

export default function MainBottomMenu() {
  const { bottomMenu, mm, hideMm, toggleBottomMenu } = useMm();

  const handleClick = () => {
    toggleBottomMenu();
    if (mm) hideMm();
  };
  return (
    <>
      <motion.div
        animate={{ y: bottomMenu ? 0 : "100%" }}
        className="z-50 fixed bottom-0 w-full h-16 flex px-4 items-center justify-between"
      >
        <motion.button
          animate={{ rotate: bottomMenu ? 0 : "180deg", x: "-50%" }}
          onClick={handleClick}
          type="button"
          aria-label="hide menu bottom"
          className="absolute left-1/2 -translate-x-1/2 -top-8 size-6 text-xs bg-white/40 backdrop-blur flex items-center justify-center rounded-full"
        >
          <FaChevronDown />
        </motion.button>
        <MainMenu />
        <div className="flex gap-2 dark:text-white">
          <SourceCode />
          <ThemeSwitch />
        </div>
      </motion.div>
    </>
  );
}
