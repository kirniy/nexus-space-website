"use client";

interface AuroraBackgroundProps {
  className?: string;
}

export const AuroraBackground = ({ className = "" }: AuroraBackgroundProps) => {
  return (
    <div
      className={`absolute inset-0 overflow-hidden pointer-events-none aurora-container ${className}`}
    >
      <div className="aurora aurora--one" />
      <div className="aurora aurora--two" />
      <div className="aurora aurora--three" />
    </div>
  );
};
