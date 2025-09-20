"use client";

import { Hero } from "~/components/sections/Hero";
import { Marquee } from "~/components/ui/Marquee";
import { ScrollAnimatedWrapper } from "~/components/ui/ScrollAnimatedWrapper";
import { ImageLightbox } from "~/components/ui/ImageLightbox";
import { ContactForm } from "~/components/ui/ContactForm";
import { CornerAnimations } from "~/components/ui/CornerAnimations";
import Link from "next/link";
import Image from "next/image";
import { useState } from "react";
import {
  IconSquare,
  IconUsers,
  IconBuildingSkyscraper,
  IconMusic,
  IconBulb,
  IconVideo,
  IconCoffee,
  IconShieldLock,
  IconMapPin,
  IconClock,
  IconCalendarEvent
} from '@tabler/icons-react';

const marqueeItems = [
  "NEXUS EVENT SPACE",
  "САНКТ-ПЕТЕРБУРГ",
  "АРЕНДА ПРОСТРАНСТВА",
  "800 М²",
  "ПРОФЕССИОНАЛЬНОЕ ОСНАЩЕНИЕ"
];

const statBlocks = [
  {
    icon: <IconSquare size={40} className="text-white/60" />,
    label: "Общая площадь",
    value: "800 м²",
    description: "Трансформируемое пространство с возможностью зонирования"
  },
  {
    icon: <IconUsers size={40} className="text-white/60" />,
    label: "Вместимость",
    value: "до 500",
    description: "человек в стоячем формате"
  },
  {
    icon: <IconBuildingSkyscraper size={40} className="text-white/60" />,
    label: "Высота потолков",
    value: "7 м",
    description: "Возможность подвеса декораций и оборудования"
  }
];

const spaces = [
  {
    icon: <IconMusic size={36} className="text-black/60" />,
    title: "Основной зал",
    area: "600 м²",
    specs: [
      "Вместимость до 500 человек",
      "Профессиональный свет и звук",
      "LED-экран 12×4 метра",
      "Полное затемнение"
    ]
  },
  {
    icon: <IconShieldLock size={36} className="text-black/60" />,
    title: "VIP-зона",
    area: "120 м²",
    specs: [
      "Отдельный вход",
      "Вместимость до 50 человек",
      "Гардероб",
      "Зона отдыха"
    ]
  },
  {
    icon: <IconBulb size={36} className="text-black/60" />,
    title: "Техническая зона",
    area: "80 м²",
    specs: [
      "Гримерные комнаты",
      "Склад оборудования",
      "Режиссерская",
      "Служебные помещения"
    ]
  }
];

const techSpecs = [
  {
    category: "Звук",
    items: [
      "Профессиональная акустическая система L-Acoustics",
      "Цифровой микшерный пульт Yamaha CL5",
      "Беспроводные микрофоны Sennheiser",
      "DJ-оборудование Pioneer CDJ-3000",
      "Мониторная система для артистов"
    ]
  },
  {
    category: "Свет",
    items: [
      "Интеллектуальные световые приборы Clay Paky",
      "LED-прожекторы с полным спектром RGBW",
      "Дым-машины и хейзеры для спецэффектов",
      "Стробоскопы и лазерные установки",
      "Система управления светом GrandMA"
    ]
  },
  {
    category: "Видео",
    items: [
      "Светодиодный экран 12×4 м (P3.9)",
      "Проекционное оборудование 4K",
      "Система видеотрансляции и стриминга",
      "Плазменные панели 65\" для VIP-зоны",
      "Система видеоконференцсвязи"
    ]
  }
];

