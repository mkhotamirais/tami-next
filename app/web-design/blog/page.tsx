import React from "react";
import { BoxCard } from "../page";
import { blogMenu } from "@/lib/web-design-menu";

export default function Blog() {
  return (
    <div className="bg-white min-h-screen px-3 md:px-12 lg:px-24 py-3">
      <BoxCard menu={blogMenu} />
    </div>
  );
}
