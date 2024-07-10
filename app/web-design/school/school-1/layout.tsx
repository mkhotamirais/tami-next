"use client";

import React from "react";
import Header from "./Header";
import Footer from "./Footer";
import { useSchool1 } from "@/store/useSchool1";

export default function LayoutSchool1({ children }: { children: React.ReactNode }) {
  const { nav, hideNav } = useSchool1();
  const handleClick = () => {
    if (nav) hideNav();
  };
  return (
    <div className="bg-white dark:bg-gray-900 min-h-screen flex flex-col">
      <Header />
      <main onClick={handleClick} className="min-h-[calc(100vh-4rem)]">
        {children}
      </main>
      <Footer />
    </div>
  );
}
