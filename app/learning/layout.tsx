"use client";

import { learningMenu } from "@/lib/learning-menu";
import { useLearning } from "@/store/useLearning";
import Link from "next/link";
import { usePathname } from "next/navigation";
import React from "react";

export default function LayoutLearn({ children }: { children: React.ReactNode }) {
  const { aside, toggleAside } = useLearning();
  const pathname = usePathname();
  const handleClick = () => {
    if (aside) toggleAside();
  };

  return (
    <div className="px-1 mx-auto">
      <div className="z-50 bg-gray-50 dark:bg-gray-900 sticky top-0 py-2">
        <div className="max-w-4xl mx-auto h-12 px-3 bg-white dark:bg-gray-950 flex items-center gap-2 rounded-full shadow">
          {learningMenu.map((item, i) => (
            <Link
              href={item.href}
              key={i}
              className={`${
                pathname.split("/")[2] === item.href.split("/")[2] ? "bg-gray-500 text-white" : "bg-inherit"
              } p-1 rounded-full text-sm px-2 transition-all`}
            >
              {item.label}
            </Link>
          ))}
        </div>
      </div>
      <main
        onClick={handleClick}
        className="bg-white dark:bg-gray-950 max-w-4xl mx-auto overflow-hidden p-4 min-h-screen shadow"
      >
        {children}
      </main>
    </div>
  );
}
