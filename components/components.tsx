"use client";

import Link from "next/link";
import { motion } from "framer-motion";

export function BoxCard({ menu }: { menu: { href: string; label: string; description: string }[] }) {
  return (
    <div className="py-4 mb-8">
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-2">
        {menu.map((item, i) => (
          <motion.div whileHover={{ y: 5 }} whileTap={{ scale: 0.95 }} key={i} className="relative">
            <Link
              href={item.href}
              className="block relative border rounded-lg w-full h-full overflow-hidden bg-white dark:bg-gray-950 p-4 shadow"
            >
              <h3 className="text-2xl font-medium mb-3">{item.label}</h3>
              <p className="text-sm">{item.description}</p>
            </Link>
          </motion.div>
        ))}
      </div>
    </div>
  );
}
