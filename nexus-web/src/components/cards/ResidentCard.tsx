interface ResidentCardProps {
  name: string;
  role: string;
  description: string;
}

export const ResidentCard = ({ name, role, description }: ResidentCardProps) => {
  return (
    <article className="card">
      <header className="flex flex-col gap-2">
        <span className="text-xs font-mono uppercase tracking-[0.4em] text-white/50">
          {role}
        </span>
        <h3 className="card-title">{name}</h3>
      </header>
      <p className="mt-6 text-sm text-white/70">{description}</p>
    </article>
  );
};
