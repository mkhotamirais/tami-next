"use client";

import { motion } from "framer-motion";
import React from "react";
import { Title } from "./components";

export default function About() {
  return (
    <motion.section
      id="about"
      initial={{ opacity: 0, y: 100, scale: 0.8 }}
      animate={{ y: 0 }}
      whileInView={{ opacity: 1, scale: 1 }}
      transition={{ delay: 0.1 }}
      className="leading-7 mb-28 sm:mb-32 text-center max-w-2xl mx-auto scroll-mt-24"
    >
      <Title>About Me</Title>
      <p className="mb-3 leading-8">
        Graduated from UIN Jakarta in 2022 with a major in Arabic Language and Literature. Developed an interest in{" "}
        <b>web programming</b> and subsequently learned <b>JavaScript and ReactJS</b> to enhance{" "}
        <i>front-end development skills</i>. Expanded expertise by learning <b>NodeJS and MongoDB</b> for server-side
        and database management, respectively.
      </p>
      <p className="mb-3 leading-8">
        Successfully created single-page applications and managed RESTful APIs. Proficient in computer use since high
        school, especially with MS Office, and skilled in data management using MS Excel. Dedicated to pursuing a career
        in web programming as a <u>React/Next.Js Developer.</u>
      </p>
    </motion.section>
  );
}
