"use client";
import { motion } from "framer-motion";
import { Phone } from "lucide-react";

export const whatsappURL = "https://wa.me/6282122662776?text=Halo%20GeMAR!";

export default function FloatingWhatsApp() {
  return (
    <motion.a
      href={whatsappURL}
      target="_blank"
      rel="noopener noreferrer"
      whileHover={{ scale: 1.1 }}
      whileTap={{ scale: 0.9 }}
      className="fixed bottom-6 right-6 z-40 bg-gradient-to-r from-green-400 to-green-600 text-white p-4 rounded-full shadow-lg transition-colors"
    >
      <Phone size={28} />
    </motion.a>
  );
}
