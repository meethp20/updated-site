"use client";
import { useState, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
import { Menu, X } from "lucide-react";
import { useCallback } from "react";

const navItems = [
  { label: "Why us", href: "#comparison" },
  { label: "Pricing", href: "#pricing" },
  { label: "Blogs", href: "#blogs" },
  { label: "Contact", href: "#contact" },
];

export default function GlassNavbar() {
  const [scrolled, setScrolled] = useState(false);
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const offset = window.scrollY;
      setScrolled(offset > 50);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const handleScrollToStart = useCallback((e) => {
    e.preventDefault();
    setIsOpen(false);
    const element = document.getElementById("start-shipping");
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  }, []);

  return (
    <>
      <div
        className={`fixed top-0 left-0 right-0 h-32 z-40 pointer-events-none transition-all duration-500 ease-out ${
          scrolled ? "opacity-100 backdrop-blur-xl" : "opacity-0"
        }`}
        style={{
          maskImage: "linear-gradient(to bottom, black 0%, transparent 100%)",
          WebkitMaskImage:
            "linear-gradient(to bottom, black 0%, transparent 100%)",
          backgroundColor: "rgba(255,255,255,0.55)",
          backdropFilter: "blur(18px)",
          WebkitBackdropFilter: "blur(18px)",
        }}
      />
      {/* Mobile Menu Overlay */}
      <div
        className={`fixed inset-0 z-[60] bg-white/95 backdrop-blur-3xl flex flex-col justify-center items-center transition-all duration-500 ease-in-out ${
          isOpen
            ? "opacity-100 visible"
            : "opacity-0 invisible pointer-events-none"
        }`}
      >
        <Link
          href="/"
          onClick={() => setIsOpen(false)}
          className="absolute top-8 left-8 flex items-center gap-2"
        >
          <Image
            src="/LGS.svg"
            alt="Lime Green Studio"
            width={50}
            height={50}
          />
        </Link>
        <button
          onClick={() => setIsOpen(false)}
          className="absolute top-8 right-8 p-2 text-gray-500 hover:text-gray-900 transition-colors bg-gray-100 rounded-full"
        >
          <X size={24} />
        </button>
        <div className="flex flex-col gap-8 text-center">
          {navItems.map((item, index) => (
            <Link
              key={item.href}
              href={item.href}
              onClick={() => setIsOpen(false)}
              className="text-3xl font-display font-medium text-gray-800 hover:text-lime-600"
              style={{
                transitionDelay: isOpen ? `${index * 100}ms` : "0ms",
                opacity: isOpen ? 1 : 0,
                transform: isOpen ? "translateY(0)" : "translateY(20px)",
                transitionProperty: "all",
                transitionDuration: "0.5s",
                transitionTimingFunction: "ease-out",
              }}
            >
              {item.label}
            </Link>
          ))}
          <a
            href="#start-shipping"
            onClick={handleScrollToStart}
            className="mt-4 px-8 py-3 text-lg font-bold text-white bg-lime-500 rounded-full shadow-lg shadow-lime-500/30"
          >
            Get Started
          </a>
        </div>
      </div>

      <nav
        className={`fixed top-0 left-0 right-0 z-50 flex justify-end md:justify-center px-6 md:px-0 transition-all duration-500 pointer-events-none ${
          scrolled ? "py-4 md:py-2" : "py-6 md:py-4"
        }`}
      >
        <div
          className={`w-auto md:w-fit pointer-events-auto transition-all duration-500 ease-[cubic-bezier(0.32,0.72,0,1)] ${
            scrolled ? "scale-90" : "scale-100"
          }`}
        >
          <div
            className={`rounded-full md:border border-white/50 md:bg-white/80 md:backdrop-blur-xl md:shadow-2xl transition-all duration-500 ${
              scrolled ? "md:shadow-black/5" : "md:shadow-black/10"
            }`}
            style={{
              backdropFilter: "blur(18px)",
              WebkitBackdropFilter: "blur(18px)",
              backgroundColor: "rgba(255,255,255,0.7)",
            }}
          >
            {/* Main content */}
            <div
              className={`relative flex items-center justify-center transition-all duration-1000 ease-[cubic-bezier(0.32,0.72,0,1)] md:px-3 md:py-2`}
            >
              {/* Navigation Items */}
              <div className="flex items-center gap-2 md:gap-3">
                {/* Logo */}
                <Link
                  href="/"
                  className="hidden md:flex items-center gap-2 px-3 py-1.5 mr-1 rounded-full bg-white/70 backdrop-blur"
                >
                  <Image
                    src="/LGS.svg"
                    alt="Lime Green Studio"
                    width={30}
                    height={30}
                  />
                </Link>
                {/* Mobile Menu Toggle */}
                <button
                  onClick={() => setIsOpen(true)}
                  className="md:hidden p-3 text-gray-800 bg-white/50 backdrop-blur-md rounded-full shadow-sm hover:bg-white/80 transition-all active:scale-95"
                >
                  <Menu size={24} />
                </button>

                {/* Desktop Links */}
                <div className="hidden md:flex items-center gap-3">
                  {navItems.map((item, index) => (
                    <Link
                      key={item.href}
                      href={item.href}
                      className={`relative group transition-all duration-1000 ease-[cubic-bezier(0.32,0.72,0,1)] px-3 md:px-4 py-1.5 text-sm md:text-base`}
                      style={{
                        transitionDelay: `${index * 50}ms`,
                      }}
                    >
                      {/* Text */}
                      <span className="relative z-10 font-medium text-gray-700 group-hover:text-gray-900 transition-colors duration-300">
                        {item.label}
                      </span>

                      {/* Animated underline */}
                      <div className="absolute bottom-1 left-1/2 -translate-x-1/2 w-0 group-hover:w-[60%] h-0.5 bg-gray-900 rounded-full transition-all duration-300 ease-out" />
                    </Link>
                  ))}
                </div>

                {/* CTA Button */}
                <a
                  href="#start-shipping"
                  onClick={handleScrollToStart}
                  className={`hidden md:flex relative overflow-hidden rounded-full font-semibold transition-all duration-300 ease-out hover:scale-105 active:scale-95 group ml-2 px-4 md:px-5 py-1.5 text-sm md:text-base bg-white/20 hover:bg-white/40 border border-white/40 shadow-sm backdrop-blur-md`}
                >
                  {/* Shine effect */}
                  <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/40 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-700" />

                  <span className="relative z-10 text-gray-900">
                    Get Started
                  </span>
                </a>
              </div>
            </div>
          </div>
        </div>
      </nav>
    </>
  );
}
