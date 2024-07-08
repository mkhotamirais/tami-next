"use client";

import { sampelNavMenuWithDrop } from "@/lib/menu";
import { motion, useAnimation } from "framer-motion";
import { useState } from "react";

export default function Nav3() {
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(0);
  const [activeIndex, setActiveIndex] = useState<number | null>(0);
  const controls = useAnimation();
  const handleMouseEnter = (index: number, e: React.MouseEvent<HTMLLIElement, MouseEvent>) => {
    setHoveredIndex(index);
    controls.start({
      left: e.currentTarget.offsetLeft,
      width: e.currentTarget.offsetWidth,
      transition: { type: "spring", stiffness: 300, damping: 30 },
    });
  };

  const handleMouseLeave = () => {
    setHoveredIndex(null);
    controls.start({
      width: 0,
      transition: { type: "spring", stiffness: 300, damping: 30 },
    });
  };

  const handleClick = (index: number) => {
    setActiveIndex(index);
  };
  return (
    <section className="bg-white min-hscreen">
      <header className="h-16 border-b">
        <nav className="flex h-full items-center justify-between">
          <a href="#">Logo</a>
          <ul className="relative flex gap-3 capitalize">
            {sampelNavMenuWithDrop.map((item, index) => (
              <li
                key={index}
                className="relative"
                onClick={() => handleClick(index)}
                onMouseEnter={(e) => handleMouseEnter(index, e)}
                onMouseLeave={handleMouseLeave}
              >
                <a href={item.hash} className="relative z-20">
                  {item.label}
                </a>
                {activeIndex === index && (
                  <motion.div layoutId="activeIndex" className="absolute top-0 bottom-0 left-0 right-0 bg-gray-100" />
                )}
              </li>
            ))}
            <motion.div
              className="absolute top-0 left-0 h-full bg-gray-200 rounded"
              animate={controls}
              initial={{ width: 0 }}
            />
          </ul>
          <button type="button" className="border rounded-full p-2">
            Cta
          </button>
        </nav>
      </header>
    </section>
  );
}
