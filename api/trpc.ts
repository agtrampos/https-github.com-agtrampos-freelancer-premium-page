import type { VercelRequest, VercelResponse } from "@vercel/node";
import express from "express";
import { createExpressMiddleware } from "@trpc/server/adapters/express";
import { appRouter } from "../server/routers";
import { createContext } from "../server/_core/context";

const app = express();
app.use(express.json({ limit: "5mb" }));
// Health check for GET requests to prevent function crash
app.get("/", (_req, res) => {
  res.status(200).json({ status: "ok" });
});
app.use(
  "/",
  createExpressMiddleware({
    router: appRouter,
    createContext,
  })
);

export default async function handler(req: VercelRequest, res: VercelResponse) {
  app(req as any, res as any);
}
