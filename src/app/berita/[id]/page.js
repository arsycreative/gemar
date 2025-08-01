"use client";
import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import Link from "next/link";
import Image from "next/image";
import { useParams } from "next/navigation";
import Header from "@/components/ui/Header";
import Footer from "@/components/ui/Footer";
import {
  CalendarIcon,
  UserIcon,
  ClockIcon,
  ArrowLeftIcon,
  ChevronRightIcon,
  TagIcon,
  EyeIcon,
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

export default function BeritaDetailPage() {
  const params = useParams();
  const newsId = parseInt(params?.id);
  const [currentNews, setCurrentNews] = useState(null);
  const [relatedNews, setRelatedNews] = useState([]);

  useEffect(() => {
    const news = newsData.find((item) => item.id === newsId);
    setCurrentNews(news);

    if (news) {
      const related = newsData
        .filter(
          (item) => item.category === news.category && item.id !== news.id
        )
        .slice(0, 3);
      setRelatedNews(related);
    }
  }, [newsId]);

  const latestNews = newsData
    .filter((item) => item.id !== newsId)
    .sort((a, b) => new Date(b.date) - new Date(a.date))
    .slice(0, 5);

  if (!currentNews) {
    return (
      <main className="min-h-screen bg-slate-50 flex items-center justify-center">
        <Header />
        <div className="text-center pt-24">
          <div className="w-24 h-24 bg-slate-100 rounded-full flex items-center justify-center mx-auto mb-6">
            <TagIcon className="h-12 w-12 text-slate-400" />
          </div>
          <h1 className="text-2xl font-bold text-slate-800 mb-4">
            Berita tidak ditemukan
          </h1>
          <p className="text-slate-600 mb-6">
            Maaf, berita yang Anda cari tidak dapat ditemukan.
          </p>
          <Link
            href="/berita"
            className="inline-flex items-center space-x-2 bg-blue-600 text-white px-6 py-3 rounded-lg hover:bg-blue-700 transition-colors"
          >
            <ArrowLeftIcon className="h-4 w-4" />
            <span>Kembali ke halaman berita</span>
          </Link>
        </div>
      </main>
    );
  }

  const shareUrl = typeof window !== "undefined" ? window.location.href : "";

  return (
    <main className="min-h-screen bg-slate-50">
      <Header />

      {/* Breadcrumb */}
      <section className="pt-24 pb-8 bg-white border-b">
        <div className="container mx-auto px-6">
          <nav className="flex items-center space-x-2 text-sm text-slate-600">
            <Link href="/" className="hover:text-blue-600 transition-colors">
              Beranda
            </Link>
            <ChevronRightIcon className="h-4 w-4" />
            <Link
              href="/berita"
              className="hover:text-blue-600 transition-colors"
            >
              Berita
            </Link>
            <ChevronRightIcon className="h-4 w-4" />
            <span className="text-slate-800 font-medium">Detail Berita</span>
          </nav>
        </div>
      </section>

      <div className="container mx-auto px-6 py-12">
        <div className="grid lg:grid-cols-3 gap-12">
          {/* Main Content */}
          <div className="lg:col-span-2">
            <article>
              {/* Back Button */}
              <motion.div
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                className="mb-8"
              >
                <Link
                  href="/berita"
                  className="inline-flex items-center space-x-2 text-blue-600 hover:text-blue-800 transition-colors font-medium"
                >
                  <ArrowLeftIcon className="h-4 w-4" />
                  <span>Kembali ke Berita</span>
                </Link>
              </motion.div>

              {/* Article Header */}
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                className="mb-8"
              >
                <div className="flex items-center space-x-4 text-sm text-slate-600 mb-4">
                  <span className="bg-blue-100 text-blue-800 px-3 py-1 rounded-full font-medium">
                    {currentNews.category}
                  </span>
                  <div className="flex items-center space-x-1">
                    <CalendarIcon className="h-4 w-4" />
                    <span>
                      {new Date(currentNews.date).toLocaleDateString("id-ID", {
                        weekday: "long",
                        year: "numeric",
                        month: "long",
                        day: "numeric",
                      })}
                    </span>
                  </div>
                </div>

                <h1 className="text-3xl lg:text-4xl font-bold text-slate-800 mb-6 leading-tight">
                  {currentNews.title}
                </h1>

                <div className="flex items-center justify-between border-b border-slate-200 pb-6">
                  <div className="flex items-center space-x-6 text-sm text-slate-600">
                    <div className="flex items-center space-x-2">
                      <UserIcon className="h-4 w-4" />
                      <span>{currentNews.author}</span>
                    </div>
                    <div className="flex items-center space-x-2">
                      <ClockIcon className="h-4 w-4" />
                      <span>{currentNews.readTime}</span>
                    </div>
                    {/* <div className="flex items-center space-x-2">
                      <EyeIcon className="h-4 w-4" />
                      <span>{currentNews.views} views</span>
                    </div> */}
                  </div>
                </div>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.2 }}
                className="mb-8"
              >
                <div className="relative w-full rounded-2xl overflow-hidden shadow-xl">
                  <Image
                    src={currentNews.image}
                    alt={currentNews.title}
                    width={1200}
                    height={800}
                    className="w-full h-auto object-cover"
                    priority
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent" />
                </div>
              </motion.div>

              {/* Article Content */}
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.4 }}
                className="prose prose-lg max-w-none mb-8"
              >
                <div
                  className="text-slate-700 leading-relaxed [&>h2]:text-2xl [&>h2]:font-bold [&>h2]:text-slate-800 [&>h2]:mt-8 [&>h2]:mb-4 [&>p]:mb-6 [&>p]:text-base [&>p]:leading-relaxed"
                  dangerouslySetInnerHTML={{
                    __html: currentNews.content
                      .replace(/\n\n/g, "</p><p>")
                      .replace(/^/, "<p>")
                      .replace(/$/, "</p>")
                      .replace(/## /g, "</p><p>")
                      .replace(/<\/h2><p>/g, "</p><p>"),
                  }}
                />
              </motion.div>

              {/* Tags */}
              {currentNews.tags && (
                <motion.div
                  initial={{ opacity: 0, y: 30 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.6 }}
                  className="mb-8"
                >
                  <div className="flex items-center space-x-2 mb-4">
                    <TagIcon className="h-5 w-5 text-slate-500" />
                    <span className="font-medium text-slate-700">Tags:</span>
                  </div>
                  <div className="flex flex-wrap gap-2">
                    {currentNews.tags.map((tag, index) => (
                      <span
                        key={index}
                        className="px-3 py-1 bg-slate-100 text-slate-700 rounded-full text-sm hover:bg-slate-200 transition-colors cursor-pointer"
                      >
                        #{tag}
                      </span>
                    ))}
                  </div>
                </motion.div>
              )}
            </article>
          </div>

          {/* Sidebar */}
          <div className="lg:col-span-1">
            <div className="sticky top-24 space-y-8">
              {/* Latest News */}
              <motion.div
                initial={{ opacity: 0, x: 30 }}
                animate={{ opacity: 1, x: 0 }}
                className="bg-white rounded-2xl shadow-lg p-6"
              >
                <h3 className="text-xl font-bold text-slate-800 mb-6 flex items-center">
                  <div className="w-1 h-6 bg-blue-600 rounded-full mr-3"></div>
                  Berita Terbaru
                </h3>

                <div className="space-y-4">
                  {latestNews.map((news, index) => (
                    <Link key={news.id} href={`/berita/${news.id}`}>
                      <article className="group flex space-x-3 p-3 rounded-xl hover:bg-slate-50 transition-colors">
                        <div className="relative w-16 h-16 rounded-lg overflow-hidden flex-shrink-0">
                          <Image
                            src={news.image}
                            alt={news.title}
                            fill
                            className="object-cover group-hover:scale-105 transition-transform duration-300"
                          />
                        </div>
                        <div className="flex-1 min-w-0">
                          <h4 className="font-medium text-slate-800 line-clamp-2 text-sm group-hover:text-blue-600 transition-colors mb-1">
                            {news.title}
                          </h4>
                          <div className="flex items-center text-xs text-slate-500 space-x-2">
                            <span>
                              {new Date(news.date).toLocaleDateString("id-ID")}
                            </span>
                            <span>•</span>
                            <span>{news.readTime}</span>
                          </div>
                        </div>
                      </article>
                    </Link>
                  ))}
                </div>

                <div className="mt-6 pt-4 border-t border-slate-200">
                  <Link
                    href="/berita"
                    className="inline-flex items-center space-x-2 text-blue-600 hover:text-blue-800 font-medium transition-colors"
                  >
                    <span>Lihat semua berita</span>
                    <ChevronRightIcon className="h-4 w-4" />
                  </Link>
                </div>
              </motion.div>
            </div>
          </div>
        </div>
      </div>

      <Footer />
    </main>
  );
}
