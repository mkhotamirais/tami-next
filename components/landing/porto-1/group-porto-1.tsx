"use client";

import { motion } from "framer-motion";
import React from "react";

export function Divider() {
  return (
    <motion.div
      initial={{ opacity: 0, y: 100 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: 0.7 }}
      className="h-16 rounded-full w-1 mb-20 bg-gray-200"
    />
  );
}

export function Title({ children }: { children: React.ReactNode }) {
  return <h2 className="text-center font-medium capitalize text-3xl mb-6">{children}</h2>;
}
