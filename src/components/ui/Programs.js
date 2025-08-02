"use client";
import { motion } from "framer-motion";
import AnimatedSection from "../animations/AnimatedSection";
import {
  MapPinIcon,
  CalendarIcon,
  UserGroupIcon,
  CheckCircleIcon,
  ShieldCheckIcon,
  TruckIcon,
  ChartBarIcon,
  SparklesIcon,
} from "@heroicons/react/24/outline";
import Image from "next/image";
import { encodedBatik } from "@/libs/utils";

export default function Programs() {
  const programs = [
    {
      id: 1,
      title: "Program Jagung Pioneer",
      location: "Menden, Blora",
      area: "10 Hektar",
      period: "Oktober 2024",
      type: "Swakelola Mandiri",
      status: "Completed",
      image:
        "https://images.unsplash.com/photo-1574323347407-f5e1ad6d020b?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
      participants: "Pilot Project",
      gradient: "from-blue-800 to-blue-400",
      bgColor: "bg-emerald-50",
      results: {
        success: "100%",
        yield: "8.2 ton/ha",
        profit: "125%",
      },
    },
    {
      id: 2,
      title: "Program Jagung & Padi Terintegrasi",
      location: "Menden dan Gondel, Blora",
      area: "154 Hektar",
      period: "Januari - Februari 2025",
      type: "Kolaboratif Community",
      status: "Active",
      image:
        "https://images.unsplash.com/photo-1500382017468-9049fed747ef?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
      participants: "100+ Petani",
      gradient: "from-blue-800 to-blue-400",
      bgColor: "bg-blue-50",
      results: {
        success: "95%",
        yield: "Progress",
        profit: "Projected 140%",
      },
    },
  ];

  const geMarFeatures = [
    {
      icon: <CheckCircleIcon className="h-6 w-6" />,
      title: "Sertifikasi Anti Rugi",
      description:
        "Certified program untuk BUMDes dan BUMDesma dengan standar nasional",
      color: "text-emerald-600",
    },
    {
      icon: <ShieldCheckIcon className="h-6 w-6" />,
      title: "Jaminan Kerugian",
      description:
        "Penggantian 100% kerugian akibat hama, penyakit dan cuaca ekstrem",
      color: "text-blue-600",
    },
    {
      icon: <TruckIcon className="h-6 w-6" />,
      title: "Akses Pasar Terjamin",
      description:
        "Penjualan langsung melalui jejaring ANTaM tanpa perantara tengkulak",
      color: "text-purple-600",
    },
    {
      icon: <ChartBarIcon className="h-6 w-6" />,
      title: "Kepastian Berusaha",
      description:
        "Tingkat kepastian usaha lebih tinggi dengan dukungan teknologi modern",
      color: "text-orange-600",
    },
  ];

  const processSteps = [
    {
      step: "01",
      title: "Assessment & Planning",
      description:
        "Analisis lahan dan perencanaan strategis bersama ahli agronomi",
      icon: <ChartBarIcon className="h-6 w-6" />,
    },
    {
      step: "02",
      title: "Implementation",
      description:
        "Eksekusi program dengan pendampingan intensif dan monitoring real-time",
      icon: <SparklesIcon className="h-6 w-6" />,
    },
    {
      step: "03",
      title: "Harvest & Marketing",
      description:
        "Panen optimal dan pemasaran melalui jaringan distribusi terpercaya",
      icon: <TruckIcon className="h-6 w-6" />,
    },
  ];

  const isMobile = typeof window !== "undefined" && window.innerWidth < 640;

  return (
    <section id="programs" className="section-padding bg-white">
      <div className="container-modern">
        {/* Header */}
        <AnimatedSection className="text-center mb-20">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            className="inline-flex items-center space-x-2 bg-gradient-to-r from-purple-100 to-pink-100 rounded-full px-6 py-3 mb-6"
          >
            <SparklesIcon className="h-5 w-5 text-purple-600" />
            <span className="text-sm font-semibold text-purple-800">
              Program GeMAR
            </span>
          </motion.div>

          <h2 className="heading-lg mb-6 text-slate-800">
            Gerakan Menanam{" "}
            <span className="text-gradient-modern">Anti Rugi</span>
          </h2>

          <p className="body-lg text-slate-600 max-w-4xl mx-auto">
            Program revolusioner yang mendukung Kepmendes No. 3 Tahun 2025 untuk
            menjamin keberlangsungan usaha ketahanan pangan melalui inovasi
            teknologi pertanian terdepan.
          </p>
        </AnimatedSection>

        <div className="space-y-12 mb-20">
          {programs.map((program, index) => (
            <AnimatedSection key={program.id} delay={index * 0.2}>
              <motion.div whileHover={{ y: -8 }} className="group relative">
                <div
                  className={`grid lg:grid-cols-12 gap-8 items-center ${
                    index % 2 === 1 ? "lg:grid-flow-col-dense" : ""
                  }`}
                >
                  {/* Image */}
                  <div
                    className={`lg:col-span-6 ${
                      index % 2 === 1 ? "lg:col-start-7" : ""
                    }`}
                  >
                    <div className="relative rounded-3xl overflow-hidden modern-shadow group-hover:shadow-2xl transition-all duration-500">
                      <div className="relative w-full h-80">
                        <Image
                          src={program.image}
                          alt={program.title}
                          fill
                          className="object-cover group-hover:scale-110 transition-transform duration-700"
                          sizes="(max-width: 768px) 100vw, 50vw"
                          priority
                        />
                      </div>
                      <div className="absolute inset-0 bg-gradient-to-tr from-black/50 via-transparent to-transparent" />
                      <div className="absolute top-6 left-6">
                        <span
                          className={`inline-flex items-center px-4 py-2 rounded-full text-sm font-semibold ${
                            program.status === "Completed"
                              ? "bg-emerald-100 text-emerald-800"
                              : "bg-blue-100 text-blue-800 animate-pulse"
                          }`}
                        >
                          {program.status === "Completed"
                            ? "✓ Selesai"
                            : "⏳ Aktif"}
                        </span>
                      </div>

                      <div className="relative lg:absolute lg:bottom-6 lg:right-6 bg-white/90 backdrop-blur-xl rounded-none lg:rounded-2xl p-4 lg:min-w-[200px] lg:mt-0">
                        <div className="grid grid-cols-3 gap-3 text-center">
                          <div>
                            <div className="text-lg font-bold text-emerald-600">
                              {program.results.success}
                            </div>
                            <div className="text-xs text-slate-600">
                              Success
                            </div>
                          </div>
                          <div>
                            <div className="text-lg font-bold text-blue-600">
                              {program.results.yield}
                            </div>
                            <div className="text-xs text-slate-600">Yield</div>
                          </div>
                          <div>
                            <div className="text-lg font-bold text-purple-600">
                              {program.results.profit}
                            </div>
                            <div className="text-xs text-slate-600">Profit</div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>

                  {/* Content */}
                  <div
                    className={`lg:col-span-6 ${
                      index % 2 === 1 ? "lg:col-start-1" : ""
                    }`}
                  >
                    <div className="space-y-6">
                      <div>
                        <div className="flex items-center space-x-3 mb-4">
                          <span
                            className={`px-3 py-1 bg-gradient-to-r ${program.gradient} text-white text-sm font-semibold rounded-full`}
                          >
                            {program.type}
                          </span>
                          <span className="text-sm text-slate-500">
                            #{program.id.toString().padStart(2, "0")}
                          </span>
                        </div>

                        <h3 className="text-3xl font-bold text-slate-800 mb-4 group-hover:text-blue-800 transition-colors">
                          {program.title}
                        </h3>
                      </div>

                      <div className="grid sm:grid-cols-2 gap-4">
                        <div className="flex items-center space-x-3 text-slate-600">
                          <MapPinIcon className="h-5 w-5 text-indigo-500" />
                          <span className="font-medium">
                            {program.location}
                          </span>
                        </div>
                        <div className="flex items-center space-x-3 text-slate-600">
                          <CalendarIcon className="h-5 w-5 text-purple-500" />
                          <span className="font-medium">{program.period}</span>
                        </div>
                        <div className="flex items-center space-x-3 text-slate-600">
                          <UserGroupIcon className="h-5 w-5 text-emerald-500" />
                          <span className="font-medium">
                            {program.participants}
                          </span>
                        </div>
                        <div className="flex items-center space-x-3 text-slate-600">
                          <ChartBarIcon className="h-5 w-5 text-orange-500" />
                          <span className="font-medium">{program.area}</span>
                        </div>
                      </div>

                      {/* Description */}
                      <p className="text-slate-600 leading-relaxed">
                        {program.id === 1
                          ? "Program pilot yang membuktikan efektivitas metode GeMAR dengan hasil yang menggembirakan. Menjadi foundation untuk ekspansi program ke area yang lebih luas."
                          : "Program kolaboratif skala besar yang melibatkan komunitas petani lokal dengan pendekatan terintegrasi untuk mengoptimalkan hasil panen jagung dan padi."}
                      </p>
                    </div>
                  </div>
                </div>
              </motion.div>
            </AnimatedSection>
          ))}
        </div>

        <AnimatedSection delay={0.4} className="mb-20">
          <div className="relative overflow-hidden rounded-3xl">
            <div
              className="absolute inset-0 pointer-events-none z-[-1]"
              style={{
                backgroundImage: `url("data:image/svg+xml;utf8,${encodedBatik}")`,
                backgroundSize: isMobile ? "80px 80px" : "60px 60px",
                backgroundRepeat: "repeat",
              }}
            />

            <div className="absolute inset-0 bg-gradient-to-br from-blue-900 via-blue-800 to-blue-900 rounded-3xl"></div>
            <div className="absolute inset-0 bg-gradient-to-tr from-blue-500/10 to-blue-400/10 rounded-3xl"></div>

            <div className="relative p-12">
              <div className="text-center mb-12">
                <h3 className="text-3xl font-bold text-white mb-4">
                  Keunggulan Program GeMAR
                </h3>
                <p className="text-slate-300 max-w-2xl mx-auto">
                  PT ANTaM mensertifikasi Menanam Anti Rugi kepada BUMDes dan
                  BUMDesma dengan berbagai keunggulan teknologi terdepan
                </p>
              </div>

              <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
                {geMarFeatures.map((feature, index) => (
                  <motion.div
                    key={index}
                    whileHover={{ y: -8, scale: 1.02 }}
                    className="group relative"
                  >
                    <div className="bg-white/10 backdrop-blur-xl rounded-2xl p-6 border border-white/20 hover:bg-white/20 transition-all duration-300">
                      <div
                        className={`p-3 bg-white/40 rounded-xl ${feature.color} mb-4 group-hover:scale-110 transition-transform duration-300`}
                      >
                        {feature.icon}
                      </div>
                      <h4 className="font-bold text-white mb-2 group-hover:text-cyan-400 transition-colors">
                        {feature.title}
                      </h4>
                      <p className="text-slate-300 text-sm leading-relaxed">
                        {feature.description}
                      </p>
                    </div>

                    {/* Glow effect on hover */}
                    <div className="absolute inset-0 bg-gradient-to-r from-cyan-400/20 to-blue-400/20 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-300 blur-xl -z-10"></div>
                  </motion.div>
                ))}
              </div>
            </div>
          </div>
        </AnimatedSection>

        <AnimatedSection delay={0.6} className="mb-20">
          <div className="text-center mb-12">
            <h3 className="text-3xl font-bold text-slate-800 mb-4">
              Proses Program GeMAR
            </h3>
            <p className="text-slate-600 max-w-2xl mx-auto">
              Metodologi yang terbukti untuk memastikan kesuksesan setiap
              program pertanian
            </p>
          </div>

          <div className="relative">
            <div className="hidden lg:block absolute top-1/2 left-0 right-0 h-0.5 bg-gradient-to-r from-blue-300 via-blue-400 to-blue-300 transform -translate-y-1/2"></div>

            <div className="grid lg:grid-cols-3 gap-8">
              {processSteps.map((step, index) => (
                <motion.div
                  key={index}
                  whileHover={{ y: -10 }}
                  className="relative group"
                >
                  <div className="floating-card text-center">
                    <div className="relative mb-6">
                      <div className="w-16 h-16 bg-gradient-to-br from-blue-500 to-blue-700 rounded-2xl flex items-center justify-center text-white font-bold text-xl mx-auto modern-shadow">
                        {step.step}
                      </div>
                      <div className="absolute -inset-2 bg-gradient-to-br from-blue-500 to-blue-700 rounded-2xl opacity-20 blur-lg group-hover:opacity-40 transition-opacity"></div>
                    </div>

                    <div className="text-blue-600 mb-4 flex justify-center">
                      {step.icon}
                    </div>

                    <h4 className="text-xl font-bold text-slate-800 mb-3 group-hover:text-blue-700 transition-colors">
                      {step.title}
                    </h4>
                    <p className="text-slate-600 leading-relaxed">
                      {step.description}
                    </p>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </AnimatedSection>

        {/* Partnership Section */}
        <AnimatedSection delay={0.8}>
          <div className="floating-card">
            <div className="grid lg:grid-cols-2 gap-12 items-center">
              <div>
                <h3 className="text-2xl font-bold text-slate-800 mb-4">
                  Kerjasama Strategis dengan ACA Insurance
                </h3>
                <p className="text-slate-600 leading-relaxed mb-6">
                  PT ANTaM memiliki track record agronomis yang solid, metode
                  tanam yang teruji, dan pengalaman yang diakui industri
                  sehingga dipercaya bekerjasama dengan ACA Insurance untuk
                  memberikan perlindungan terbaik.
                </p>

                <div className="space-y-4">
                  <div className="flex items-start space-x-3">
                    <CheckCircleIcon className="h-5 w-5 text-emerald-500 mt-0.5" />
                    <span className="text-slate-700">
                      Asuransi komprehensif meliputi hama, penyakit, dan cuaca
                    </span>
                  </div>
                  <div className="flex items-start space-x-3">
                    <CheckCircleIcon className="h-5 w-5 text-emerald-500 mt-0.5" />
                    <span className="text-slate-700">
                      Jaminan bagi hasil program untuk investor
                    </span>
                  </div>
                  <div className="flex items-start space-x-3">
                    <CheckCircleIcon className="h-5 w-5 text-emerald-500 mt-0.5" />
                    <span className="text-slate-700">
                      Proses klaim yang cepat dan terpercaya
                    </span>
                  </div>
                </div>
              </div>

              <div className="text-center">
                <div className="relative">
                  <div className="w-48 h-32 bg-gradient-to-br from-blue-100 via-indigo-100 to-purple-100 rounded-2xl flex items-center justify-center mx-auto border border-blue-200">
                    <div className="text-center">
                      <Image
                        src={"/aca-insurance.webp"}
                        alt="ACA Logo"
                        width={130}
                        height={130}
                      />
                    </div>
                  </div>
                  <div className="absolute -inset-4 bg-gradient-to-br from-blue-400/20 to-indigo-400/20 rounded-2xl blur-xl"></div>
                </div>
              </div>
            </div>
          </div>
        </AnimatedSection>
      </div>
    </section>
  );
}
