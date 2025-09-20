interface GalleryCardProps {
  title: string;
  category: string;
  description: string;
}

export const GalleryCard = ({ title, category, description }: GalleryCardProps) => {
  return (
    <article className="card">
      <header className="frame-title">
        <h3>{title}</h3>
        <span>{category}</span>
      </header>
      <p className="mt-6 text-sm text-white/70">{description}</p>
    </article>
  );
};
