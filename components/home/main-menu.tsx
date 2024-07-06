"use client";

import React, { useState } from "react";
import { FaBars, FaChevronLeft, FaRegUser, FaXmark } from "react-icons/fa6";
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
          className="bg-white/60 dark:bg-black/40 backdrop-blur absolute left-0 bottom-full mb-2 bg-opacity-50 w-12 border rounded-full text-xl flex flex-col items-center py-1 gap-1"
          initial={{ opacity: 0, scale: 0.8, y: 80 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          exit={{ opacity: 0, scale: 0.8, y: 80 }}
          transition={{ type: "spring", stiffness: 400, damping: 20 }}
        >
          {menu.map((item, i) => (
            <div key={item.label}>
              <motion.button
                key={item.label}
                onClick={(e) => {
                  e.stopPropagation();
                  setHoveredMenu(item.label);
                }}
                className="bg-white/80 dark:bg-black/90 z-40 relative rounded-full w-10 h-10 flex items-center justify-center"
                whileHover={{ scale: 1.1, backgroundColor: "rgba(0,0,0,.1)" }}
                onHoverStart={() => setHoveredMenu(item.label)}
                onHoverEnd={() => setHoveredMenu(null)}
              >
                <item.icon />
                {hoveredMenu === item.label && (
                  <motion.div
                    className="z-30 absolute top-0 left-full w-max max-w-[60vw] md:max-w-[40vw] overflow-hidden pl-2"
                    initial={{ opacity: 0, x: -10 }}
                    animate={{ opacity: 1, x: 0 }}
                    exit={{ opacity: 0, x: -10 }}
                    transition={{ duration: 0.2 }}
                  >
                    <div
                      className={`${
                        i > menu.length - 4 ? "max-h-[11.5rem]" : "max-h-72"
                      } border rounded-xl bg-white/40 dark:bg-black/60 overflow-y-scroll backdrop-blur-sm w-full text-left p-2`}
                    >
                      <h3 className="text-lg font-medium mb-2">{item.label}</h3>
                      <div className="flex flex-wrap gap-1">
                        {item.subMenus.map((itm, i) => (
                          <Link
                            onClick={() => {
                              if (mm) hideMm();
                            }}
                            href={itm.href}
                            key={i}
                            className="text-xs p-2 bg-white dark:bg-gray-900 dark:text-white rounded-lg hover:text-cyan-500"
                            replace
                          >
                            {itm.label}
                          </Link>
                        ))}
                      </div>
                    </div>
                  </motion.div>
                )}
              </motion.button>
            </div>
          ))}
          <div className="border leading-none w-5 border-gray-400" />
          <Link href="/portofolio-saya">
            <motion.button
              onClick={hideMm}
              className="bg-white/80 dark:bg-black/90 z-40 relative rounded-full w-10 h-10 flex items-center justify-center"
              whileHover={{ scale: 1.1 }}
            >
              <FaRegUser />
            </motion.button>
          </Link>
          <Link href="/">
            <motion.button
              onClick={hideMm}
              className="bg-white/80 dark:bg-black/90 z-40 relative rounded-full w-10 h-10 flex items-center justify-center"
              whileHover={{ scale: 1.1 }}
            >
              <IoHomeOutline />
            </motion.button>
          </Link>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
