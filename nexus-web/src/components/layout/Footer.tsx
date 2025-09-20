import Link from "next/link";

type FooterColumn = {
  title: string;
  links: Array<{
    label: string;
    href: string;
    external?: boolean;
  }>;
};

const footerLinks: FooterColumn[] = [
  {
    title: "Навигация",
    links: [
      { label: "Главная", href: "/" },
      { label: "Пространство", href: "/space" },
      { label: "Галерея", href: "/gallery" },
      { label: "Контакты", href: "/contact" }
    ]
  },
  {
    title: "Контакты",
    links: [
      { label: "Забронировать", href: "/contact" },
      { label: "WhatsApp", href: "https://wa.me/79214104440", external: true },
      { label: "Телеграм канал", href: "https://t.me/nexusspb", external: true },
      { label: "Телефон", href: "tel:+79214104440", external: true }
    ]
  }
];

export const Footer = () => {
  return (
    <footer className="border-t border-white/10 bg-black">
      <div className="layout-container grid gap-8 sm:gap-12 lg:gap-14 py-8 sm:py-12 lg:py-14 grid-cols-1 sm:grid-cols-2 lg:grid-cols-[2fr,1fr,1fr]">
        <div className="flex flex-col gap-4 sm:gap-6">
          <span className="text-base sm:text-lg font-mono uppercase tracking-[0.35em] text-white/50">
            nexus event space
          </span>
          <p className="max-w-md text-sm sm:text-base text-white/60 leading-relaxed">
            NEXUS — многофункциональное пространство для проведения мероприятий
            в центре Санкт-Петербурга. 800 м² трансформируемого пространства
            с профессиональным техническим оснащением.
          </p>
          <p className="text-xs sm:text-sm uppercase text-white/40">
            © {new Date().getFullYear()} NEXUS. Все права защищены.
          </p>
        </div>
        {footerLinks.map((column) => (
          <div key={column.title} className="flex flex-col gap-3">
            <span className="text-sm sm:text-base font-mono uppercase tracking-[0.35em] text-white/50">
              {column.title}
            </span>
            <ul className="flex flex-col gap-2 text-sm sm:text-base text-white/70">
              {column.links.map((link) => (
                <li key={link.label}>
                  {link.external ? (
                    <a href={link.href} target="_blank" rel="noreferrer" className="transition-colors hover:text-white underline decoration-white/20 hover:decoration-white">
                      {link.label}
                    </a>
                  ) : (
                    <Link href={link.href as any} className="transition-colors hover:text-white underline decoration-white/20 hover:decoration-white">
                      {link.label}
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
