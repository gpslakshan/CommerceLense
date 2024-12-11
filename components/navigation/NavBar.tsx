import React from "react";
import { ModeToggle } from "@/components/shared/ModeToggle";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import MenuToggle from "@/components/shared/MenuToggle";
import Logo from "@/components/shared/Logo";

const NavBar = () => {
  return (
    <div className="py-3 px-4 flex justify-between items-center border-b">
      <div className="flex items-center gap-2">
        <Logo />
        <MenuToggle />
      </div>

      <div className="flex items-center space-x-4">
        <ModeToggle />
        <span className="max-md:hidden font-semibold">
          Welcome Back Sachin 👋
        </span>
        <Avatar>
          <AvatarImage src="/avatar-image.avif" />
          <AvatarFallback>?</AvatarFallback>
        </Avatar>
      </div>
    </div>
  );
};
export default NavBar;
