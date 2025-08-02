"use client";
import { motion } from "framer-motion";
import AnimatedSection from "../animations/AnimatedSection";
import {
  MapIcon,
  ClockIcon,
  SparklesIcon,
  GlobeAsiaAustraliaIcon,
  BuildingOffice2Icon,
  TrophyIcon,
  ArrowRightIcon,
} from "@heroicons/react/24/outline";

export default function Timeline() {
  const timelineData = [
    {
      id: 1,
      period: "3 Bulan",
      title: "Ekspansi Jawa Tengah",
      region: "Pulau Jawa",
      description:
        "Launching program bersama Kemendes untuk implementasi GeMAR di seluruh BUMDes Jawa Tengah dengan fokus pada pelatihan dan sertifikasi intensif.",
      target: "7.882 BUMDes/BUMDesMa",
      progress: 85,
      status: "In Progress",
      gradient: "from-emerald-500 to-teal-500",
      bgColor: "bg-emerald-50",
      icon: <BuildingOffice2Icon className="h-6 w-6" />,
      achievements: [
        "Program pilot di 15 kabupaten",
        "Pelatihan 500+ pengurus BUMDes",
        "Sertifikasi Anti Rugi tersedia",
      ],
    },
    {
      id: 2,
      period: "6 Bulan",
      title: "Konsolidasi Regional",
      region: "Jawa Tengah Complete",
      description:
        "Implementasi penuh di seluruh BUMDes Jawa Tengah dengan sistem monitoring digital dan evaluasi berkelanjutan untuk optimalisasi program.",
      target: "23.397 BUMDes/BUMDesMa",
      progress: 45,
      status: "Planning",
      gradient: "from-blue-500 to-indigo-500",
      bgColor: "bg-blue-50",
      icon: <GlobeAsiaAustraliaIcon className="h-6 w-6" />,
      achievements: [
        "Digital monitoring system",
        "Regional coordination hub",
        "Best practices documentation",
      ],
    },
    {
      id: 3,
      period: "1 Tahun",
      title: "Ekspansi Multi-Regional",
      region: "Sumatera & Indonesia Timur",
      description:
        "Sosialisasi dan implementasi bertahap di Sumatera (Sumut, Bengkulu, Jambi, Lampung, Sumsel) dan Indonesia Timur (Bali, NTT, NTB) dengan adaptasi lokal.",
      target: "34.918 BUMDes/BUMDesMa",
      progress: 15,
      status: "Future",
      gradient: "from-purple-500 to-pink-500",
      bgColor: "bg-purple-50",
      icon: <MapIcon className="h-6 w-6" />,
      achievements: [
        "Regional adaptation strategy",
        "Local partnership development",
        "Cultural integration approach",
      ],
    },
    {
      id: 4,
      period: "3 Tahun",
      title: "Implementasi Nasional",
      region: "Seluruh Indonesia",
      description:
        "Pencapaian target nasional dengan jangkauan seluruh BUMDes Indonesia untuk mewujudkan swasembada pangan dan Asta Cita Presiden yang ke-6.",
      target: "65.873 BUMDes/BUMDesMa",
      progress: 5,
      status: "Vision",
      gradient: "from-orange-500 to-red-500",
      bgColor: "bg-orange-50",
      icon: <TrophyIcon className="h-6 w-6" />,
      achievements: [
        "National food security",
        "Complete digital ecosystem",
        "Sustainable agriculture network",
      ],
    },
  ];

  const milestones = [
    {
      year: "2024",
      title: "Foundation Year",
      description: "Pilot program dan proof of concept",
      color: "text-emerald-600",
    },
    {
      year: "2025",
      title: "Expansion Phase",
      description: "Regional scaling dan optimization",
      color: "text-blue-600",
    },
    {
      year: "2026",
      title: "National Reach",
      description: "Multi-regional implementation",
      color: "text-purple-600",
    },
    {
      year: "2027",
      title: "Full Coverage",
      description: "Complete national transformation",
      color: "text-orange-600",
    },
  ];

  const visionPillars = [
    {
      title: "Swasembada Pangan",
      description:
        "Kemandirian pangan nasional melalui peningkatan produktivitas dan efisiensi pertanian modern",
      icon: <SparklesIcon className="h-8 w-8" />,
      color: "from-emerald-500 to-teal-500",
    },
    {
      title: "Pemberdayaan Desa",
      description:
        "Membangun dari desa untuk pemerataan ekonomi dan pengentasan kemiskinan struktural",
      icon: <BuildingOffice2Icon className="h-8 w-8" />,
      color: "from-blue-500 to-indigo-500",
    },
  ];

  return (
    <section id="timeline" className="section-padding bg-white">
      <div className="container-modern">
        {/* Header */}
        <AnimatedSection className="text-center mb-20">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            className="inline-flex items-center space-x-2 bg-gradient-to-r from-purple-100 to-orange-100 rounded-full px-6 py-3 mb-6"
          >
            <ClockIcon className="h-5 w-5 text-purple-600" />
            <span className="text-sm font-semibold text-purple-800">
              Roadmap Strategis
            </span>
          </motion.div>

          <h2 className="heading-lg mb-6 text-slate-800">
            Roadmap{" "}
            <span className="text-gradient-modern">Perluasan GeMAR</span>
          </h2>

          <p className="body-lg text-slate-600 max-w-4xl mx-auto">
            Rencana strategis transformasi pertanian Indonesia dalam 5 tahun ke
            depan untuk mewujudkan kedaulatan pangan melalui implementasi GeMAR
            secara nasional.
          </p>
        </AnimatedSection>

        {/* Timeline Milestones */}
        <AnimatedSection delay={0.2} className="mb-20">
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-6">
            {milestones.map((milestone, index) => (
              <motion.div
                key={index}
                whileHover={{ y: -5 }}
                className="text-center group"
              >
                <div className="relative mb-4">
                  <div
                    className={`text-4xl font-bold ${milestone.color} group-hover:scale-110 transition-transform duration-300`}
                  >
                    {milestone.year}
                  </div>
                  <div className="w-12 h-1 bg-gradient-to-r from-current to-transparent rounded-full mx-auto mt-2"></div>
                </div>
                <h4 className="font-bold text-slate-800 mb-2">
                  {milestone.title}
                </h4>
                <p className="text-sm text-slate-600 leading-relaxed">
                  {milestone.description}
                </p>
              </motion.div>
            ))}
          </div>
        </AnimatedSection>

        {/* Main Timeline */}
        <div className="relative mb-20">
          {/* Timeline Line */}
          <div className="absolute left-8 lg:left-1/2 transform lg:-translate-x-0.5 top-0 bottom-0 w-1 bg-gradient-to-b from-emerald-400 via-blue-400 to-orange-400 rounded-full"></div>

          {/* Timeline Items */}
          <div className="space-y-16">
            {timelineData.map((item, index) => (
              <AnimatedSection key={item.id} delay={index * 0.2}>
                <div
                  className={`relative flex items-center ${
                    index % 2 === 0 ? "lg:flex-row" : "lg:flex-row-reverse"
                  }`}
                >
                  {/* Timeline Dot */}
                  <div className="absolute left-8 lg:left-1/2 transform -translate-x-1/2 z-10">
                    <motion.div
                      whileHover={{ scale: 1.2 }}
                      className={`w-16 h-16 bg-gradient-to-br ${item.gradient} rounded-2xl flex items-center justify-center text-white shadow-lg border-4 border-white`}
                    >
                      {item.icon}
                    </motion.div>
                  </div>

                  {/* Content Card */}
                  <motion.div
                    whileHover={{ y: -8, scale: 1.02 }}
                    className={`w-full lg:w-5/12 ml-20 lg:ml-0 ${
                      index % 2 === 0
                        ? "lg:mr-auto lg:pr-16"
                        : "lg:ml-auto lg:pl-16"
                    }`}
                  >
                    <div className="floating-card group">
                      {/* Header */}
                      <div className="flex items-start justify-between mb-6">
                        <div>
                          <div className="flex items-center space-x-3 mb-2">
                            <span
                              className={`px-3 py-1 bg-gradient-to-r ${item.gradient} text-white text-sm font-bold rounded-full`}
                            >
                              {item.period}
                            </span>
                            <span
                              className={`px-2 py-1 text-xs rounded-full font-medium ${
                                item.status === "In Progress"
                                  ? "bg-emerald-100 text-emerald-700"
                                  : item.status === "Planning"
                                  ? "bg-blue-100 text-blue-700"
                                  : item.status === "Future"
                                  ? "bg-purple-100 text-purple-700"
                                  : "bg-orange-100 text-orange-700"
                              }`}
                            >
                              {item.status}
                            </span>
                          </div>
                          <h3 className="text-2xl font-bold text-slate-800 group-hover:text-indigo-600 transition-colors">
                            {item.title}
                          </h3>
                          <p className="text-indigo-600 font-semibold">
                            {item.region}
                          </p>
                        </div>

                        {/* Progress Ring */}
                        <div className="relative w-16 h-16">
                          <svg
                            className="w-16 h-16 transform -rotate-90"
                            viewBox="0 0 64 64"
                          >
                            <circle
                              cx="32"
                              cy="32"
                              r="28"
                              fill="none"
                              stroke="#e5e7eb"
                              strokeWidth="4"
                            />
                            <circle
                              cx="32"
                              cy="32"
                              r="28"
                              fill="none"
                              stroke={`url(#gradient-${item.id})`}
                              strokeWidth="4"
                              strokeDasharray={`${item.progress * 1.76} 176`}
                              strokeLinecap="round"
                            />
                            <defs>
                              <linearGradient
                                id={`gradient-${item.id}`}
                                x1="0%"
                                y1="0%"
                                x2="100%"
                                y2="100%"
                              >
                                <stop
                                  offset="0%"
                                  stopColor={
                                    item.gradient.includes("emerald")
                                      ? "#10b981"
                                      : item.gradient.includes("blue")
                                      ? "#3b82f6"
                                      : item.gradient.includes("purple")
                                      ? "#8b5cf6"
                                      : "#f59e0b"
                                  }
                                />
                                <stop
                                  offset="100%"
                                  stopColor={
                                    item.gradient.includes("emerald")
                                      ? "#14b8a6"
                                      : item.gradient.includes("blue")
                                      ? "#6366f1"
                                      : item.gradient.includes("purple")
                                      ? "#ec4899"
                                      : "#ef4444"
                                  }
                                />
                              </linearGradient>
                            </defs>
                          </svg>
                          <div className="absolute inset-0 flex items-center justify-center">
                            <span className="text-sm font-bold text-slate-700">
                              {item.progress}%
                            </span>
                          </div>
                        </div>
                      </div>

                      {/* Description */}
                      <p className="text-slate-600 leading-relaxed mb-6">
                        {item.description}
                      </p>

                      {/* Achievements */}
                      <div className="mb-6">
                        <h4 className="font-semibold text-slate-800 mb-3">
                          Key Milestones:
                        </h4>
                        <div className="space-y-2">
                          {item.achievements.map((achievement, achIndex) => (
                            <div
                              key={achIndex}
                              className="flex items-center space-x-3"
                            >
                              <div
                                className={`w-2 h-2 bg-gradient-to-r ${item.gradient} rounded-full`}
                              ></div>
                              <span className="text-sm text-slate-600">
                                {achievement}
                              </span>
                            </div>
                          ))}
                        </div>
                      </div>

                      {/* Target */}
                      <div
                        className={`p-4 ${
                          item.bgColor
                        } rounded-2xl border-l-4 border-gradient-to-b ${
                          item.gradient
                            .replace("from-", "border-l-")
                            .split(" ")[0]
                        }`}
                      >
                        <div className="flex items-center justify-between">
                          <div>
                            <span className="text-sm font-medium text-slate-700">
                              Target Coverage:
                            </span>
                            <div className="font-bold text-lg text-slate-800">
                              {item.target}
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </motion.div>
                </div>
              </AnimatedSection>
            ))}
          </div>
        </div>

        {/* Vision Statement */}
        <AnimatedSection delay={0.8} className="mb-12">
          <div className="relative">
            <div
              className="absolute inset-0 rounded-3xl"
              style={{
                background: `linear-gradient(
                135deg,
                #020617 0%,      /* almost black-blue */
                #0b123f 50%,     /* deep navy */
                #020617 100%
              )`,
              }}
            ></div>
            {/* Overlay */}
            <div className="absolute inset-0 bg-gradient-to-tr from-blue-500/40 to-blue-700/40 rounded-3xl"></div>

            {/* Content */}
            <div className="relative p-12">
              <div className="text-center mb-12">
                <SparklesIcon className="h-12 w-12 text-yellow-400 mx-auto mb-6" />
                <h3 className="text-3xl lg:text-4xl font-bold text-white mb-6">
                  Visi 5 Tahun GeMAR
                </h3>
                <blockquote className="text-xl lg:text-2xl font-semibold text-slate-200 mb-6 leading-relaxed italic max-w-4xl mx-auto">
                  &ldquo;Dalam 5 Tahun Program GeMAR dapat diterapkan secara
                  Nasional melalui Kemendes sehingga mampu mewujudkan swasembada
                  pangan dan mewujudkan Asta Cita Presiden yang ke-6&rdquo;
                </blockquote>
              </div>

              <div className="grid lg:grid-cols-2 gap-8">
                {visionPillars.map((pillar, index) => (
                  <motion.div
                    key={index}
                    whileHover={{ y: -5 }}
                    className="bg-white/10 backdrop-blur-xl rounded-2xl p-8 border border-white/20 group"
                  >
                    <div
                      className={`inline-flex p-4 bg-gradient-to-br ${pillar.color} rounded-2xl text-white mb-6 group-hover:scale-110 transition-transform duration-300`}
                    >
                      {pillar.icon}
                    </div>
                    <h4 className="text-2xl font-bold text-white mb-4 group-hover:text-cyan-400 transition-colors">
                      {pillar.title}
                    </h4>
                    <p className="text-slate-300 leading-relaxed">
                      {pillar.description}
                    </p>
                  </motion.div>
                ))}
              </div>

              {/* National Impact Stats */}
              <div className="mt-12 pt-8 border-t border-white/20">
                <div className="grid grid-cols-2 lg:grid-cols-4 gap-8 text-center">
                  <div>
                    <div className="text-3xl font-bold text-cyan-400 mb-2">
                      65,873
                    </div>
                    <div className="text-slate-300 text-sm">
                      Total BUMDes Target
                    </div>
                  </div>
                  <div>
                    <div className="text-3xl font-bold text-purple-400 mb-2">
                      34
                    </div>
                    <div className="text-slate-300 text-sm">
                      Provinsi Coverage
                    </div>
                  </div>
                  <div>
                    <div className="text-3xl font-bold text-emerald-400 mb-2">
                      500K+
                    </div>
                    <div className="text-slate-300 text-sm">
                      Petani Terdampak
                    </div>
                  </div>
                  <div>
                    <div className="text-3xl font-bold text-yellow-400 mb-2">
                      100%
                    </div>
                    <div className="text-slate-300 text-sm">Food Security</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </AnimatedSection>
      </div>
    </section>
  );
}
