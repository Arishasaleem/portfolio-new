'use client';
import React, { useState } from "react";
import { Menu, MenuItem,HoveredLink } from "./ui/navbar-menu";
import { cn } from "@/utils/cn";
import Link from "next/link";




const Navbar = ({ className }: { className?: string }) => {
    const [active, setActive] = useState<string | null>(null);
  return (
    <div 
    className={cn("fixed top-10 inset-x-0 max-w-2xl mx-auto z-50 text-white", className)}
    >
        <Menu setActive={setActive}>
            <Link href={"/"}>
            <MenuItem setActive={setActive} active={active} 
            item="Home" 
            >
            myinfo
            </MenuItem>
            </Link>
            <MenuItem setActive={setActive} active={active} 
            item="Our Courses" 
            >
             <div className="flex flex-col space-y-4 text-sm text-white">
             <HoveredLink href="/courses">All Courses</HoveredLink>
             </div>
              </MenuItem>

        <div className="text-white">
      <Link href={"/contact"}>
      <MenuItem setActive={setActive} active={active} 
            item="Contact Us">
         contact
      </MenuItem>
      
      
      </Link>
      </div>
        </Menu>
      
    </div>
  )
}

export default Navbar
