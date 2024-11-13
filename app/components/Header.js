// components/Header.js
"use client";

import Image from "next/image";
import ThemeProvider from "./ThemeProvider";
import { useState } from "react";
import { FaBars, FaTimes } from "react-icons/fa";

export default function Header() {
    const [menuOpen, setMenuOpen] = useState(false);

    const toggleMenu = () => {
        setMenuOpen(!menuOpen);
    };

    return (
        <nav className="border-b border-gray-700 flex items-center justify-between py-4 px-4 md:px-14 bg-white dark:bg-[#0B0A0A] text-black dark:text-white">
            <div className="flex items-center">
                <Image src="/assets/extsy-logo.svg" alt="Logo" width={50} height={36} />
            </div>

            <div className="hidden md:flex items-center space-x-4">
                <a href="#home" className="hover:underline">Home</a>
                <a href="#about" className="hover:underline">About</a>
                <a href="#contact" className="hover:underline">Contact</a>
            </div>
            <div className="flex items-center gap-5">
                <ThemeProvider />
                <div className="md:hidden flex items-center">
                    <button onClick={toggleMenu} className="text-xl">
                        {menuOpen ? <FaTimes /> : <FaBars />}
                    </button>
                </div>
            </div>

            {/* Mobile Menu */}
            {menuOpen && (
                <div className="absolute top-16 left-0 w-full bg-white dark:bg-[#0B0A0A] flex flex-col items-center space-y-4 p-4 md:hidden z-10">
                    <a href="#home" className="hover:underline" onClick={toggleMenu}>Home</a>
                    <a href="#about" className="hover:underline" onClick={toggleMenu}>About</a>
                    <a href="#contact" className="hover:underline" onClick={toggleMenu}>Contact</a>
                </div>
            )}
        </nav>
    );
}
