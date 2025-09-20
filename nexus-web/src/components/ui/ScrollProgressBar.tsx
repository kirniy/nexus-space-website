"use client";

import { useEffect, useState } from "react";

export const ScrollProgressBar = () => {
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    const updateProgress = () => {
      const { scrollTop, scrollHeight, clientHeight } = document.documentElement;
      const scrollable = scrollHeight - clientHeight;
      const value = scrollable <= 0 ? 0 : (scrollTop / scrollable) * 100;
      setProgress(Math.min(100, Math.max(0, value)));
    };

    updateProgress();
    window.addEventListener("scroll", updateProgress, { passive: true } as AddEventListenerOptions);
    window.addEventListener("resize", updateProgress);

    return () => {
      window.removeEventListener("scroll", updateProgress);
      window.removeEventListener("resize", updateProgress);
    };
  }, []);

  return (
    <div className="fixed inset-x-0 top-0 z-[80] h-px bg-white/10 pointer-events-none">
      <div
        className="h-full origin-left will-change-transform transition-[width] duration-150 ease-out bg-gradient-to-r from-white via-white/80 to-white/40 shadow-[0_0_30px_rgba(255,255,255,0.35)]"
        style={{ width: `${progress}%` }}
      />
    </div>
  );
};
