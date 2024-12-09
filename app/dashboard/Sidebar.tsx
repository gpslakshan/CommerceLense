"use client";

import React from "react";
import { useMenuStore } from "@/store/toggleMenuStore";
import { motion } from "framer-motion";
import LogoutButton from "./_components/LogoutButton";
import MenuLinks from "./_components/MenuLinks";

const Sidebar = () => {
  const { isCollapsed } = useMenuStore();

  return (
    <motion.aside
      initial={{ width: isCollapsed ? 80 : 250 }}
      animate={{ width: isCollapsed ? 80 : 250 }}
      transition={{ duration: 0.3, ease: "easeInOut" }}
      className={`sticky z-10 top-0 flex flex-col h-screen items-center overflow-hidden py-10 border-r max-md:max-w-[80px] ${
        isCollapsed ? "max-md:hidden gap-10" : "block justify-between"
      }`}
    >
      {/* <h2 className={`text-sm max-md:hidden ${isCollapsed && "hidden"}`}>
        Main Menu
      </h2> */}
      <MenuLinks />
      <LogoutButton />
    </motion.aside>
  );
};

export default Sidebar;
