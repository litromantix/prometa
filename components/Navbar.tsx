"use client";

import { useState } from "react";
import Link from "next/link";
import Image from "next/image";

const navLinks = [
  { href: "/about", label: "About us" },
  { href: "/projects", label: "Projects" },
  { href: "/refs", label: "References" },
  { href: "/contact", label: "Contact" },
];

export default function Navbar() {
  const [open, setOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50">
      <nav className="flex h-16 items-center justify-between border-b border-white/10 bg-charcoal-950/85 px-6 backdrop-blur-md md:h-20 md:px-10 lg:px-16">
        <Link href="/" className="shrink-0 transition-opacity duration-300 hover:opacity-80">
          <Image
            src="/prometa-logo.png"
            alt="PROMETA"
            width={180}
            height={50}
            priority
            className="h-auto w-32 md:w-40"
          />
        </Link>

        <div className="hidden items-center gap-10 md:flex">
          {navLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className="group relative py-2 text-sm uppercase tracking-widest text-cream-200 transition-colors duration-300 hover:text-white"
            >
              {link.label}
              <span className="absolute inset-x-0 -bottom-0.5 h-px origin-left scale-x-0 bg-accent-500 transition-transform duration-300 ease-premium group-hover:scale-x-100" />
            </Link>
          ))}
        </div>

        <button
          type="button"
          onClick={() => setOpen((prev) => !prev)}
          aria-label={open ? "Close menu" : "Open menu"}
          aria-expanded={open}
          className="flex h-10 w-10 flex-col items-center justify-center gap-1.5 md:hidden"
        >
          <span
            className={`h-px w-6 bg-white transition-transform duration-300 ease-premium ${open ? "translate-y-[7px] rotate-45" : ""}`}
          />
          <span
            className={`h-px w-6 bg-white transition-opacity duration-300 ${open ? "opacity-0" : "opacity-100"}`}
          />
          <span
            className={`h-px w-6 bg-white transition-transform duration-300 ease-premium ${open ? "-translate-y-[7px] -rotate-45" : ""}`}
          />
        </button>
      </nav>

      <div
        className={`overflow-hidden border-b border-white/10 bg-charcoal-950/95 backdrop-blur-md transition-[max-height] duration-300 ease-premium md:hidden ${open ? "max-h-72" : "max-h-0"}`}
      >
        <div className="flex flex-col gap-1 px-6 py-4">
          {navLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              onClick={() => setOpen(false)}
              className="py-3 text-sm uppercase tracking-widest text-cream-200 transition-colors duration-300 hover:text-white"
            >
              {link.label}
            </Link>
          ))}
        </div>
      </div>
    </header>
  );
}
