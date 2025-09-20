import { Metadata } from "next";
import Image from "next/image";
import { PageSection } from "~/components/sections/PageSection";

export const metadata: Metadata = {
  title: "Галерея — NEXUS",
  description: "Фотографии пространства NEXUS и проведенных мероприятий."
};

const photos = [
  "photo_2025-09-20 00.35.13.jpeg",
  "photo_2025-09-20 00.35.14.jpeg",
  "photo_2025-09-20 00.35.16.jpeg",
  "photo_2025-09-20 00.35.17.jpeg",
  "photo_2025-09-20 00.35.18.jpeg",
  "photo_2025-09-20 00.35.19.jpeg",
  "photo_2025-09-20 00.35.22.jpeg",
  "photo_2025-09-20 00.35.23.jpeg",
];

export default function GalleryPage() {
  return (
    <div className="layout-container grid gap-24 py-16">
      <header className="section-heading">
        <span className="text-xs font-mono uppercase tracking-[0.4em] text-white/50">Галерея</span>
        <h1 className="text-5xl font-display uppercase tracking-tighter">
          Фотографии пространства
        </h1>
        <p className="max-w-3xl text-lg text-white/70">
          Интерьеры, оборудование и атмосфера NEXUS. Каждое мероприятие создает
          уникальную визуальную историю в нашем пространстве.
        </p>
      </header>

      <PageSection
        id="photos"
        eyebrow="Интерьеры"
        title="Пространство NEXUS"
        description="Современные интерьеры, профессиональное оборудование и гибкая планировка для любых форматов мероприятий."
      >
        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {photos.map((photo, index) => (
            <div
              key={index}
              className="group relative aspect-[4/3] overflow-hidden border-grid cursor-pointer"
            >
              <Image
                src={`/${photo}`}
                alt={`Пространство NEXUS ${index + 1}`}
                fill
                className="object-cover transition-all duration-700 group-hover:scale-110 group-hover:brightness-110"
                sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-neutral-950/60 via-transparent to-transparent opacity-0 transition-opacity duration-300 group-hover:opacity-100" />
            </div>
          ))}
        </div>
      </PageSection>

      <PageSection
        id="capabilities"
        eyebrow="Возможности"
        title="Форматы использования"
        description=""
      >
        <div className="grid gap-8 md:grid-cols-2">
          <div className="relative aspect-video overflow-hidden border-grid">
            <Image
              src="/photo_2025-09-20 00.35.22.jpeg"
              alt="Концертный формат"
              fill
              className="object-cover"
              sizes="(max-width: 768px) 100vw, 50vw"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-neutral-950 via-neutral-950/50 to-transparent" />
            <div className="absolute bottom-0 left-0 right-0 p-8">
              <h3 className="mb-2 text-2xl font-display uppercase">Концерты и выступления</h3>
              <p className="text-white/70">
                Профессиональная сцена, концертный свет и звук для выступлений любого масштаба
              </p>
            </div>
          </div>

          <div className="relative aspect-video overflow-hidden border-grid">
            <Image
              src="/photo_2025-09-20 00.35.19.jpeg"
              alt="Корпоративный формат"
              fill
              className="object-cover"
              sizes="(max-width: 768px) 100vw, 50vw"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-neutral-950 via-neutral-950/50 to-transparent" />
            <div className="absolute bottom-0 left-0 right-0 p-8">
              <h3 className="mb-2 text-2xl font-display uppercase">Корпоративные мероприятия</h3>
              <p className="text-white/70">
                Конференции, презентации, тимбилдинги в современном оборудованном пространстве
              </p>
            </div>
          </div>
        </div>
      </PageSection>

      <section className="border-grid grid gap-6 p-8">
        <span className="text-xs font-mono uppercase tracking-[0.4em] text-white/50">
          Запрос на съемку
        </span>
        <h2 className="text-3xl font-display uppercase tracking-tight text-white">
          Нужны фотографии для вашего мероприятия?
        </h2>
        <p className="text-sm text-white/70">
          Мы сотрудничаем с профессиональными фотографами и видеографами,
          которые помогут запечатлеть ваше событие. Услуги фото- и видеосъемки
          можно заказать дополнительно при бронировании пространства.
        </p>
      </section>
    </div>
  );
}