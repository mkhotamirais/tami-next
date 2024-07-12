import Link from "next/link";
import React from "react";

export default function LayoutAppwirteAuth({ children }: { children: React.ReactNode }) {
  return (
    <div className="max-w-3xl mx-auto bg-white min-h-screen">
      <header className="h-16 sticky top-0">
        <nav className="flex justify-between px-3 h-full items-center gap-4">
          <Link href="/fullstack/appwrite-auth">Home</Link>
          <div className="flex gap-4">
            <Link href="/fullstack/appwrite-auth/signin">login</Link>
            <Link href="/fullstack/appwrite-auth/signup">register</Link>
          </div>
        </nav>
        <main>{children}</main>
      </header>
    </div>
  );
}
