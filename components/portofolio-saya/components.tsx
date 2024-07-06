import React from "react";

export const Title = ({ children }: { children: React.ReactNode }) => {
  return <h2 className="font-raleway text-2xl sm:text-3xl text-center font-semibold mb-6 mt-4">{children}</h2>;
};
