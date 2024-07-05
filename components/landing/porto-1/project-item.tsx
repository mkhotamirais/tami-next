"use client";

import Image from "next/image";
import { projectsData } from "./lib/data";
import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";

export default function ProjectItem({ title, description, tags, imageUrl }: (typeof projectsData)[number]) {
  const ref = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({ target: ref, offset: ["0 1", "1.33 1"] });
  const scaleProgress = useTransform(scrollYProgress, [0, 1], [0.8, 1]);
  const opacityProgress = useTransform(scrollYProgress, [0, 1], [0.6, 1]);

  return (
    <motion.div ref={ref} style={{ scale: scaleProgress, opacity: opacityProgress }}>
      <a
        href="#"
        className="group hover:bg-gray-200 transition h-[16rem] sm:h-[20rem] max-w-xl border border-black/5 bg-gray-100 relative overflow-hidden grid grid-cols-1 sm:grid-cols-2 gap-3 rounded-md"
      >
        <div className="pt-8 px-4 flex flex-col h-[16rem] sm:h-[20rem]">
          <div>
            <h3 className="text-2xl font-semibold">{title}</h3>
            <p className="mt-2 leading-relaxed text-gray-700">{description}</p>
          </div>
          <div className="flex border-black h-full items-center justify-center">
            <ul className="flex flex-wrap mt-4 gap-2">
              {tags.map((tag, index) => (
                <li
                  key={index}
                  className="bg-black/70 uppercase text-white text-xs tracking-wider px-3 py-1 rounded-full"
                >
                  {tag}
                </li>
              ))}
            </ul>
          </div>
        </div>
        <div className="hidden sm:block size-full mt-8 group-hover:-rotate-3 transition">
          <Image
            src={imageUrl}
            alt="project 1"
            quality={90}
            className="object-cover object-center size-full rounded-xl"
          />
        </div>
      </a>
    </motion.div>
  );
}
