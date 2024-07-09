import React from "react";
import { BoxCard } from "../page";
import { eCommerceMenu } from "@/lib/web-design-menu";

export default function ECommerce() {
  return (
    <div className="bg-white min-h-screen px-3 md:px-12 lg:px-24 py-3">
      <BoxCard menu={eCommerceMenu} />
    </div>
  );
}
