"use client";

import { webDesignMenu, webDesignTheoryMenu } from "@/lib/menu";
import { BoxCard } from "@/components/components";

export default function WebDesign() {
  return (
    <section className="min-h-screen px-3 md:px-12 lg:px-24">
      <h2 className="text-center text-3xl font-semibold py-4">Web Design</h2>
      {/* card */}
      <BoxCard menu={webDesignMenu} />
      {/* article */}
      <div className="bg-white dark:bg-gray-950 py-8 px-2 md:px-28 rounded-xl shadow">
        <h2 className="text-center text-3xl font-semibold pt-3 pb-6">Article</h2>
        <div className="flex flex-col gap-10">
          {webDesignTheoryMenu.map((item, index) => (
            <div key={index}>
              <h3 className="text-2xl font-medium mb-3 mt-6">{item.title}</h3>
              {item.paragraph.map((item, index) => (
                <p key={index} className="mt-2 mb-1">
                  {item}
                </p>
              ))}
              {item.subTitle.map((subItem, subIndex) => (
                <div key={subIndex} className="text-sm">
                  <h4 className="text-xl font-medium mb-2 mt-4">{subItem.title}</h4>
                  {subItem.paragraph.map((subSubItem, subSubIndex) => (
                    <p key={subSubIndex} className="mb-1 mt-2">
                      {subSubItem}
                    </p>
                  ))}
                  <div className="flex gap-2 flex-wrap">
                    <span>{subItem.title} Links: </span>
                    {item.links.map((subItem, subIndex) => (
                      <a href={subItem.href} key={subIndex} className="underline">
                        {subItem.label}
                      </a>
                    ))}
                  </div>
                </div>
              ))}

              <div className="flex gap-2 flex-wrap text-sm">
                <span>{item.title} Links: </span>
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
