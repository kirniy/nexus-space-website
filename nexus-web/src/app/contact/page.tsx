import { Metadata } from "next";
import Link from "next/link";
import { PageSection } from "~/components/sections/PageSection";
import { AnnouncementBanner } from "~/components/ui/AnnouncementBanner";
import { ContactForm } from "~/components/ui/ContactForm";
import {
  IconPhone,
  IconMail,
  IconBrandWhatsapp,
  IconBrandTelegram,
  IconMapPin,
  IconClock,
  IconCalendarEvent,
  IconArrowRight
} from '@tabler/icons-react';

export const metadata: Metadata = {
  title: "Контакты — NEXUS",
  description: "Свяжитесь с нами для бронирования пространства NEXUS в Санкт-Петербурге."
};

const contacts = [
  { label: "Телефон", value: "+7 (921) 410-44-40", href: "tel:+79214104440", icon: <IconPhone size={32} /> },
  { label: "Email", value: "info@nexus-space.ru", href: "mailto:info@nexus-space.ru", icon: <IconMail size={32} /> },
  { label: "WhatsApp", value: "+7 (921) 410-44-40", href: "https://wa.me/79214104440", icon: <IconBrandWhatsapp size={32} /> },
  { label: "Telegram", value: "@nexusspb", href: "https://t.me/nexusspb", icon: <IconBrandTelegram size={32} /> }
];

export default function ContactPage() {
  return (
    <div className="w-full">
      {/* Contact Header - Full Viewport */}
      <section className="full-section bg-black">
        <div className="w-full page-padding">
          <div className="grid gap-8">
            <span className="text-subhero">КОНТАКТЫ</span>
            <h1 className="text-h1">
              СВЯЖИТЕСЬ<br/>
              С НАМИ
            </h1>
            <p className="text-2xl md:text-3xl lg:text-4xl text-white/80 max-w-5xl">
              Мы готовы ответить на все вопросы по аренде пространства и помочь в организации вашего мероприятия.
            </p>
          </div>
        </div>
      </section>

      {/* Contact Form - Full Viewport */}
      <section className="full-section bg-white text-black">
        <div className="w-full page-padding">
          <div className="grid gap-16 lg:gap-24">
            <div className="grid gap-8">
              <span className="text-2xl md:text-3xl font-mono uppercase tracking-[0.3em]">ЗАЯВКА</span>
              <h2 className="text-h1">
                ОСТАВИТЬ ЗАЯВКУ<br/>
                НА БРОНИРОВАНИЕ
              </h2>
            </div>
            <ContactForm />
          </div>
        </div>
      </section>

      {/* Location & Map - Full Viewport */}
      <section className="full-section bg-black">
        <div className="w-full page-padding">
          <div className="grid gap-16 lg:gap-24">
            <div className="grid gap-8">
              <span className="text-subhero">ЛОКАЦИЯ</span>
              <h2 className="text-h1">
                КАК НАС<br/>
                НАЙТИ
              </h2>
            </div>
            <div className="grid lg:grid-cols-2 gap-8">
              <div className="border-4 border-white p-12 h-full min-h-[280px] flex flex-col">
                <div className="flex items-center gap-4 mb-8">
                  <IconMapPin size={32} className="text-white/60" />
                  <span className="text-2xl font-mono uppercase tracking-[0.3em] text-white/60">
                    АДРЕС
                  </span>
                </div>
                <div className="space-y-6">
                  <p className="text-h3 font-bold">
                    САНКТ-ПЕТЕРБУРГ<br/>
                    КОНЮШЕННАЯ ПЛОЩАДЬ, 2Ж
                  </p>
                  <p className="text-xl text-white/80">
                    3 минуты от метро Невский проспект<br/>
                    5 минут от метро Гостиный двор
                  </p>
                  <Link
                    href="https://yandex.ru/maps/-/CLeD4Zzc"
                    target="_blank"
                    className="text-2xl font-mono uppercase tracking-[0.2em] hover:scale-105 transition-all inline-flex items-center gap-2 text-white"
                  >
                    ОТКРЫТЬ НА КАРТЕ
                    <IconArrowRight size={24} />
                  </Link>
                </div>
              </div>

              <div className="border-4 border-white p-12 h-full min-h-[280px] flex flex-col">
                <div className="flex items-center gap-4 mb-8">
                  <IconClock size={32} className="text-white/60" />
                  <span className="text-2xl font-mono uppercase tracking-[0.3em] text-white/60">
                    РЕЖИМ РАБОТЫ
                  </span>
                </div>
                <div className="space-y-4 text-xl">
                  <div className="flex justify-between">
                    <span className="text-white/80">ОФИС:</span>
                    <span className="font-bold">ПН-ПТ 10:00–19:00</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-white/80">МЕРОПРИЯТИЯ:</span>
                    <span className="font-bold">ЕЖЕДНЕВНО</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-white/80">ОСМОТР:</span>
                    <span className="font-bold">ПО ЗАПИСИ</span>
                  </div>
                </div>
              </div>
            </div>

            {/* Yandex Map Embed */}
            <div className="w-full h-[600px] border-4 border-white">
              <iframe
                src="https://yandex.ru/map-widget/v1/?um=constructor%3Adb7d4b8f3e8b3f5e8b9c5d4e3f2a1b0c&amp;source=constructor&amp;scroll=true&amp;ll=30.326028%2C59.939212&amp;z=17&amp;pt=30.326028,59.939212~pm2rdm"
                width="100%"
                height="100%"
                frameBorder="0"
                title="Карта NEXUS Event Space"
                loading="lazy"
                allowFullScreen
              />
            </div>
          </div>
        </div>
      </section>

      {/* Contact Methods - Full Viewport */}
      <section className="full-section bg-white text-black">
        <div className="w-full page-padding">
          <div className="grid gap-16 lg:gap-24">
            <div className="grid gap-8">
              <span className="text-2xl md:text-3xl font-mono uppercase tracking-[0.3em]">СВЯЗЬ</span>
              <h2 className="text-h1">
                СПОСОБЫ<br/>
                СВЯЗИ
              </h2>
            </div>
            <div className="grid md:grid-cols-2 gap-8">
              {contacts.map((contact) => (
                <div key={contact.value} className="border-4 border-black p-12 h-full min-h-[200px] flex flex-col">
                  <div className="mb-4 text-black/60">
                    {contact.icon}
                  </div>
                  <span className="text-2xl font-mono uppercase tracking-wider block mb-4">{contact.label}</span>
                  <Link href={contact.href as any} className="text-h3 font-bold hover:scale-105 transition-all inline-flex items-center gap-2">
                    {contact.value}
                  </Link>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <AnnouncementBanner
        title="Планируете мероприятие?"
        subtitle="Приезжайте на осмотр площадки в любое удобное время по предварительной записи"
      />
    </div>
  );
}