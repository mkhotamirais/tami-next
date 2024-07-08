"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { sampelNavMenuWithDrop } from "@/lib/menu";

const dropdownVariants = {
  hidden: { opacity: 0, y: -10 },
  visible: { opacity: 1, y: 0 },
};

export default function Nav1() {
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);
  const [linePosition, setLinePosition] = useState({ left: 0, width: 0 });

  const handleMouseEnter = (index: number, e: React.MouseEvent<HTMLDivElement, MouseEvent>) => {
    setHoveredIndex(index);
    const { left, width } = e.currentTarget.getBoundingClientRect();
    setLinePosition({ left, width });
  };

  const handleMouseLeave = () => {
    setHoveredIndex(null);
  };

  return (
    <div className="">
      <header className="sticky top-0 h-16 border-b">
        <div className="flex h-full justify-between px-3 md:px-12 lg:px-24 items-center">
          <a href="#">Logo</a>
          <nav className="flex capitalize gap-3">
            {sampelNavMenuWithDrop.map((item, index) => (
              <div
                key={index}
                className="relative border"
                onMouseEnter={(e) => handleMouseEnter(index, e)}
                onMouseLeave={handleMouseLeave}
              >
                <a
                  href={item.href}
                  title={item.label}
                  className="border text-gray-400 group hover:text-gray-800 transition"
                >
                  {item.label}
                </a>
                <AnimatePresence>
                  {hoveredIndex === index && item?.drop.length > 0 && (
                    <motion.div
                      initial="hidden"
                      animate="visible"
                      exit="hidden"
                      variants={dropdownVariants}
                      className="absolute mt-5 border"
                    >
                      <div className="flex flex-col border p-2">
                        {item.drop.map((dropItem, dropIndex) => (
                          <a href={dropItem.href} key={dropIndex}>
                            {dropItem.label}
                          </a>
                        ))}
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            ))}
            <motion.div
              className="absolute bottom-0 h-0.5 bg-black"
              animate={{ left: linePosition.left, width: linePosition.width }}
              transition={{ type: "spring", stiffness: 500, damping: 30 }}
            />
          </nav>
          <div>
            <button type="button" className="border rounded p-2 px-4">
              cta
            </button>
          </div>
        </div>
      </header>
    </div>
  );
}
