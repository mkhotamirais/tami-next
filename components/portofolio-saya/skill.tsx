"use client";

import { Title } from "./components";
import { skillList } from "./menu";
import { motion } from "framer-motion";

export default function Skill() {
  return (
    <section className="min-h-[80vh] max-w-3xl mx-auto mb-12">
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

// "use client";

// import { Title } from "./group-porto-1";
// import { skillsData } from "./lib/data";
// import useSectionView from "./useSectionView";
// import { motion } from "framer-motion";

// const ItemVariants = {
//   initial: { opacity: 0, y: 100 },
//   animate: (index: number) => ({ opacity: 1, y: 0, transition: { delay: 0.05 * index } }),
// };

// export default function Skill() {
//   const { ref } = useSectionView("Skills");

//   return (
//     <section ref={ref} id="skills" className="scroll-mt-24 max-w-2xl mb-24 sm:mb-32 text-center">
//       <Title>My Skills</Title>
//       <ul className="flex flex-wrap justify-center gap-2">
//         {skillsData.map((skill, index) => (
//           <motion.li
//             variants={ItemVariants}
//             key={index}
//             initial="initial"
//             whileInView="animate"
//             viewport={{ once: true }}
//             custom={index}
//             className="text-lg dark:text-black border border-black/10 rounded-xl px-5 py-3 bg-white"
//           >
//             {skill}
//           </motion.li>
//         ))}
//       </ul>
//     </section>
//   );
// }
