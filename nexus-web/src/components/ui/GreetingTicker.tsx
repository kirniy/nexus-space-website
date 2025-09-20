"use client";

import { api } from "~/trpc/react";

export const GreetingTicker = () => {
  const { data } = api.example.greeting.useQuery({ name: "NEXUS" });

  if (!data) return null;

  return (
    <div className="border-grid bg-neutral-900/70 p-6 text-sm font-mono uppercase tracking-[0.3em] text-white/60">
      {data.message}
    </div>
  );
};
