"use client";

import Footer from "@/components/landing/porto-1/footer";
import Header from "@/components/landing/porto-1/header";
import { usePorto1 } from "@/store/usePorto1";
import React from "react";
import { Toaster } from "react-hot-toast";

export default function LayoutPorto1({ children }: { children: React.ReactNode }) {
  const { nav, hideNav } = usePorto1();
  const handleClick = () => {
    if (nav) hideNav();
  };

  return (
    <div
      id="porto-1"
      onClick={handleClick}
      className="pt-20 px-3 sm:pt-32 min-h-screen dark:bg-gray-900 dark:text-gray-50 bg-gray-50 flex flex-col"
    >
      <div className="z-10 fixed top-0 size-[70vh] bg-gray-400 bg-opacity-10 rounded-full" />
      <Header />
      <div className="z-20">{children}</div>
      <Footer />
      <Toaster position="top-right" />
    </div>
  );
}
