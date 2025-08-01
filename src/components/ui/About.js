"use client";
import { motion } from "framer-motion";
import AnimatedSection from "../animations/AnimatedSection";
import {
  ShieldCheckIcon,
  UserGroupIcon,
  ChartBarIcon,
  SparklesIcon,
  TrophyIcon,
  RocketLaunchIcon,
  CheckBadgeIcon,
} from "@heroicons/react/24/outline";
import { encodedBatik } from "@/libs/utils";
import Image from "next/image";

export default function About() {
  const features = [
    {
      icon: <ShieldCheckIcon className="h-8 w-8" />,
      title: "Asuransi Pertanian Terpadu",
      description:
        "Perlindungan menyeluruh dari risiko hama, penyakit, dan cuaca ekstrem dengan jaminan penggantian hasil",
      color: "from-emerald-500 to-teal-500",
      bgColor: "bg-emerald-50",
      textColor: "text-emerald-600",
    },
    {
      icon: <UserGroupIcon className="h-8 w-8" />,
      title: "Pendampingan Expert",
      description:
        "Tim agronomis berpengalaman dengan teknologi terdepan untuk memastikan kesuksesan setiap program",
      color: "from-blue-500 to-indigo-500",
      bgColor: "bg-blue-50",
      textColor: "text-blue-600",
    },
    {
      icon: <ChartBarIcon className="h-8 w-8" />,
      title: "Metode Inovatif",
      description:
        "Penerapan teknologi pertanian 4.0 dengan sistem monitoring real-time dan analitik prediktif",
      color: "from-purple-500 to-pink-500",
      bgColor: "bg-purple-50",
      textColor: "text-purple-600",
    },
  ];

  const achievements = [
    { number: "154", label: "Hektar Lahan Aktif", suffix: "+" },
    { number: "100", label: "Petani Bergabung", suffix: "+" },
    { number: "85", label: "BUMDes Tertarik", suffix: "" },
    { number: "99.8", label: "Success Rate", suffix: "%" },
  ];

  const values = [
    {
      icon: <RocketLaunchIcon className="h-6 w-6" />,
      title: "Inovasi Berkelanjutan",
      description: "Terus mengembangkan teknologi pertanian terdepan",
    },
    {
      icon: <CheckBadgeIcon className="h-6 w-6" />,
      title: "Kualitas Terjamin",
      description: "Standar internasional dalam setiap proses",
    },
    {
      icon: <TrophyIcon className="h-6 w-6" />,
      title: "Hasil Optimal",
      description: "Memaksimalkan produktivitas dan profitabilitas",
    },
  ];

  const isMobile = typeof window !== "undefined" && window.innerWidth < 640;

  return (
    <section
      id="about"
      className="section-padding bg-gradient-to-br from-slate-50 via-white to-blue-50"
    >
      <div className="container-modern">
        {/* Header */}
        <AnimatedSection className="text-center mb-20">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            className="inline-flex items-center space-x-2 bg-gradient-to-r from-indigo-100 to-purple-100 rounded-full px-6 py-3 mb-6"
          >
            <SparklesIcon className="h-5 w-5 text-indigo-600" />
            <span className="text-sm font-semibold text-indigo-800">
              Tentang ANTaM
            </span>
          </motion.div>

          <h2 className="heading-lg mb-6 text-slate-800">
            Revolusi Pertanian Indonesia Dimulai dari
            <span className="text-gradient-modern"> ANTaM</span>
          </h2>

          <p className="body-lg text-slate-600 max-w-4xl mx-auto">
            PT Agro Nusantara Tani Milenial (ANTaM) menghadirkan solusi
            komprehensif untuk generasi petani milenial dalam mewujudkan visi
            kedaulatan pangan Indonesia yang berkelanjutan.
          </p>
        </AnimatedSection>

        {/* Main Content Grid */}
        <div className="grid lg:grid-cols-12 gap-12 items-center mb-20">
          {/* Left Content - Image & Stats */}
          <div className="lg:col-span-6">
            <AnimatedSection delay={0.2}>
              <div className="relative">
                {/* Main Image */}
                <div className="relative h-96 rounded-3xl overflow-hidden modern-shadow">
                  <Image
                    src="https://images.unsplash.com/photo-1625246333195-78d9c38ad449?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80"
                    alt="Petani Modern ANTaM"
                    fill
                    className="object-cover"
                    sizes="100vw"
                    priority
                  />
                  <div className="absolute inset-0 bg-gradient-to-tr from-indigo-900/20 to-transparent"></div>
                </div>

                {/* Floating Stats Card */}
                <motion.div
                  whileHover={{ y: -5 }}
                  className="absolute -bottom-4 -right-4 md:-bottom-8 md:-right-4 bg-white/90 backdrop-blur-xl rounded-2xl p-4 md:p-6 modern-shadow border border-white/20"
                >
                  <div className="text-center">
                    <div className="text-xl md:text-3xl font-bold text-gradient-modern mb-1">
                      154+
                    </div>
                    <div className="text-sm font-medium text-slate-600">
                      Hektar Lahan
                    </div>
                  </div>
                </motion.div>

                {/* Decorative Elements */}
                <div className="absolute -top-4 -left-4 w-24 h-24 bg-gradient-to-br from-cyan-400 to-blue-500 rounded-full opacity-20 blur-xl"></div>
                <div className="absolute -bottom-4 -right-4 w-32 h-32 bg-gradient-to-br from-purple-400 to-pink-500 rounded-full opacity-20 blur-xl"></div>
              </div>
            </AnimatedSection>
          </div>

          {/* Right Content - Features */}
          <div className="lg:col-span-6">
            <AnimatedSection delay={0.4}>
              <div className="space-y-8">
                <div>
                  <h3 className="heading-md mb-6 text-slate-800">
                    Program Sahabat ARW
                  </h3>
                  <p className="body-md text-slate-600 mb-8">
                    Kami mengembangkan ekosistem pertanian yang terintegrasi,
                    memberikan dukungan menyeluruh mulai dari perencanaan hingga
                    pemasaran hasil panen.
                  </p>
                </div>

                {/* Feature Cards */}
                <div className="space-y-6">
                  {features.map((feature, index) => (
                    <motion.div
                      key={index}
                      whileHover={{ scale: 1.01 }}
                      className="group relative"
                    >
                      <div className="flex items-start space-x-4 p-6 bg-white/70 backdrop-blur-sm rounded-2xl border border-white/20 soft-shadow hover:shadow-xl transition-all duration-300">
                        <div
                          className={`p-3 ${feature.bgColor} rounded-xl ${feature.textColor} group-hover:scale-110 transition-transform duration-300`}
                        >
                          {feature.icon}
                        </div>
                        <div className="flex-1">
                          <h4 className="text-lg font-bold text-slate-800 mb-2 group-hover:text-indigo-600 transition-colors">
                            {feature.title}
                          </h4>
                          <p className="text-slate-600 leading-relaxed">
                            {feature.description}
                          </p>
                        </div>
                      </div>

                      {/* Gradient border effect */}
                      <div
                        className={`absolute inset-0 bg-gradient-to-r ${feature.color} rounded-2xl opacity-0 group-hover:opacity-20 transition-opacity duration-300 -z-10 blur-[2px]`}
                      ></div>
                    </motion.div>
                  ))}
                </div>
              </div>
            </AnimatedSection>
          </div>
        </div>

        <AnimatedSection delay={0.6} className="mb-20">
          <div className="relative overflow-hidden rounded-3xl bg-gradient-to-r from-blue-900 via-blue-800 to-blue-700 p-6 sm:p-8 lg:p-12 modern-shadow">
            <div
              className="absolute inset-0 pointer-events-none z-0"
              style={{
                backgroundImage: `url("data:image/svg+xml;utf8,${encodedBatik}")`,
                backgroundSize: isMobile ? "80px 80px" : "60px 60px",
                backgroundRepeat: "repeat",
              }}
            />

            <div className="text-center mb-8 sm:mb-12 relative z-10">
              <h3 className="text-2xl sm:text-3xl font-bold text-white mb-4">
                Pencapaian Program GeMAR
              </h3>
              <p className="text-sm sm:text-base text-slate-300">
                Data real-time yang menunjukkan kesuksesan program kami
              </p>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6 relative z-10">
              {achievements.map((stat, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{
                    duration: 0.5,
                    delay: 0.1 * index,
                    ease: "easeOut",
                  }}
                  className="backdrop-blur-sm bg-white/10 border border-white/20 rounded-2xl p-4 sm:p-6 text-center group hover:bg-white/20 transition-colors"
                >
                  <div
                    className={`font-extrabold mb-2 ${
                      index === 0
                        ? "bg-clip-text text-transparent bg-gradient-to-r from-yellow-300 to-yellow-500"
                        : index === 1
                        ? "text-gradient-warm"
                        : index === 2
                        ? "text-purple-400"
                        : "text-emerald-400"
                    } text-3xl sm:text-4xl lg:text-5xl`}
                  >
                    {stat.number}
                    {stat.suffix}
                  </div>
                  <div className="h-1 w-12 sm:w-12 mx-auto mb-4 bg-gradient-to-r from-blue-600 to-blue-400 rounded-full group-hover:w-16 transition-all duration-300" />
                  <div className="text-xs sm:text-sm text-slate-200 font-medium">
                    {stat.label}
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </AnimatedSection>

        {/* Leadership & Values */}
        <div className="grid lg:grid-cols-2 gap-12">
          {/* Leadership */}
          <AnimatedSection delay={0.2}>
            <div className="floating-card h-full p-6">
              <div className="text-center mb-8">
                <div className="relative inline-block mb-6">
                  <img
                    src="/direktur-antam.webp"
                    alt="Andi Restu Wibowo"
                    className="w-28 h-28 object-cover rounded-full border-4 border-indigo-500 shadow-lg"
                  />
                </div>

                <h3 className="text-2xl font-bold text-slate-800 mb-1">
                  Andi Restu Wibowo
                </h3>
                <p className="text-indigo-600 font-semibold mb-4">
                  Direktur Utama PT ANTaM
                </p>

                <blockquote className="text-slate-600 italic leading-relaxed max-w-xl mx-auto">
                  &ldquo;Kami berharap terdapat generasi petani muda yang sukses
                  dan memiliki mindset bisnis yang baik, bukan hanya sebagai
                  penggarap lahan biasa.&rdquo;
                </blockquote>
              </div>
            </div>
          </AnimatedSection>

          {/* Company Values */}
          <AnimatedSection delay={0.4}>
            <div className="floating-card h-full p-6">
              <h3 className="text-2xl font-bold text-slate-800 mb-8 text-center">
                Nilai-Nilai Kami
              </h3>

              <div className="space-y-6">
                {values.map((value, index) => (
                  <motion.div
                    key={index}
                    whileHover={{ x: 4 }}
                    className="flex items-start space-x-4 p-4 rounded-xl hover:bg-slate-50 transition-all duration-300"
                  >
                    <div className="p-2 bg-gradient-to-br from-blue-100 to-purple-100 rounded-lg text-blue-800">
                      {value.icon}
                    </div>
                    <div>
                      <h4 className="font-bold text-slate-800 mb-1">
                        {value.title}
                      </h4>
                      <p className="text-slate-600 text-sm leading-relaxed">
                        {value.description}
                      </p>
                    </div>
                  </motion.div>
                ))}
              </div>

              <div className="mt-10 pt-6 border-t border-slate-200 text-center">
                <p className="text-slate-600 text-sm">
                  Nilai-nilai ini menjadi dasar dari setiap langkah dan
                  keputusan kami, mencerminkan komitmen untuk tumbuh bersama
                  mitra dan komunitas.
                </p>
              </div>
            </div>
          </AnimatedSection>
        </div>
      </div>
    </section>
  );
}
