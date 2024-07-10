"use client";

import Link from "next/link";
import { FaBars, FaMagnifyingGlass, FaSchool, FaXmark } from "react-icons/fa6";
import { motion } from "framer-motion";
import { useSchool1 } from "@/store/useSchool1";
import { usePathname } from "next/navigation";
import { useState } from "react";

const menu = [
  { href: "/web-design/school/school-1/about-us", label: "about us" },
  { href: "/web-design/school/school-1/admissions", label: "admissions" },
  { href: "/web-design/school/school-1/academics", label: "academics" },
  { href: "/web-design/school/school-1/student-life", label: "student life" },
  { href: "/web-design/school/school-1/parent-resources", label: "parent resources" },
  { href: "/web-design/school/school-1/news-and-events", label: "news & events" },
  { href: "/web-design/school/school-1/contact-us", label: "contact us" },
  { href: "/web-design/school/school-1/career-opportunities", label: "career" },
];

export default function Header() {
  const pathname = usePathname();
  const { nav, hideNav } = useSchool1();
  const [hovered, setHovered] = useState<number | null>(null);
  const [active, setActive] = useState<number | null>(null);
  const handleLogo = () => {
    setActive(null);
  };
  return (
    <header className="h-16 border-b sitcky top-0">
      <div className="h-full flex px-3 max-w-6xl mx-auto justify-between items-center">
        <Link href="/web-design/school/school-1" onClick={handleLogo} className="text-3xl">
          <FaSchool />
        </Link>
        <div
          className={`${
            nav ? "scale-x-100" : "scale-x-0"
          } origin-right lg:scale-x-100 fixed top-0 bottom-0 right-0 w-2/3 lg:w-auto p-3 lg:p-0 backdrop-blur border-l lg:border-none lg:backdrop-blur-0 lg:bg-white lg:static h-screen lg:h-auto transition-all ease-in-out`}
        >
          <div className="flex gap-1 flex-col lg:flex-row">
            <button
              onClick={hideNav}
              type="button"
              aria-label="close nav"
              className="border p-2 text-xl flex lg:hidden self-end"
            >
              <FaXmark />
            </button>
            {menu.map((item, index) => (
              <motion.div
                layout
                onMouseEnter={() => setHovered(index)}
                onMouseLeave={() => setHovered(null)}
                key={index}
                className="relative"
              >
                <Link
                  onClick={() => setActive(index)}
                  href={item.href}
                  replace
                  className={`${
                    pathname.split("/")[4] === item.href.split("/")[4] ? "bg-blue-200" : "bg-transparent"
                  } text-gray-700 block relative z-10 text-sm capitalize h-full py-2 px-2 min-w-max rounded-lg`}
                >
                  {item.label}
                </Link>
                <motion.div
                  className={`absolute z-0 left-0 bottom-0 w-full ${
                    hovered === index ? "min-h-full" : "min-h-0"
                  } bg-blue-100 transition-all rounded-lg`}
                />
                {active === index && (
                  <motion.div
                    layoutId="active"
                    className="absolute z-0 left-0 bottom-0 w-full h-full top-0 bg-blue-200 rounded-lg"
                  />
                )}
              </motion.div>
            ))}
            <button type="button" aria-label="search">
              <FaMagnifyingGlass />
            </button>
          </div>
        </div>
        <NavBtn />
      </div>
    </header>
  );
}

export function NavBtn() {
  const { toggleNav } = useSchool1();
  return (
    <button onClick={toggleNav} type="button" className="border p-1 text-lg block lg:hidden" aria-label="nav-button">
      <FaBars />
    </button>
  );
}
