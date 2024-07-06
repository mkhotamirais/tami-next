"use client";

// import { FaChevronLeft, FaHouse } from "react-icons/fa6";
import { AnimatePresence, motion } from "framer-motion";
import React, { useState } from "react";
// import Link from "next/link";

type tButton = {
  children: React.ReactNode;
  onClick?: () => void;
  className?: string;
  className2?: string;
  disabled?: boolean;
};
export function Button({ children, onClick, className, className2 = "p-3", disabled = false }: tButton) {
  const [isTapped, setIsTapped] = useState(false);

  const handleTap = () => {
    setIsTapped(true);
    const timeout = setTimeout(() => {
      setIsTapped(false);
    }, 0);
    return () => clearTimeout(timeout);
  };

  return (
    <button
      type="button"
      disabled={disabled}
      onClick={onClick}
      className={`${className} rounded-full relative disabled:opacity-50 flex items-center justify-center`}
    >
      <motion.div
        className={`rounded-full w-full ${className2} `}
        whileHover={{ backgroundColor: "#efefef" }}
        animate={{ backgroundColor: "#ffffff" }}
        transition={{ type: "tween", duration: 0.2 }}
        onTap={handleTap}
      >
        {children}
        <AnimatePresence>
          {isTapped && (
            <motion.div
              className="block scale-0 bg-[rgba(0,0,0,.1)] absolute inset-0 rounded-full origin-center"
              initial={{ scale: 0, opacity: 1 }}
              animate={{ scale: 1, opacity: isTapped ? 1 : 0 }}
              exit={{ opacity: 0, transition: { duration: 0.6 } }}
              transition={{ duration: 0.1 }}
            />
          )}
        </AnimatePresence>
      </motion.div>
    </button>
  );
}

// export function Prev() {
//   return (
//     <Link href={-1}>
//       <Button>
//         <FaChevronLeft />
//       </Button>
//     </Link>
//   );
// }

// export function BackHome() {
//   return (
//     <Link to="/">
//       <Button>
//         <FaHouse />
//       </Button>
//     </Link>
//   );
// }
