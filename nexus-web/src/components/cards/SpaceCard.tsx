interface SpaceCardProps {
  title: string;
  area: string;
  specs: string[];
}

export const SpaceCard = ({ title, area, specs }: SpaceCardProps) => {
  return (
    <article className="card">
      <header className="frame-title">
        <h3>{title}</h3>
        <span>{area}</span>
      </header>
      <ul className="mt-6 grid gap-3 text-sm text-white/70 [&_li]:border-b [&_li]:border-white/10 [&_li]:pb-3 [&_li]:uppercase last:[&_li]:border-none last:[&_li]:pb-0">
        {specs.map((spec) => (
          <li key={spec}>{spec}</li>
        ))}
      </ul>
    </article>
  );
};
