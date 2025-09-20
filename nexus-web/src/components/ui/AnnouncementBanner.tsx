interface AnnouncementBannerProps {
  title: string;
  subtitle: string;
}

export const AnnouncementBanner = ({ title, subtitle }: AnnouncementBannerProps) => {
  return (
    <div className="border-grid grid gap-4 p-6 sm:p-10">
      <span className="text-xs font-mono uppercase tracking-[0.4em] text-white/50">
        {subtitle}
      </span>
      <h3 className="text-3xl font-display uppercase tracking-tight text-white">
        {title}
      </h3>
    </div>
  );
};
