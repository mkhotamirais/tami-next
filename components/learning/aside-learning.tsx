"use client";

import { LearningAsideType } from "@/lib/types";
import Link from "next/link";
import { usePathname } from "next/navigation";

export default function AsideLearning({ menu }: { menu: LearningAsideType }) {
  const pathname = usePathname();
  return (
    <div className="flex flex-col gap-1 col-span-1">
      {menu.map((item, i) => (
        <Link
          href={item.href}
          key={i}
          className={`${
            pathname.split("/")[3] === item.href.split("/")[3] ? "bg-gray-200" : "bg-white"
          } border rounded p-1 text-xs`}
        >
          {item.label}
        </Link>
      ))}
    </div>
  );
}
