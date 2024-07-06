"use client";

import { Title } from "./group-porto-1";
import { skillsData } from "./lib/data";
import useSectionView from "./useSectionView";
import { motion } from "framer-motion";

const ItemVariants = {
  initial: { opacity: 0, y: 100 },
  animate: (index: number) => ({ opacity: 1, y: 0, transition: { delay: 0.05 * index } }),
};

export default function Skill() {
  const { ref } = useSectionView("Skills");

  return (
    <section ref={ref} id="skills" className="scroll-mt-24 max-w-2xl mb-24 sm:mb-32 text-center">
      <Title>My Skills</Title>
      <ul className="flex flex-wrap justify-center gap-2">
        {skillsData.map((skill, index) => (
          <motion.li
            variants={ItemVariants}
            key={index}
            initial="initial"
            whileInView="animate"
            viewport={{ once: true }}
            custom={index}
            className="text-lg border border-black/10 rounded-xl px-5 py-3 bg-white"
          >
            {skill}
          </motion.li>
        ))}
      </ul>
    </section>
  );
}
