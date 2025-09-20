import Link from "next/link";

interface AnnouncementBannerProps {
  title: string;
  subtitle: string;
}

export const AnnouncementBanner = ({ title, subtitle }: AnnouncementBannerProps) => {
  return (
    <section className="full-section bg-white text-black">
      <div className="w-full page-padding">
        <div className="grid gap-8 text-center">
          <h2 className="text-h2">{title}</h2>
          <p className="text-2xl md:text-3xl text-black/70 max-w-4xl mx-auto">
            {subtitle}
          </p>
          <div className="flex justify-center mt-4">
            <a
              href="https://wa.me/79214104440"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center border-4 border-black bg-green-500 text-white text-xl font-mono uppercase tracking-[0.2em] px-12 py-6 transition-all duration-300 font-bold hover:scale-105 hover:bg-green-600"
            >
              НАПИСАТЬ В WHATSAPP
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};