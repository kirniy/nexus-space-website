"use client";

import { ReactNode } from "react";
import { useIntersectionObserver } from "~/hooks/useIntersectionObserver";

interface ScrollAnimatedWrapperProps {
  children: ReactNode;
  animation?: "fade-up" | "fade-in" | "slide-left" | "slide-right" | "scale" | "rotate";
  delay?: number;
  duration?: number;
  className?: string;
  threshold?: number;
}

export const ScrollAnimatedWrapper = ({
  children,
  animation = "fade-up",
  delay = 0,
  duration = 800,
  className = "",
  threshold = 0.15
}: ScrollAnimatedWrapperProps) => {
  const { ref, isVisible } = useIntersectionObserver({
    threshold,
    triggerOnce: true
  });

  const getAnimationClasses = () => {
    const baseClasses = "transition-all";
    const delayStyle = delay ? `${delay}ms` : "0ms";
    const durationStyle = `${duration}ms`;

    const animations = {
      "fade-up": {
        initial: "opacity-0 translate-y-20",
        visible: "opacity-100 translate-y-0"
      },
      "fade-in": {
        initial: "opacity-0",
        visible: "opacity-100"
      },
      "slide-left": {
        initial: "opacity-0 -translate-x-20",
        visible: "opacity-100 translate-x-0"
      },
      "slide-right": {
        initial: "opacity-0 translate-x-20",
        visible: "opacity-100 translate-x-0"
      },
      "scale": {
        initial: "opacity-0 scale-90",
        visible: "opacity-100 scale-100"
      },
      "rotate": {
        initial: "opacity-0 rotate-12",
        visible: "opacity-100 rotate-0"
      }
    };

    const animationState = animations[animation];
    const currentState = isVisible ? animationState.visible : animationState.initial;

    return `${baseClasses} ${currentState}`;
  };

  return (
    <div
      ref={ref as any}
      className={`${getAnimationClasses()} ${className}`}
      style={{
        transitionDelay: `${delay}ms`,
        transitionDuration: `${duration}ms`,
        transitionProperty: "all",
        transitionTimingFunction: "cubic-bezier(0.4, 0, 0.2, 1)"
      }}
    >
      {children}
    </div>
  );
};