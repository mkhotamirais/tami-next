import Footer from "@/components/web-design/school/school-1/footer";
import Header from "@/components/web-design/school/school-1/header";
import React from "react";

export default function LayoutSchool1({ children }: { children: React.ReactNode }) {
  return (
    <div className="bg-white dark:bg-gray-900 min-h-screen flex flex-col">
      <Header />
      {children}
      <Footer />
    </div>
  );
}
