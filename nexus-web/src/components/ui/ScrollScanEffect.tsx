"use client";

import { useEffect, useRef, useState } from "react";

const IDLE_THRESHOLD = 1800;
const ANIMATION_DURATION = 1400;

export const ScrollScanEffect = () => {
  const [isActive, setIsActive] = useState(false);
  const lastScrollTime = useRef<number>(Date.now());
  const animationTimeout = useRef<NodeJS.Timeout>();
  const prefersReducedMotion = useRef(false);

  useEffect(() => {
    if (typeof window === "undefined") return;

    const mediaQuery = window.matchMedia("(prefers-reduced-motion: reduce)");

    const updatePreference = (event: MediaQueryListEvent | MediaQueryList) => {
      prefersReducedMotion.current = event.matches;
      if (event.matches) {
        setIsActive(false);
      }
    };

    updatePreference(mediaQuery);

    const listener = (event: MediaQueryListEvent) => updatePreference(event);

    if (typeof mediaQuery.addEventListener === "function") {
      mediaQuery.addEventListener("change", listener);
    } else if (typeof mediaQuery.addListener === "function") {
      mediaQuery.addListener(listener);
    }

    const handleScroll = () => {
      const now = Date.now();
      const timeSinceLastScroll = now - lastScrollTime.current;

      if (!prefersReducedMotion.current && timeSinceLastScroll > IDLE_THRESHOLD) {
        setIsActive(true);

        if (animationTimeout.current) {
          clearTimeout(animationTimeout.current);
        }

        animationTimeout.current = setTimeout(() => {
          setIsActive(false);
        }, ANIMATION_DURATION);
      }

      lastScrollTime.current = now;
    };

    window.addEventListener("scroll", handleScroll, { passive: true });

    return () => {
      window.removeEventListener("scroll", handleScroll);
      if (typeof mediaQuery.removeEventListener === "function") {
        mediaQuery.removeEventListener("change", listener);
      } else if (typeof mediaQuery.removeListener === "function") {
        mediaQuery.removeListener(listener);
      }
      if (animationTimeout.current) {
        clearTimeout(animationTimeout.current);
      }
    };
  }, []);

  return (
    <div aria-hidden="true" className="scroll-overlay-container">
      <div className={`scroll-overlay ${isActive ? "scroll-overlay--active" : ""}`}>
        <span className="scroll-overlay__beam scroll-overlay__beam--horizontal" />
        <span className="scroll-overlay__beam scroll-overlay__beam--vertical" />
        <span className="scroll-overlay__pulse" />
      </div>
    </div>
  );
};
