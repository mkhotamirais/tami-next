"use client";
import About from "@/components/landing/porto-1/about";
import Divider from "@/components/landing/porto-1/divider";
import Hero from "@/components/landing/porto-1/hero";

export default function Porto1() {
  return (
    <div className="flex flex-col items-center">
      <Hero />
      <Divider />
      <About />
    </div>
  );
}
