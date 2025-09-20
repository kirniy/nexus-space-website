"use client";

import Link from "next/link";
import Image from "next/image";
import { useEffect, useState } from "react";
import { useParallax } from "~/hooks/useParallax";

const heroImages = [
  "/photo_2025-09-20 00.35.13.jpeg",
  "/photo_2025-09-20 00.35.14.jpeg",
  "/photo_2025-09-20 00.35.16.jpeg",
  "/photo_2025-09-20 00.35.17.jpeg",
  "/photo_2025-09-20 00.35.18.jpeg",
  "/photo_2025-09-20 00.35.19.jpeg",
  "/photo_2025-09-20 00.35.22.jpeg",
  "/photo_2025-09-20 00.35.23.jpeg",
];

export const Hero = () => {
  const [currentImageIndex, setCurrentImageIndex] = useState(() =>
    Math.floor(Math.random() * heroImages.length)
  );
  const parallaxOffset = useParallax(0.3);

  useEffect(() => {
    // Rotate through images every 5 seconds
    const interval = setInterval(() => {
      setCurrentImageIndex((prev) => (prev + 1) % heroImages.length);
    }, 5000);

    return () => clearInterval(interval);
  }, []);

  return (
    <section className="relative min-h-screen w-full flex items-center justify-center overflow-hidden mb-0">
      {/* Rotating Background Images with Parallax */}
      <div
        className="absolute inset-0 z-0"
        style={{
          transform: `translateY(${parallaxOffset}px)`
        }}
      >
        {heroImages.map((image, index) => (
          <div
            key={image}
            className={`absolute inset-0 transition-opacity duration-1500 ${
              index === currentImageIndex ? 'opacity-100' : 'opacity-0'
            }`}
          >
            <Image
              src={image}
              alt="NEXUS Event Space"
              fill
              className="object-cover brightness-[0.4] scale-110"
              priority={index === 0}
              sizes="100vw"
            />
          </div>
        ))}
        <div className="absolute inset-0 bg-gradient-to-b from-black/30 via-black/50 to-black/90" />
      </div>

      {/* Grid Pattern - Above Images (no diagonal lines) */}
      <div className="absolute inset-0 z-[1] opacity-10">
        <div className="absolute inset-0 bg-[linear-gradient(90deg,white_1px,transparent_1px),linear-gradient(180deg,white_1px,transparent_1px)] bg-[size:100px_100px]" />
      </div>

      {/* Decorative Corner Lines */}
      <div className="absolute top-0 left-0 w-64 h-64 z-[2]">
        <div className="absolute top-4 left-8 w-32 h-[4px] bg-white animate-slide-right" />
        <div className="absolute top-4 left-8 h-32 w-[4px] bg-white animate-slide-down" />
      </div>
      <div className="absolute top-0 right-0 w-64 h-64 z-[2]">
        <div className="absolute top-4 right-8 w-32 h-[4px] bg-white animate-slide-left" />
        <div className="absolute top-4 right-8 h-32 w-[4px] bg-white animate-slide-down" />
      </div>
      <div className="absolute bottom-0 left-0 w-64 h-64 z-[2]">
        <div className="absolute bottom-8 left-8 w-32 h-[4px] bg-white animate-slide-right" />
        <div className="absolute bottom-8 left-8 h-32 w-[4px] bg-white animate-slide-up" />
      </div>
      <div className="absolute bottom-0 right-0 w-64 h-64 z-[2]">
        <div className="absolute bottom-8 right-8 w-32 h-[4px] bg-white animate-slide-left" />
        <div className="absolute bottom-8 right-8 h-32 w-[4px] bg-white animate-slide-up" />
      </div>

      {/* Main Content */}
      <div className="relative z-10 w-full page-padding">
        <div className="grid gap-16 lg:gap-24">
          {/* Text Content */}
          <div className="grid gap-8 lg:gap-12 max-w-full">
            <div className="text-subhero animate-fade-in mt-8">
              <a
                href="https://yandex.ru/maps/-/CLeD4Zzc"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-block hover:scale-105 transition-transform no-underline hover:no-underline hover:brightness-100"
              >
                <span className="text-white">САНКТ-ПЕТЕРБУРГ, КОНЮШЕННАЯ ПЛОЩАДЬ, 2Ж</span>
              </a>
            </div>

            <h1 className="text-hero animate-slide-up group cursor-default">
              <span className="block hover:animate-glitch">ПРОСТРАНСТВО</span>
              <span className="block hover:animate-glitch">ДЛЯ СОБЫТИЙ</span>
            </h1>

            <p className="text-2xl md:text-3xl lg:text-4xl text-white/80 max-w-5xl font-body leading-relaxed">
              800 м² для корпоративных мероприятий, презентаций,
              концертов и частных событий. Профессиональное техническое
              оснащение и гибкая планировка.
            </p>

            {/* Buttons with proper spacing */}
            <div className="flex flex-col lg:flex-row gap-8 lg:gap-12 mt-8">
              <Link href="/contact" className="button-primary text-center">
                ЗАБРОНИРОВАТЬ
              </Link>
              <Link
                href="/space"
                className="text-2xl font-mono uppercase tracking-[0.2em] text-white/60 hover:text-white transition-all self-center"
              >
                ХАРАКТЕРИСТИКИ →
              </Link>
            </div>
          </div>

          {/* Info Cards - Moved down to avoid ticker overlap */}
          <div className="grid md:grid-cols-3 gap-6 lg:gap-8 mb-12">
            <div className="border-grid p-6 lg:p-10">
              <span className="text-lg lg:text-xl font-mono uppercase tracking-[0.2em] text-white/60 block mb-4">
                ВМЕСТИМОСТЬ
              </span>
              <div className="text-xl lg:text-2xl text-white space-y-2 font-bold">
                <div>ДО 500 ЧЕЛОВЕК</div>
                <div className="text-white/60 text-base lg:text-lg">СТОЯЧИЙ ФОРМАТ</div>
              </div>
            </div>

            <div className="border-grid p-6 lg:p-10">
              <span className="text-lg lg:text-xl font-mono uppercase tracking-[0.2em] text-white/60 block mb-4">
                ПЛОЩАДЬ
              </span>
              <div className="text-xl lg:text-2xl text-white space-y-2 font-bold">
                <div>800 М²</div>
                <div className="text-white/60 text-base lg:text-lg">ТРАНСФОРМИРУЕМОЕ</div>
              </div>
            </div>

            <div className="border-grid p-6 lg:p-10">
              <span className="text-lg lg:text-xl font-mono uppercase tracking-[0.2em] text-white/60 block mb-4">
                ОСНАЩЕНИЕ
              </span>
              <div className="text-xl lg:text-2xl text-white space-y-2 font-bold">
                <div>FULL TECH</div>
                <div className="text-white/60 text-base lg:text-lg">СВЕТ • ЗВУК • ВИДЕО</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
