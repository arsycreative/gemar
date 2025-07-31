"use client";
import { motion } from "framer-motion";
import AnimatedSection from "../animations/AnimatedSection";
import {
  PhoneIcon,
  EnvelopeIcon,
  MapPinIcon,
  BuildingOffice2Icon,
  UserGroupIcon,
  DocumentTextIcon,
  ClockIcon,
  ArrowRightIcon,
  CheckCircleIcon,
  SparklesIcon,
  ChatBubbleLeftRightIcon,
} from "@heroicons/react/24/outline";
import { UsersIcon } from "lucide-react";
import { whatsappURL } from "./FloatingWhatsApp";

export default function Contact() {
  const contactMethods = [
    {
      icon: <BuildingOffice2Icon className="h-8 w-8 text-blue-700" />,
      title: "Kantor Pusat",
      subtitle: "PT Agro Nusantara Tani Milenial",
      details: "Jakarta, Indonesia",
      action: "Kunjungi Lokasi",
      gradient: "from-blue-500 to-indigo-500",
      bgColor: "bg-blue-50",
    },
    {
      icon: <PhoneIcon className="h-8 w-8" />,
      title: "Hubungi Langsung",
      subtitle: "Customer Service 24/7",
      details: "+62 8212 2662 776",
      action: "Telpon Sekarang",
      gradient: "from-emerald-500 to-teal-500",
      bgColor: "bg-emerald-50",
    },
    {
      icon: <EnvelopeIcon className="h-8 w-8" />,
      title: "Email Resmi",
      subtitle: "Informasi & Partnership",
      details: "info@antam.co.id",
      action: "Kirim Email",
      gradient: "from-purple-500 to-pink-500",
      bgColor: "bg-purple-50",
    },
    {
      icon: <UsersIcon className="h-8 w-8 text-orange-600" />,
      title: "Tim Support",
      subtitle: "Siap membantu kebutuhan Anda",
      details: "Balasan cepat saat jam kerja",
      action: "Kontak Support",
      gradient: "from-orange-500 to-red-500",
      bgColor: "bg-orange-50",
    },
  ];

  const collaborationSteps = [
    {
      step: "01",
      title: "Initial Consultation",
      description:
        "Konsultasi awal untuk memahami kebutuhan dan potensi kerjasama",
      icon: <ChatBubbleLeftRightIcon className="h-6 w-6" />,
    },
    {
      step: "02",
      title: "Perjanjian Kerja Sama",
      description: "Penandatanganan MoU antara PT ANTaM dengan BUMDes/BUMDesMa",
      icon: <DocumentTextIcon className="h-6 w-6" />,
    },
    {
      step: "03",
      title: "Pendampingan & Sertifikasi",
      description: "Pelatihan Anti Rugi dan sertifikasi untuk pengurus BUMDes",
      icon: <UserGroupIcon className="h-6 w-6" />,
    },
    {
      step: "04",
      title: "Implementasi Program",
      description: "Pelaksanaan GeMAR secara mandiri bersama masyarakat desa",
      icon: <SparklesIcon className="h-6 w-6" />,
    },
  ];

  const stakeholders = [
    {
      name: "Kementerian Desa dan PDT",
      role: "Koordinator Kebijakan",
      description: "Pengawasan dan koordinasi program tingkat nasional",
      icon: <BuildingOffice2Icon className="h-6 w-6" />,
      color: "text-blue-600",
    },
    {
      name: "Organisasi Perangkat Daerah",
      role: "Implementor Regional",
      description: "Pelaksana program di tingkat daerah",
      icon: <MapPinIcon className="h-6 w-6" />,
      color: "text-emerald-600",
    },
    {
      name: "BUM Desa & BUM Desa Bersama",
      role: "Mitra Strategis",
      description: "Pelaksana langsung program di tingkat desa",
      icon: <UserGroupIcon className="h-6 w-6" />,
      color: "text-purple-600",
    },
    {
      name: "Masyarakat Desa",
      role: "Beneficiary Utama",
      description: "Penerima manfaat dan peserta aktif program",
      icon: <UserGroupIcon className="h-6 w-6" />,
      color: "text-orange-600",
    },
    {
      name: "Off Taker Network",
      role: "Market Access",
      description: "Pabrik pakan, peternakan, dan pengolahan pangan",
      icon: <BuildingOffice2Icon className="h-6 w-6" />,
      color: "text-red-600",
    },
  ];

  const quickFacts = [
    {
      label: "Response Time",
      value: "< 24 Jam",
      icon: <ClockIcon className="h-5 w-5" />,
    },
    {
      label: "Success Rate",
      value: "99.8%",
      icon: <CheckCircleIcon className="h-5 w-5" />,
    },
    {
      label: "Partner Satisfaction",
      value: "4.9/5.0",
      icon: <SparklesIcon className="h-5 w-5" />,
    },
  ];

  return (
    <section id="contact" className="section-padding bg-white">
      <div className="container-modern">
        {/* Header */}
        <AnimatedSection className="text-center mb-20">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            className="inline-flex items-center space-x-2 bg-gradient-to-r from-indigo-100 to-purple-100 rounded-full px-6 py-3 mb-6"
          >
            <ChatBubbleLeftRightIcon className="h-5 w-5 text-indigo-600" />
            <span className="text-sm font-semibold text-indigo-800">
              Mari Berkolaborasi
            </span>
          </motion.div>

          <h2 className="heading-lg mb-6 text-slate-800">
            Bergabung dengan <span className="text-gradient-modern">GeMAR</span>
          </h2>

          <p className="body-lg text-slate-600 max-w-4xl mx-auto">
            Wujudkan visi kedaulatan pangan Indonesia bersama kami. Hubungi tim
            expert kami untuk memulai transformasi pertanian di daerah Anda.
          </p>
        </AnimatedSection>

        {/* Contact Methods */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-20">
          {contactMethods.map((method, index) => (
            <AnimatedSection key={index} delay={index * 0.1}>
              <motion.div
                whileHover={{ y: -10, scale: 1.02 }}
                className="floating-card text-center group cursor-pointer"
              >
                {/* Icon */}
                <div
                  className={`inline-flex p-4 ${method.bgColor} rounded-2xl ${
                    method.gradient.replace("from-", "text-").split(" ")[0]
                  } mb-6 group-hover:scale-110 transition-transform duration-300`}
                >
                  {method.icon}
                </div>

                {/* Content */}
                <h3 className="text-xl font-bold text-slate-800 mb-2 group-hover:text-blue-800 transition-colors">
                  {method.title}
                </h3>
                <p className="text-sm font-semibold text-slate-500 mb-3">
                  {method.subtitle}
                </p>
                <p className="text-slate-700 font-medium mb-6">
                  {method.details}
                </p>

                {/* CTA Button */}
                {/* <motion.button
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className={`w-full bg-gradient-to-r ${method.gradient} text-white px-4 py-3 rounded-xl font-semibold text-sm shadow-lg hover:shadow-xl transition-all flex items-center justify-center space-x-2`}
                >
                  <span>{method.action}</span>
                  <ArrowRightIcon className="h-4 w-4" />
                </motion.button> */}
              </motion.div>
            </AnimatedSection>
          ))}
        </div>

        {/* Collaboration Process */}
        <AnimatedSection delay={0.4} className="mb-24">
          <div className="floating-card px-6 py-12">
            <div className="text-center mb-14">
              <h3 className="text-4xl font-bold text-slate-800 mb-4">
                Proses Kerjasama GeMAR
              </h3>
              <p className="text-slate-600 max-w-xl mx-auto text-base">
                Langkah-langkah sistematis untuk memulai partnership dengan
                program GeMAR
              </p>
            </div>

            <div className="relative">
              <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-10 relative z-10">
                {collaborationSteps.map((step, index) => (
                  <motion.div
                    key={index}
                    whileHover={{ y: -6 }}
                    className="relative text-center group transition-all"
                  >
                    {/* Step Number with Glow */}
                    <div className="relative mb-6">
                      <div className="w-16 h-16 bg-gradient-to-br from-blue-500 to-blue-700 rounded-2xl flex items-center justify-center text-white font-bold text-xl mx-auto shadow-xl z-10 relative">
                        {step.step}
                      </div>
                      <div className="absolute -inset-2 bg-gradient-to-br from-blue-500 to-blue-700 rounded-2xl opacity-25 blur-md group-hover:opacity-40 transition-opacity duration-300"></div>
                    </div>

                    {/* Icon */}
                    <div className="text-blue-600 mb-4 flex justify-center text-3xl">
                      {step.icon}
                    </div>

                    {/* Title & Description */}
                    <h4 className="text-lg font-semibold text-slate-800 mb-2 group-hover:text-blue-700 transition-colors duration-300">
                      {step.title}
                    </h4>
                    <p className="text-slate-600 text-sm leading-relaxed mb-4 px-2">
                      {step.description}
                    </p>
                  </motion.div>
                ))}
              </div>
            </div>
          </div>
        </AnimatedSection>

        {/* Stakeholders Network */}
        <AnimatedSection delay={0.6} className="mb-20">
          <div className="text-center mb-12">
            <h3 className="text-3xl font-bold text-slate-800 mb-4">
              Ekosistem Stakeholder
            </h3>
            <p className="text-slate-600 max-w-2xl mx-auto">
              Jaringan kerjasama strategis yang mendukung kesuksesan program
              GeMAR
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {stakeholders.map((stakeholder, index) => (
              <motion.div
                key={index}
                whileHover={{ scale: 1.02, y: -5 }}
                className="bg-white/80 backdrop-blur-xl border border-white/20 rounded-2xl p-6 shadow-lg hover:shadow-xl transition-all duration-300 group"
              >
                <div
                  className={`inline-flex p-3 bg-gradient-to-br from-slate-100 to-slate-200 rounded-xl ${stakeholder.color} mb-4 group-hover:scale-110 transition-transform duration-300`}
                >
                  {stakeholder.icon}
                </div>

                <h4 className="text-lg font-bold text-slate-800 mb-2 group-hover:text-blue-800 transition-colors">
                  {stakeholder.name}
                </h4>
                <p className="text-sm font-semibold text-slate-500 mb-3">
                  {stakeholder.role}
                </p>
                <p className="text-slate-600 text-sm leading-relaxed">
                  {stakeholder.description}
                </p>
              </motion.div>
            ))}
          </div>
        </AnimatedSection>

        {/* CTA Section with Quick Facts */}
        <AnimatedSection delay={0.8}>
          <div className="relative">
            {/* Background */}
            <div className="absolute inset-0 bg-gradient-to-br from-blue-950 via-blue-900 to-blue-950 rounded-3xl"></div>
            <div className="absolute inset-0 bg-gradient-to-tr from-blue-600/30 via-blue-400/20 to-blue-700/30 rounded-3xl"></div>

            {/* Content */}
            <div className="relative p-12">
              <div className="text-center mb-12">
                <SparklesIcon className="h-12 w-12 text-yellow-400 mx-auto mb-6" />
                <h3 className="text-3xl font-bold text-white mb-4">
                  Siap Memulai Transformasi Pertanian?
                </h3>
                <p className="text-slate-300 mb-8 max-w-2xl mx-auto leading-relaxed">
                  Bergabunglah dengan revolusi pertanian Indonesia. Tim expert
                  kami siap membantu mewujudkan program GeMAR di daerah Anda.
                </p>

                {/* Quick Facts */}
                <div className="flex items-center justify-center space-x-8 mb-8">
                  {quickFacts.map((fact, index) => (
                    <div key={index} className="text-center">
                      <div className="flex items-center justify-center space-x-2 text-blue-400 mb-1">
                        {fact.icon}
                        <span className="font-bold text-lg">{fact.value}</span>
                      </div>
                      <div className="text-slate-400 text-xs">{fact.label}</div>
                    </div>
                  ))}
                </div>
              </div>

              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <motion.a
                  href={whatsappURL}
                  target="_blank"
                  rel="noopener noreferrer"
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="border-2 border-white/30 text-white px-8 py-4 rounded-2xl font-semibold text-lg hover:bg-white/10 transition-all flex items-center justify-center space-x-2"
                >
                  <PhoneIcon className="h-5 w-5" />
                  <span>Konsultasi Gratis Sekarang</span>
                </motion.a>
              </div>

              {/* Trust Indicators */}
              <div className="mt-8 flex items-center justify-center space-x-8 text-sm text-slate-400">
                <div className="flex items-center space-x-2">
                  <CheckCircleIcon className="h-5 w-5 text-blue-400" />
                  <span>Government Approved</span>
                </div>
                <div className="flex items-center space-x-2">
                  <SparklesIcon className="h-5 w-5 text-yellow-400" />
                  <span>Proven Results</span>
                </div>
                <div className="flex items-center space-x-2">
                  <UserGroupIcon className="h-5 w-5 text-blue-400" />
                  <span>Expert Support</span>
                </div>
              </div>
            </div>
          </div>
        </AnimatedSection>
      </div>
    </section>
  );
}
