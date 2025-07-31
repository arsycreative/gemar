"use client";
import { useState, useEffect, useRef } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  XMarkIcon,
  ChevronLeftIcon,
  ChevronRightIcon,
  PlayIcon,
  PhotoIcon,
  EyeIcon,
} from "@heroicons/react/24/outline";
import Header from "@/components/ui/Header";
import Footer from "@/components/ui/Footer";
import Image from "next/image";

export default function Gallery() {
  const [selectedImage, setSelectedImage] = useState(null);
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isVideoModalOpen, setIsVideoModalOpen] = useState(false);
  const galleryRef = useRef(null);

  // Generate gallery images data
  const galleryImages = Array.from({ length: 18 }, (_, index) => ({
    id: index + 1,
    src: `/gallery/PANDAWA-${index + 1}.webp`,
    alt: `Program GeMAR - Dokumentasi ${index + 1}`,
    title: `Kegiatan Program GeMAR #${index + 1}`,
  }));

  const openLightbox = (image, index) => {
    setSelectedImage(image);
    setCurrentIndex(index);
  };

  const closeLightbox = () => {
    setSelectedImage(null);
  };

  const goToPrevious = () => {
    const newIndex =
      currentIndex > 0 ? currentIndex - 1 : galleryImages.length - 1;
    setCurrentIndex(newIndex);
    setSelectedImage(galleryImages[newIndex]);
  };

  const goToNext = () => {
    const newIndex =
      currentIndex < galleryImages.length - 1 ? currentIndex + 1 : 0;
    setCurrentIndex(newIndex);
    setSelectedImage(galleryImages[newIndex]);
  };

  // Handle keyboard navigation
  useEffect(() => {
    const handleKeyDown = (e) => {
      if (!selectedImage) return;

      if (e.key === "Escape") closeLightbox();
      if (e.key === "ArrowLeft") goToPrevious();
      if (e.key === "ArrowRight") goToNext();
    };

    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [selectedImage, currentIndex]);

  return (
    <main className="min-h-screen bg-slate-50 flex flex-col">
      <Header />
      {/* Modern Hero Section with Enhanced Design */}
      <section className="relative min-h-screen flex flex-col justify-center items-center text-center overflow-hidden">
        {/* Animated Background Layers */}
        <div className="absolute inset-0 bg-gradient-to-br from-slate-900 via-blue-800 to-indigo-900"></div>
        <div className="absolute inset-0 bg-[url('/hero-bg.webp')] bg-cover bg-center opacity-20"></div>

        {/* Animated Particles/Geometric Shapes */}
        <div className="absolute inset-0 overflow-hidden">
          <div className="absolute top-20 left-10 w-32 h-32 bg-cyan-500/10 rounded-full blur-xl animate-pulse"></div>
          <div className="absolute top-40 right-20 w-48 h-48 bg-blue-500/10 rounded-full blur-2xl animate-pulse delay-1000"></div>
          <div className="absolute bottom-32 left-32 w-64 h-64 bg-indigo-500/10 rounded-full blur-3xl animate-pulse delay-2000"></div>
        </div>

        {/* Grid Pattern Overlay */}
        <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.02)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.02)_1px,transparent_1px)] bg-[size:50px_50px]"></div>

        <div className="relative z-10 container mx-auto px-6 py-20">
          {/* Enhanced Badge */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            className="inline-flex items-center space-x-3 bg-white/10 backdrop-blur-xl rounded-full px-8 py-4 mb-8 border border-white/20 hover:bg-white/15 transition-all duration-300 shadow-lg hover:shadow-xl"
          >
            <div className="w-2 h-2 bg-cyan-400 rounded-full animate-pulse"></div>
            <PhotoIcon className="h-5 w-5 text-cyan-400" />
            <span className="text-sm font-semibold text-white tracking-wide">
              Dokumentasi Program GeMAR
            </span>
          </motion.div>

          {/* Enhanced Description */}
          <motion.p
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4 }}
            className="text-md md:text-xl text-slate-200 max-w-4xl mx-auto leading-relaxed mb-10 font-light"
          >
            Saksikan perjalanan revolusi pertanian Indonesia melalui dokumentasi
            visual yang menginspirasi dari{" "}
            <span className="text-cyan-300 font-semibold">
              Program Gerakan Menanam Anti Rugi
            </span>
          </motion.p>

          {/* Enhanced Video Thumbnail */}
          <motion.div
            initial={{ scale: 0.9, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ delay: 0.8 }}
            className="max-w-5xl mx-auto cursor-pointer group"
            onClick={() => setIsVideoModalOpen(true)}
          >
            <div className="relative rounded-3xl overflow-hidden shadow-2xl hover:shadow-4xl transition-all duration-700 transform hover:scale-[1.02]">
              <div className="relative aspect-video bg-black/20 backdrop-blur-sm">
                <Image
                  src="https://img.youtube.com/vi/jktuuwY5aiM/maxresdefault.jpg"
                  alt="Video Thumbnail GeMAR"
                  fill
                  className="object-cover group-hover:scale-110 transition-transform duration-1000"
                  priority
                />

                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-black/20"></div>
                <div className="absolute inset-0 bg-black/20 group-hover:bg-black/10 transition-colors duration-500"></div>

                <div className="absolute inset-0 flex items-center justify-center">
                  <div className="relative">
                    <div className="w-10 h-10 bg-white/95 backdrop-blur-sm rounded-full flex items-center justify-center group-hover:scale-110 transition-all duration-300 shadow-2xl">
                      <PlayIcon className="h-5 w-5 text-blue-600 ml-1" />
                    </div>
                    {/* Ripple Effect */}
                    <div className="absolute inset-0 rounded-full border-4 border-white/50 animate-ping"></div>
                    <div className="absolute inset-0 rounded-full border-2 border-white/30 animate-pulse"></div>
                  </div>
                </div>

                {/* Video Info Overlay */}
                <div className="absolute bottom-6 left-6 right-6">
                  <div className="bg-black/40 backdrop-blur-sm rounded-2xl p-6 transform translate-y-4 group-hover:translate-y-0 opacity-0 group-hover:opacity-100 transition-all duration-500">
                    <h3 className="text-white font-bold text-xl mb-2">
                      Program GeMAR dalam Aksi
                    </h3>
                    <p className="text-slate-200 text-sm">
                      Saksikan dampak nyata program revolusioner ini dalam
                      mengubah wajah pertanian Indonesia
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Photo Gallery Grid */}
      <section ref={galleryRef} className="py-16">
        <div className="container mx-auto px-6">
          <motion.div
            layout
            className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6"
          >
            <AnimatePresence mode="popLayout">
              {galleryImages.map((image, index) => (
                <motion.div
                  key={image.id}
                  layout
                  initial={{ opacity: 0, scale: 0.8 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.8 }}
                  transition={{ duration: 0.4 }}
                  whileHover={{ y: -8 }}
                  className="group relative cursor-pointer"
                  onClick={() => openLightbox(image, index)}
                >
                  <div className="relative h-64 overflow-hidden rounded-2xl shadow-lg bg-slate-200 hover:shadow-2xl transition-all duration-500">
                    <Image
                      src={image.src}
                      alt={image.alt}
                      fill
                      className="object-cover group-hover:scale-105 transition-transform duration-700"
                      sizes="(max-width: 768px) 100vw, 33vw"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                      <div className="absolute bottom-0 left-0 right-0 p-4">
                        <h4 className="text-white font-bold text-sm mb-1">
                          {image.title}
                        </h4>
                        <div className="flex items-center justify-between text-slate-400 text-xs">
                          <EyeIcon className="h-4 w-4" />
                          <span>View</span>
                        </div>
                      </div>
                    </div>
                  </div>
                </motion.div>
              ))}
            </AnimatePresence>
          </motion.div>
        </div>
      </section>

      {/* Video Modal */}
      <AnimatePresence>
        {isVideoModalOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-50 flex items-center justify-center bg-black/90 backdrop-blur-sm"
            onClick={() => setIsVideoModalOpen(false)}
          >
            <motion.div
              initial={{ scale: 0.8, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.8, opacity: 0 }}
              className="relative max-w-6xl w-full mx-4"
              onClick={(e) => e.stopPropagation()}
            >
              <button
                onClick={() => setIsVideoModalOpen(false)}
                className="absolute -top-12 right-0 text-white hover:text-slate-300 transition-colors"
              >
                <XMarkIcon className="h-8 w-8" />
              </button>

              <div className="relative w-full h-0 pb-[56.25%] rounded-2xl overflow-hidden shadow-2xl">
                <iframe
                  src="https://www.youtube.com/embed/jktuuwY5aiM?autoplay=1"
                  title="Program GeMAR Video"
                  className="absolute inset-0 w-full h-full"
                  allowFullScreen
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                />
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Image Lightbox */}
      <AnimatePresence>
        {selectedImage && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-50 flex items-center justify-center bg-black/95 backdrop-blur-sm"
            onClick={closeLightbox}
          >
            <motion.div
              initial={{ scale: 0.8, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.8, opacity: 0 }}
              className="relative max-w-7xl w-full mx-4"
              onClick={(e) => e.stopPropagation()}
            >
              <button
                onClick={goToPrevious}
                className="absolute left-4 top-1/2 -translate-y-1/2 z-10 w-12 h-12 bg-white/10 backdrop-blur-xl rounded-full flex items-center justify-center text-white hover:bg-white/20 transition-all"
              >
                <ChevronLeftIcon className="h-6 w-6" />
              </button>

              <button
                onClick={goToNext}
                className="absolute right-4 top-1/2 -translate-y-1/2 z-10 w-12 h-12 bg-white/10 backdrop-blur-xl rounded-full flex items-center justify-center text-white hover:bg-white/20 transition-all"
              >
                <ChevronRightIcon className="h-6 w-6" />
              </button>

              <button
                onClick={closeLightbox}
                className="absolute top-4 right-4 z-10 w-10 h-10 bg-white/10 backdrop-blur-xl rounded-full flex items-center justify-center text-white hover:bg-white/20 transition-all"
              >
                <XMarkIcon className="h-6 w-6" />
              </button>

              <div className="relative w-full h-[98vh]">
                <Image
                  src={selectedImage.src}
                  alt={selectedImage.alt}
                  fill
                  className="object-contain rounded-lg"
                  sizes="100vw"
                />
                <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent p-6">
                  <div className="text-white">
                    <h3 className="text-xl font-bold mb-2">
                      {selectedImage.title}
                    </h3>
                    <div className="flex items-center justify-between">
                      <span className="text-slate-400 text-sm">
                        {currentIndex + 1} / {galleryImages.length}
                      </span>
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>

      <Footer />
    </main>
  );
}
