"use client";

import Header from "@/components/landing/porto-1/header";
import { usePorto1 } from "@/store/usePorto1";
import React from "react";

export default function LayoutPorto1({ children }: { children: React.ReactNode }) {
  const { nav, hideNav } = usePorto1();
  const handleClick = () => {
    if (nav) hideNav();
  };

  return (
    <div onClick={handleClick} className="pt-20 px-3 sm:pt-32 min-h-screen bg-gray-50 flex flex-col">
      <div className="fixed top-0 size-[70vh] bg-gray-400 bg-opacity-10 rounded-full" />
      <Header />
      {children}
    </div>
  );
}
