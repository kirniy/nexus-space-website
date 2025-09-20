"use client";

import { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";
import { useEffect, useState } from "react";
import { AnnouncementBanner } from "~/components/ui/AnnouncementBanner";

const heroImages = [
  "/photo_2025-09-20 00.35.13.jpeg",
  "/photo_2025-09-20 00.35.16.jpeg",
  "/photo_2025-09-20 00.35.19.jpeg",
  "/photo_2025-09-20 00.35.22.jpeg",
];

const stats = [
  { label: "ПЛОЩАДЬ", value: "800 М²", description: "ТРАНСФОРМИРУЕМОЕ ПРОСТРАНСТВО" },
  { label: "ВМЕСТИМОСТЬ", value: "500 ЧЕЛ", description: "СТОЯЧИЙ ФОРМАТ" },
  { label: "ВЫСОТА", value: "7 МЕТРОВ", description: "ПОТОЛКИ" }
];

const zones = [
  {
    title: "ОСНОВНОЙ ЗАЛ",
    area: "600 М²",
    specs: [
      "Высота потолков 7 метров",
      "Профессиональная сцена 10×6 м",
      "Танцпол 300 м²",
      "Полное затемнение",
      "Климат-контроль"
    ]
  },
  {
    title: "VIP-ЗОНА",
    area: "120 М²",
    specs: [
      "Отдельный вход",
      "Барная стойка",
      "Мягкая мебель",
      "Приватность",
      "Панорамный вид"
    ]
  },
  {
    title: "СЛУЖЕБНЫЕ",
    area: "80 М²",
    specs: [
      "Гримерные 2 шт",
      "Склад оборудования",
      "Техническая комната",
      "Офис администрации",
      "Санузлы"
    ]
  }
];

const equipment = [
  {
    category: "ЗВУК",
    items: [
      "L-Acoustics K2 линейный массив",
      "Цифровой микшерный пульт Yamaha CL5",
      "Беспроводные микрофоны Shure",
      "DJ-оборудование Pioneer CDJ-3000"
    ]
  },
  {
    category: "СВЕТ",
    items: [
      "Интеллектуальные приборы Clay Paky",
      "LED-прожекторы RGBW",
      "Световая консоль MA Lighting",
      "Лазерные проекторы"
    ]
  },
  {
    category: "ВИДЕО",
    items: [
      "LED-экран 12×4 метра P3.91",
      "Проекторы 20000 люмен",
      "Видеомикшер Blackmagic ATEM",
      "Системы трансляции"
    ]
  }
];

export default function SpacePage() {
  const [currentImageIndex, setCurrentImageIndex] = useState(() =>
    Math.floor(Math.random() * heroImages.length)
  );

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImageIndex((prev) => (prev + 1) % heroImages.length);
    }, 5000);

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="w-full">
      {/* Space Header - Full Viewport with Background Images */}
      <section className="full-section bg-black relative overflow-hidden">
        {/* Rotating Background Images */}
        <div className="absolute inset-0 z-0">
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
                className="object-cover brightness-[0.3] scale-110"
                priority={index === 0}
                sizes="100vw"
              />
            </div>
          ))}
          <div className="absolute inset-0 bg-gradient-to-b from-black/40 via-black/60 to-black/90" />
        </div>

        {/* Grid Pattern */}
        <div className="absolute inset-0 z-[1] opacity-10">
          <div className="absolute inset-0 bg-[linear-gradient(90deg,white_1px,transparent_1px),linear-gradient(180deg,white_1px,transparent_1px)] bg-[size:100px_100px]" />
        </div>

        {/* Content */}
        <div className="relative z-10 w-full page-padding">
          <div className="grid gap-8">
            <span className="text-subhero">ПРОСТРАНСТВО</span>
            <h1 className="text-h1">
              ТЕХНИЧЕСКИЕ<br/>
              ХАРАКТЕРИСТИКИ
            </h1>
            <p className="text-2xl md:text-3xl lg:text-4xl text-white/80 max-w-5xl">
              Современное многофункциональное пространство в центре Санкт-Петербурга
              с профессиональным оборудованием и гибкой планировкой.
            </p>
          </div>
        </div>
      </section>

      {/* Stats - Full Viewport */}
      <section className="full-section bg-white text-black">
        <div className="w-full page-padding">
          <div className="grid gap-16 lg:gap-24">
            <div className="grid gap-8">
              <span className="text-2xl md:text-3xl font-mono uppercase tracking-[0.3em]">ПАРАМЕТРЫ</span>
              <h2 className="text-h1">
                ОСНОВНЫЕ<br/>
                ПОКАЗАТЕЛИ
              </h2>
            </div>
            <div className="grid md:grid-cols-3 gap-8">
              {stats.map((stat) => (
                <div key={stat.value} className="border-4 border-black p-12 h-full min-h-[280px] flex flex-col">
                  <span className="text-2xl font-mono uppercase tracking-[0.3em] block mb-4">{stat.label}</span>
                  <div className="text-h2 font-bold mb-4">{stat.value}</div>
                  <p className="text-xl text-black/60">{stat.description}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Zones - Full Viewport */}
      <section className="full-section bg-black">
        <div className="w-full page-padding">
          <div className="grid gap-16 lg:gap-24">
            <div className="grid gap-8">
              <span className="text-subhero">ПЛАНИРОВКА</span>
              <h2 className="text-h1">
                ФУНКЦИОНАЛЬНЫЕ<br/>
                ЗОНЫ
              </h2>
            </div>
            <div className="grid md:grid-cols-3 gap-8">
              {zones.map((zone) => (
                <div key={zone.title} className="border-4 border-white p-8 lg:p-12 h-full min-h-[400px]">
                  <h3 className="text-h3 mb-2">{zone.title}</h3>
                  <span className="text-2xl font-mono text-white/60 block mb-8">{zone.area}</span>
                  <ul className="space-y-3">
                    {zone.specs.map((spec, i) => (
                      <li key={i} className="text-xl text-white/80">• {spec}</li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Equipment - Full Viewport */}
      <section className="full-section bg-white text-black">
        <div className="w-full page-padding">
          <div className="grid gap-16 lg:gap-24">
            <div className="grid gap-8">
              <span className="text-2xl md:text-3xl font-mono uppercase tracking-[0.3em]">ОСНАЩЕНИЕ</span>
              <h2 className="text-h1">
                ТЕХНИЧЕСКОЕ<br/>
                ОБОРУДОВАНИЕ
              </h2>
            </div>
            <div className="grid md:grid-cols-3 gap-8">
              {equipment.map((eq) => (
                <div key={eq.category} className="border-4 border-black p-8 lg:p-12 h-full min-h-[350px]">
                  <h3 className="text-h3 mb-8">{eq.category}</h3>
                  <ul className="space-y-4">
                    {eq.items.map((item, i) => (
                      <li key={i} className="text-lg">{item}</li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Configurations - Full Viewport */}
      <section className="full-section bg-black">
        <div className="w-full page-padding">
          <div className="grid gap-16 lg:gap-24">
            <div className="grid gap-8">
              <span className="text-subhero">ВОЗМОЖНОСТИ</span>
              <h2 className="text-h1">
                ВАРИАНТЫ<br/>
                КОНФИГУРАЦИИ
              </h2>
            </div>
            <div className="grid lg:grid-cols-3 gap-8">
              <div className="border-4 border-white p-12 h-full min-h-[300px]">
                <h3 className="text-h3 mb-6">КОНЦЕРТНАЯ</h3>
                <ul className="space-y-3 text-xl text-white/80">
                  <li>• До 500 человек стоя</li>
                  <li>• Профессиональная сцена</li>
                  <li>• Концертный свет и звук</li>
                  <li>• Артист-кейтеринг</li>
                </ul>
              </div>
              <div className="border-4 border-white p-12 h-full min-h-[300px]">
                <h3 className="text-h3 mb-6">ТЕАТРАЛЬНАЯ</h3>
                <ul className="space-y-3 text-xl text-white/80">
                  <li>• До 300 человек сидя</li>
                  <li>• Ряды кресел</li>
                  <li>• Презентационное оборудование</li>
                  <li>• Конференц-система</li>
                </ul>
              </div>
              <div className="border-4 border-white p-12 h-full min-h-[300px]">
                <h3 className="text-h3 mb-6">БАНКЕТНАЯ</h3>
                <ul className="space-y-3 text-xl text-white/80">
                  <li>• До 200 человек за столами</li>
                  <li>• Кейтеринг-зона</li>
                  <li>• Фуршетное обслуживание</li>
                  <li>• Декор и оформление</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Additional Services - Full Viewport */}
      <section className="full-section bg-white text-black">
        <div className="w-full page-padding">
          <div className="grid gap-16 lg:gap-24">
            <div className="grid gap-8">
              <span className="text-2xl md:text-3xl font-mono uppercase tracking-[0.3em]">УСЛУГИ</span>
              <h2 className="text-h1">
                ДОПОЛНИТЕЛЬНЫЕ<br/>
                СЕРВИСЫ
              </h2>
            </div>
            <div className="grid md:grid-cols-2 gap-8">
              <div className="border-4 border-black p-12">
                <h3 className="text-h3 mb-8">ТЕХНИЧЕСКАЯ ПОДДЕРЖКА</h3>
                <ul className="space-y-4 text-xl">
                  <li>• Звукорежиссер</li>
                  <li>• Светооператор</li>
                  <li>• Видеоинженер</li>
                  <li>• Техническая команда</li>
                  <li>• Монтаж и демонтаж</li>
                </ul>
              </div>
              <div className="border-4 border-black p-12">
                <h3 className="text-h3 mb-8">ОРГАНИЗАЦИОННАЯ</h3>
                <ul className="space-y-4 text-xl">
                  <li>• Кейтеринг и бар</li>
                  <li>• Гардероб</li>
                  <li>• Охрана и безопасность</li>
                  <li>• Клининг</li>
                  <li>• Фото и видеосъемка</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Booking Process - Full Viewport */}
      <section className="full-section bg-black">
        <div className="w-full page-padding">
          <div className="grid gap-16 lg:gap-24">
            <div className="grid gap-8">
              <span className="text-subhero">БРОНИРОВАНИЕ</span>
              <h2 className="text-h1">
                КАК ЗАБРОНИРОВАТЬ<br/>
                ПРОСТРАНСТВО
              </h2>
            </div>
            <div className="grid gap-8">
              <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
                <div className="border-4 border-white p-8">
                  <div className="text-h2 mb-4">01</div>
                  <h3 className="text-2xl font-mono uppercase mb-4">ЗАЯВКА</h3>
                  <p className="text-lg text-white/80">Оставьте заявку через форму на сайте или позвоните</p>
                </div>
                <div className="border-4 border-white p-8">
                  <div className="text-h2 mb-4">02</div>
                  <h3 className="text-2xl font-mono uppercase mb-4">РАСЧЕТ</h3>
                  <p className="text-lg text-white/80">Получите консультацию и расчет стоимости аренды</p>
                </div>
                <div className="border-4 border-white p-8">
                  <div className="text-h2 mb-4">03</div>
                  <h3 className="text-2xl font-mono uppercase mb-4">ОСМОТР</h3>
                  <p className="text-lg text-white/80">Посетите площадку для осмотра и обсуждения деталей</p>
                </div>
                <div className="border-4 border-white p-8">
                  <div className="text-h2 mb-4">04</div>
                  <h3 className="text-2xl font-mono uppercase mb-4">ДОГОВОР</h3>
                  <p className="text-lg text-white/80">Подпишите договор и внесите предоплату</p>
                </div>
              </div>
              <div className="flex justify-center mt-8">
                <Link href="/contact" className="button-primary text-center">
                  ЗАБРОНИРОВАТЬ
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      <AnnouncementBanner
        title="Нужна консультация?"
        subtitle="Наши менеджеры помогут подобрать оптимальную конфигурацию пространства для вашего мероприятия"
      />
    </div>
  );
}