import React from "react";
import AsideLearning from "../aside-learning";
import { learningNextjsMenu } from "@/lib/learning-menu";

export default function LayoutLearningNextjs({ children }: { children: React.ReactNode }) {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-4 gap-2 mt-2">
      <AsideLearning menu={learningNextjsMenu} />
      <div className="col-span-1 sm:col-span-3">{children}</div>
    </div>
  );
}
