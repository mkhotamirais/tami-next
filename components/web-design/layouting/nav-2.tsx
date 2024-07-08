"use client";

import { sampelNavMenuWithDrop } from "@/lib/menu";
import { motion } from "framer-motion";
import { useState } from "react";

export default function Nav2() {
  const [active, setActive] = useState<number | null>(0);

  const handleClick = (index: number) => {
    setActive(index);
  };
  return (
    <section className="bg-white min-hscreen">
      <header className="h-16 border-b">
        <nav className="flex h-full items-center justify-between">
          <a href="#">Logo</a>
          <ul className="flex gap-3 capitalize">
            {sampelNavMenuWithDrop.map((item, index) => (
              <motion.li layout key={index} className="relative" onClick={() => handleClick(index)}>
                <a href={item.hash} className="relative z-20">
                  {item.label}
                </a>
                {active === index && (
                  <motion.div
                    layoutId="active"
                    transition={{ type: "spring", stiffness: 300, damping: 30 }}
                    className="z-0 absolute size-full top-0 bg-gray-200"
                  />
                )}
              </motion.li>
            ))}
          </ul>
          <button type="button" className="border rounded-full p-2">
            Cta
          </button>
        </nav>
      </header>
    </section>
  );
}
