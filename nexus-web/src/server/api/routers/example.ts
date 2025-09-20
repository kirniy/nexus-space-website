import { z } from "zod";
import { createTRPCRouter, publicProcedure } from "~/server/api/trpc";

export const exampleRouter = createTRPCRouter({
  greeting: publicProcedure
    .input(z.object({ name: z.string().optional() }))
    .query(({ input }) => ({
      message: `С возвращением, ${input?.name ?? "гость"}! Это данные из tRPC.`,
      updatedAt: new Date().toISOString()
    }))
});
