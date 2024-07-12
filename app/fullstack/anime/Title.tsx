import React from "react";

export default function TitleTopJikan({ children }: { children: React.ReactNode }) {
  return <h1 className="px-3 text-4xl text font-montserrat font-semibold text-jikan-accent-1 py-4">{children}</h1>;
}
