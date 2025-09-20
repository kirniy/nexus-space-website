"use client";

import { useEffect, useState } from "react";
import Image from "next/image";

export const LoadingScreen = () => {
  const [isLoading, setIsLoading] = useState(true);
  const [loadingProgress, setLoadingProgress] = useState(0);

  useEffect(() => {
    // Simulate loading progress with smoother intervals
    const interval = setInterval(() => {
      setLoadingProgress(prev => {
        if (prev >= 100) {
          clearInterval(interval);
          setTimeout(() => setIsLoading(false), 500);
          return 100;
        }
        // Smoother increments
        const increment = Math.random() * 15 + 10; // Random between 10-25
        return Math.min(prev + increment, 100);
      });
    }, 300);

    return () => clearInterval(interval);
  }, []);

  if (!isLoading) return null;

  return (
    <div className="fixed inset-0 z-[9999] bg-black flex items-center justify-center">
      <div className="relative">
        {/* Animated Logo with glow effect - Responsive sizing */}
        <div className="relative animate-logo-pulse w-[min(300px,80vw)]">
          <Image
            src="/nexus-logo.svg"
            alt="NEXUS"
            width={300}
            height={100}
            className="brightness-0 invert drop-shadow-[0_0_30px_rgba(255,255,255,0.5)] w-full h-auto"
            priority
          />
          {/* Logo glow animation */}
          <div className="absolute inset-0 blur-xl opacity-50 animate-pulse">
            <Image
              src="/nexus-logo.svg"
              alt="NEXUS"
              width={300}
              height={100}
              className="brightness-0 invert w-full h-auto"
              priority
            />
          </div>
        </div>

        {/* Enhanced Loading Bar with gradient - Responsive width */}
        <div className="mt-12 w-[min(300px,80vw)] h-[3px] bg-white/10 rounded-full overflow-hidden">
          <div
            className="h-full transition-all duration-500 ease-out rounded-full relative"
            style={{
              width: `${loadingProgress}%`,
              background: 'linear-gradient(90deg, rgba(255,255,255,0.3) 0%, rgba(255,255,255,0.8) 50%, rgba(255,255,255,1) 100%)'
            }}
          >
            {/* Animated shine effect */}
            <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/30 to-transparent animate-shimmer" />
          </div>
        </div>

        {/* Loading Text in Russian - Responsive text size */}
        <div className="mt-6 text-center">
          <span className="text-white font-mono text-[clamp(1rem,4vw,1.25rem)] tracking-[0.3em] animate-pulse uppercase">
            ЗАГРУЗКА
          </span>
          <span className="text-white/60 font-mono text-[clamp(0.875rem,3vw,1.125rem)] ml-3">
            {Math.round(loadingProgress)}%
          </span>
        </div>

        {/* Enhanced Corner Decorations - STRAIGHT ANGLES - Responsive positioning */}
        <div className="absolute top-[-10vh] left-[-10vw] w-[min(4rem,10vw)] h-[min(4rem,10vw)] animate-spin" style={{ animationDuration: '8s' }}>
          <div className="w-full h-full border-l-2 border-t-2 border-white/80"
               style={{ filter: 'drop-shadow(0 0 10px rgba(255,255,255,0.5))' }} />
        </div>
        <div className="absolute top-[-10vh] right-[-10vw] w-[min(4rem,10vw)] h-[min(4rem,10vw)] animate-spin" style={{ animationDuration: '8s', animationDirection: 'reverse' }}>
          <div className="w-full h-full border-r-2 border-t-2 border-white/80"
               style={{ filter: 'drop-shadow(0 0 10px rgba(255,255,255,0.5))' }} />
        </div>
        <div className="absolute bottom-[-10vh] left-[-10vw] w-[min(4rem,10vw)] h-[min(4rem,10vw)] animate-spin" style={{ animationDuration: '8s', animationDirection: 'reverse' }}>
          <div className="w-full h-full border-l-2 border-b-2 border-white/80"
               style={{ filter: 'drop-shadow(0 0 10px rgba(255,255,255,0.5))' }} />
        </div>
        <div className="absolute bottom-[-10vh] right-[-10vw] w-[min(4rem,10vw)] h-[min(4rem,10vw)] animate-spin" style={{ animationDuration: '8s' }}>
          <div className="w-full h-full border-r-2 border-b-2 border-white/80"
               style={{ filter: 'drop-shadow(0 0 10px rgba(255,255,255,0.5))' }} />
        </div>

      </div>
    </div>
  );
};