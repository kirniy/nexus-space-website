"use client";

import type { CSSProperties } from "react";

interface CornerAnimationsProps {
  className?: string;
  lineColor?: string;
  lineWidth?: number;
  lineLength?: number;
  showTop?: boolean;
  showBottom?: boolean;
}

const buildStyle = (
  orientation: "horizontal" | "vertical",
  lineWidth: number,
  lineLength: number,
  lineOpacity: number
): CSSProperties => {
  const merged: CSSProperties = { opacity: lineOpacity };
  (merged as Record<string, number>)["--slide-final-opacity"] = lineOpacity;
  (merged as Record<string, number>)["--slide-mid-opacity"] = Math.min(1, lineOpacity + 0.1);

  if (orientation === "horizontal") {
    return {
      ...merged,
      width: lineLength,
      height: lineWidth,
    };
  }

  return {
    ...merged,
    width: lineWidth,
    height: lineLength,
  };
};

export const CornerAnimations = ({
  className = "",
  lineColor = "bg-white",
  lineWidth = 4,
  lineLength = 128,
  showTop = true,
  showBottom = true
}: CornerAnimationsProps) => {
  const effectiveOpacity = 1; // brand requirement: keep corner lines fully opaque
  const horizontalStyle = buildStyle("horizontal", lineWidth, lineLength, effectiveOpacity);
  const verticalStyle = buildStyle("vertical", lineWidth, lineLength, effectiveOpacity);

  const cornerWrapper = (position: string) =>
    `pointer-events-none absolute ${position} w-64 h-64 z-[2] ${className}`;

  return (
    <>
      {showTop && (
        <>
          {/* Top Left Corner */}
          <div className={cornerWrapper("top-0 left-0")}>
            <div
              className={`absolute top-8 left-8 ${lineColor} animate-slide-right`}
              style={horizontalStyle}
            />
            <div
              className={`absolute top-8 left-8 ${lineColor} animate-slide-down`}
              style={verticalStyle}
            />
          </div>
          {/* Top Right Corner */}
          <div className={cornerWrapper("top-0 right-0")}>
            <div
              className={`absolute top-8 right-8 ${lineColor} animate-slide-left`}
              style={horizontalStyle}
            />
            <div
              className={`absolute top-8 right-8 ${lineColor} animate-slide-down`}
              style={verticalStyle}
            />
          </div>
        </>
      )}

      {showBottom && (
        <>
          {/* Bottom Left Corner */}
          <div className={cornerWrapper("bottom-0 left-0")}>
            <div
              className={`absolute bottom-8 left-8 ${lineColor} animate-slide-right`}
              style={horizontalStyle}
            />
            <div
              className={`absolute bottom-8 left-8 ${lineColor} animate-slide-up`}
              style={verticalStyle}
            />
          </div>
          {/* Bottom Right Corner */}
          <div className={cornerWrapper("bottom-0 right-0")}>
            <div
              className={`absolute bottom-8 right-8 ${lineColor} animate-slide-left`}
              style={horizontalStyle}
            />
            <div
              className={`absolute bottom-8 right-8 ${lineColor} animate-slide-up`}
              style={verticalStyle}
            />
          </div>
        </>
      )}
    </>
  );
};
