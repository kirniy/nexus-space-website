import { Metadata } from "next";
import Link from "next/link";
import { ResidentCard } from "~/components/cards/ResidentCard";
import { PageSection } from "~/components/sections/PageSection";
import { AnnouncementBanner } from "~/components/ui/AnnouncementBanner";
import { Marquee } from "~/components/ui/Marquee";

export const metadata: Metadata = {
  title: "Резиденты — NEXUS",
  description: "Кураторы, артисты и команды, создающие идентичность NEXUS Event Space."
};

const residents = [
  {
    name: "AERODIVE",
    role: "live techno / hardware",
    description:
      "Иммерсивные лайвы с аналоговыми синтезаторами, нестандартной драм-машиной и синхронным светом."
  },
  {
    name: "LYSË",
    role: "ambient / future garage",
    description:
      "Куратор серии ночей «Туман». Строит эмоциональные сет-листы на грани сна и реальности."
  },
  {
    name: "NOVA DOMINION",
    role: "vj / visual lab",
    description:
      "Работают с генеративной графикой, лазерной сеткой и 3D сканированием артистов."
  },
  {
    name: "MARGEN",
    role: "curator / archive",
    description:
      "Отвечает за медиатеку, фото и видео-постпродакшн. Курирует подборку для прессы."
  },
  {
    name: "HYPERCORE CREW",
    role: "tech / engineering",
    description:
      "Команда звукорежиссёров и инженеров света. Настраивают систему под любой сценарий."
  },
  {
    name: "ORBITAL DANCE SCHOOL",
    role: "community",
    description:
      "Обучают современным танцевальным практикам и ставят пластические перформансы для шоукейсов."
  }
];

const directions = [
  "Музыка: techno, breakbeat, experimental pop",
  "Медиа: generative vj, mapping, 3D окружения",
  "Перформанс: contemporary dance, spoken word",
  "Исследования: звук, свет, сенсорные среды"
];

export default function ResidentsPage() {
  return (
    <div className="layout-container grid gap-24">
      <header className="section-heading">
        <span className="text-xs font-mono uppercase tracking-[0.4em] text-white/50">резиденты</span>
        <h1 className="text-5xl font-display uppercase tracking-tighter">
          Команда, которая формирует культурный код NEXUS
        </h1>
        <p className="max-w-3xl text-lg text-white/70">
          Резиденты — это не просто артисты. Это люди, которые конструируют атмосферу,
          исследуют звук, технологии и работают с пространством как с инструментом.
        </p>
      </header>

      <Marquee items={["residency", "sound", "visual", "performance", "research"]} />

      <PageSection
        id="roster"
        eyebrow="команда"
        title="Формируем поток"
        description="Каждый резидент привносит свой модуль в общую систему."
      >
        <div className="grid gap-6 md:grid-cols-3">
          {residents.map((resident) => (
            <ResidentCard key={resident.name} {...resident} />
          ))}
        </div>
      </PageSection>

      <PageSection
        id="directions"
        eyebrow="направления"
        title="Что исследуем"
        description="NEXUS — лаборатория. Мы соединяем звук, свет, движение и текст."
      >
        <div className="border-grid p-6 text-sm uppercase text-white/70 [&_li]:border-b [&_li]:border-white/10 [&_li]:py-4 last:[&_li]:border-none">
          <ul>
            {directions.map((item) => (
              <li key={item}>{item}</li>
            ))}
          </ul>
        </div>
      </PageSection>

      <AnnouncementBanner
        title="Хотите стать резидентом NEXUS? Пришлите концепцию, микс или видеоработу."
        subtitle="Открытый набор"
      />

      <div className="border-grid flex flex-col gap-5 p-8">
        <span className="text-xs font-mono uppercase tracking-[0.4em] text-white/50">
          заявка
        </span>
        <p className="max-w-xl text-sm text-white/70">
          Мы рассматриваем артистов и команды, готовые к эксперименту и совместной
          работе. Нарратив, дисциплина и уважение к аудитории — обязательны.
        </p>
        <Link href="mailto:residents@nexus.spb" className="button-primary w-fit">
          residents@nexus.spb
        </Link>
      </div>
    </div>
  );
}
