import { BoxCard } from "@/components/components";
import { layoutingMenu } from "@/lib/menu";
import Link from "next/link";
import React from "react";

export default function Layouting() {
  return (
    <div className="bg-white min-h-screen px-3 md:px-12 lg:px-24">
      <BoxCard menu={layoutingMenu} />
    </div>
  );
}
