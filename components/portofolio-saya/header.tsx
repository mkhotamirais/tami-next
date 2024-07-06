"use client";

import Link from "next/link";
import { menu } from "./menu";
import { FaBars, FaXmark } from "react-icons/fa6";
import { usePortoSaya } from "@/store/usePortoSaya";
import { motion } from "framer-motion";

export default function Header({ className }: { className?: string }) {
  return (
    <motion.header
      initial={{ y: -100, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      className={`${className} h-16 z-50 fixed top-0 w-full`}
    >
      <FloatNav />
      <BubbleNav />
      <BubbleNavBtn />
    </motion.header>
  );
}

function NavContent({ className }: { className?: string }) {
  return menu.map((item, i) => (
    <Link
      href={item.hash}
      key={i}
      className={`${className} bg-gray-100 text-center capitalize text-sm text-gray-500 hover:text-gray-950`}
    >
      {item.label}
    </Link>
  ));
}

function FloatNav() {
  return (
    <nav className="hidden sm:flex border shadow-lg absolute left-1/2 -translate-x-1/2 p-2 -bottom-1 rounded-full gap-1 bg-white/50 backdrop-blur">
      <NavContent className="border bg-gray-100 p-2 rounded-full px-4" />
    </nav>
  );
}

function BubbleNavBtn() {
  const { nav, toggleNav } = usePortoSaya();
  return (
    <motion.button
      onClick={toggleNav}
      type="button"
      className="flex sm:hidden absolute right-3 top-3 border size-12 rounded-full items-center justify-center"
    >
      <motion.div
        animate={{ rotate: nav ? "180deg" : 0 }}
        whileTap={{ scale: 0.8 }}
        className="border size-10 flex items-center justify-center rounded-full text-xl bg-white/50 backdrop-blur"
      >
        {nav ? <FaXmark /> : <FaBars />}
      </motion.div>
    </motion.button>
  );
}

function BubbleNav() {
  const { nav } = usePortoSaya();
  return (
    <motion.nav
      initial={{ scale: 0, opacity: 0 }}
      animate={{ scale: nav ? 1 : 0, opacity: 1 }}
      className={`origin-top-right flex gap-1 bg-white/80 backdrop-blur rounded-2xl p-3 px-5 sm:hidden absolute right-3 mr-10 top-full flex-col`}
    >
      <NavContent className="p-2 rounded-full" />
    </motion.nav>
  );
}
