"use client";

import { useEffect, useRef } from "react";

export const ScrollScanEffect = () => {
  const lastScrollTime = useRef<number>(0);
  const animationTimeout = useRef<NodeJS.Timeout>();

  useEffect(() => {
    const handleScroll = () => {
      const now = Date.now();
      const timeSinceLastScroll = now - lastScrollTime.current;

      // Only trigger if we haven't scrolled in the last 2 seconds
      if (timeSinceLastScroll > 2000) {
        document.body.classList.add('scrolling');

        // Remove the class after animation completes
        if (animationTimeout.current) {
          clearTimeout(animationTimeout.current);
        }

        animationTimeout.current = setTimeout(() => {
          document.body.classList.remove('scrolling');
        }, 2000);
      }

      lastScrollTime.current = now;
    };

    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
      if (animationTimeout.current) {
        clearTimeout(animationTimeout.current);
      }
    };
  }, []);

  return null;
};