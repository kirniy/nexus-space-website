"use client";

import Link from "next/link";

export const Hero = () => {

  return (
    <section className="relative min-h-screen w-full flex items-center justify-center bg-black overflow-hidden">
      {/* Simple Background */}
      <div className="absolute inset-0 z-0 bg-gradient-to-b from-black via-gray-900 to-black" />

      {/* Mobile-optimized Content */}
      <div className="relative z-10 w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 sm:py-16 lg:py-20 text-center">
        <div className="space-y-6 sm:space-y-8">
          {/* Location */}
          <div className="text-lg sm:text-xl md:text-2xl lg:text-3xl text-white/80 font-mono uppercase tracking-[0.2em] sm:tracking-[0.3em]">
            <a
              href="https://yandex.ru/maps/-/CLeD4Zzc"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-block hover:text-white transition-colors duration-300 px-2 py-1 rounded"
            >
              САНКТ-ПЕТЕРБУРГ, КОНЮШЕННАЯ ПЛОЩАДЬ, 2Ж
            </a>
          </div>

          {/* Main Title */}
          <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl xl:text-8xl 2xl:text-9xl font-black text-white uppercase tracking-tighter leading-none">
            <span className="block">ПРОСТРАНСТВО</span>
            <span className="block mt-2 sm:mt-4">ДЛЯ СОБЫТИЙ</span>
          </h1>

          {/* Description */}
          <p className="text-base sm:text-lg md:text-xl lg:text-2xl xl:text-3xl text-white/80 max-w-4xl mx-auto leading-relaxed px-4">
            800 м² для корпоративных мероприятий, презентаций,
            концертов и частных событий. Профессиональное техническое
            оснащение и гибкая планировка.
          </p>

          {/* Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 sm:gap-6 lg:gap-8 mt-8 sm:mt-10 lg:mt-12 justify-center items-center">
            <Link
              href="/contact"
              className="button-primary w-full sm:w-auto"
            >
              <span>ЗАБРОНИРОВАТЬ</span>
            </Link>
            <Link
              href="/space"
              className="text-base sm:text-lg md:text-xl font-mono uppercase tracking-[0.2em] text-white/60 hover:text-white transition-colors duration-300 px-4 py-2"
            >
              ХАРАКТЕРИСТИКИ →
            </Link>
          </div>

          {/* Info Cards - Mobile optimized */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6 lg:gap-8 mt-12 sm:mt-16 lg:mt-20 max-w-5xl mx-auto">
            <div className="border-4 border-white bg-black p-4 sm:p-6 lg:p-8 text-center">
              <div className="text-lg sm:text-xl lg:text-2xl font-bold text-white mb-2">ДО 500 ЧЕЛОВЕК</div>
              <div className="text-white/60 uppercase text-xs sm:text-sm tracking-wider">ВМЕСТИМОСТЬ</div>
            </div>

            <div className="border-4 border-white bg-black p-4 sm:p-6 lg:p-8 text-center">
              <div className="text-lg sm:text-xl lg:text-2xl font-bold text-white mb-2">800 М²</div>
              <div className="text-white/60 uppercase text-xs sm:text-sm tracking-wider">ПЛОЩАДЬ</div>
            </div>

            <div className="border-4 border-white bg-black p-4 sm:p-6 lg:p-8 text-center sm:col-span-2 lg:col-span-1">
              <div className="text-lg sm:text-xl lg:text-2xl font-bold text-white mb-2">FULL TECH</div>
              <div className="text-white/60 uppercase text-xs sm:text-sm tracking-wider">ОСНАЩЕНИЕ</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
