"use client";

import React, { useState } from "react";
import { FaBars, FaRegUser, FaXmark } from "react-icons/fa6";
import { AnimatePresence, motion } from "framer-motion";
import { IoHomeOutline } from "react-icons/io5";
import { menu } from "@/lib/menu";
import { useMm } from "@/store/useMm";
import Link from "next/link";

export default function MainMenu() {
  const { mm, toggleMm } = useMm();
  const handleClick = (e: React.MouseEvent<HTMLButtonElement, MouseEvent>) => {
    e.stopPropagation();
    toggleMm();
  };

  return (
    <motion.div
      className={`border border-black/40 dark:border-white/60 relative rounded-full w-12 text-xl h-12 flex items-center justify-center`}
      transition={{ duration: 0.2, type: "spring", stiffness: 200, damping: 20 }}
    >
      <motion.button onClick={handleClick} whileHover={{ scale: 1.2 }} whileTap={{ scale: 0.9 }}>
        <motion.div
          initial={false}
          animate={{ rotate: mm ? 180 : 0 }}
          transition={{ type: "spring", stiffness: 400, damping: 20 }}
          className="bg-white/80 dark:bg-black/40 backdrop-blur w-10 h-10 flex items-center justify-center rounded-full"
        >
          {mm ? <FaXmark className="text-xl" /> : <FaBars className="text-xl" />}
        </motion.div>{" "}
      </motion.button>
      <BtnMenu />
    </motion.div>
  );
}

export function BtnMenu() {
  const { mm, hideMm } = useMm();
  const [hoveredMenu, setHoveredMenu] = useState<string | null>(null);

  return (
    <AnimatePresence>
      {mm && (
        <motion.div
          className="bg-white/60 dark:bg-black/40 backdrop-blur absolute text-base left-0 bottom-full mb-2 bg-opacity-50 border rounded-xl flex flex-col items-center py-1 gap-1"
          initial={{ opacity: 0, scale: 0.8, y: 80 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          exit={{ opacity: 0, scale: 0.8, y: 80 }}
          transition={{ type: "spring", stiffness: 400, damping: 20 }}
        >
          {menu.map((item, i) => (
            <Link href={item.href} key={i}>
              <motion.button
                key={item.label}
                onClick={(e) => {
                  e.stopPropagation();
                  setHoveredMenu(item.label);
                }}
                className="bg-white/80 dark:bg-black/90 z-40 gap-2 relative rounded-full h-10 flex w-max items-center justify-center px-2 border"
                whileHover={{ scale: 1.1, backgroundColor: "rgba(0,0,0,.1)" }}
                onHoverStart={() => setHoveredMenu(item.label)}
                onHoverEnd={() => setHoveredMenu(null)}
              >
                <item.icon />
                <div>{item.label}</div>
              </motion.button>
            </Link>
          ))}
          <div className="border leading-none w-5 border-gray-400" />
          <Link href="/portofolio-saya">
            <motion.button
              onClick={hideMm}
              className="bg-white/80 dark:bg-black/90 z-40 relative rounded-full w-max h-10 flex gap-2 items-center justify-center"
              whileHover={{ scale: 1.1 }}
            >
              <FaRegUser />
              My Portfolio
            </motion.button>
          </Link>
          <Link href="/">
            <motion.button
              onClick={hideMm}
              className="bg-white/80 dark:bg-black/90 z-40 relative rounded-full h-10 w-max flex gap-2 items-center justify-center"
              whileHover={{ scale: 1.1 }}
            >
              <IoHomeOutline />
              Home
            </motion.button>
          </Link>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
