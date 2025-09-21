"use client";

import { Metadata } from "next";
import Image from "next/image";
import { useState, useEffect, useRef } from "react";
import { ImageLightbox } from "~/components/ui/ImageLightbox";
import { CornerAnimations } from "~/components/ui/CornerAnimations";
import DomeGallery from "~/components/ui/DomeGallery";

const photos = [
  "/photo_2025-09-20_00-35-13.jpeg",
  "/photo_2025-09-20_00-35-14.jpeg",
  "/photo_2025-09-20_00-35-16.jpeg",
  "/photo_2025-09-20_00-35-17.jpeg",
  "/photo_2025-09-20_00-35-18.jpeg",
  "/photo_2025-09-20_00-35-19.jpeg",
  "/photo_2025-09-20_00-35-22.jpeg",
  "/photo_2025-09-20_00-35-23.jpeg",
];

export default function GalleryPage() {
  const [lightboxOpen, setLightboxOpen] = useState(false);
  const [lightboxIndex, setLightboxIndex] = useState(0);

  const openLightbox = (index: number) => {
    setLightboxIndex(index);
    setLightboxOpen(true);
  };

  return (
    <div className="w-full">
      {/* Gallery Header - Full Viewport */}
      <section className="relative min-h-screen bg-black">
        {/* 3D Dome Gallery Background */}
        <div className="absolute inset-0 w-full h-full overflow-hidden">
          <DomeGallery
            images={photos}
            minRadius={200}
            maxRadius={600}
            fit={0.4}
            grayscale={false}
            imageBorderRadius="12px"
            dragSensitivity={20}
            overlayBlurColor="rgba(0, 0, 0, 0.8)"
          />
        </div>

        {/* Content Overlay */}
        <div className="relative z-10 min-h-screen flex flex-col justify-center p-8 lg:p-16">
          <CornerAnimations lineColor="bg-white" />
          <div className="max-w-7xl mx-auto w-full">
            <div className="grid gap-8">
              <span className="text-2xl md:text-3xl lg:text-4xl font-mono uppercase tracking-[0.3em] text-white/60">
                ГАЛЕРЕЯ
              </span>
              <h1 className="text-5xl md:text-7xl lg:text-8xl font-bold text-white">
                ФОТОГРАФИИ<br/>
                ПРОСТРАНСТВА
              </h1>
              <p className="text-xl md:text-2xl lg:text-3xl text-white/80 max-w-4xl">
                Интерьеры, оборудование и атмосфера NEXUS. Каждое мероприятие создает
                уникальную визуальную историю в нашем пространстве.
              </p>
              <div className="mt-8">
                <button
                  onClick={() => document.getElementById('gallery-grid')?.scrollIntoView({ behavior: 'smooth' })}
                  className="inline-flex items-center gap-3 px-8 py-4 bg-white text-black font-bold text-lg hover:bg-white/90 transition-all"
                >
                  СМОТРЕТЬ ГАЛЕРЕЮ
                  <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 14l-7 7m0 0l-7-7m7 7V3" />
                  </svg>
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Main Gallery Grid */}
      <section id="gallery-grid" className="bg-white text-black py-24">
        <div className="max-w-7xl mx-auto px-8">
          <div className="grid gap-16">
            <div className="text-center">
              <h2 className="text-4xl md:text-6xl font-bold mb-4">ПРОСТРАНСТВО NEXUS</h2>
              <p className="text-xl text-black/60">Современная площадка для любых мероприятий</p>
            </div>

            {/* Photo Grid */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {photos.map((photo, index) => (
                <div
                  key={index}
                  className="group relative aspect-[4/3] overflow-hidden cursor-pointer bg-gray-100"
                  onClick={() => openLightbox(index)}
                >
                  <Image
                    src={photo}
                    alt={`Пространство NEXUS ${index + 1}`}
                    fill
                    className="object-cover transition-all duration-700 group-hover:scale-110"
                    sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                  />
                  <div className="absolute inset-0 bg-black/0 group-hover:bg-black/20 transition-all duration-300" />
                  <div className="absolute bottom-0 left-0 right-0 p-4 bg-gradient-to-t from-black/80 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    <p className="text-white font-bold">Фото {index + 1}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="bg-black text-white py-24">
        <div className="max-w-7xl mx-auto px-8">
          <div className="grid gap-16">
            <div className="text-center">
              <h2 className="text-4xl md:text-6xl font-bold mb-4">ВОЗМОЖНОСТИ ПЛОЩАДКИ</h2>
              <p className="text-xl text-white/60">Всё необходимое для вашего мероприятия</p>
            </div>

            <div className="grid md:grid-cols-3 gap-8">
              <div className="text-center">
                <div className="w-20 h-20 mx-auto mb-6 bg-white/10 rounded-full flex items-center justify-center">
                  <span className="text-3xl">🎵</span>
                </div>
                <h3 className="text-2xl font-bold mb-3">Профессиональный звук</h3>
                <p className="text-white/60">Концертное оборудование и акустическая система высокого класса</p>
              </div>

              <div className="text-center">
                <div className="w-20 h-20 mx-auto mb-6 bg-white/10 rounded-full flex items-center justify-center">
                  <span className="text-3xl">💡</span>
                </div>
                <h3 className="text-2xl font-bold mb-3">Световое шоу</h3>
                <p className="text-white/60">Современное световое оборудование для создания атмосферы</p>
              </div>

              <div className="text-center">
                <div className="w-20 h-20 mx-auto mb-6 bg-white/10 rounded-full flex items-center justify-center">
                  <span className="text-3xl">📹</span>
                </div>
                <h3 className="text-2xl font-bold mb-3">Видеопроекция</h3>
                <p className="text-white/60">LED экраны и проекторы для визуального сопровождения</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Image Lightbox */}
      <ImageLightbox
        images={photos}
        currentIndex={lightboxIndex}
        isOpen={lightboxOpen}
        onClose={() => setLightboxOpen(false)}
      />

      <style jsx>{`
        @keyframes float {
          0%, 100% {
            transform: translateY(0) rotate(0deg);
          }
          33% {
            transform: translateY(-20px) rotate(5deg);
          }
          66% {
            transform: translateY(20px) rotate(-5deg);
          }
        }
      `}</style>
    </div>
  );
}