"use client";

import { learningMenu } from "@/lib/menu";
import Link from "next/link";
import { usePathname } from "next/navigation";
import React from "react";

export default function LayoutLearn({ children }: { children: React.ReactNode }) {
  const pathname = usePathname();
  return (
    <div>
      <div className="h-12 sticky top-0 px-3 bg-white flex items-center gap-4">
        {learningMenu.map((item, i) => (
          <Link
            href={item.href}
            key={i}
            className={`${pathname.split("/")[2] === item.href.split("/")[2] ? "text-gray-500" : "text-gray-950"}`}
          >
            {item.label}
          </Link>
        ))}
      </div>
      <div className="px-3">{children}</div>
    </div>
  );
}
