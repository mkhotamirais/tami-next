import Link from "next/link";
import React from "react";

export default function LayoutTs2({ children }: { children: React.ReactNode }) {
  return (
    <div>
      LayoutTs2:
      <div className="flex gap-2 *:underline flex-wrap">
        <Link href="/ts-2">ts2</Link>
        <Link href="/ts-2/usestate">usestate</Link>
        <Link href="/ts-2/usereducer">usereducer</Link>
        <Link href="/ts-2/usecontext">usecontext</Link>
        <Link href="/ts-2/useref">useref</Link>
      </div>
      <div>{children}</div>
    </div>
  );
}
