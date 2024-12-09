"use client";

import React from "react";
import { useMenuStore } from "@/store/toggleMenuStore";
import { Button } from "@/components/ui/button";
import { LogOut } from "lucide-react";
import Link from "next/link";

const LogoutButton = () => {
  const { isCollapsed } = useMenuStore();

  return (
    <Button asChild>
      <Link href="/" className="flex gap-2">
        <LogOut />
        <span className={`max-md:hidden ${isCollapsed && "hidden"}`}>
          Log Out
        </span>
      </Link>
    </Button>
  );
};

export default LogoutButton;
