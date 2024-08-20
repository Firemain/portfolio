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
            <div className="flex flex-wrap items-center justify-between mx-auto p-6">
                <Link href={"/"}>
                    <Image src="/images/logo.png" alt="logo" width={50} height={50}></Image>
                </Link>
            
                <div className="mobile-menu md:hidden block">
                    { !isOpen ? (
                        <button onClick={() => setIsOpen(true)} className="text-[#f2e9e4] flex items-center px-3 py-2 border rounded border-[#f2e9e4] hover:text-white hover:border-white">
                            <Bars3Icon className="h-5 w-5 " ></Bars3Icon>
                        </button>
                    ) : (
                        <button onClick={() => setIsOpen(false)} className="text-[#f2e9e4] flex items-center px-3 py-2 border rounded border-[#f2e9e4] hover:text-white hover:border-white">
                            <XMarkIcon className="h-5 w-5 " ></XMarkIcon>
                        </button>
                    )}
                </div>

                <div className="menu hidden md:block md:w-auto" id="navbar">
                    <ul className="flex p-4 md:text-5xl text-2xl md:p-0 md:flex-row md:space-x-8 mt-0">
                        {navlinks.map((navlink, index) => (
                            <li key={index}>
                                <NavLink href={navlink.href} title={navlink.title}></NavLink>
                            </li>))}
                    </ul>
                </div>
            </div>
            {isOpen && (
                <div className="md:hidden">
                    <OverlayMenu links={navlinks}></OverlayMenu>
                </div>
            )}
        </nav>
    )
}