"use client";

interface MarqueeProps {
  items: string[];
  speed?: number; // Speed in seconds for one complete loop
}

export const Marquee = ({ items, speed = 30 }: MarqueeProps) => {
  // Duplicate items for seamless loop
  const duplicatedItems = [...items, ...items, ...items];

  return (
    <div className="relative overflow-hidden border-y-4 border-white bg-black py-8">
      <div
        className="flex whitespace-nowrap"
        style={{
          animation: `scroll ${speed}s linear infinite`
        }}
      >
        {duplicatedItems.map((item, index) => (
          <span
            key={`${item}-${index}`}
            className="text-3xl md:text-4xl lg:text-5xl font-mono font-bold uppercase tracking-[0.3em] text-white px-12"
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
