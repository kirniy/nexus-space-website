"use client";

interface MarqueeProps {
  items: string[];
  speed?: number; // Speed in seconds for one complete loop
}

export const Marquee = ({ items, speed = 30 }: MarqueeProps) => {
  // Duplicate items for seamless loop
  const duplicatedItems = [...items, ...items, ...items];

  return (
    <div className="relative overflow-hidden border-y-4 border-white bg-black/95 py-8">
      <div className="pointer-events-none absolute inset-y-0 left-0 w-32 bg-gradient-to-r from-black via-black/60 to-transparent md:w-48" />
      <div className="pointer-events-none absolute inset-y-0 right-0 w-32 bg-gradient-to-l from-black via-black/60 to-transparent md:w-48" />
      <div
        className="relative flex whitespace-nowrap"
        style={{
          animation: `scroll ${speed}s linear infinite`
        }}
      >
        {duplicatedItems.map((item, index) => (
          <span
            key={`${item}-${index}`}
            className="px-10 text-3xl font-mono font-bold uppercase tracking-[0.3em] text-white md:px-12 md:text-4xl lg:px-16 lg:text-5xl"
          >
            {item}
          </span>
        ))}
      </div>
      <style jsx>{`
        @keyframes scroll {
          0% {
            transform: translateX(0);
          }
          100% {
            transform: translateX(-33.333%);
          }
        }
      `}</style>
    </div>
  );
};
