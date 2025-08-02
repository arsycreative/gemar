"use client";
import { motion } from "framer-motion";
import AnimatedSection from "../animations/AnimatedSection";
import {
  BuildingOfficeIcon,
  UserGroupIcon,
  MapIcon,
  ArrowTrendingUpIcon,
} from "@heroicons/react/24/outline";

export default function Statistics() {
  const bumdesStats = [
    { label: "Tumbuh", count: 2757, color: "bg-green-500" },
    { label: "Berkembang", count: 4002, color: "bg-blue-500" },
    { label: "Maju", count: 597, color: "bg-purple-500" },
    { label: "Dasar", count: 179, color: "bg-orange-500" },
  ];

  const achievements = [
    {
      icon: <MapIcon className="h-8 w-8" />,
      number: "154",
      label: "Hektar Lahan",
      subtitle: "Total lahan pertanian",
    },
    {
      icon: <UserGroupIcon className="h-8 w-8" />,
      number: "100+",
      label: "Petani Terlibat",
      subtitle: "Petani aktif program",
    },
    {
      icon: <BuildingOfficeIcon className="h-8 w-8" />,
      number: "98",
      label: "BUMDes Tertarik",
      subtitle: "BUMDes Kabupaten Blora",
    },
    {
      icon: <ArrowTrendingUpIcon className="h-8 w-8" />,
      number: "0%",
      label: "Tingkat Kerugian",
      subtitle: "Dengan program GeMAR",
    },
  ];

  return (
    <section
      id="statistics"
      className="py-20 bg-gradient-to-br from-blue-50 to-indigo-100"
    >
      <div className="container mx-auto px-6">
        <AnimatedSection className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-800 mb-6">
            Statistik & <span className="text-gradient">Pencapaian</span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
            Data dan pencapaian program GeMAR dalam mendukung ketahanan pangan
            nasional
          </p>
        </AnimatedSection>

        {/* BUMDes Statistics */}
        <AnimatedSection delay={0.2} className="mb-16">
          <div className="bg-white rounded-2xl p-8 card-shadow">
            <h3 className="text-2xl font-bold text-gray-800 text-center mb-8">
              Status BUMDes Saat Ini
            </h3>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
              {bumdesStats.map((stat, index) => (
                <motion.div
                  key={index}
                  whileHover={{ scale: 1.05 }}
                  className="text-center"
                >
                  <div
                    className={`w-20 h-20 ${stat.color} rounded-full flex items-center justify-center mx-auto mb-4`}
                  >
                    <span className="text-white font-bold text-xl">
                      {stat.count.toLocaleString()}
                    </span>
                  </div>
                  <h4 className="font-semibold text-gray-800 mb-1">
                    {stat.label}
                  </h4>
                  <p className="text-sm text-gray-600">BUMDes</p>
                </motion.div>
              ))}
            </div>
          </div>
        </AnimatedSection>

        {/* Achievements Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
          {achievements.map((achievement, index) => (
            <AnimatedSection key={index} delay={index * 0.1}>
              <motion.div
                whileHover={{ y: -10 }}
                className="bg-white rounded-2xl p-6 text-center card-shadow hover:shadow-xl transition-all duration-300"
              >
                <div className="text-blue-600 mb-4 flex justify-center">
                  {achievement.icon}
                </div>
                <motion.div
                  initial={{ scale: 0 }}
                  whileInView={{ scale: 1 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  className="text-3xl font-bold text-gray-800 mb-2"
                >
                  {achievement.number}
                </motion.div>
                <h4 className="font-semibold text-gray-800 mb-1">
                  {achievement.label}
                </h4>
                <p className="text-sm text-gray-600">{achievement.subtitle}</p>
              </motion.div>
            </AnimatedSection>
          ))}
        </div>

        <AnimatedSection delay={0.6}>
          <div className="bg-gradient-to-br from-blue-900 via-blue-800 to-blue-900 rounded-2xl p-8 text-white text-center">
            <blockquote className="text-2xl md:text-3xl font-bold mb-4 leading-relaxed">
              &ldquo;Keberhasilan GeMAR menginspirasi 85 BUMDes di Kabupaten
              Blora untuk berkomitmen turut serta dalam program&rdquo;
            </blockquote>
            <p className="text-blue-200">
              Program kolaborasi PT ANTaM dengan Asosiasi BUMDesma LKD Kabupaten
              Blora
            </p>
          </div>
        </AnimatedSection>
      </div>
    </section>
  );
}
