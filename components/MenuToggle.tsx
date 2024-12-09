"use client";

import React from "react";
import { Button } from "./ui/button";
import { ChevronsLeft, ChevronsRight } from "lucide-react";
import { useMenuStore } from "@/store/toggleMenuStore";
import { motion } from "framer-motion";

const MenuToggle = () => {
  const { isOpen, toggleMenu } = useMenuStore();

  return (
    <Button variant="ghost" size="icon" onClick={toggleMenu}>
      <motion.div
        animate={{ rotate: isOpen ? 360 : 0 }}
        transition={{ duration: 0.5 }}
      >
        {isOpen ? <ChevronsRight /> : <ChevronsLeft />}
      </motion.div>
    </Button>
  );
};

export default MenuToggle;
