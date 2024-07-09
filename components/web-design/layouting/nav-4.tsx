"use client";

import { sampelNavMenuWithDrop } from "@/lib/menu";
import { useState } from "react";
import { FaBars } from "react-icons/fa6";
import { AnimatePresence, motion } from "framer-motion";

export default function NavChildNoAnimate() {
  const [nav, setNav] = useState(false);
  const [expanded, setExpanded] = useState<number | null>(null);

  return (
    <header className="h-16 border-b">
      <div className="flex items-center justify-between h-full px-3 md:px-12 lg:px-24">
        <a href="#">LOGO</a>
        <nav
          className={`${
            nav ? "scale-y-100" : "scale-y-0"
          } origin-top sm:scale-y-100 flex gap-0 sm:gap-4 border-b sm:border-none fixed top-16 left-0 right-0 sm:static flex-col sm:flex-row p-3 sm:p-0 text-center transition`}
        >
          {sampelNavMenuWithDrop.map((item, index) => (
            <div
              onMouseEnter={() => setExpanded(index)}
              onMouseLeave={() => setExpanded(null)}
              key={index}
              className="border relative"
            >
              <a href="#" className="block p-2">
                {item.label}
                {item.drop.length > 0 && " v "}
              </a>
              <AnimatePresence>
                {expanded === index && (
                  <motion.div
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: "auto", opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }}
                    transition={{ duration: 0.3 }}
                    className="flex relative sm:absolute flex-col overflow-hidden"
                  >
                    {item.drop.map((dropItem, dropIndex) => (
                      <div key={dropIndex} className="">
                        <a href="#" key={dropIndex}>
                          {dropItem.label}
                        </a>
                      </div>
                    ))}
                  </motion.div>
                )}
              </AnimatePresence>
            </div>
          ))}
          <Cta className="block sm:hidden" />
        </nav>
        <Cta className="hidden sm:block" />
        <button
          type="button"
          onClick={() => setNav((prev) => !prev)}
          className={`block sm:hidden border p-2 text-xl`}
          aria-label="button"
        >
          <FaBars />
        </button>{" "}
      </div>
    </header>
  );
}

function Cta({ className }: { className: string }) {
  return (
    <button type="button" className={`${className} border rounded-xl p-2`}>
      Cta
    </button>
  );
}
