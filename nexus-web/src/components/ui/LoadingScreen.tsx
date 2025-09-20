"use client";

import { useEffect, useState } from "react";
import Image from "next/image";

export const LoadingScreen = () => {
  const [isLoading, setIsLoading] = useState(true);
  const [loadingProgress, setLoadingProgress] = useState(0);

  useEffect(() => {
    // Simulate loading progress
    const interval = setInterval(() => {
      setLoadingProgress(prev => {
        if (prev >= 100) {
          clearInterval(interval);
          setTimeout(() => setIsLoading(false), 500);
          return 100;
        }
        return prev + 20;
      });
    }, 200);

    return () => clearInterval(interval);
  }, []);

  if (!isLoading) return null;

  return (
    <div className="fixed inset-0 z-[9999] bg-black flex items-center justify-center">
      <div className="relative">
        {/* Animated Logo */}
        <div className="relative animate-logo-pulse">
          <Image
            src="/nexus-logo.svg"
            alt="NEXUS"
            width={300}
            height={100}
            className="brightness-0 invert"
            priority
          />
        </div>

        {/* Loading Bar */}
        <div className="mt-12 w-[300px] h-[2px] bg-white/20">
          <div
            className="h-full bg-white transition-all duration-300 ease-out"
            style={{ width: `${loadingProgress}%` }}
          />
        </div>

        {/* Loading Text */}
        <div className="mt-6 text-center">
          <span className="text-white font-mono text-xl tracking-[0.3em] animate-pulse">
            LOADING
          </span>
          <span className="text-white/60 font-mono text-lg ml-2">
            {loadingProgress}%
          </span>
        </div>

        {/* Corner Decorations */}
        <div className="absolute -top-20 -left-20 w-16 h-16 border-l-2 border-t-2 border-white animate-spin" style={{ animationDuration: '8s' }} />
        <div className="absolute -top-20 -right-20 w-16 h-16 border-r-2 border-t-2 border-white animate-spin" style={{ animationDuration: '8s', animationDirection: 'reverse' }} />
        <div className="absolute -bottom-20 -left-20 w-16 h-16 border-l-2 border-b-2 border-white animate-spin" style={{ animationDuration: '8s', animationDirection: 'reverse' }} />
        <div className="absolute -bottom-20 -right-20 w-16 h-16 border-r-2 border-b-2 border-white animate-spin" style={{ animationDuration: '8s' }} />
      </div>
    </div>
  );
};