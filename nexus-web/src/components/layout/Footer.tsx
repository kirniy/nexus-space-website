import Link from "next/link";
import {
  IconMail,
  IconPhone,
  IconBrandTelegram,
  IconHome,
  IconBuilding,
  IconPhoto,
  IconMapPin
} from '@tabler/icons-react';

type FooterColumn = {
  title: string;
  links: Array<{
    label: string;
    href: string;
    external?: boolean;
    icon?: React.ReactNode;
  }>;
};

const footerLinks: FooterColumn[] = [
  {
    title: "Навигация",
    links: [
      { label: "Главная", href: "/", icon: <IconHome size={18} /> },
      { label: "Пространство", href: "/space", icon: <IconBuilding size={18} /> },
      { label: "Галерея", href: "/gallery", icon: <IconPhoto size={18} /> },
      { label: "Контакты", href: "/contact", icon: <IconMapPin size={18} /> }
    ]
  },
  {
    title: "Контакты",
    links: [
      { label: "Аренда пространства", href: "mailto:info@nexus-events.ru", external: true, icon: <IconMail size={18} /> },
      { label: "Телефон", href: "tel:+79214104440", external: true, icon: <IconPhone size={18} /> },
      { label: "Телеграм", href: "https://t.me/nexusspb", external: true, icon: <IconBrandTelegram size={18} /> }
    ]
  }
];

export const Footer = () => {
  return (
    <footer className="border-t border-white/10 bg-black">
      <div className="layout-container grid gap-14 py-14 md:grid-cols-[2fr,1fr,1fr]">
        <div className="flex flex-col gap-6">
          <span className="text-lg font-mono uppercase tracking-[0.35em] text-white/50">
            nexus event space
          </span>
          <p className="max-w-md text-base text-white/60">
            NEXUS — многофункциональное пространство для проведения мероприятий
            в центре Санкт-Петербурга. 800 м² трансформируемого пространства
            с профессиональным техническим оснащением.
          </p>
          <p className="text-sm uppercase text-white/40">
            © {new Date().getFullYear()} NEXUS. Все права защищены.
          </p>
        </div>
        {footerLinks.map((column) => (
          <div key={column.title} className="flex flex-col gap-3">
            <span className="text-base font-mono uppercase tracking-[0.35em] text-white/50">
              {column.title}
            </span>
            <ul className="flex flex-col gap-2 text-base text-white/70">
              {column.links.map((link) => (
                <li key={link.label}>
                  {link.external ? (
                    <a href={link.href} target="_blank" rel="noreferrer" className="inline-flex items-center gap-2 transition-colors hover:text-white">
                      {link.icon}
                      <span className="underline decoration-white/20 hover:decoration-white">
                        {link.label}
                      </span>
                    </a>
                  ) : (
                    <Link href={link.href as any} className="inline-flex items-center gap-2 transition-colors hover:text-white">
                      {link.icon}
                      <span className="underline decoration-white/20 hover:decoration-white">
                        {link.label}
                      </span>
                    </Link>
                  )}
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </footer>
  );
};
