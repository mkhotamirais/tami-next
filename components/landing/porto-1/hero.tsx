"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import { BsArrowRight, BsGithub, BsLinkedin } from "react-icons/bs";
import { HiDownload } from "react-icons/hi";

export default function Hero() {
  return (
    <section>
      <div className="flex items-center justify-center">
        <div className="relative">
          <motion.div
            initial={{ opacity: 0, scale: 0 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ type: "tween", delay: 0.2, duration: 0.5 }}
          >
            <Image
              src="https://images.unsplash.com/photo-1494790108377-be9c29b29330?q=80&w=1374&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
              alt="senyum"
              width="100"
              height="100"
              quality="90"
              priority={true}
              className="h-24 w-24 rounded-full border-[.3rem] object-cover shadow-xl border-white"
            />
          </motion.div>
          <motion.span
            initial={{ opacity: 0, scale: 0 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ type: "spring", stiffness: 125, delay: 0.5 }}
            className="absolute bottom-0 text-2xl"
          >
            😍
          </motion.span>
        </div>
      </div>
      <motion.h1
        initial={{ opacity: 0, y: 100 }}
        animate={{ opacity: 1, y: 0 }}
        className="text-2xl mt-8 mb-b leading-relaxed text-center sm:text-3xl max-w-lg md:max-w-xl mx-auto"
      >
        <b>i am khotami</b>, I am a <b>fullstack developer</b> with <b>2 years</b> of experience. i enjoy building{" "}
        <i>sites and apps</i>. my focus is <u>React (NextJs)</u>
      </motion.h1>
      <motion.div
        initial={{ opacity: 0, y: 100 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.5 }}
        className="mt-8 sm:mt-12 flex flex-col sm:flex-row items-center gap-2 justify-center"
      >
        <Link
          href="#contact"
          className="bg-gray-900 rounded-full text-white px-5 h-10 flex items-center gap-3 hover:scale-110 active:scale-105 transition"
        >
          <span>Contact me here</span>
          <BsArrowRight />
        </Link>
        <a
          title="cv"
          href="/portofolio-mkhotami.pdf"
          className="bg-white rounded-full h-10 px-5 flex gap-3 items-center hover:scale-110 active:scale-105 transition"
        >
          <span>Download CV</span> <HiDownload />
        </a>
        <a
          title="linkedin"
          href="#"
          className="bg-white rounded-full flex items-center justify-center size-10 hover:scale-110 active:scale-105 transition"
        >
          <BsLinkedin />
        </a>
        <a
          title="github"
          href="#"
          download
          className="bg-white rounded-full flex items-center justify-center size-10 hover:scale-110 active:scale-105 transition"
        >
          <BsGithub />
        </a>
      </motion.div>
    </section>
  );
}
