"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { useMm } from "@/store/useMm";

export default function Hero() {
  const { mm, toggleMm } = useMm();
  return (
    <section className="min-h-screen bg-gray-50 dark:bg-gray-900 dark:text-white flex flex-col px-3 gap-8 items-center justify-center text-center max-w-2xl mx-auto">
      <h1 className="text-5xl text-center">
        Hi, Saya <b>Khotami</b>, Web Developer
      </h1>
      <motion.p
        initial={{ y: 100, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ delay: 0.3 }}
        className="text-xl"
      >
        Saya membangun aplikasi web modern dengan <b>React / Next.js.</b> serta meningkatkan <i>kinerja</i> dan{" "}
        <i>interaktivitas</i> situs web
      </motion.p>
      <motion.div
        initial={{ y: 100, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ delay: 0.6 }}
        className="flex gap-2 flex-col sm:flex-row"
      >
        <Link href="portofolio-saya">
          <button type="button" className="border rounded-full p-3 px-5 w-44 border-gray-800 hover:opacity-80">
            Tentang Saya
          </button>
        </Link>
        <button
          onClick={(e) => {
            e.stopPropagation();
            toggleMm();
          }}
          type="button"
          className="relative z-50 border rounded-full p-3 px-5 w-44 bg-gray-800 text-white hover:opacity-80"
        >
          Jelajahi
        </button>
      </motion.div>
    </section>
  );
}
