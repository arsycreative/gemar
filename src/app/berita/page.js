"use client";
import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Link from "next/link";
import Image from "next/image";
import Header from "@/components/ui/Header";
import Footer from "@/components/ui/Footer";
import {
  CalendarIcon,
  UserIcon,
  ChevronRightIcon,
  MagnifyingGlassIcon,
  TagIcon,
  ClockIcon,
} from "@heroicons/react/24/outline";

// Sample news data
const newsData = [
  {
    id: 1,
    title: "Peresmian Gerakan Menanam Anti Rugi (GeMAR)",
    excerpt:
      "Peresmian Gerakan Menanam Anti Rugi (GeMAR), hasil kerja sama antara Kementerian Desa dan Pembangunan Daerah Tertinggal dengan PT Agro Nusantara Tani Milenial (ANTaM), dilaksanakan di Lapangan Desa Pelem, Kecamatan Jati, Blora pada Kamis, 24 Juli 2025.",
    content: `Peresmian Gerakan Menanam Anti Rugi (GeMAR) merupakan kolaborasi antara Kementerian Desa dan Pembangunan Daerah Tertinggal (Kemendes PDT) dan PT Agro Nusantara Tani Milenial (ANTaM). Acara digelar di Lapangan Desa Pelem, Kecamatan Jati, Kabupaten Blora, pada Kamis, 24 Juli 2025.

Inisiatif ini disusun untuk mendukung poin keenam Asta Cita Presiden, yaitu pembangunan dari desa demi pemerataan ekonomi dan pengentasan kemiskinan. Salah satu dari 12 aksi Kemendes PDT, peningkatan ketahanan pangan lokal desa (swasembada pangan), juga termasuk di dalamnya.

Hadir pada event tersebut Menteri Desa, Wakil Menteri Desa, staf khusus dan tenaga ahli, Dirjen PEID Kemendes, serta Direktur Pengembangan Produk Unggulan. Selain itu, Sekda Jawa Tengah, perwakilan Dinas PMD Jateng, Dirut PT ANTaM, dan para pemangku kepentingan di Blora—termasuk Bupati, Dinas PMD Blora, Camat Jati, serta beberapa kepala desa setempat—turut menyemarakkan acara.`,
    image: "/gallery/berita-1.webp",
    author: "Sekretariat ANTaM",
    date: "2025-07-25",
    category: "Kerjasama",
    readTime: "2 menit",
    views: 1890,
    featured: false,
  },
  {
    id: 2,
    title:
      "Sekda Jateng Sambut Positif Gerakan Menanam Anti Rugi di Sektor Pertanian",
    excerpt:
      "Sekretaris Daerah Provinsi Jawa Tengah, Sumarno, memberikan apresiasi pada program Gerakan Menanam Anti Rugi (GeMAR) yang digagas PT ANTaM bersama Kemendes PDT dan Transmigrasi.",
    content: `Sekretaris Daerah Jawa Tengah, Sumarno, menyambut baik peluncuran Gerakan Menanam Anti Rugi (GeMAR), sebuah inisiatif kolaborasi antara PT Agro Nusantara Tani Milenial (ANTaM) dan Kementerian Desa, Pembangunan Daerah Tertinggal, dan Transmigrasi.

Program ini dirancang untuk memperkuat kemitraan di sektor pertanian desa dengan menjamin keuntungan bagi petani jagung. Sumarno berharap GeMAR dapat menjadi fondasi usaha tani yang berkelanjutan dan menarik minat generasi muda, sebagai wujud pembangunan desa dan regenerasi petani.

“Mayoritas wilayah kita adalah desa, sehingga pembangunan harus bermula dari sana,” tegas Sumarno saat peluncuran di Desa Pelem, Kecamatan Jati, Kabupaten Blora, Kamis (24/7/2025).

Bupati Blora, Arief Rohman, menyatakan bahwa GeMAR merupakan bentuk perhatian nyata pemerintah pusat terhadap kesejahteraan petani lokal.`,
    image: "/gallery/berita-2.webp",
    author: "Sekretariat ANTaM",
    date: "2025-07-24",
    category: "Kerjasama",
    readTime: "4 menit",
    featured: false,
    views: 890,
    likes: 56,
    tags: ["IoT", "Monitoring", "Real-time", "Efisiensi", "Smart Farming"],
  },
  {
    id: 3,
    title:
      "Sekda Jateng Apresiasi GeMAR Sebagai Solusi Minimalkan Risiko Pertanian",
    excerpt:
      "Sekretaris Daerah Provinsi Jawa Tengah, Sumarno, menyatakan GeMAR mampu mengurangi kerugian petani melalui skema pendampingan teknis dan jaminan harga hasil panen.",
    content: `Program Gerakan Menanam Anti Rugi (GeMAR) dirancang untuk memperkuat kemitraan di sektor pertanian desa dengan memberikan jaminan harga dan pendampingan teknis bagi petani jagung. Skema ini diharapkan mampu mereduksi potensi kerugian pada petani.

Sumarno menyatakan, “Wilayah kita mayoritas desa, jadi pembangunan harus dimulai dari sana,” saat meresmikan GeMAR di Desa Pelem, Jati, Blora, Kamis (24/7/2025). Ia menilai inisiatif ini krusial untuk menciptakan usaha tani yang lestari dan memikat generasi muda.

Menteri Desa PDT dan Transmigrasi RI, Yandri Susanto, menambahkan bahwa GeMAR hadir sebagai respons atas kegundahan petani terkait risiko kerugian. Melalui kemitraan, pendampingan, dan jaminan hasil panen, GeMAR diharapkan menjadi aspirasi petani di seluruh Indonesia.

Yandri juga menekankan perlunya memperluas cakupan GeMAR ke sektor peternakan dan hortikultura agar dapat memperkokoh ketahanan pangan nasional. “Ini gerakan strategis untuk mewujudkan Asta Cita Presiden, khususnya swasembada dan ketahanan pangan,” ujarnya.

Perwakilan PT ANTaM, Andri, mengungkapkan bahwa rendahnya keterlibatan anak muda di sektor pertanian menjadi inspirasi lahirnya GeMAR. Dari 140 petani anggota, hanya dua berusia di bawah 40 tahun dan satu di bawah 30 tahun, sehingga jaminan usaha tani diharapkan memikat minat generasi muda.`,
    image: "/gallery/berita-3.webp",
    author: "Sekretariat ANTaM",
    date: "2025-07-24",
    category: "Program",
    readTime: "6 menit",
    featured: false,
    views: 1240,
    likes: 73,
    tags: ["Ekspansi", "GeMAR", "Blora", "Community"],
  },
  {
    id: 4,
    title: "Mendes Yandri Luncurkan GeMAR di Kabupaten Blora",
    excerpt:
      "Menteri Desa dan Pembangunan Daerah Tertinggal, Yandri Susanto, meluncurkan Gerakan Menanam Anti Rugi (GeMAR) di Blora untuk mencegah kerugian akibat gagal panen.",
    content: `Yandri Susanto, Menteri Desa dan Pembangunan Daerah Tertinggal, secara resmi memperkenalkan Gerakan Menanam Anti Rugi (GeMAR) di Desa Pelem, Kecamatan Jati, Kabupaten Blora pada Kamis (24/7/2025). GeMAR dikembangkan oleh PT ANTaM untuk meningkatkan kesejahteraan petani dan mereduksi kerugian panen.

Melalui nota kesepahaman (MoU) antara Kemendes PDT dan PT ANTaM, program ini mencakup dukungan mulai pembiayaan, penyediaan pupuk, hingga akses pasar. “Dengan mitigasi di hulu hingga hilir, petani akan terlindungi dari kerugian, sehingga Asta Cita ke-6 Presiden bisa terwujud,” ujar Yandri bersama Wakil Menteri Ariza Patria.

Dalam sambutannya, Yandri menekankan perlunya kolaborasi dengan BUMDes, koperasi, dan pihak swasta untuk menjamin stabilitas harga dan ketersediaan bahan pangan, termasuk cabai, tomat, ikan, dan telur demi mendukung program Makan Bergizi Gratis (MBG).

Acara di Blora ini juga diisi dengan penanaman bibit jagung sebagai simbol harapan bagi petani setempat. Turut hadir pada peluncuran tersebut Kepala BPSDM Agustomi Masik, Dirjen PEID Tabrani, Bupati Blora Arief Rohman, serta pendamping desa setempat.`,
    image: "/gallery/berita-4.webp",
    author: "Sekretariat ANTaM",
    date: "2025-07-25",
    category: "Pelatihan",
    readTime: "4 menit",
    featured: false,
    views: 750,
    likes: 42,
    tags: [
      "Pelatihan",
      "Teknologi 4.0",
      "Petani Milenial",
      "IoT",
      "Precision Farming",
    ],
  },
];

