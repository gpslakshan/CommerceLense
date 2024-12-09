"use client";

import Link from "next/link";
import React from "react";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";
import { useMenuStore } from "@/store/toggleMenuStore";

const Logo = () => {
  const { isOpen } = useMenuStore();

  return (
    <Link href="/" className="flex items-center gap-2">
      <Image src="/logo-icon.svg" alt="logo" width={30} height={30} />
      <AnimatePresence initial={false}>
        {!isOpen && (
          <motion.h1
            initial={{ width: 0, opacity: 0 }}
            animate={{ width: "auto", opacity: 1 }}
            exit={{ width: 0, opacity: 0 }}
            transition={{ duration: 0.3 }}
            className="text-xl font-semibold max-md:hidden whitespace-nowrap"
          >
            CommerceLense
          </motion.h1>
        )}
      </AnimatePresence>
    </Link>
  );
};

export default Logo;
