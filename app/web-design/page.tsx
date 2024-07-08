"use client";

import { webDesignMenu, webDesignTheoryMenu } from "@/lib/menu";
import Link from "next/link";
import { motion } from "framer-motion";

export default function WebDesign() {
  return (
    <section className="min-h-screen px-3 md:px-12 lg:px-24">
      <h2 className="text-center text-3xl font-semibold py-4">Web Design</h2>
      <div className="sticky top-0 py-4 mb-8 bg-gray-50 dark:bg-gray-900">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-2">
          {webDesignMenu.map((item, i) => (
            <motion.div whileHover={{ y: 5 }} whileTap={{ scale: 0.95 }} key={i} className="relative">
              <Link
                href={item.href}
                className="block relative border rounded-lg w-full h-full overflow-hidden bg-white dark:bg-gray-950 p-4 shadow"
              >
                <h3 className="text-2xl font-medium mb-3">{item.label}</h3>
                <p className="text-sm">{item.description}</p>
              </Link>
            </motion.div>
          ))}
        </div>
      </div>
      <div className="bg-white dark:bg-gray-950 py-8 px-28 rounded-xl">
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
