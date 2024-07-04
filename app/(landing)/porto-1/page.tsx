"use client";
import About from "@/components/landing/porto-1/about";
import { Divider } from "@/components/landing/porto-1/group-porto-1";
import Hero from "@/components/landing/porto-1/hero";
import Project from "@/components/landing/porto-1/project";

export default function Porto1() {
  return (
    <div className="flex flex-col items-center">
      <Hero />
      <Divider />
      <About />
      <Project />
    </div>
  );
}
