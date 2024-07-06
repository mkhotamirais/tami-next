"use client";

import { Title } from "./components";
import { skillList } from "./menu";
import { motion } from "framer-motion";

export default function Skill() {
  return (
    <section className="max-w-3xl mx-auto mb-24">
      <Title>My Skills</Title>
      <div className="flex gap-2 flex-wrap justify-center">
        {skillList.map((item, i) => (
          <motion.div
            key={i}
            variants={{
              initial: { opacity: 0, y: 100 },
              animate: { opacity: 1, y: 0, transition: { delay: 0.05 * i } },
            }}
            initial="initial"
            whileInView="animate"
            viewport={{ once: true }}
            className="bg-white border rounded-xl p-4 gap-2 flex flex-col justify-center items-center"
          >
            <div className="text-2xl">
              <item.icon />
            </div>
            <div className="font-raleway">{item.label}</div>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
