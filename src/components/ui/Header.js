"use client";
import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Link from "next/link";
import { Bars3Icon, XMarkIcon } from "@heroicons/react/24/outline";
import Image from "next/image";

export default function Header() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 50);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

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
        <Link
          href="/"
          className="flex items-center hover:opacity-80 transition-opacity"
        >
          <div className="w-10 h-10 bg-gradient-to-br from-blue-600 to-blue-800 rounded-full flex items-center justify-center">
            <Image src="/logo.webp" alt="Logo" width={40} height={40} />
          </div>
          <span className={`ml-4 font-bold transition-colors ${iconColor}`}>
            PT Agro Nusantara Tani Milenial
          </span>
        </Link>

        {/* Desktop Nav */}
        <div className="hidden md:flex items-center space-x-8">
          <Link
            href="/"
            className={`font-medium transition-colors ${linkColor}`}
          >
            Beranda
          </Link>
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
            Galeri
          </Link>
        </div>

        {/* Mobile Menu Button */}
        <button
          className="md:hidden p-2"
          onClick={() => setIsMobileMenuOpen((open) => !open)}
        >
          {isMobileMenuOpen ? (
            <XMarkIcon className={`h-6 w-6 ${iconColor}`} />
          ) : (
            <Bars3Icon className={`h-6 w-6 ${iconColor}`} />
          )}
        </button>

        {/* Mobile Menu & Overlay */}
        <AnimatePresence>
          {isMobileMenuOpen && (
            <>
              {/* Overlay untuk menangkap klik tutup menu */}
              <motion.div
                className="fixed inset-0 z-40 bg-whitw-95"
                onClick={() => setIsMobileMenuOpen(false)}
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
              />

              <motion.div
                initial={{ opacity: 0, height: 0 }}
                animate={{ opacity: 1, height: "auto" }}
                exit={{ opacity: 0, height: 0 }}
                transition={{ duration: 0.2 }}
                className="absolute top-full left-0 w-full md:hidden z-50"
              >
                <div className="bg-white/95 backdrop-blur-md shadow-md px-4 py-4 space-y-2">
                  <Link
                    href="/"
                    className="block px-2 py-2 font-medium text-gray-700 hover:text-blue-800"
                    onClick={() => setIsMobileMenuOpen(false)}
                  >
                    Beranda
                  </Link>
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
                    Galeri
                  </Link>
                </div>
              </motion.div>
            </>
          )}
        </AnimatePresence>
      </nav>
    </motion.header>
  );
}
