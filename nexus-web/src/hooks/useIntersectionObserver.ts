"use client";

import { useEffect, useRef, useState } from "react";

interface UseIntersectionObserverOptions {
  threshold?: number | number[];
  root?: Element | null;
  rootMargin?: string;
  triggerOnce?: boolean;
}

export const useIntersectionObserver = ({
  threshold = 0.1,
  root = null,
  rootMargin = "0px",
  triggerOnce = true
}: UseIntersectionObserverOptions = {}) => {
  const [isVisible, setIsVisible] = useState(false);
  const [hasTriggered, setHasTriggered] = useState(false);
  const targetRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const target = targetRef.current;
    if (!target) return;

    // If triggerOnce and already triggered, don't observe
    if (triggerOnce && hasTriggered) return;

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          const isIntersecting = entry.isIntersecting;
          setIsVisible(isIntersecting);

          if (isIntersecting && triggerOnce) {
            setHasTriggered(true);
            observer.unobserve(target);
          }
        });
      },
      {
        threshold,
        root,
        rootMargin
      }
    );

    observer.observe(target);

    return () => {
      observer.disconnect();
    };
  }, [threshold, root, rootMargin, triggerOnce, hasTriggered]);

  return { ref: targetRef, isVisible, hasTriggered };
};