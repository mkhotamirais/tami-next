import AsideLearning from "@/components/learning/aside-learning";
import { learningNextjsMenu } from "@/lib/menu";
import React from "react";

export default function LayoutLearningNextjs({ children }: { children: React.ReactNode }) {
  return (
    <div className="grid grid-cols-3 gap-2 mt-2">
      <AsideLearning menu={learningNextjsMenu} />
      <div className="col-span-2">{children}</div>
    </div>
  );
}
