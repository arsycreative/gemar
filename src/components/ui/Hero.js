"use client";
import { motion } from "framer-motion";
import {
  SparklesIcon,
  ShieldCheckIcon,
  TrophyIcon,
} from "@heroicons/react/24/outline";
import Image from "next/image";
import { useEffect, useState } from "react";

export default function Hero() {
  const [particles, setParticles] = useState([]);

  useEffect(() => {
    const width = window.innerWidth;
    const height = window.innerHeight;
    const newParticles = Array.from({ length: 20 }).map(() => ({
      x: Math.random() * width,
      y: Math.random() * height,
    }));
    setParticles(newParticles);
  }, []);

  const stats = [
    { number: "154", label: "Hektar Lahan", suffix: "+" },
    { number: "100", label: "Petani Terlibat", suffix: "+" },
    { number: "98", label: "BUMDes Tertarik", suffix: "" },
    { number: "0", label: "Tingkat Kerugian", suffix: "%" },
  ];

  const features = [
    {
      icon: <ShieldCheckIcon className="h-6 w-6" />,
      title: "Asuransi Terjamin",
      description: "Perlindungan menyeluruh dari risiko pertanian",
    },
    {
      icon: <TrophyIcon className="h-6 w-6" />,
      title: "Hasil Optimal",
      description: "Meningkatkan produktivitas dengan metode modern",
    },
    {
      icon: <SparklesIcon className="h-6 w-6" />,
      title: "Teknologi Terdepan",
      description: "Menggunakan teknologi pertanian terkini",
    },
  ];

  return (
    <section
      id="home"
      className="relative min-h-screen flex items-center overflow-hidden"
    >
      <div className="absolute inset-0">
        <div className="absolute inset-0 bg-gradient-to-br from-slate-900 via-blue-900 to-slate-900"></div>

        <div className="absolute inset-0 bg-gradient-to-tr from-blue-700/20 via-transparent to-blue-500/20"></div>

        <div className="absolute inset-0 grid-pattern opacity-20"></div>

        <div className="absolute top-1/4 left-1/4 w-72 h-72 bg-gradient-to-r from-blue-700 to-blue-500 rounded-full opacity-20 blur-3xl animate-float"></div>
        <div
          className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-gradient-to-r from-blue-500 to-blue-300 rounded-full opacity-20 blur-3xl animate-float"
          style={{ animationDelay: "2s" }}
        ></div>

        <div
          className="absolute inset-0 opacity-10"
          style={{
            backgroundImage: "url(/hero-background.webp)",
            backgroundSize: "cover",
            backgroundPosition: "center",
            backgroundAttachment: "fixed",
          }}
        ></div>
      </div>

      <div className="relative z-10 container-modern">
        <div className="grid lg:grid-cols-12 gap-12 items-center min-h-screen py-32">
          <div className="lg:col-span-7 text-white">
            <motion.div
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
            >
              <motion.div
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.6, delay: 0.2 }}
                className="inline-flex items-center space-x-2 bg-white/10 backdrop-blur-xl rounded-full px-6 py-3 mb-6 border border-white/20"
              >
                <SparklesIcon className="h-5 w-5 text-yellow-400" />
                <span className="text-sm font-semibold">
                  Program Pemerintah Terdepan
                </span>
              </motion.div>

              <motion.h1
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.3 }}
                className="heading-xl mb-6"
              >
                Ketahanan Pangan
                <br />
                <span className="text-gradient-warm">New Generation</span>
              </motion.h1>

              <motion.p
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.5 }}
                className="body-lg mb-8 text-slate-300 max-w-2xl"
              >
                Revolusi pertanian Indonesia melalui GeMAR - Gerakan Menanam
                Anti Rugi. Bergabunglah dengan petani milenial untuk menciptakan
                masa depan pertanian yang berkelanjutan.
              </motion.p>

              {/* Quote */}
              <motion.div
                initial={{ opacity: 0, x: -30 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8, delay: 0.7 }}
                className="relative mb-8"
              >
                <div className="absolute left-0 top-0 w-1 h-full bg-gradient-to-b from-yellow-400 to-orange-400 rounded-full"></div>
                <div className="pl-6">
                  <blockquote className="text-xl font-semibold text-white mb-2 italic">
                    &ldquo;Tidak Ada Negara yang maju tanpa berdaulat di bidang
                    pangan&rdquo;
                  </blockquote>
                  <cite className="text-slate-400 text-sm">
                    - Zulkifli Hasan, Menko Pangan
                  </cite>
                </div>
              </motion.div>

              {/* Features */}
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 1.1 }}
                className="grid sm:grid-cols-3 gap-4"
              >
                {features.map((feature, index) => (
                  <motion.div
                    key={index}
                    whileHover={{ y: -5 }}
                    transition={{ duration: 0.3, ease: "easeOut" }}
                    className="flex items-start space-x-3 bg-white/5 backdrop-blur-sm rounded-2xl p-4 border border-white/10"
                  >
                    <div className="text-cyan-400 mt-1">{feature.icon}</div>
                    <div>
                      <h4 className="font-semibold text-white text-sm mb-1">
                        {feature.title}
                      </h4>
                      <p className="text-slate-400 text-xs leading-relaxed">
                        {feature.description}
                      </p>
                    </div>
                  </motion.div>
                ))}
              </motion.div>
            </motion.div>
          </div>

          {/* Right Content - Stats & Visual */}
          <div className="lg:col-span-5">
            <motion.div
              initial={{ opacity: 0, x: 50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.6 }}
              className="relative"
            >
              {/* Floating Card */}
              <div className="relative">
                <motion.div whileHover={{ y: -10 }} className="floating-card">
                  <div className="text-center mb-8">
                    <Image
                      src="/gemar-logo.webp"
                      alt="GeMAR Logo"
                      className="mx-auto mb-3"
                      height={80}
                      width={300}
                    />
                    <h3 className="text-2xl font-bold text-slate-800 mb-2">
                      Pencapaian Program GeMAR
                    </h3>
                    <p className="text-slate-600">
                      Data real-time program kami
                    </p>
                  </div>

                  {/* Stats Grid */}
                  <div className="grid grid-cols-2 gap-6">
                    {stats.map((stat, index) => (
                      <motion.div
                        key={index}
                        initial={{ scale: 0 }}
                        animate={{ scale: 1 }}
                        transition={{ duration: 0.5, delay: 1.2 + index * 0.1 }}
                        className="text-center"
                      >
                        <div className="relative mb-3">
                          <div
                            className={`text-3xl font-bold ${
                              index === 0
                                ? "text-gradient-modern"
                                : index === 1
                                ? "text-gradient-warm"
                                : index === 2
                                ? "text-purple-600"
                                : "text-green-600"
                            }`}
                          >
                            {stat.number}
                            {stat.suffix}
                          </div>
                        </div>
                        <div className="text-sm font-medium text-slate-600">
                          {stat.label}
                        </div>
                      </motion.div>
                    ))}
                  </div>

                  {/* Partnership Badge */}
                  <div className="mt-8 pt-6 border-t border-slate-200">
                    <div className="flex items-center justify-center space-x-4 text-sm text-slate-600">
                      <span>Didukung oleh:</span>
                      <div className="flex items-center space-x-3">
                        <span className="px-3 py-1 bg-blue-100 text-blue-700 rounded-full font-medium">
                          Kemendes PDT
                        </span>
                        <span className="px-3 py-1 bg-purple-100 text-purple-700 rounded-full font-medium">
                          ACA Insurance
                        </span>
                      </div>
                    </div>
                  </div>
                </motion.div>

                {/* Decorative elements */}
                <div className="absolute -top-4 -right-4 w-24 h-24 bg-gradient-to-br from-blue-500 to-blue-300 rounded-full opacity-20 blur-xl"></div>
                <div className="absolute -bottom-4 -left-4 w-32 h-32 bg-gradient-to-br from-blue-300 to-blue-100 rounded-full opacity-20 blur-xl"></div>
              </div>
            </motion.div>
          </div>
        </div>

        {/* Scroll Indicator */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.5 }}
          className="absolute bottom-8 left-1/2 transform -translate-x-1/2"
        >
          <motion.div
            animate={{ y: [0, 10, 0] }}
            transition={{ duration: 2, repeat: Infinity }}
            className="cursor-pointer flex flex-col items-center space-y-2 text-white/70 hover:text-white transition-colors"
            onClick={() =>
              document
                .getElementById("about")
                ?.scrollIntoView({ behavior: "smooth" })
            }
          >
            <span className="text-sm font-medium">Scroll untuk eksplorasi</span>
            <div className="w-6 h-10 border-2 border-current rounded-full flex justify-center">
              <div className="w-1 h-3 bg-current rounded-full mt-2 animate-bounce"></div>
            </div>
          </motion.div>
        </motion.div>
      </div>

      {/* Animated particles */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        {particles.map((p, i) => (
          <motion.div
            key={i}
            className="absolute w-2 h-2 bg-white rounded-full opacity-20"
            initial={{ x: p.x, y: p.y }}
            animate={{ y: p.y - 100, opacity: [0.2, 0, 0.2] }}
            transition={{
              duration: Math.random() * 10 + 10,
              repeat: Infinity,
              delay: Math.random() * 10,
            }}
          />
        ))}
      </div>
    </section>
  );
}
