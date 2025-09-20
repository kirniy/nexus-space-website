"use client";

import { Metadata } from "next";
import Image from "next/image";
import { useState } from "react";
import { ImageLightbox } from "~/components/ui/ImageLightbox";
import {
  IconMusic,
  IconBuilding,
  IconPhoto,
  IconCamera,
  IconVideo,
  IconDrone,
  IconEdit,
  IconCurrencyDollar,
  IconPackage,
  IconCheck
} from '@tabler/icons-react';

const photos = [
  "/photo_2025-09-20 00.35.13.jpeg",
  "/photo_2025-09-20 00.35.14.jpeg",
  "/photo_2025-09-20 00.35.16.jpeg",
  "/photo_2025-09-20 00.35.17.jpeg",
  "/photo_2025-09-20 00.35.18.jpeg",
  "/photo_2025-09-20 00.35.19.jpeg",
  "/photo_2025-09-20 00.35.22.jpeg",
  "/photo_2025-09-20 00.35.23.jpeg",
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
      <section className="full-section bg-black">
        <div className="w-full page-padding">
          <div className="grid gap-8">
            <span className="text-subhero">ГАЛЕРЕЯ</span>
            <h1 className="text-h1">
              ФОТОГРАФИИ<br/>
              ПРОСТРАНСТВА
            </h1>
            <p className="text-2xl md:text-3xl lg:text-4xl text-white/80 max-w-5xl">
              Интерьеры, оборудование и атмосфера NEXUS. Каждое мероприятие создает
              уникальную визуальную историю в нашем пространстве.
            </p>
          </div>
        </div>
      </section>

      {/* Main Gallery - Full Viewport */}
      <section className="full-section bg-white text-black">
        <div className="w-full page-padding">
          <div className="grid gap-16 lg:gap-24">
            <div className="grid gap-8">
              <span className="text-2xl md:text-3xl font-mono uppercase tracking-[0.3em]">ИНТЕРЬЕРЫ</span>
              <h2 className="text-h1">
                ПРОСТРАНСТВО<br/>
                NEXUS
              </h2>
            </div>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {photos.map((photo, index) => (
                <div
                  key={index}
                  className="group relative aspect-[4/3] overflow-hidden border-4 border-black cursor-pointer"
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
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Event Formats - Full Viewport */}
      <section className="full-section bg-black">
        <div className="w-full page-padding">
          <div className="grid gap-16 lg:gap-24">
            <div className="grid gap-8">
              <span className="text-subhero">ВОЗМОЖНОСТИ</span>
              <h2 className="text-h1">
                ФОРМАТЫ<br/>
                ИСПОЛЬЗОВАНИЯ
              </h2>
            </div>
            <div className="grid md:grid-cols-2 gap-8">
              <div className="relative h-[500px] overflow-hidden border-4 border-white">
                <Image
                  src="/photo_2025-09-20 00.35.22.jpeg"
                  alt="Концертный формат"
                  fill
                  className="object-cover"
                  sizes="(max-width: 768px) 100vw, 50vw"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black via-black/50 to-transparent" />
                <div className="absolute bottom-0 left-0 right-0 p-8 lg:p-12">
                  <div className="flex items-center gap-4 mb-4">
                    <IconMusic size={32} />
                    <h3 className="text-h3">КОНЦЕРТЫ И ВЫСТУПЛЕНИЯ</h3>
                  </div>
                  <p className="text-xl text-white/80">
                    Профессиональная сцена, концертный свет и звук для выступлений любого масштаба
                  </p>
                </div>
              </div>

              <div className="relative h-[500px] overflow-hidden border-4 border-white">
                <Image
                  src="/photo_2025-09-20 00.35.19.jpeg"
                  alt="Корпоративный формат"
                  fill
                  className="object-cover"
                  sizes="(max-width: 768px) 100vw, 50vw"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black via-black/50 to-transparent" />
                <div className="absolute bottom-0 left-0 right-0 p-8 lg:p-12">
                  <div className="flex items-center gap-4 mb-4">
                    <IconBuilding size={32} />
                    <h3 className="text-h3">КОРПОРАТИВНЫЕ МЕРОПРИЯТИЯ</h3>
                  </div>
                  <p className="text-xl text-white/80">
                    Конференции, презентации, тимбилдинги в современном оборудованном пространстве
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Photo Services - Full Viewport */}
      <section className="full-section bg-white text-black">
        <div className="w-full page-padding">
          <div className="grid gap-16 lg:gap-24">
            <div className="grid gap-8">
              <span className="text-2xl md:text-3xl font-mono uppercase tracking-[0.3em]">УСЛУГИ</span>
              <h2 className="text-h1">
                ФОТО И ВИДЕО<br/>
                СЪЕМКА
              </h2>
            </div>
            <div className="grid lg:grid-cols-2 gap-8">
              <div className="border-4 border-black p-12 h-full min-h-[300px] flex flex-col">
                <div className="flex items-center gap-4 mb-8">
                  <IconCamera size={36} className="text-black/60" />
                  <h3 className="text-h3">ПРОФЕССИОНАЛЬНАЯ СЪЕМКА</h3>
                </div>
                <p className="text-xl text-black/80 mb-6">
                  Мы сотрудничаем с профессиональными фотографами и видеографами,
                  которые помогут запечатлеть ваше событие.
                </p>
                <ul className="space-y-3 text-lg">
                  <li className="flex items-center gap-3">
                    <IconPhoto size={20} className="text-black/40" />
                    Репортажная съемка мероприятий
                  </li>
                  <li className="flex items-center gap-3">
                    <IconCamera size={20} className="text-black/40" />
                    Студийная фотосессия
                  </li>
                  <li className="flex items-center gap-3">
                    <IconVideo size={20} className="text-black/40" />
                    Видеосъемка и монтаж
                  </li>
                  <li className="flex items-center gap-3">
                    <IconDrone size={20} className="text-black/40" />
                    Аэросъемка
                  </li>
                </ul>
              </div>
              <div className="border-4 border-black p-12 h-full min-h-[300px] flex flex-col">
                <div className="flex items-center gap-4 mb-8">
                  <IconCurrencyDollar size={36} className="text-black/60" />
                  <h3 className="text-h3">СТОИМОСТЬ УСЛУГ</h3>
                </div>
                <p className="text-xl text-black/80 mb-6">
                  Услуги фото- и видеосъемки можно заказать дополнительно
                  при бронировании пространства.
                </p>
                <ul className="space-y-3 text-lg">
                  <li className="flex items-center gap-3">
                    <IconPhoto size={20} className="text-black/40" />
                    Фотосъемка от 15 000 ₽
                  </li>
                  <li className="flex items-center gap-3">
                    <IconVideo size={20} className="text-black/40" />
                    Видеосъемка от 25 000 ₽
                  </li>
                  <li className="flex items-center gap-3">
                    <IconPackage size={20} className="text-black/40" />
                    Комплексный пакет от 35 000 ₽
                  </li>
                  <li className="flex items-center gap-3">
                    <IconEdit size={20} className="text-black/40" />
                    Обработка материалов включена
                  </li>
                </ul>
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
    </div>
  );
}