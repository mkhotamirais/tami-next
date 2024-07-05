"use client";

import { usePorto1 } from "@/store/usePorto1";
import { motion, useScroll } from "framer-motion";
import { FaBars, FaXmark } from "react-icons/fa6";
import Link from "next/link";
import { links } from "./lib/data";
import { useState } from "react";

export default function Header() {
  return (
    <motion.header
      initial={{ y: -100, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      className="z-50 fixed top-0 w-full h-16"
    >
      <NavCollapse />
      <NavMain />
      <NavBtn />
    </motion.header>
  );
}

function NavContent({ className }: { className?: string }) {
  const { activeSection, setActiveSection, setTimeLastClick } = usePorto1();
  return links.map((item) => (
    <Link
      onClick={() => {
        setActiveSection(item.name);
        setTimeLastClick(Date.now());
      }}
      href={item.hash}
      key={item.hash}
      className={`${className} relative hover:text-gray-950 ${
        activeSection === item.name ? "text-gray-950" : "text-gray-500"
      }`}
    >
      {item.name}
      {item.name === activeSection && (
        <motion.span
          layoutId="activeSection"
          transition={{ type: "spring", stiffness: 300, damping: 30 }}
          className="absolute -z-10 bg-gray-100 inset-0 rounded-full"
        />
      )}
    </Link>
  ));
}

function NavBtn() {
  const { nav, toggleNav } = usePorto1();
  const handleClick = () => {
    toggleNav();
  };

  return (
    <div className="sm:hidden border rounded-full fixed size-12 right-3 top-3 flex">
      <motion.button
        initial={false}
        animate={{ rotate: nav ? 180 : 0 }}
        transition={{ type: "spring", stiffness: 400, damping: 20 }}
        onClick={handleClick}
        type="button"
        aria-label="nav toggle"
        className="absolute border m-2 border-blue-500 -inset-1 rounded-full text-xl flex items-center justify-center"
      >
        {nav ? <FaXmark /> : <FaBars />}
      </motion.button>
    </div>
  );
}

function NavCollapse() {
  const { nav } = usePorto1();
  return (
    <motion.nav
      initial={false}
      animate={{ scale: nav ? 1 : 0 }}
      className="bg-white/80 backdrop-blur flex sm:hidden fixed origin-top-right border right-12 p-3 rounded-xl top-16 flex-col"
    >
      <NavContent className="text-gray-500 py-1 text-center hover:text-gray-900" />
    </motion.nav>
  );
}

function NavMain() {
  return (
    <nav className="z-50 hidden sm:block bg-white bg-opacity-80 backdrop-blur shadow p-2 fixed w-fit left-1/2 top-4 -translate-x-1/2 text-sm text-gray-500 rounded-full">
      <div className="flex gap-3 px-3">
        <NavContent className="block p-2 rounded-full" />
      </div>
    </nav>
  );
}
