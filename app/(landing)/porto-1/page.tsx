"use client";
import About from "@/components/landing/porto-1/about";
import Experience from "@/components/landing/porto-1/experience";
import { Divider } from "@/components/landing/porto-1/group-porto-1";
import Hero from "@/components/landing/porto-1/hero";
import Project from "@/components/landing/porto-1/project";
import Skill from "@/components/landing/porto-1/skill";
import Contact from "@/components/landing/porto-1/contact";

export default function Porto1() {
  return (
    <div className="flex flex-col items-center">
      <Hero />
      <Divider />
      <About />
      <Project />
      <Skill />
      <Experience />
      <Contact />
    </div>
  );
}
