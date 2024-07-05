"use client";

import { FaPaperPlane } from "react-icons/fa";
import { Title } from "./group-porto-1";
import useSectionView from "./useSectionView";
import { motion } from "framer-motion";

export default function Contact() {
  const { ref } = useSectionView("Contact");

  return (
    <motion.section
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      transition={{ duration: 1 }}
      id="contact"
      ref={ref}
      className="scroll-mt-24 min-h-screen w-[min(100%,38rem)]"
    >
      <Title>Contact Me</Title>
      <p className="text-center -mt-3">
        Please contact me directly at{" "}
        <a href="mailto:tami01.job@gmail.com" className="underline">
          tami01.job@gmail.com
        </a>{" "}
        or through this form
      </p>
      <form className="mt-10 flex flex-col">
        <input
          type="email"
          required
          maxLength={500}
          placeholder="example@gmail.com"
          className="h-14 rounded-lg border border-black/10 p-4"
        />
        <textarea
          required
          maxLength={500}
          placeholder="your message"
          className="h-52 my-3 rounded-lg border border-black/10 p-4"
        ></textarea>
        <button
          type="submit"
          className="h-12 w-32 border rounded-full flex gap-2 items-center justify-center bg-gray-900 text-white"
        >
          Submit <FaPaperPlane />
        </button>
      </form>
    </motion.section>
  );
}
