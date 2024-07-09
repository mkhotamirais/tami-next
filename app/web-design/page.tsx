"use client";

import { webDesignMenu, webDesignTheoryMenu } from "@/lib/menu";
import Link from "next/link";
import { motion } from "framer-motion";
import { BoxCard } from "@/components/components";

export default function WebDesign() {
  return (
    <section className="min-h-screen px-3 md:px-12 lg:px-24">
      <h2 className="text-center text-3xl font-semibold py-4">Web Design</h2>
      <BoxCard menu={webDesignMenu} />
      <div className="bg-white dark:bg-gray-950 py-8 px-2 md:px-28 rounded-xl">
        <h2 className="text-center text-3xl font-semibold pt-3 pb-6">Article</h2>
        <div className="flex flex-col gap-12">
          {webDesignTheoryMenu.map((item, index) => (
            <div key={index}>
              <h3 className="text-2xl font-medium mb-3">{item.title}</h3>
              {item.subTitle.map((subItem, subIndex) => (
                <div key={subIndex}>
                  <h4 className="text-xl font-medium mb-2">{subItem.title}</h4>
                  {subItem.paragraph.map((subSubItem, subSubIndex) => (
                    <p key={subSubIndex} className="mb-1 text-sm">
                      {subSubItem}
                    </p>
                  ))}
                </div>
              ))}

              <div className="flex gap-2 flex-wrap">
                <span>Links: </span>
                {item.links.map((subItem, subIndex) => (
                  <a href={subItem.href} key={subIndex} className="underline">
                    {subItem.label}
                  </a>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
