import BoxCard from "@/components/BoxCard";
import { fullstackMenu } from "@/lib/fullstack-menu";
import React from "react";

export default function Fullstack() {
  return (
    <section className="px-3 md:px-12 lg:px-24 my-8">
      <BoxCard menu={fullstackMenu} />
    </section>
  );
}
