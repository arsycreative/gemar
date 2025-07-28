"use client";
import { useState, useEffect, useRef } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Link from "next/link";
import {
  Bars3Icon,
  XMarkIcon,
  ChevronDownIcon,
} from "@heroicons/react/24/outline";
import Image from "next/image";

export default function Header() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isMobileDropdownOpen, setIsMobileDropdownOpen] = useState(false);
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);

  const desktopDropdownRef = useRef(null);
  const mobileMenuRef = useRef(null);

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 50);
    const handleClickOutside = (e) => {
      if (
        desktopDropdownRef.current &&
        !desktopDropdownRef.current.contains(e.target)
      ) {
        setIsDropdownOpen(false);
      }
      if (mobileMenuRef.current && !mobileMenuRef.current.contains(e.target)) {
        setIsMobileDropdownOpen(false);
      }
    };
    window.addEventListener("scroll", handleScroll);
    document.addEventListener("click", handleClickOutside);
    return () => {
      window.removeEventListener("scroll", handleScroll);
      document.removeEventListener("click", handleClickOutside);
    };
  }, []);

  const submenuItems = [
    { name: "Tentang", href: "#about" },
    { name: "Program", href: "#programs" },
    { name: "Statistik", href: "#statistics" },
    { name: "Timeline", href: "#timeline" },
  ];

  const linkColor =
    isScrolled || isMobileMenuOpen
      ? "text-gray-700 hover:text-blue-600"
      : "text-white hover:text-blue-300";
  const iconColor =
    isScrolled || isMobileMenuOpen ? "text-gray-700" : "text-white";

  return (
    <motion.header
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled || isMobileMenuOpen
          ? "bg-white/95 backdrop-blur-md shadow-lg"
          : "bg-transparent"
      }`}
    >
      <nav className="relative max-w-screen-2xl mx-auto px-4 sm:px-6 py-4 flex items-center justify-between">
        {/* Logo + Title */}
        <motion.div whileHover={{ scale: 1.05 }} className="flex items-center">
          <div className="w-10 h-10 bg-gradient-to-br from-blue-600 to-blue-800 rounded-full flex items-center justify-center">
            <Image src="/logo.webp" alt="Logo" width={40} height={40} />
          </div>
          <span className={`ml-4 font-bold transition-colors ${iconColor}`}>
            PT Agro Nusantara Tani Milenial
          </span>
        </motion.div>

        {/* Desktop Nav */}
        <div className="hidden md:flex items-center space-x-8">
          <div ref={desktopDropdownRef} className="relative">
            <button
              onClick={() => setIsDropdownOpen((o) => !o)}
              className={`flex items-center font-medium transition-colors group ${linkColor}`}
            >
              Beranda
              <ChevronDownIcon className="h-4 w-4 ml-1 transition-transform group-hover:rotate-180" />
            </button>
            <AnimatePresence>
              {isDropdownOpen && (
                <motion.div
                  initial={{ opacity: 0, y: -10 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -10 }}
                  className="absolute mt-2 min-w-max bg-white rounded-md shadow-lg overflow-hidden z-20"
                >
                  {submenuItems.map((item) => (
                    <Link
                      key={item.name}
                      href={item.href}
                      scroll={true}
                      className="block px-4 py-2 text-gray-700 hover:bg-gray-100"
                    >
                      {item.name}
                    </Link>
                  ))}
                </motion.div>
              )}
            </AnimatePresence>
          </div>
          <Link
            href="/berita"
            className={`font-medium transition-colors ${linkColor}`}
          >
            Berita
          </Link>
          <Link
            href="/gallery"
            className={`font-medium transition-colors ${linkColor}`}
          >
            Galery
          </Link>
        </div>

        {/* Mobile Menu Button */}
        <button
          className="md:hidden p-2"
          onClick={() => setIsMobileMenuOpen((o) => !o)}
        >
          {isMobileMenuOpen ? (
            <XMarkIcon className={`h-6 w-6 ${iconColor}`} />
          ) : (
            <Bars3Icon className={`h-6 w-6 ${iconColor}`} />
          )}
        </button>

        {/* Mobile Menu */}
        <AnimatePresence>
          {isMobileMenuOpen && (
            <motion.div
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: "auto" }}
              exit={{ opacity: 0, height: 0 }}
              transition={{ duration: 0.2 }}
              className="absolute top-full left-0 w-full md:hidden z-50"
              ref={mobileMenuRef}
            >
              <div className="bg-white/95 backdrop-blur-md shadow-md px-4 py-4 space-y-2">
                {/* Beranda & Submenu */}
                <button
                  onClick={() => setIsMobileDropdownOpen((o) => !o)}
                  className="w-full flex justify-between items-center font-medium transition-colors text-gray-700 hover:text-blue-800 px-2 py-2"
                >
                  Beranda
                  <ChevronDownIcon
                    className={`h-5 w-5 transition-transform ${
                      isMobileDropdownOpen ? "rotate-180" : "rotate-0"
                    }`}
                  />
                </button>
                {isMobileDropdownOpen && (
                  <div className="pl-4">
                    {submenuItems.map((item) => (
                      <Link
                        key={item.name}
                        href={item.href}
                        scroll={true}
                        className="block py-2 text-gray-700 hover:text-blue-800"
                        onClick={() => setIsMobileMenuOpen(false)}
                      >
                        {item.name}
                      </Link>
                    ))}
                  </div>
                )}

                {/* Berita & Galery */}
                <Link
                  href="/berita"
                  className="block px-2 py-2 font-medium text-gray-700 hover:text-blue-800"
                  onClick={() => setIsMobileMenuOpen(false)}
                >
                  Berita
                </Link>
                <Link
                  href="/gallery"
                  className="block px-2 py-2 font-medium text-gray-700 hover:text-blue-800"
                  onClick={() => setIsMobileMenuOpen(false)}
                >
                  Galery
                </Link>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </nav>
    </motion.header>
  );
}
