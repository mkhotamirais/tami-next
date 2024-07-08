"use client";

import Nav1 from "@/components/web-design/layouting/nav-1";
import Nav2 from "@/components/web-design/layouting/nav-2";
import Nav3 from "@/components/web-design/layouting/nav-3";
import React, { useState } from "react";

const headerMenu = [
  { title: "nav1", content: Nav1 },
  { title: "nav2", content: Nav2 },
  { title: "nav3", content: Nav3 },
];

export default function Header() {
  const [active, setActive] = useState("nav2");
  return (
    <>
      {headerMenu.map((item, i) => (
        <div key={i}>{item.title === active && <item.content />}</div>
      ))}
      <div className="flex gap-3 mt-[50vh] justify-center">
        {headerMenu.map((item, index) => (
          <button key={index} onClick={() => setActive(item.title)}>
            {item.title}
          </button>
        ))}
      </div>
    </>
  );
}
