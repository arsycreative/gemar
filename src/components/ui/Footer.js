"use client";
import { motion } from "framer-motion";
import {
  EnvelopeIcon,
  PhoneIcon,
  MapPinIcon,
  DocumentTextIcon,
} from "@heroicons/react/24/outline";
import Image from "next/image";

export default function Footer() {
  const quickLinks = [
    { name: "Tentang", href: "#about" },
    { name: "Program", href: "#programs" },
    { name: "Statistik", href: "#statistics" },
    { name: "Timeline", href: "#timeline" },
  ];

  const legalLinks = [
    { name: "Permendes No. 3 Tahun 2025", href: "#" },
    // { name: "Kebijakan Privasi", href: "#" },
    // { name: "Syarat & Ketentuan", href: "#" },
  ];

  return (
    <footer className="bg-gray-900 text-white">
      <div className="container mx-auto px-6 py-16">
        <div className="grid md:grid-cols-4 gap-8">
          {/* Company Info */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <div className="flex items-center space-x-3 mb-6">
              <div className="w-12 h-12  rounded-lg flex items-center justify-center">
                <Image src="/logo.webp" alt="Logo" width={50} height={50} />
              </div>
              <div>
                <h3 className="font-bold text-xl">
                  PT Agro Nusantara Tani Milenial
                </h3>
              </div>
            </div>
            <p className="text-gray-400 leading-relaxed mb-6">
              Program ketahanan pangan new generation untuk mendukung kedaulatan
              pangan Indonesia melalui pemberdayaan petani milenial.
            </p>
            <div className="space-y-3 text-sm">
              <div className="flex items-center">
                <MapPinIcon className="h-9 w-9 mr-2 text-blue-400" />
                <span className="text-gray-400">
                  Jl. Taman Bahagia Jl. Nglajo No.11, Wonotejo, Cepu, Kec. Cepu,
                  Kabupaten Blora, Jawa Tengah 58312
                </span>
              </div>
              <div className="flex items-center">
                <PhoneIcon className="h-4 w-4 mr-2 text-blue-400" />
                <span className="text-gray-400">+62 21 1234 5678</span>
              </div>
              <div className="flex items-center">
                <EnvelopeIcon className="h-4 w-4 mr-2 text-blue-400" />
                <span className="text-gray-400">Antam.pertanian@gmail.com</span>
              </div>
            </div>
          </motion.div>

          {/* Quick Links */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
          >
            <h4 className="font-bold text-lg mb-6">Menu Utama</h4>
            <ul className="space-y-3">
              {quickLinks.map((link, idx) => (
                <li key={idx}>
                  <a
                    href={link.href}
                    className="text-gray-400 hover:text-white transition-colors duration-200 block"
                  >
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>
          </motion.div>

          {/* Legal Links */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <h4 className="font-bold text-lg mb-6">Dokumen</h4>
            <ul className="space-y-3">
              {legalLinks.map((link, idx) => (
                <li key={idx}>
                  <a className="text-gray-400 hover:text-white transition-colors duration-200 flex items-center">
                    <DocumentTextIcon className="h-4 w-4 mr-2" />
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>
          </motion.div>

          {/* Program Info */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
          >
            <h4 className="font-bold text-lg mb-6">Program GeMAR</h4>
            <div className="space-y-4">
              <div className="bg-gray-800 p-4 rounded-lg">
                <h5 className="font-semibold text-blue-400 mb-2">
                  Target 2025
                </h5>
                <p className="text-gray-400 text-sm">
                  65.873 BUMDes/BUMDesMa se-Indonesia
                </p>
              </div>
              <div className="bg-gray-800 p-4 rounded-lg">
                <h5 className="font-semibold text-green-400 mb-2">Dana Desa</h5>
                <p className="text-gray-400 text-sm">
                  Minimum 20% untuk ketahanan pangan
                </p>
              </div>
              <div className="bg-gray-800 p-4 rounded-lg">
                <h5 className="font-semibold text-purple-400 mb-2">Asuransi</h5>
                <p className="text-gray-400 text-sm">
                  Perlindungan hama, penyakit & cuaca
                </p>
              </div>
            </div>
          </motion.div>
        </div>

        {/* Government Support */}
        {/* <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="border-t border-gray-800 mt-12 pt-8"
        >
          <div className="bg-gradient-to-r from-blue-900 to-blue-800 rounded-2xl p-6">
            <h4 className="font-bold text-lg mb-4 text-center">
              Dukungan Pemerintah
            </h4>
            <div className="grid md:grid-cols-2 gap-6 text-center">
              <div>
                <blockquote className="text-blue-200 italic mb-2">
                  "Tidak Ada Negara yang maju tanpa berdaulat di bidang pangan"
                </blockquote>
                <p className="text-sm text-blue-300">
                  – Zulkifli Hasan, Menko Pangan
                </p>
              </div>
              <div>
                <blockquote className="text-blue-200 italic mb-2">
                  "Dana desa untuk ketahanan pangan paling rendah 20 persen"
                </blockquote>
                <p className="text-sm text-blue-300">
                  – Yandri Susanto, Mendes PDT
                </p>
              </div>
            </div>
          </div>
        </motion.div> */}

        {/* Bottom Bar */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.5 }}
          className="border-t border-gray-800 mt-12 pt-8 flex flex-col md:flex-row justify-between items-center"
        >
          <div className="text-gray-400 text-sm mb-4 md:mb-0">
            © 2025 PT Agro Nusantara Tani Milenial (ANTaM). All rights reserved.
          </div>
          <div className="flex items-center space-x-6 text-sm text-gray-400">
            <span>Supported by:</span>
            <div className="flex items-center space-x-4">
              <span className="px-3 py-1 bg-gray-800 rounded-full">
                Kemendes PDT
              </span>
              <span className="px-3 py-1 bg-gray-800 rounded-full">
                ACA Insurance
              </span>
              <span className="px-3 py-1 bg-gray-800 rounded-full">
                BUMDes Indonesia
              </span>
            </div>
          </div>
        </motion.div>
      </div>
    </footer>
  );
}
