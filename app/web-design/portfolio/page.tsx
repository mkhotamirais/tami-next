"use client";

import { FaBars } from "react-icons/fa6";
import "./style.css";
import Image from "next/image";

export default function Portofolio() {
  return (
    <div id="portofolio" className="min-h-screen w-full bg-white dark:bg-gray-800">
      <header className="border-b h-16 sticky top-0 bg-white dark:bg-gray-900">
        <div className="flex justify-between items-center h-full px-3 sm:px-12 lg:px-28">
          <a href="#" className="uppercase font-bold text-2xl">
            Logo
          </a>
          <nav className="capitalize font-medium text-sm hidden sm:flex gap-6 sm:b">
            <a href="#">home</a>
            <a href="#">about</a>
            <a href="#">projects</a>
            <a href="#">experience</a>
            <a href="#">contact</a>
          </nav>
          <button type="button" aria-label="nav bar" className="block sm:hidden">
            <FaBars />
          </button>
        </div>
      </header>
      {/* hero */}
      <section className="px-3 sm:px-12 lg:px-28 py-12 flex items-center">
        <div className="flex justify-between gap-4 h-full w-full items-center flex-col md:flex-row">
          <div className="text-center sm:text-left flex-1 flex gap-4 flex-col order-2 md:order-1">
            <p className="text-gray-400">Who Are You?</p>
            <h1 className="text-3xl md:text-4xl lg:text-5xl font-semibold">
              Hi, I am Khotami, <br /> I am a Web Developer
            </h1>
            <h3>
              (what do you do?) I create modern, responsive websites and applications. (how can you help me) I turn your
              ideas into high-quality web applications tailored to your needs.
            </h3>
            <button
              type="button"
              className="self-start mx-auto sm:mx-0 rounded-xl py-3 px-6 bg-gray-800 dark:bg-white text-white dark:text-gray-900 hover:opacity-70"
            >
              Get in touch
            </button>
          </div>
          <div className="flex-1 flex items-center justify-center order-1 md:order-2">
            <Image
              src="https://images.unsplash.com/photo-1633332755192-727a05c4013d?q=80&w=1480&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
              alt="unspalsh"
              width={100}
              height={100}
              quality={100}
              className="size-[8rem] sm:size-[12rem] md:size-[20rem] rounded-full"
            />
          </div>
        </div>
      </section>
      <section className="px-3 md:px-12 lg:px-28 py-12">
        <h3 className="text-3xl text-center font-semibold pt-4 pb-8">Three important product/services</h3>
        <div className="grid grid-cols-3 gap-3">
          <div className="border h-[22rem] rounded-xl bg-gray-100 flex items-center justify-center">one</div>
          <div className="border h-[22rem] rounded-xl bg-gray-100 flex items-center justify-center">two</div>
          <div className="border h-[22rem] rounded-xl bg-gray-100 flex items-center justify-center">three</div>
        </div>
      </section>
      <section className="px-3 md:px-12 lg:px-28 py-12">
        <h3 className="text-3xl text-center font-semibold pt-4 pb-8">Three important product/services</h3>
      </section>
      <footer>footer</footer>
    </div>
  );
}
