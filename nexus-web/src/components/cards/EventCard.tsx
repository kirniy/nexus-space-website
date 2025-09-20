interface EventCardProps {
  title: string;
  date: string;
  lineup: string;
  status: "предпродажа" | "распродано" | "анонс";
}

const statusPalette: Record<EventCardProps["status"], string> = {
  предпродажа: "border-white text-white",
  распродано: "border-white/40 text-white/60",
  анонс: "border-white/60 text-white"
};

export const EventCard = ({ title, date, lineup, status }: EventCardProps) => {
  return (
    <article className="card">
      <header className="flex flex-col gap-4">
        <span className="text-xs font-mono uppercase tracking-[0.4em] text-white/50">
          {date}
        </span>
        <h3 className="card-title">{title}</h3>
        <p className="text-sm uppercase text-white/60">{lineup}</p>
      </header>
      <div className="mt-6 flex items-center justify-between">
        <span
          className={`text-xs font-mono uppercase tracking-[0.4em] ${statusPalette[status]} px-4 py-2`}
        >
          {status}
        </span>
        <span className="text-sm text-white/50">→</span>
      </div>
    </article>
  );
};
