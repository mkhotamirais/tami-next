import React from "react";
import { FaGithub } from "react-icons/fa6";

export default function SourceCode() {
  return (
    <a
      href="#"
      title="source code"
      className="size-12 bg-white/40 backdrop-blur rounded-full flex items-center justify-center"
    >
      <div className="dark:bg-black/50 p-3 rounded-full">
        <FaGithub />
      </div>
    </a>
  );
}
