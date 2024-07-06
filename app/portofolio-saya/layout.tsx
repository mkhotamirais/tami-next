"use client";

import Footer from "@/components/portofolio-saya/footer";
import Header from "@/components/portofolio-saya/header";
import { usePortoSaya } from "@/store/usePortoSaya";
import React from "react";

export default function LayoutPortofolioSaya({ children }: { children: React.ReactNode }) {
  const { nav, hideNav } = usePortoSaya();
  const handleClick = () => {
    if (nav) hideNav();
  };
  return (
    <div className="font-merriweather min-h-screen flex flex-col justify-between">
      <Header />
      <main onClick={handleClick} className="flex-grow">
        {children}
      </main>
      <Footer />
    </div>
  );
}
