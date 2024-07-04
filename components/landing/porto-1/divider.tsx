"use client";

import { motion } from "framer-motion";

export default function Divider() {
  return (
    <motion.div
      initial={{ opacity: 0, y: 100 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: 0.7 }}
      className="h-16 rounded-full w-1 my-12 bg-gray-200"
    />
  );
}
