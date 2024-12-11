"use client";

import Link from "next/link";
import React from "react";
import { motion, AnimatePresence } from "framer-motion";
import { useMenuStore } from "@/store/toggleMenuStore";
import { SiGooglelens } from "react-icons/si";

const Logo = () => {
  const { isCollapsed } = useMenuStore();

  return (
    <Link href="/public" className="flex items-center gap-2">
      <SiGooglelens color="#2463EB" size={35} />
      <AnimatePresence initial={false}>
        {!isCollapsed && (
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
