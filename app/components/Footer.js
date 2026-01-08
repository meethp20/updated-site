"use client";
import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import {
  Facebook,
  Twitter,
  Instagram,
  Linkedin,
  ArrowUpRight,
} from "lucide-react";

const footerLinks = {
  navigation: [
    { name: "Home", href: "/" },
    { name: "Services", href: "/services" },
    { name: "Blogs", href: "/blogs" },
    { name: "Contact", href: "/contact" },
  ],
  socials: [
    { name: "Instagram", href: "https://instagram.com", icon: Instagram },
    { name: "Twitter", href: "https://twitter.com", icon: Twitter },
    { name: "LinkedIn", href: "https://linkedin.com", icon: Linkedin },
    { name: "Facebook", href: "https://facebook.com", icon: Facebook },
  ],
};

const currentYear = new Date().getFullYear();

export default function Footer() {
  return (
    <footer
      id="contact"
      className="relative w-full bg-gray-50 text-gray-900 pt-16 pb-10 md:pb-24 overflow-hidden -mt-6 z-20 shadow-[0_-10px_40px_-15px_rgba(0,0,0,0.05)]"
    >
      {/* Decorative Background Blob - Top Right */}
      <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-lime-200/30 blur-[120px] rounded-full mix-blend-multiply pointer-events-none translate-x-1/3 -translate-y-1/3" />

      <div className="relative px-6 md:px-12 lg:px-16">
        <div className="flex flex-col lg:flex-row gap-12 lg:gap-20 pb-16 border-b border-gray-100">
          {/* Left Side: Brand Info */}
          <div className="flex-1 space-y-6">
            <Link href="/" className="inline-block">
              <div className="flex items-center gap-3">
                <Image
                  src="/LGS.svg"
                  alt="Lime Green"
                  width={48}
                  height={48}
                  className=""
                />
                <span className="text-2xl font-coolvetica tracking-wide font-bold text-gray-900">
                  Lime Green Studio
                </span>
              </div>
            </Link>
            <p className="text-gray-500 text-lg max-w-sm leading-relaxed tracking-tight">
              Solving problems by Shipping Products
            </p>
            <div className="pt-2">
              <Link
                href="mailto:contact@limegreen.studio"
                className="inline-flex items-center gap-2 text-lime-600 hover:text-lime-500 transition-colors text-lg font-medium"
              >
                contact@limegreen.studio
                <ArrowUpRight className="w-5 h-5" />
              </Link>
            </div>
          </div>

          {/* Right Side: Links */}
          <div className="flex gap-12 lg:gap-24">
            {/* Navigation */}
            <div>
              <h4 className="text-gray-900 font-semibold text-lg mb-6">
                Explore
              </h4>
              <ul className="space-y-4">
                {footerLinks.navigation.map((link) => (
                  <li key={link.name}>
                    <Link
                      href={link.href}
                      className="text-gray-500 hover:text-lime-600 transition-colors block text-base"
                    >
                      {link.name}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            {/* Socials */}
            <div>
              <h4 className="text-gray-900 font-semibold text-lg mb-6">
                Socials
              </h4>
              <ul className="space-y-4">
                {footerLinks.socials.map((link) => (
                  <li key={link.name}>
                    <Link
                      href={link.href}
                      target="_blank"
                      className="text-gray-500 hover:text-lime-600 transition-colors block text-base flex items-center gap-2"
                    >
                      {link.name}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="pt-8 flex flex-col md:flex-row items-center justify-between gap-6 relative z-10">
          <p className="text-gray-400 text-sm">
            © {currentYear} Lime Green. All rights reserved.
          </p>
          <div className="flex gap-8 text-sm text-gray-400">
            <Link
              href="/privacy"
              className="hover:text-gray-600 transition-colors"
            >
              Privacy Policy
            </Link>
            <Link
              href="/terms"
              className="hover:text-gray-600 transition-colors"
            >
              Terms of Service
            </Link>
          </div>
        </div>

        {/* Watermark - Centered */}
        <div className="absolute inset-0 pointer-events-none select-none z-0 flex items-center justify-center">
          <h2 className="text-[13vw] leading-none font-bold text-transparent bg-clip-text bg-gradient-to-br from-lime-400 to-green-600 opacity-[0.07] whitespace-nowrap pb-[1.5vw]">
            limegreen
          </h2>
        </div>
      </div>
    </footer>
  );
}
