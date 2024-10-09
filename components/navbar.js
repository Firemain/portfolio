"use client";

import Link from "next/link";
import NavLink from "./navlink";
import { useState } from "react";
import { Bars3Icon, XMarkIcon } from "@heroicons/react/24/solid";
import OverlayMenu from "./overlaymenu";
import Image from "next/image";

const navlinks = [
    {
        href: "/",
        title: "Home",
    },
    {
        href: "#about",
        title: "About",
    },
    {
        href: "#projects",
        title: "Projects",
    },
    {
        href: "#contact",
        title: "Contact",
    },
];

export default function Navbar() {
    const [isOpen, setIsOpen] = useState(false);

    return (
        <nav className="fixed top-0 left-0 right-0 z-10 bg-[#4a4e69] opacity-90">
            <div className="flex items-center justify-between max-w-7xl mx-auto p-4">
                <Link href={"/"}>
                    <Image src="/images/logo.png" alt="logo" width={30} height={30} className="cursor-pointer" />
                </Link>
            
                <div className="md:hidden block">
                    <button onClick={() => setIsOpen(!isOpen)} className="text-[#f2e9e4] flex items-center px-3 py-2 border rounded border-[#f2e9e4] hover:text-white hover:border-white">
                        {isOpen ? <XMarkIcon className="h-5 w-5" /> : <Bars3Icon className="h-5 w-5" />}
                    </button>
                </div>

                <div className="hidden md:block" id="navbar">
                    <ul className="flex space-x-4">
                        {navlinks.map((navlink, index) => (
                            <li key={index}>
                                <NavLink href={navlink.href} title={navlink.title} />
                            </li>
                        ))}
                    </ul>
                </div>
            </div>
            {isOpen && (
                <div className="md:hidden bg-[#4a4e69]">
                    <OverlayMenu links={navlinks} />
                </div>
            )}
        </nav>
    );
}