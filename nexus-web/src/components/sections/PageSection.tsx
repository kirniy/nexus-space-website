import type { ReactNode } from "react";

interface PageSectionProps {
  id: string;
  title: string;
  eyebrow?: string;
  description?: string;
  children: ReactNode;
}

export const PageSection = ({ id, title, eyebrow, description, children }: PageSectionProps) => {
  return (
    <section id={id} className="section-grid">
      <div className="section-heading">
        {eyebrow ? (
          <span className="text-xs font-mono uppercase tracking-[0.4em] text-white/50">
            {eyebrow}
          </span>
        ) : null}
        <h2>{title}</h2>
        {description ? <p dangerouslySetInnerHTML={{ __html: description }} /> : null}
      </div>
      {children}
    </section>
  );
};
