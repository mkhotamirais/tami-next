import React from "react";
import { portofolioMenu } from "@/lib/web-design-menu";
import BoxCard from "@/components/BoxCard";

export default function Blog() {
  return (
    <div className="bg-white dark:bg-gray-900 min-h-screen px-3 md:px-12 lg:px-24 py-3">
      <BoxCard menu={portofolioMenu} />
    </div>
  );
}
