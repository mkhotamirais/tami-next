"use client";

import { Title } from "./group-porto-1";
import useSectionView from "./useSectionView";
import { motion } from "framer-motion";
import { sendEmail } from "./actions/sendEmail";
import ContactSendBtn from "./contact-send-btn";
import toast from "react-hot-toast";

export default function Contact() {
  const { ref } = useSectionView("Contact");

  return (
    <motion.section
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      transition={{ duration: 1 }}
      id="contact"
      ref={ref}
      className="scroll-mt-8 sm:scroll-mt-24 min-h-screen w-[min(100%,38rem)]"
    >
      <Title>Contact Me</Title>
      <p className="text-center -mt-3">
        Please contact me directly at{" "}
        <a href="mailto:tami01.job@gmail.com" className="underline">
          tami01.job@gmail.com
        </a>{" "}
        or through this form
      </p>
      <form
        action={async (formData) => {
          const { data } = await sendEmail(formData);
          console.log("data", data);
          if (data?.error) {
            toast.error(data?.error?.message);
            return;
          }
          toast.success("Email send successfully!");
        }}
        className="mt-10 flex flex-col"
      >
        <input
          id="sender"
          name="sender"
          type="email"
          required
          maxLength={500}
          placeholder="example@gmail.com"
          className="h-14 rounded-lg border border-black/10 p-4"
        />
        <textarea
          id="message"
          name="message"
          required
          maxLength={2000}
          placeholder="your message"
          className="h-52 my-3 dark:text-black rounded-lg border border-black/10 p-4"
        ></textarea>
        <ContactSendBtn />
      </form>
    </motion.section>
  );
}
