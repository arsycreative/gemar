"use client";
import { motion } from "framer-motion";
import AnimatedSection from "../animations/AnimatedSection";
import {
  StarIcon,
  UserGroupIcon,
  ChatBubbleLeftIcon as QuoteLeftIcon,
  CheckBadgeIcon,
  TrophyIcon,
  HeartIcon,
} from "@heroicons/react/24/outline";
import { StarIcon as StarIconSolid } from "@heroicons/react/24/solid";

export default function Testimonials() {
  const farmers = [
    {
      name: "Hadi Kusmanto",
      age: 47,
      // image:
      //   "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-4.0.3&auto=format&fit=crop&w=300&q=80",
      role: "Petani Jagung Veteran",
      location: "Menden, Blora",
      experience: "15+ tahun",
      rating: 5,
      quote:
        "Program GeMAR memberikan kepastian usaha yang tidak pernah saya rasakan sebelumnya. Dengan asuransi pertanian dan pendampingan teknologi, saya tidak khawatir lagi dengan risiko gagal panen. Hasil panen meningkat 40% dari sebelumnya!",
      results: {
        yield: "+40%",
        income: "+60%",
        efficiency: "+25%",
      },
      gradient: "from-emerald-500 to-teal-500",
    },
    {
      name: "Ngateni",
      age: 54,
      status: "Janda",
      // image:
      //   "https://images.unsplash.com/photo-1544005313-94ddf0286df2?ixlib=rb-4.0.3&auto=format&fit=crop&w=300&q=80",
      role: "Petani Padi Mandiri",
      location: "Gondel, Blora",
      experience: "20+ tahun",
      rating: 5,
      quote:
        "Sebagai janda yang menghidupi keluarga dari pertanian, program GeMAR sangat membantu. Pendampingan dari tim ANTaM sangat profesional dan sabar. Sekarang saya bisa merencanakan masa depan dengan lebih baik.",
      results: {
        yield: "+35%",
        income: "+55%",
        confidence: "+100%",
      },
      gradient: "from-blue-500 to-indigo-500",
    },
    {
      name: "Joko Santoso",
      age: 29,
      // image:
      //   "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-4.0.3&auto=format&fit=crop&w=300&q=80",
      role: "Petani Milenial Inovatif",
      location: "Menden, Blora",
      experience: "5+ tahun",
      rating: 5,
      quote:
        "Sebagai petani muda, saya merasa program GeMAR sesuai dengan visi pertanian modern. Teknologi yang diajarkan sangat aplikatif dan mudah dipahami. Ini adalah masa depan pertanian Indonesia!",
      results: {
        yield: "+50%",
        income: "+70%",
        tech_adoption: "+90%",
      },
      gradient: "from-purple-500 to-pink-500",
    },
    {
      name: "Alfian Lutfianto",
      age: 26,
      // image:
      //   "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?ixlib=rb-4.0.3&auto=format&fit=crop&w=300&q=80",
      role: "Agripreneur Muda",
      location: "Blora",
      experience: "3+ tahun",
      rating: 5,
      quote:
        "Program GeMAR mengubah mindset saya tentang pertanian. Sekarang saya melihat pertanian sebagai bisnis yang menguntungkan dan berkelanjutan. Dengan dukungan teknologi dan asuransi, saya berani ekspansi lebih besar.",
      results: {
        yield: "+45%",
        income: "+80%",
        expansion: "3x area",
      },
      gradient: "from-orange-500 to-red-500",
    },
  ];

  const governmentSupport = [
    {
      name: "Yandri Susanto",
      position: "Menteri Desa dan PDT",
      image:
        "https://upload.wikimedia.org/wikipedia/commons/thumb/9/98/Yandri_Susanto%2C_MPR_RI.jpg/250px-Yandri_Susanto%2C_MPR_RI.jpg",
      quote:
        "Dengan dana desa sebesar Rp 71 triliun, kami butuh kolaborasi yang efektif. Dana desa untuk ketahanan pangan minimal 20 persen harus dioptimalkan melalui program seperti GeMAR.",
      highlight: "Rp 71 Triliun Dana Desa",
    },
    {
      name: "Zulkifli Hasan",
      position: "Menteri Koordinator Pangan",
      image:
        "https://upload.wikimedia.org/wikipedia/commons/thumb/f/f3/Zulkifli_Hasan_MPR_Official_Portrait_%282014%29.jpg/250px-Zulkifli_Hasan_MPR_Official_Portrait_%282014%29.jpg",
      quote:
        "Tidak ada negara yang maju tanpa berdaulat di bidang pangan. Program GeMAR adalah langkah konkret menuju kedaulatan pangan Indonesia yang berkelanjutan.",
      highlight: "Kedaulatan Pangan Nasional",
    },
  ];

  const communityStats = [
    {
      number: "154",
      suffix: "+",
      label: "Hektar Lahan Terlibat",
      description: "Total area yang menerapkan program GeMAR",
      icon: <TrophyIcon className="h-6 w-6" />,
      color: "text-emerald-600",
    },
    {
      number: "100",
      suffix: "+",
      label: "Petani Bergabung",
      description: "Petani aktif dalam ekosistem GeMAR",
      icon: <UserGroupIcon className="h-6 w-6" />,
      color: "text-blue-600",
    },
    {
      number: "85",
      suffix: "",
      label: "BUMDes Tertarik",
      description: "BUMDes yang ingin bergabung program",
      icon: <CheckBadgeIcon className="h-6 w-6" />,
      color: "text-purple-600",
    },
    {
      number: "99.8",
      suffix: "%",
      label: "Satisfaction Rate",
      description: "Tingkat kepuasan peserta program",
      icon: <HeartIcon className="h-6 w-6" />,
      color: "text-red-500",
    },
  ];

  return (
    <section className="section-padding bg-gradient-to-br from-slate-50 via-white to-blue-50">
      <div className="container-modern">
        {/* Header */}
        <AnimatedSection className="text-center mb-20">
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.4, ease: "easeOut" }}
            className="inline-flex items-center space-x-2 bg-gradient-to-r from-emerald-100 to-blue-100 rounded-full px-6 py-3 mb-6"
          >
            <UserGroupIcon className="h-5 w-5 text-emerald-600" />
            <span className="text-sm font-semibold text-emerald-800">
              Testimoni Real
            </span>
          </motion.div>

          <h2 className="heading-lg mb-6 text-slate-800">
            Petani <span className="text-gradient-modern">Tangguh</span> Kami
          </h2>

          <p className="body-lg text-slate-600 max-w-4xl mx-auto">
            Kisah nyata transformasi petani yang telah merasakan dampak positif
            program GeMAR dalam meningkatkan produktivitas dan kesejahteraan
            mereka.
          </p>
        </AnimatedSection>

        {/* Government Support */}
        <AnimatedSection delay={0.2} className="mb-20">
          <div className="grid lg:grid-cols-2 gap-8">
            {governmentSupport.map((official, index) => (
              <motion.div
                key={index}
                whileHover={{ y: -4 }}
                transition={{ type: "spring", stiffness: 120, damping: 20 }}
                className="relative group"
              >
                {/* Base Gradient: biru tua di tepi, biru sedikit lebih terang di tengah */}
                <div className="absolute inset-0 bg-gradient-to-br from-blue-950 via-blue-900 to-blue-950 rounded-3xl"></div>
                {/* Overlay Gradient: biru lembut di pinggir, sedikit cerah di tengah */}
                <div className="absolute inset-0 bg-gradient-to-tr from-blue-600/30 via-blue-400/20 to-blue-700/30 rounded-3xl"></div>

                <div className="relative p-8 text-white">
                  {/* Quote Icon */}
                  <QuoteLeftIcon className="h-8 w-8 text-yellow-400 mb-6" />

                  {/* Official Info */}
                  <div className="flex items-center space-x-4 mb-6">
                    <img
                      src={official.image}
                      alt={official.name}
                      className="w-16 h-16 rounded-2xl object-cover border-4 border-white/20"
                    />
                    <div>
                      <h3 className="text-xl font-bold text-white">
                        {official.name}
                      </h3>
                      <p className="text-slate-300 text-sm">
                        {official.position}
                      </p>
                      <span className="inline-block px-3 py-1 bg-yellow-400/20 text-yellow-400 text-xs rounded-full mt-1">
                        {official.highlight}
                      </span>
                    </div>
                  </div>

                  {/* Quote */}
                  <blockquote className="text-lg leading-relaxed italic">
                    "{official.quote}"
                  </blockquote>
                </div>
              </motion.div>
            ))}
          </div>
        </AnimatedSection>

        {/* Farmers Testimonials */}
        <AnimatedSection className="mb-20">
          <div className="grid lg:grid-cols-2 gap-8">
            {farmers.map((farmer, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 15 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.5 }}
                transition={{
                  type: "spring",
                  stiffness: 100,
                  damping: 16,
                  delay: index * 0.1,
                }}
                className="floating-card h-full bg-white rounded-2xl p-6 hover:shadow-lg transition-shadow duration-200"
              >
                {/* Header */}
                <div className="flex items-start space-x-4 mb-6">
                  {farmer.image ? (
                    <img
                      src={farmer.image}
                      alt={farmer.name}
                      className="w-16 h-16 rounded-full object-cover bg-slate-300"
                    />
                  ) : (
                    <div className="w-16 h-16 rounded-full bg-slate-300" />
                  )}
                  <div className="flex-1">
                    <div className="flex justify-between mb-2">
                      <h3 className="text-xl font-bold text-slate-800">
                        {farmer.name}
                      </h3>
                      <div className="flex space-x-1">
                        {[...Array(farmer.rating)].map((_, i) => (
                          <StarIconSolid
                            key={i}
                            className="h-4 w-4 text-yellow-400"
                          />
                        ))}
                      </div>
                    </div>
                    <p className="text-sm text-slate-600 mb-1">
                      {farmer.role} • {farmer.age} tahun{" "}
                      {farmer.status && `(${farmer.status})`}
                    </p>
                    <p className="text-sm text-slate-500">{farmer.location}</p>
                    <p className="text-sm text-slate-500">
                      Pengalaman: {farmer.experience}
                    </p>
                  </div>
                </div>

                {/* Quote */}
                <div>
                  <QuoteLeftIcon className="h-6 w-6 text-indigo-400 mb-2" />
                  <blockquote className="text-slate-700 italic leading-relaxed">
                    "{farmer.quote}"
                  </blockquote>
                </div>
              </motion.div>
            ))}
          </div>
        </AnimatedSection>

        {/* Community Impact Stats */}
        <AnimatedSection delay={0.6} className="mb-16">
          <div className="floating-card">
            <div className="text-center mb-12">
              <h3 className="text-3xl font-bold text-slate-800 mb-4">
                Dampak Komunitas GeMAR
              </h3>
              <p className="text-slate-600 max-w-2xl mx-auto">
                Pencapaian kolektif yang menunjukkan kekuatan transformasi
                program GeMAR
              </p>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
              {communityStats.map((stat, index) => (
                <motion.div
                  key={index}
                  whileHover={{ y: -3 }}
                  transition={{ duration: 0.3, ease: "easeOut" }}
                  className="text-center group"
                >
                  <div
                    className={`inline-flex p-4 bg-gradient-to-br from-slate-100 to-slate-200 ${stat.color} mb-4 group-hover:scale-105 transition-transform duration-200`}
                  >
                    {stat.icon}
                  </div>

                  <motion.div
                    initial={{ scale: 0.8, opacity: 0 }}
                    whileInView={{ scale: 1, opacity: 1 }}
                    transition={{
                      duration: 0.4,
                      delay: index * 0.05,
                      ease: "easeOut",
                    }}
                    className={`text-4xl font-bold ${stat.color} mb-2`}
                  >
                    {stat.number}
                    {stat.suffix}
                  </motion.div>

                  <h4 className="font-bold text-slate-800 mb-2 group-hover:text-indigo-600 transition-colors duration-200">
                    {stat.label}
                  </h4>
                  <p className="text-sm text-slate-600 leading-relaxed">
                    {stat.description}
                  </p>
                </motion.div>
              ))}
            </div>

            <div className="mt-12 pt-8 border-t border-slate-200 text-center">
              <TrophyIcon className="h-10 w-10 text-yellow-500 mx-auto mb-4" />
              <blockquote className="text-xl font-semibold text-slate-800 mb-4 italic">
                "Petani yang dapat memfungsikan lahan disekitar hutan sebagai
                pertanian Jagung dan Padi dengan program GeMAR Anti Rugi"
              </blockquote>
              <div className="flex items-center justify-center space-x-6 text-sm text-slate-600">
                <div className="flex items-center space-x-2">
                  <div className="w-3 h-3 bg-emerald-500 rounded-full"></div>
                  <span>154+ Hektar Aktif</span>
                </div>
                <div className="flex items-center space-x-2">
                  <div className="w-3 h-3 bg-blue-500 rounded-full"></div>
                  <span>100+ Petani Sukses</span>
                </div>
                <div className="flex items-center space-x-2">
                  <div className="w-3 h-3 bg-purple-500 rounded-full"></div>
                  <span>85 BUMDes Tertarik</span>
                </div>
              </div>
            </div>
          </div>
        </AnimatedSection>
      </div>
    </section>
  );
}
