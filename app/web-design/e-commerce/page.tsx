import React from "react";
import { eCommerceMenu } from "@/lib/web-design-menu";
import BoxCard from "@/components/BoxCard";

export default function ECommerce() {
  return (
    <div className="bg-white dark:bg-gray-900 min-h-screen px-3 md:px-12 lg:px-24 py-3">
      <BoxCard menu={eCommerceMenu} />
    </div>
  );
}
