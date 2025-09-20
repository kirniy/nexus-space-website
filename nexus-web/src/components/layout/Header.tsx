import Link from "next/link";
import { AnimatedLogo } from "~/components/ui/AnimatedLogo";

const navigation = [
  { href: "/", label: "Главная" },
  { href: "/space", label: "Пространство" },
  { href: "/gallery", label: "Галерея" },
  { href: "/contact", label: "Контакты" }
];

export const Header = () => {
  return (
    <header className="border-b-2 border-white bg-black/90 backdrop-blur sticky top-0 z-50">
      <div className="px-8 sm:px-12 lg:px-16 xl:px-24 flex items-center justify-between py-4">
        <Link href="/" className="flex items-center">
          <AnimatedLogo />
        </Link>
        <nav className="hidden items-center md:flex">
          <ul className="flex items-center gap-8 text-lg font-mono uppercase tracking-[0.15em] text-white [&_a]:border-b [&_a]:border-transparent [&_a]:transition-all [&_a:hover]:border-white [&_a:hover]:text-white">
            {navigation.map((item) => (
              <li key={item.href}>
                <Link href={item.href} className="block">{item.label}</Link>
              </li>
            ))}
          </ul>
        </nav>
        <div className="flex items-center gap-3">
          <Link
            href="/contact"
            className="button-primary"
          >
            Забронировать
          </Link>
        </div>
      </div>
    </header>
  );
};
