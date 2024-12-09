import React from 'react'
import {ModeToggle} from "@/components/ModeToggle";
import Link from "next/link";
import Image from "next/image";
import {Avatar, AvatarFallback, AvatarImage} from "@/components/ui/avatar";
import {ChevronsLeft} from "lucide-react";
import {Button} from "@/components/ui/button";

const NavBar = () => {
    return (
        <div className="py-3 px-2 flex justify-between items-center border-b shadow-md">
            <div className="flex items-center space-x-3">
                <Link href="/">
                    <Image src="/logo-icon.svg" alt="logo" width={30} height={30} />
                </Link>
                <span className="text-xl font-bold max-md:hidden">CommerceLens</span>
                <Button variant="ghost" size="icon">
                    <ChevronsLeft />
                </Button>
            </div>

            <div className="flex items-center space-x-4">
                <ModeToggle />
                <span className="max-md:hidden font-semibold">Welcome Back Sachin 👋</span>
                <Avatar>
                    <AvatarImage src="/avatar-image.avif" />
                    <AvatarFallback>?</AvatarFallback>
                </Avatar>
            </div>
        </div>
    )
}
export default NavBar
