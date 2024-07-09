"use client";

import Footer from "@/components/web-design/school/school-chatgpt-1/footer";
import Header from "@/components/web-design/school/school-chatgpt-1/header";
import React from "react";

export default function LayoutSchollChatgpt1({ children }: { children: React.ReactNode }) {
  return (
    <div>
      <Header />
      <main>{children}</main>
      <Footer />
    </div>
  );
}
