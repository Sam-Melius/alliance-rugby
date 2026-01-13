"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import Image from "next/image";

export function Header() {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };

    window.addEventListener("scroll", handleScroll);
    handleScroll(); // run once on mount

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header
      className={`fixed top-0 z-50 w-full transition-all duration-300 ${
        scrolled ? "bg-black/80 backdrop-blur border-b border-white/10" : ""
      }`}
    >
      <div className="mx-auto flex items-center justify-between px-4 py-3">
        <Link href="/" className="flex items-center gap-3">
          <div className="relative h-12 w-10">
            <Image
              src="/alliance-shield.png"
              alt="Alliance Black Knights Rugby logo"
              fill
              className="object-contain"
              priority
            />
          </div>
          <div className="leading-tight">
            <div className="text-md uppercase font-semibold tracking-[0.25em] text-gray-300">
              Alliance Black Knights
            </div>
            <div className="text-lg tracking-wide">Rugby</div>
          </div>
        </Link>

        <nav className="hidden gap-6 text-sm font-medium md:flex">
          <Link href="#schedule" className="hover:text-yellow-400">
            Schedule
          </Link>
          <Link href="#team" className="hover:text-yellow-400">
            Team
          </Link>
          <Link href="#sponsors" className="hover:text-yellow-400">
            Sponsors
          </Link>
          <Link href="#contact" className="hover:text-yellow-400">
            Contact
          </Link>
        </nav>
      </div>
    </header>
  );
}
