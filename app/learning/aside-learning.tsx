"use client";

import { LearningAsideType } from "@/lib/types";
import { useLearning } from "@/store/useLearning";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { FaBars } from "react-icons/fa6";

export default function AsideLearning({ menu }: { menu: LearningAsideType }) {
  const { aside, toggleAside } = useLearning();
  const pathname = usePathname();
  const handleClick = () => {
    if (!aside) toggleAside();
  };
  return (
    <>
      <div
        className={`${
          aside ? "left-0" : "-left-full"
        } fixed bg-black/10 sm:bg-inherit p-2 sm:p-0 top-16 bottom-0 w-2/3 border-r border-r-gray-500 sm:border-none flex sm:w-auto sm:static flex-col gap-1 col-span-1 transition-all`}
      >
        {menu.map((item, i) => (
          <Link
            href={item.href}
            key={i}
            className={`${
              pathname.split("/")[3] === item.href.split("/")[3] ? "bg-gray-400 text-white" : "bg-white/40"
            } border rounded p-1 text-sm backdrop-blur`}
          >
            {item.label}
          </Link>
        ))}
      </div>
      <button
        onClick={handleClick}
        type="button"
        aria-label="toggle aside"
        className="block sm:hidden hover:bg-gray-500 p-2 w-fit text-xl"
      >
        <FaBars />
      </button>
    </>
  );
}
