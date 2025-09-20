import Link from "next/link";

type FooterColumn = {
  title: string;
  links: Array<{ label: string; href: string; external?: boolean }>;
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
      { label: "Аренда пространства", href: "mailto:info@nexus-events.ru", external: true },
      { label: "Телефон", href: "tel:+79214104440", external: true },
      { label: "Телеграм", href: "https://t.me/nexusspb", external: true }
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
            <ul className="flex flex-col gap-2 text-base text-white/70 [&_a]:underline [&_a]:decoration-white/20 [&_a:hover]:decoration-white">
              {column.links.map((link) => (
                <li key={link.label}>
                  {link.external ? (
                    <a href={link.href} target="_blank" rel="noreferrer">
                      {link.label}
                    </a>
                  ) : (
                    <Link href={link.href}>{link.label}</Link>
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
