interface StatItem {
  label: string;
  value: string;
  description: string;
}

interface StatsRowProps {
  stats: StatItem[];
}

export const StatsRow = ({ stats }: StatsRowProps) => {
  return (
    <div className="border-grid grid gap-6 p-6 md:grid-cols-3 [&>div]:flex [&>div]:flex-col [&>div]:gap-3 [&>div]:border-white/10 md:[&>div:not(:last-child)]:border-r">
      {stats.map((stat) => (
        <div key={stat.label}>
          <span className="text-xs font-mono uppercase tracking-[0.4em] text-white/40">
            {stat.label}
          </span>
          <span className="text-4xl font-display uppercase tracking-tight text-white">
            {stat.value}
          </span>
          <p className="text-sm text-white/60">{stat.description}</p>
        </div>
      ))}
    </div>
  );
};
