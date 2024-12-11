"use client";

import React from "react";
import Link from "next/link";
import { House, Users, Package, Shirt, Component } from "lucide-react";
import { usePathname } from "next/navigation";
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "@/components/ui/tooltip";
import { motion } from "framer-motion";
import { useMenuStore } from "@/store/toggleMenuStore";

const menuItems = [
  { href: "/", label: "Dashboard", icon: House },
  { href: "/customers", label: "Customers", icon: Users },
  { href: "/orders", label: "Orders", icon: Package },
  { href: "/products", label: "Products", icon: Shirt },
  { href: "/team", label: "Team", icon: Component },
];

const linkVariants = {
  active: {
    backgroundColor: "#2463EB",
    color: "#ffff",
    scale: 1.05,
  },
  inactive: {
    backgroundColor: "transparent",
    color: "inherit",
    scale: 1,
  },
};

const MenuLinks = () => {
  const { isCollapsed } = useMenuStore();
  const pathname = usePathname();

  return (
    <TooltipProvider>
      <ul className="flex flex-col gap-10 justify-center">
        {menuItems.map((item) => (
          <li key={item.href}>
            <Tooltip>
              <TooltipTrigger asChild>
                <Link href={item.href}>
                  <motion.div
                    variants={linkVariants}
                    animate={pathname === item.href ? "active" : "inactive"}
                    transition={{ duration: 0.3 }}
                    className="flex gap-4 items-center py-1 px-4 rounded-md"
                  >
                    <item.icon size={23} className="mb-1" />
                    <span
                      className={`max-md:hidden ${isCollapsed && "hidden"}`}
                    >
                      {item.label}
                    </span>
                  </motion.div>
                </Link>
              </TooltipTrigger>
              {isCollapsed && (
                <TooltipContent>
                  <p>{item.label}</p>
                </TooltipContent>
              )}
            </Tooltip>
          </li>
        ))}
      </ul>
    </TooltipProvider>
  );
};

export default MenuLinks;
