import { Metadata } from "next";
import Link from "next/link";
import { EventCard } from "~/components/cards/EventCard";
import { PageSection } from "~/components/sections/PageSection";
import { Marquee } from "~/components/ui/Marquee";
import { TechTable } from "~/components/ui/TechTable";

export const metadata: Metadata = {
  title: "Афиша — NEXUS",
  description: "Расписание событий NEXUS: концерты, кинопоказы, выставки и клубные ночи."
};

const upcoming = [
  {
    title: "SYNTHETIC NIGHT",
    date: "10 мая · 22:00",
    lineup: "machine lab / cold lines / infected audio",
    status: "предпродажа" as const
  },
  {
    title: "GLITCH OPERA",
    date: "17 мая · 20:00",
    lineup: "saint hel / strings dept / meta choir",
    status: "анонс" as const
  },
  {
    title: "RESIDENTS MARATHON",
    date: "24 мая · 22:00",
    lineup: "aerodive / lysë / margen",
    status: "предпродажа" as const
  }
];

const archive = [
  { month: "март 2025", event: "chromatic residency", format: "live + installation" },
  { month: "март 2025", event: "cinema obscura", format: "cinema" },
  { month: "февраль 2025", event: "bass heritage", format: "club" },
  { month: "январь 2025", event: "data bloom", format: "exhibition" }
];

const calendarTips = [
  "Гибкая схема: четверг — эксперименты, пятница — клуб, суббота — суперсобытие",
  "Для частных мероприятий доступны daytime слоты с 09:00",
  "Бронирование окна для монтажа и демонтажа согласовываем отдельно"
];

const ticketInfo = [
  { label: "предпродажа", value: "от 900 ₽" },
  { label: "в день события", value: "от 1 200 ₽" },
  { label: "vip-проход", value: "с отдельным входом и лаунжем" },
  { label: "мерч", value: "лимитированные партии с артистами резиденции" }
];

export default function EventsPage() {
  return (
    <div className="layout-container grid gap-24">
      <header className="section-heading">
        <span className="text-xs font-mono uppercase tracking-[0.4em] text-white/50">афиша</span>
        <h1 className="text-5xl font-display uppercase tracking-tighter">
          Расписание событий NEXUS
        </h1>
        <p className="max-w-3xl text-lg text-white/70">
          Каждая ночь — модульная архитектура эмоций. Мы подключаем звук, свет, видео и
          пространственные инсталляции, чтобы создать единый нарратив. Следи за
          обновлениями и бронируй заранее.
        </p>
      </header>

      <PageSection
        id="upcoming"
        eyebrow="предстоящие"
        title="Ближайшие мероприятия"
        description="От полночных рейвов до утренних кинопрограмм. Сценарий меняется каждую неделю."
      >
        <div className="grid gap-6 md:grid-cols-3">
          {upcoming.map((event) => (
            <EventCard key={event.title} {...event} />
          ))}
        </div>
      </PageSection>

      <Marquee items={["week schedule", "nexus x community", "live audiovisual", "residency"]} />

      <PageSection
        id="archive"
        eyebrow="архив"
        title="Пульс прошедших ночей"
        description="Живём в настоящем, но бережно архивируем каждый эксперимент. Доступен медиаматериал для прессы и партнёров."
      >
        <table className="table-block w-full text-left text-sm uppercase text-white/70 [&_th]:font-normal [&_td]:text-white/60">
          <thead>
            <tr>
              <th>месяц</th>
              <th>мероприятие</th>
              <th>формат</th>
            </tr>
          </thead>
          <tbody>
            {archive.map((row) => (
              <tr key={`${row.month}-${row.event}`}>
                <td>{row.month}</td>
                <td>{row.event}</td>
                <td>{row.format}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </PageSection>

      <PageSection
        id="calendar"
        eyebrow="календарь"
        title="Слоты для внешних команд"
        description="NEXUS открыт к коллаборациям и частным событиям. Пишите на <strong>rent@nexus.spb</strong> с кратким описанием концепции."
      >
        <div className="grid gap-6 md:grid-cols-[2fr,1fr]">
          <div className="border-grid p-6 text-sm uppercase text-white/70 [&_li]:border-b [&_li]:border-white/10 [&_li]:py-4 last:[&_li]:border-none">
            <ul>
              {calendarTips.map((tip) => (
                <li key={tip}>{tip}</li>
              ))}
            </ul>
          </div>
          <TechTable rows={ticketInfo} />
        </div>
      </PageSection>

      <div className="border-grid flex flex-col gap-6 p-8">
        <span className="text-xs font-mono uppercase tracking-[0.4em] text-white/50">
          синхронизация
        </span>
        <h2 className="text-3xl font-display uppercase tracking-tight">
          Хотите выступить или провести шоукейс?
        </h2>
        <p className="text-sm text-white/70">
          Отправьте ссылку на портфолио и технический райдер. Команда программирования
          свяжется в течение 72 часов.
        </p>
        <div className="flex flex-wrap gap-4">
          <Link href="mailto:booking@nexus.spb" className="button-primary">
            booking@nexus.spb
          </Link>
          <Link
            href="https://t.me/nexus_booking"
            className="text-sm font-mono uppercase tracking-[0.35em] text-white/60 hover:text-white"
          >
            Telegram →
          </Link>
        </div>
      </div>
    </div>
  );
}
