import React from "react";
import Header from "./Header";

export default function LayoutAnime({ children }: { children: React.ReactNode }) {
  return (
    <div className="font-merriweather bg-jikan-primary-2 min-h-screen pb-24">
      <Header />
      {children}
    </div>
  );
}
