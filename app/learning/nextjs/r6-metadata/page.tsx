"use client";

import { useRouter } from "next/navigation";
import React from "react";

export default function R6Metadata() {
  const router = useRouter();
  const handleClick = () => {
    router.push("/learning/nextjs");
    // router.replace("/");
  };
  return (
    <div>
      R6Metadata (lihat title di atas menjadi r6)
      <button onClick={handleClick} type="button" aria-label="redirect" className="border rounded p-2">
        Redirect
      </button>
    </div>
  );
}
