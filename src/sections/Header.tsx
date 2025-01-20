'use client';

import { FC, useState, useEffect } from "react";
import { motion, useAnimate } from "framer-motion";
import LogoIcon from '@/assets/logo.svg';
import MenuIcon from '@/assets/icon-menu.svg';
import Button from '@/components/Button';

const navItems = [
  { label: "Home", href: "#home" },
  { label: "Features", href: "#features" },
  { label: "Testimonials", href: "#testimonials" },
  { label: "Contact", href: "#contact" },
];

export const Header: FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [navScope, navAnimate] = useAnimate();

  useEffect(() => {
    if (isOpen) {
      navAnimate(navScope.current, { height: "100%" }, { duration: 0.7 });
    } else {
      navAnimate(navScope.current, { height: 0 });
    }
  }, [isOpen, navScope, navAnimate]);

  const handleNavClick = (e: React.MouseEvent<HTMLAnchorElement>) => {
    e.preventDefault();
    setIsOpen(false);
    const target = document.querySelector(new URL(e.currentTarget.href).hash);
    target?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <header className="py-4 border-b border-white/15 md:border-none sticky top-0 z-10">
      <div
        role="backdrop blur div element"
        className="absolute inset-0 backdrop-blur-md -z-10 md:hidden"
      ></div>
      <div className="container">
        <div className="flex justify-between items-center md:border border-white/15 md:p-2.5 rounded-xl max-w-2xl mx-auto relative">
          <div
            role="backdrop blur div element"
            className="absolute inset-0 backdrop-blur-md -z-10 hidden md:block"
          ></div>
          {/* Logo */}
          <div>
            <div className="border h-10 w-10 rounded-lg inline-flex justify-center items-center border-white/15">
              <LogoIcon className="h-8 w-8" />
            </div>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden md:block">
            <nav className="flex gap-8 text-sm">
              {navItems.map(({ label, href }) => (
                <a
                  key={label}
                  href={href}
                  className="text-white/70 hover:text-white transition"
                >
                  {label}
                </a>
              ))}
            </nav>
          </div>

          {/* Mobile Menu Toggle */}
          <div className="flex gap-4 items-center">
            <div className="hidden md:block ">
            <Button>Join Waitlist</Button>
            </div>
            <div
              className="md:hidden cursor-pointer"
              onClick={() => setIsOpen(!isOpen)}
              aria-label="Toggle Menu"
            >
              <MenuIcon />
            </div>
          </div>
        </div>
      </div>

      {/* Mobile Navigation Drawer */}
      <div
        className="fixed top-0 left-0 w-full h-0 overflow-hidden bg-black/90 z-20"
        ref={navScope}
      >
        <div className="flex flex-col gap-6 mt-16 text-center text-white text-lg relative">
          {/* Close Button */}
          <button
            className="absolute top-4 right-4 text-white text-3xl pr-12"
            onClick={() => setIsOpen(false)}
            aria-label="Close Menu"
          >
            ✕
          </button>
          {navItems.map(({ label, href }) => (
            <a
              key={label}
              href={href}
              className="py-4 hover:opacity-90"
              onClick={handleNavClick}
            >
              {label}
            </a>
          ))}
          
        </div>
        <div className="flex mx-auto justify-center pt-10">
        <Button>Join Waitlist</Button>
        </div>
      </div>
    </header>
  );
};
