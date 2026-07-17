"use client";
import { Menu, Rocket, Star, X } from "lucide-react";
import Link from "next/link";
import { useState } from "react";
import { Button } from "./ui/button";

const navLinks = [
  { label: "HOME", href: "#hero" },
  { label: "ABOUT ME", href: "#about" },
  { label: "PROJECTS", href: "#projects" },
  { label: "EXPERIENCE", href: "#experience" },
  { label: "CONTACT", href: "#contact" },
];

const CvLink = ({ className }: { className?: string }) => (
  <Link
    href="/public/Marina Slib.pdf"
    download
    className={`flex items-center gap-2 text-sm font-bold text-zinc-800 bg-amber-400 border-2 border-black rounded-lg shadow-[4px_4px_0px_0px_black] hover:shadow-none hover:translate-x-1 hover:translate-y-1 transition-all py-2 px-4 cursor-pointer ${className}`}
  >
    <Rocket size={16} />
    See CV?
  </Link>
);

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <header className="fixed top-0 left-0 right-0 z-50">
      <div className="max-w-7xl mx-auto px-4 py-4">
        <div className="flex justify-between items-center border-3 border-black rounded-lg bg-white px-6 py-3">
          {/* Logo */}
          <Link
            href="/"
            className="flex items-center gap-2 font-extrabold cursor-pointer"
          >
            <h1 className="text-zinc-800 text-sm md:text-xl lg:text-2xl">
              Marina
            </h1>
            <h1 className="text-pink-500 text-sm md:text-xl lg:text-2xl">
              Franswa
            </h1>
          </Link>

          {/* Mobile menu trigger */}
          <Button
            className="lg:hidden border-2 border-black rounded-sm shadow-[3px_3px_#000] bg-white flex justify-center transition-all duration-200 w-10 h-10"
            onClick={() => setIsOpen(true)}
          >
            <Menu color="black" />
          </Button>

          {/* Mobile drawer */}
          <div
            className={`fixed inset-0 z-50 bg-black/40 transition-opacity duration-300 ${
              isOpen
                ? "opacity-100 pointer-events-auto"
                : "opacity-0 pointer-events-none"
            }`}
          >
            <div
              className={`bg-white w-4/5 max-w-80 h-full absolute top-0 right-0 brutal-shadow transition-transform duration-300 ease-out ${
                isOpen ? "translate-x-0" : "translate-x-full"
              }`}
            >
              <div className="p-6">
                <div className="flex justify-between items-center mb-8 border-b-2 border-t-2 border-black py-3">
                  <span className="text-2xl text-zinc-800 font-extrabold">
                    MENU
                  </span>
                  <button
                    onClick={() => setIsOpen(false)}
                    className="brutal-border-sm w-10 h-10 flex items-center justify-center hover:bg-red-100 transition-colors"
                  >
                    <X color="black" />
                  </button>
                </div>

                <nav className="mb-8">
                  <ul className="space-y-6">
                    {navLinks.map((link) => (
                      <li key={link.label}>
                        <Link
                          href={link.href}
                          onClick={() => setIsOpen(false)}
                          className="text-xl font-bold text-zinc-800 hover:text-teal-400 block transform hover:-translate-y-1 transition-transform"
                        >
                          {link.label}
                        </Link>
                      </li>
                    ))}
                  </ul>
                </nav>

                <CvLink />
              </div>
            </div>
          </div>

          {/* Desktop nav */}
          <nav className="hidden xl:flex items-center gap-4 text-sm font-semibold">
            {navLinks.map((link, i) => (
              <div key={link.label} className="flex items-center gap-2">
                {i === 0 && <Star size={14} className="fill-amber-400" />}
                <Link
                  href={link.href}
                  className="text-zinc-800 hover:text-teal-400 transition-colors"
                >
                  {link.label}
                </Link>
                <Star size={14} className="fill-amber-400" />
              </div>
            ))}
          </nav>

          <CvLink className="hidden xl:flex" />
        </div>
      </div>
    </header>
  );
}
