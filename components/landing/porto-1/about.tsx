"use client";

import { motion } from "framer-motion";
import React from "react";
import { Title } from "./group-porto-1";
import useSectionView from "./useSectionView";

export default function About() {
  const { ref } = useSectionView("About");
  return (
    <motion.section
      ref={ref}
      id="about"
      initial={{ opacity: 0, y: 100 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: 0.4 }}
      className="leading-7 mb-28 sm:mb-32 text-center max-w-2xl scroll-mt-24"
    >
      <Title>About Me</Title>
      <p className="mb-3">
        Graduated from UIN Jakarta in 2022 with a major in Arabic Language and Literature. Developed an interest in{" "}
        <span className="font-medium">web programming</span> and subsequently learned{" "}
        <span className="font-medium">JavaScript and ReactJS</span> to enhance <i>front-end development skills</i>.
        Expanded expertise by learning <span className="font-medium">NodeJS and MongoDB</span> for server-side and
        database management, respectively.
      </p>
      <p className="mb-3">
        Successfully created single-page applications and managed RESTful APIs. Proficient in computer use since high
        school, especially with MS Office, and skilled in data management using MS Excel and basic VBA. Dedicated to
        pursuing a career in web programming as a MERN Stack Developer.
      </p>
    </motion.section>
  );
}
