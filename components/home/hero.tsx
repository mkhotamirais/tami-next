"use client";

import Link from "next/link";

export default function Hero() {
  return (
    <section className="min-h-screen bg-gray-50 dark:bg-gray-900 dark:text-white flex flex-col px-3 gap-8 items-center justify-center">
      <h1 className="text-4xl text-center">Welcome to my next-app</h1>
      <div>
        <Link href="portofolio-saya">
          <button type="button" className="border rounded-full p-3 px-5 bg-gray-800 text-white hover:opacity-80">
            About Me
          </button>
        </Link>
      </div>
    </section>
  );
}