const categories = ["Semua", "Program", "Kerjasama", "Pelatihan", "Teknologi"];

export default function NewsPage() {
  const [filteredNews, setFilteredNews] = useState(newsData);
  const [selectedCategory, setSelectedCategory] = useState("Semua");
  const [searchQuery, setSearchQuery] = useState("");

  const featuredNews = newsData.filter((news) => news.featured);
  const regularNews = filteredNews.filter((news) => !news.featured);

  return (
    <main className="min-h-screen bg-slate-50">
      <Header />

      {/* Hero Section */}
      <section className="relative pt-24 pb-16 bg-gradient-to-br from-slate-900 via-blue-800 to-indigo-900 overflow-hidden">
        <div className="absolute inset-0 bg-[url('/hero-bg.webp')] bg-cover bg-center opacity-10"></div>
        <div className="absolute inset-0 bg-gradient-to-r from-blue-900/50 to-transparent"></div>

        <div className="relative container mx-auto px-6">
          <div className="text-center text-white">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              className="inline-flex items-center space-x-2 bg-white/10 backdrop-blur-xl rounded-full px-6 py-3 mb-6 border border-white/20"
            >
              <TagIcon className="h-5 w-5 text-cyan-400" />
              <span className="text-sm font-semibold">Berita & Informasi</span>
            </motion.div>

            <motion.h1
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
              className="text-4xl md:text-6xl font-bold mb-6"
            >
              Berita <span className="text-gradient-warm">ANTaM</span>
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4 }}
              className="text-xl text-slate-200 max-w-3xl mx-auto leading-relaxed"
            >
              Ikuti perkembangan terbaru program GeMAR dan inovasi pertanian
              Indonesia
            </motion.p>
          </div>
        </div>
      </section>

      {/* Featured News */}
      {featuredNews.length > 0 &&
        selectedCategory === "Semua" &&
        !searchQuery && (
          <section className="py-16 bg-white">
            <div className="container mx-auto px-6">
              <h2 className="text-3xl font-bold text-slate-800 mb-8">
                Berita Utama
              </h2>

              <div className="grid lg:grid-cols-2 gap-8">
                {featuredNews.map((news, index) => (
                  <motion.article
                    key={news.id}
                    initial={{ opacity: 0, y: 30 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: index * 0.1 }}
                    className="group cursor-pointer"
                  >
                    <Link href={`/berita/${news.id}`}>
                      <div className="relative rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-500">
                        <div className="relative h-80">
                          <Image
                            src={news.image}
                            alt={news.title}
                            fill
                            className="object-cover group-hover:scale-105 transition-transform duration-700"
                          />
                          <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent"></div>

                          <div className="absolute bottom-6 left-6 right-6 text-white">
                            <div className="flex items-center space-x-4 text-sm mb-3">
                              <span className="bg-blue-600 px-3 py-1 rounded-full">
                                {news.category}
                              </span>
                              <div className="flex items-center space-x-1">
                                <CalendarIcon className="h-4 w-4" />
                                <span>
                                  {new Date(news.date).toLocaleDateString(
                                    "id-ID"
                                  )}
                                </span>
                              </div>
                            </div>

                            <h3 className="text-2xl font-bold mb-2 group-hover:text-cyan-300 transition-colors">
                              {news.title}
                            </h3>

                            <p className="text-slate-200 line-clamp-2">
                              {news.excerpt}
                            </p>
                          </div>
                        </div>
                      </div>
                    </Link>
                  </motion.article>
                ))}
              </div>
            </div>
          </section>
        )}

      {/* Regular News Grid */}
      <section className="py-16">
        <div className="container mx-auto px-6">
          <div className="flex items-center justify-between mb-8">
            <h2 className="text-3xl font-bold text-slate-800">
              {selectedCategory === "Semua"
                ? "Berita Terbaru"
                : `Berita ${selectedCategory}`}
            </h2>
          </div>

          <AnimatePresence mode="popLayout">
            <motion.div
              layout
              className="grid md:grid-cols-2 lg:grid-cols-3 gap-8"
            >
              {regularNews.map((news, index) => (
                <motion.article
                  key={news.id}
                  layout
                  initial={{ opacity: 0, y: 30 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: 30 }}
                  transition={{ delay: index * 0.1 }}
                  whileHover={{ y: -8 }}
                  className="group bg-white rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-500 overflow-hidden"
                >
                  <Link href={`/berita/${news.id}`}>
                    <div className="relative h-48 overflow-hidden">
                      <Image
                        src={news.image}
                        alt={news.title}
                        fill
                        className="object-cover group-hover:scale-105 transition-transform duration-700"
                      />
                      <div className="absolute top-4 left-4">
                        <span className="bg-white/90 backdrop-blur-sm px-3 py-1 rounded-full text-sm font-medium text-slate-700">
                          {news.category}
                        </span>
                      </div>
                    </div>

                    <div className="p-6">
                      <div className="flex items-center space-x-4 text-sm text-slate-500 mb-3">
                        <div className="flex items-center space-x-1">
                          <UserIcon className="h-4 w-4" />
                          <span>{news.author}</span>
                        </div>
                        <div className="flex items-center space-x-1">
                          <CalendarIcon className="h-4 w-4" />
                          <span>
                            {new Date(news.date).toLocaleDateString("id-ID")}
                          </span>
                        </div>
                      </div>

                      <h3 className="text-xl font-bold text-slate-800 mb-3 group-hover:text-blue-600 transition-colors line-clamp-2">
                        {news.title}
                      </h3>

                      <p className="text-slate-600 line-clamp-3 mb-4">
                        {news.excerpt}
                      </p>

                      <div className="flex items-center justify-between">
                        <div className="flex items-center space-x-1 text-sm text-slate-500">
                          <ClockIcon className="h-4 w-4" />
                          <span>{news.readTime}</span>
                        </div>

                        <div className="flex items-center text-blue-600 font-medium group-hover:text-blue-800 transition-colors">
                          <span className="mr-2">Baca selengkapnya</span>
                          <ChevronRightIcon className="h-4 w-4 group-hover:translate-x-1 transition-transform" />
                        </div>
                      </div>
                    </div>
                  </Link>
                </motion.article>
              ))}
            </motion.div>
          </AnimatePresence>

          {/* No Results */}
          {filteredNews.length === 0 && (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              className="text-center py-16"
            >
              <div className="w-24 h-24 bg-slate-100 rounded-full flex items-center justify-center mx-auto mb-6">
                <MagnifyingGlassIcon className="h-12 w-12 text-slate-400" />
              </div>
              <h3 className="text-2xl font-bold text-slate-800 mb-2">
                Tidak ada berita ditemukan
              </h3>
              <p className="text-slate-600">
                Coba ubah kata kunci atau filter kategori
              </p>
            </motion.div>
          )}
        </div>
      </section>

      <Footer />
    </main>
  );
}
