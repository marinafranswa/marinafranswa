"use client";
import { useState, useEffect } from "react";
import { Menu, Sparkles, X } from "lucide-react";
import Link from "next/link";

const navLinks = ["About", "Skills", "Projects", "Experience", "Contact"];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 px-6 md:px-10 py-4 flex items-center justify-between transition-all duration-300 bg-dark/85 backdrop-blur-xl border-b border-purple-light/10 `}
    >
    
      <a
        href="#hero"
        className="font-display text-2xl italic text-gradient-pink no-underline"
      >
        Marina.dev
      </a>

      {/* Desktop nav */}
      <div className="hidden md:flex items-center gap-8">
        {navLinks.map((link) => (
          <a
            key={link}
            href={`#${link.toLowerCase()}`}
            className="text-muted hover:text-pink text-sm font-medium transition-colors duration-200 no-underline"
          >
            {link}
          </a>
        ))}
        <a
          href="mailto:marinaafranswa@gmail.com"
          className="btn-primary !py-2 !px-5 !text-sm"
        >
          Hire Me <Sparkles className="size-4 text-yellow" />
        </a>
      </div>

      {/* Mobile hamburger */}
      <button
        onClick={() => setOpen(!open)}
        className="md:hidden text-white bg-transparent border-none cursor-pointer p-1"
        aria-label="Toggle menu"
      >
        {open ? <X size={12} /> : <Menu size={12} />}
      </button>

      {/* Mobile menu overlay */}
      {open && (
        <div className="fixed top-16 right-0 left-0 py-12 bg-dark/85 backdrop-blur-xl border-b border-purple-light/10 flex flex-col items-center justify-center gap-5 z-40 md:hidden">
          {navLinks.map((link) => (
            <Link
              key={link}
              href={`#${link.toLowerCase()}`}
              onClick={() => setOpen(false)}
              className="font-display  italic text-white hover:text-pink transition-colors no-underline"
            >
              {link}
            </Link>
          ))}
          <a
            href="mailto:marinaafranswa@gmail.com"
            className="btn-primary"
            onClick={() => setOpen(false)}
          >
            Hire Me ✨
          </a>
        </div>
      )}
    </nav>
  );
}
