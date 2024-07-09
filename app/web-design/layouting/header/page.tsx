"use client";

import Nav4 from "@/components/web-design/layouting/nav-4";
import NavA from "@/components/web-design/layouting/nav-a";
import NavAAnim1 from "@/components/web-design/layouting/nav-a-anim-1";
import NavAAnim2 from "@/components/web-design/layouting/nav-a-anim-2";
import NavAAnim3 from "@/components/web-design/layouting/nav-a-anim-3";
import NavB from "@/components/web-design/layouting/nav-b";
import NavBAnimate1 from "@/components/web-design/layouting/nav-b-animate-1";
import React, { useState } from "react";

const headerMenu = [
  { title: "nav4", content: Nav4 },
  { title: "nav a", content: NavA },
  { title: "nav a anim 1", content: NavAAnim1 },
  { title: "nav a anim 2", content: NavAAnim2 },
  { title: "nav a anim 3", content: NavAAnim3 },
  { title: "nav b", content: NavB },
  { title: "nav b animate 1", content: NavBAnimate1 },
];

export default function Header() {
  const [active, setActive] = useState(5);
  return (
    <>
      {headerMenu.map((item, index) => (
        <div key={index}>{index === active && <item.content />}</div>
      ))}
      <div className="flex gap-3 mt-[50vh] justify-center border rounded p-4 flex-wrap">
        {headerMenu.map((item, index) => (
          <button
            type="button"
            key={index}
            onClick={() => setActive(index)}
            className={`${active === index ? "bg-gray-200" : "bg-white"}`}
          >
            {item.title}
          </button>
        ))}
      </div>
    </>
  );
}
