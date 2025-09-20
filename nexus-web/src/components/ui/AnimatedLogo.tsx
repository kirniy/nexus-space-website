"use client";

import Image from "next/image";

export const AnimatedLogo = () => {
  return (
    <div className="relative">
      <Image
        src="/nexus-logo.svg"
        alt="NEXUS"
        width={160}
        height={50}
        className="h-14 w-auto brightness-0 invert transition-all duration-300 hover:scale-105"
        priority
      />
    </div>
  );
};