export default function HomePage() {
  const [lightboxOpen, setLightboxOpen] = useState(false);
  const [lightboxIndex, setLightboxIndex] = useState(0);

  const galleryImages = [
    "/photo_2025-09-20_00-35-13.jpeg",
    "/photo_2025-09-20_00-35-14.jpeg",
    "/photo_2025-09-20_00-35-16.jpeg",
    "/photo_2025-09-20_00-35-17.jpeg",
    "/photo_2025-09-20_00-35-18.jpeg",
    "/photo_2025-09-20_00-35-19.jpeg",
  ];

  const openLightbox = (index: number) => {
    setLightboxIndex(index);
    setLightboxOpen(true);
  };

  return (
    <>
      <Hero />
      <Marquee items={marqueeItems} speed={25} aria-label="Бегущая строка с информацией о пространстве NEXUS" />
      <div className="w-full">

        {/* About Section - Full Viewport */}
        <section className="full-section bg-black relative" id="about" aria-labelledby="about-heading">
          <CornerAnimations lineColor="bg-white" />
          <div className="w-full page-padding">
            <div className="grid gap-16 lg:gap-24">
              <header className="grid gap-8">
                <ScrollAnimatedWrapper animation="fade-in">
                  <span className="text-subhero" id="about-label">О ПЛОЩАДКЕ</span>
                </ScrollAnimatedWrapper>
                <ScrollAnimatedWrapper animation="fade-up" delay={100}>
                  <h2 className="text-h1" id="about-heading">
                    МНОГОФУНКЦИОНАЛЬНОЕ<br/>
                    ПРОСТРАНСТВО
                  </h2>
                </ScrollAnimatedWrapper>
                <ScrollAnimatedWrapper animation="fade-up" delay={200}>
                  <div className="space-y-6">
                    <p className="text-2xl md:text-3xl lg:text-4xl text-white/80 max-w-6xl">
                      Современная площадка для проведения мероприятий любого формата.
                      Профессиональное техническое оснащение, удобное расположение
                      и опытная команда.
                    </p>
                    <div className="grid md:grid-cols-2 gap-6 text-lg text-white/70">
                      <div className="space-y-2">
                        <h4 className="text-xl font-mono uppercase tracking-wider text-white/90">Преимущества</h4>
                        <ul className="space-y-1">
                          <li>• Идеальное расположение в центре города</li>
                          <li>• Гибкая планировка и зонирование</li>
                          <li>• Полный цикл технического сопровождения</li>
                          <li>• Опытная команда организаторов</li>
                        </ul>
                      </div>
                      <div className="space-y-2">
                        <h4 className="text-xl font-mono uppercase tracking-wider text-white/90">Возможности</h4>
                        <ul className="space-y-1">
                          <li>• Корпоративные мероприятия до 500 человек</li>
                          <li>• Концерты и фестивали</li>
                          <li>• Выставки и презентации</li>
                          <li>• Частные праздники и торжества</li>
                        </ul>
                      </div>
                    </div>
                  </div>
                </ScrollAnimatedWrapper>
              </header>
              <div className="grid md:grid-cols-3 gap-8" role="list" aria-label="Характеристики пространства">
                {statBlocks.map((stat, index) => (
                  <ScrollAnimatedWrapper key={index} animation="scale" delay={index * 100}>
                    <article className="card h-full min-h-[300px] flex flex-col" role="listitem">
                      <div className="mb-6" aria-hidden="true">{stat.icon}</div>
                      <div className="text-h3" aria-label={`${stat.label}: ${stat.value}`}>{stat.value}</div>
                      <h3 className="text-2xl font-mono uppercase mt-4">{stat.label}</h3>
                      <p className="text-xl text-white/60 mt-4">{stat.description}</p>
                    </article>
                  </ScrollAnimatedWrapper>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* Spaces Section - Full Viewport */}
        <section className="full-section bg-white text-black relative" id="spaces">
          <CornerAnimations lineColor="bg-black" />
          <div className="w-full page-padding">
            <div className="grid gap-16 lg:gap-24">
              <div className="grid gap-8">
                <ScrollAnimatedWrapper animation="fade-in">
                  <span className="text-2xl md:text-3xl font-mono uppercase tracking-[0.3em]">ПЛАНИРОВКА</span>
                </ScrollAnimatedWrapper>
                <ScrollAnimatedWrapper animation="slide-right" delay={100}>
                  <h2 className="text-h1">
                    ЗОНИРОВАНИЕ
                  </h2>
                </ScrollAnimatedWrapper>
              </div>
              <div className="grid lg:grid-cols-3 gap-8">
                {spaces.map((space, index) => (
                  <ScrollAnimatedWrapper key={index} animation="fade-up" delay={index * 150}>
                    <div className="border-4 border-black p-12 h-full min-h-[400px] flex flex-col">
                      <div className="mb-6">{space.icon}</div>
                      <h3 className="text-h3">{space.title}</h3>
                      <span className="text-3xl font-mono block mt-4 mb-8">{space.area}</span>
                      <ul className="space-y-4 flex-grow">
                        {space.specs.map((spec, i) => (
                          <li key={i} className="text-xl font-medium">{spec}</li>
                        ))}
                      </ul>
                    </div>
                  </ScrollAnimatedWrapper>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* Tech Section - Full Viewport */}
        <section className="full-section bg-black relative" id="tech">
          <CornerAnimations lineColor="bg-white" />
          <div className="w-full page-padding">
            <div className="grid gap-16 lg:gap-24">
              <div className="grid gap-8">
                <ScrollAnimatedWrapper animation="fade-in">
                  <span className="text-subhero">ОБОРУДОВАНИЕ</span>
                </ScrollAnimatedWrapper>
                <ScrollAnimatedWrapper animation="fade-up" delay={100}>
                  <h2 className="text-h1">
                    ТЕХНИЧЕСКОЕ<br/>
                    ОСНАЩЕНИЕ
                  </h2>
                </ScrollAnimatedWrapper>
              </div>
              <div className="grid lg:grid-cols-3 gap-8">
                {techSpecs.map((spec, index) => (
                  <ScrollAnimatedWrapper key={index} animation="slide-right" delay={index * 100}>
                    <div className="card">
                      <h3 className="text-h3 mb-8">{spec.category}</h3>
                      <ul className="space-y-4">
                        {spec.items.map((item, i) => (
                          <li key={i} className="text-xl text-white/80 font-mono">{item}</li>
                        ))}
                      </ul>
                    </div>
                  </ScrollAnimatedWrapper>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* Formats Section - Full Viewport */}
        <section className="full-section bg-white text-black relative" id="formats">
          <CornerAnimations lineColor="bg-black" />
          <div className="w-full page-padding">
            <div className="grid gap-16 lg:gap-24">
              <div className="grid gap-8">
                <ScrollAnimatedWrapper animation="fade-in">
                  <span className="text-2xl md:text-3xl font-mono uppercase tracking-[0.3em]">ФОРМАТЫ</span>
                </ScrollAnimatedWrapper>
                <ScrollAnimatedWrapper animation="fade-up" delay={100}>
                  <h2 className="text-h1">
                    ВОЗМОЖНОСТИ<br/>
                    ИСПОЛЬЗОВАНИЯ
                  </h2>
                </ScrollAnimatedWrapper>
              </div>
              <div className="grid lg:grid-cols-2 gap-8">
                <ScrollAnimatedWrapper animation="slide-left">
                  <div className="flex h-full flex-col border-4 border-black p-12 lg:p-16">
                    <h3 className="text-h3 mb-12">КОРПОРАТИВНЫЕ<br/>МЕРОПРИЯТИЯ</h3>
                  <ul className="space-y-6 text-2xl font-bold">
                    <li>КОНФЕРЕНЦИИ</li>
                    <li>ПРЕЗЕНТАЦИИ</li>
                    <li>КОРПОРАТИВЫ</li>
                    <li>ТИМБИЛДИНГИ</li>
                    <li>НЕТВОРКИНГ</li>
                  </ul>
                  </div>
                </ScrollAnimatedWrapper>
                <ScrollAnimatedWrapper animation="slide-right" delay={150}>
                  <div className="flex h-full flex-col border-4 border-black p-12 lg:p-16">
                    <h3 className="text-h3 mb-12">КУЛЬТУРНЫЕ<br/>СОБЫТИЯ</h3>
                  <ul className="space-y-6 text-2xl font-bold">
                    <li>КОНЦЕРТЫ</li>
                    <li>ВЫСТАВКИ</li>
                    <li>КИНОПОКАЗЫ</li>
                    <li>ФЕСТИВАЛИ</li>
                    <li>МАРКЕТЫ</li>
                  </ul>
                  </div>
                </ScrollAnimatedWrapper>
              </div>
            </div>
          </div>
        </section>

        {/* Services Section - Full Viewport */}
        <section className="full-section bg-black relative" id="services">
          <CornerAnimations lineColor="bg-white" />
          <div className="w-full page-padding">
            <div className="grid gap-16 lg:gap-24">
              <div className="grid gap-8">
                <ScrollAnimatedWrapper animation="fade-in">
                  <span className="text-subhero">УСЛУГИ</span>
                </ScrollAnimatedWrapper>
                <ScrollAnimatedWrapper animation="fade-up" delay={100}>
                  <h2 className="text-h1">
                    ДОПОЛНИТЕЛЬНЫЕ<br/>
                    СЕРВИСЫ
                  </h2>
                </ScrollAnimatedWrapper>
              </div>
              <div className="grid lg:grid-cols-3 gap-8">
                <ScrollAnimatedWrapper animation="scale">
                  <div className="card">
                    <h3 className="text-h3 mb-8">КЕЙТЕРИНГ</h3>
                    <p className="text-2xl text-white/80 leading-relaxed mb-4">
                      Организация фуршетов, банкетов и кофе-брейков от проверенных партнеров
                    </p>
                    <ul className="text-lg text-white/60 space-y-1">
                      <li>• Меню от шеф-поваров</li>
                      <li>• Барное обслуживание</li>
                      <li>• Техническое оснащение кухни</li>
                      <li>• Сервировка и обслуживание</li>
                    </ul>
                  </div>
                </ScrollAnimatedWrapper>
                <ScrollAnimatedWrapper animation="scale" delay={100}>
                  <div className="card">
                    <h3 className="text-h3 mb-8">ТЕХПОДДЕРЖКА</h3>
                    <p className="text-2xl text-white/80 leading-relaxed mb-4">
                      Полное техническое сопровождение мероприятия профессиональной командой
                    </p>
                    <ul className="text-lg text-white/60 space-y-1">
                      <li>• Звукорежиссеры и светотехники</li>
                      <li>• Видеооператоры и монтажеры</li>
                      <li>• Техническое планирование</li>
                      <li>• Аварийное резервирование</li>
                    </ul>
                  </div>
                </ScrollAnimatedWrapper>
                <ScrollAnimatedWrapper animation="scale" delay={200}>
                  <div className="card">
                    <h3 className="text-h3 mb-8">ДЕКОРИРОВАНИЕ</h3>
                    <p className="text-2xl text-white/80 leading-relaxed mb-4">
                      Оформление пространства согласно концепции вашего мероприятия
                    </p>
                    <ul className="text-lg text-white/60 space-y-1">
                      <li>• Тематическое оформление</li>
                      <li>• Флористика и декор</li>
                      <li>• Брендинг и айдентика</li>
                      <li>• Интерактивные инсталляции</li>
                    </ul>
                  </div>
                </ScrollAnimatedWrapper>
              </div>
            </div>
          </div>
        </section>

        {/* Gallery Section - Full Viewport */}
        <section className="full-section bg-white text-black" id="gallery" aria-labelledby="gallery-heading">
          <div className="w-full page-padding">
            <div className="grid gap-16 lg:gap-24">
              <header className="grid gap-8">
                <ScrollAnimatedWrapper animation="fade-in">
                  <span className="text-2xl md:text-3xl font-mono uppercase tracking-[0.3em]" id="gallery-label">ГАЛЕРЕЯ</span>
                </ScrollAnimatedWrapper>
                <ScrollAnimatedWrapper animation="fade-up" delay={100}>
                  <h2 className="text-h1" id="gallery-heading">
                    НАШЕ<br/>
                    ПРОСТРАНСТВО
                  </h2>
                </ScrollAnimatedWrapper>
              </header>
              <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8" role="list" aria-label="Галерея изображений пространства NEXUS">
                {galleryImages.map((photo, index) => (
                  <ScrollAnimatedWrapper key={index} animation="scale" delay={index * 50}>
                    <figure
                      className="relative aspect-square overflow-hidden border-4 border-black group cursor-pointer"
                      onClick={() => openLightbox(index)}
                      role="listitem"
                    >
                    <Image
                      src={photo}
                      alt={`Интерьер пространства NEXUS - фото ${index + 1} из ${galleryImages.length}. Многофункциональный зал для мероприятий`}
                      fill
                      className="object-cover transition-all duration-700 group-hover:scale-125"
                      priority={index < 3}
                      sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                    />
                    {/* Overlay effect on hover */}
                    <div className="absolute inset-0 bg-black opacity-0 group-hover:opacity-40 transition-opacity duration-500" aria-hidden="true" />
                    <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-500" aria-hidden="true">
                      <div className="text-white text-2xl font-mono uppercase tracking-wider animate-float">VIEW</div>
                    </div>
                    {/* Corner lines on hover */}
                    <div className="absolute top-4 left-4 w-8 h-8 border-l-2 border-t-2 border-white opacity-0 group-hover:opacity-100 transition-opacity duration-300" aria-hidden="true" />
                    <div className="absolute top-4 right-4 w-8 h-8 border-r-2 border-t-2 border-white opacity-0 group-hover:opacity-100 transition-opacity duration-300" aria-hidden="true" />
                    <div className="absolute bottom-4 left-4 w-8 h-8 border-l-2 border-b-2 border-white opacity-0 group-hover:opacity-100 transition-opacity duration-300" aria-hidden="true" />
                    <div className="absolute bottom-4 right-4 w-8 h-8 border-r-2 border-b-2 border-white opacity-0 group-hover:opacity-100 transition-opacity duration-300" aria-hidden="true" />

                    {/* Screen reader description */}
                    <figcaption className="sr-only">
                      Фото {index + 1} из {galleryImages.length}: Интерьер многофункционального пространства NEXUS для проведения мероприятий
                    </figcaption>
                    </figure>
                  </ScrollAnimatedWrapper>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* Map Section - Full Viewport */}
        <section className="full-section bg-white text-black" id="map">
          <div className="w-full page-padding">
            <div className="grid gap-16 lg:gap-24">
              <div className="grid gap-8">
                <ScrollAnimatedWrapper animation="fade-in">
                  <span className="text-2xl md:text-3xl font-mono uppercase tracking-[0.3em]">ЛОКАЦИЯ</span>
                </ScrollAnimatedWrapper>
                <ScrollAnimatedWrapper animation="fade-up" delay={100}>
                  <h2 className="text-h1">
                    ГДЕ МЫ<br/>
                    НАХОДИМСЯ
                  </h2>
                </ScrollAnimatedWrapper>
              </div>
              <ScrollAnimatedWrapper animation="fade-up" delay={200}>
                <div className="w-full h-[600px] border-4 border-black">
                  <iframe
                    src="https://yandex.ru/map-widget/v1/?um=constructor%3Adb7d4b8f3e8b3f5e8b9c5d4e3f2a1b0c&amp;source=constructor&amp;scroll=true&amp;ll=30.326028%2C59.939212&amp;z=17&amp;pt=30.326028,59.939212~pm2rdm"
                    width="100%"
                    height="100%"
                    frameBorder="0"
                    title="Yandex Map - NEXUS Event Space"
                    loading="lazy"
                    allowFullScreen
                  />
                </div>
              </ScrollAnimatedWrapper>
              <div className="grid lg:grid-cols-3 gap-8">
                <ScrollAnimatedWrapper animation="fade-up">
                  <div className="border-4 border-black p-8 h-full min-h-[180px] flex flex-col">
                    <h3 className="text-2xl font-mono uppercase tracking-[0.2em] mb-4">АДРЕС</h3>
                    <p className="text-xl">Конюшенная площадь, 2Ж<br/>Санкт-Петербург</p>
                  </div>
                </ScrollAnimatedWrapper>
                <ScrollAnimatedWrapper animation="fade-up" delay={100}>
                  <div className="border-4 border-black p-8 h-full min-h-[180px] flex flex-col">
                    <h3 className="text-2xl font-mono uppercase tracking-[0.2em] mb-4">ТЕЛЕФОН</h3>
                    <p className="text-xl">+7 (921) 410-44-40</p>
                  </div>
                </ScrollAnimatedWrapper>
                <ScrollAnimatedWrapper animation="fade-up" delay={200}>
                  <div className="border-4 border-black p-8 h-full min-h-[180px] flex flex-col">
                    <h3 className="text-2xl font-mono uppercase tracking-[0.2em] mb-4">EMAIL</h3>
                    <p className="text-xl">info@nexus-events.ru</p>
                  </div>
                </ScrollAnimatedWrapper>
              </div>
            </div>
          </div>
        </section>

        {/* Contact Form Section - Full Viewport */}
        <section className="full-section bg-black relative" id="contact-form">
          <CornerAnimations lineColor="bg-white" />
          <div className="w-full page-padding">
            <div className="grid gap-16 lg:gap-24">
              <div className="grid gap-8 text-center">
                <ScrollAnimatedWrapper animation="fade-in">
                  <span className="text-subhero">ЗАЯВКА</span>
                </ScrollAnimatedWrapper>
                <ScrollAnimatedWrapper animation="scale" delay={100}>
                  <h2 className="text-h1">
                    ЗАБРОНИРОВАТЬ<br/>
                    ПРОСТРАНСТВО
                  </h2>
                </ScrollAnimatedWrapper>
                <ScrollAnimatedWrapper animation="fade-up" delay={200}>
                  <p className="text-2xl md:text-3xl lg:text-4xl text-white/80 max-w-4xl mx-auto">
                    Оставьте заявку и мы свяжемся с вами в течение 24 часов
                  </p>
                </ScrollAnimatedWrapper>
              </div>
              <ScrollAnimatedWrapper animation="fade-up" delay={300}>
                <div className="w-full">
                  <ContactForm />
                </div>
              </ScrollAnimatedWrapper>
            </div>
          </div>
        </section>
      </div>

      {/* Image Lightbox */}
      <ImageLightbox
        images={galleryImages}
        currentIndex={lightboxIndex}
        isOpen={lightboxOpen}
        onClose={() => setLightboxOpen(false)}
      />
    </>
  );
}
