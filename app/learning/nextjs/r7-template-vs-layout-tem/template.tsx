"use client";

import Link from "next/link";
import React, { useState } from "react";

export default function LayoutR7({ children }: { children: React.ReactNode }) {
  const [count, setCount] = useState(0);
  return (
    <div>
      LayoutR7, page ini menggunakan template maka state akan terpengaruh ketika berpindah route
      <button
        type="button"
        aria-label="button"
        onClick={() => setCount((prev) => prev + 1)}
        className="border rounded p-2"
      >
        click me {count} times
      </button>
      <div className="flex gap-3 *:underline">
        <Link href="/learning/nextjs/r7-template-vs-layout-tem">btn-R7</Link>
        <Link href="/learning/nextjs/r7-template-vs-layout-tem/r7-a">btn-R7a</Link>
      </div>
      {children}
    </div>
  );
}
