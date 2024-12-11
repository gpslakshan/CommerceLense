"use client";

import React from "react";
import { Button } from "../ui/button";
import { ChevronsLeft, ChevronsRight } from "lucide-react";
import { useMenuStore } from "@/store/toggleMenuStore";
import { motion } from "framer-motion";

const MenuToggle = () => {
  const { isCollapsed, toggleMenu } = useMenuStore();

  return (
    <Button variant="ghost" size="icon" onClick={toggleMenu}>
      <motion.div
        animate={{ rotate: isCollapsed ? 360 : 0 }}
        transition={{ duration: 0.5 }}
      >
        {isCollapsed ? <ChevronsRight /> : <ChevronsLeft />}
      </motion.div>
    </Button>
  );
};

export default MenuToggle;
