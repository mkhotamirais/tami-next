"use client";

import { Title } from "./components";
import useSectionView from "./useSectionView";

export default function Contact() {
  const { ref } = useSectionView("contact");

  return (
    <section id="contact" ref={ref} className="scroll-mt-16 sm:scroll-mt-24 max-w-xl mx-3 mb-28">
      <Title>Contact</Title>
      <div>halo</div>
    </section>
  );
}
