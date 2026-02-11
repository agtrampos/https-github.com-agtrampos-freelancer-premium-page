import type { VercelRequest, VercelResponse } from "@vercel/node";
export default async function handler(req: VercelRequest, res: VercelResponse) {
  if (req.method === "GET") {
    res.status(200).json({ status: "ok" });
    return;
  }
  const { default: express } = await import("express");
  const { createExpressMiddleware } = await import("@trpc/server/adapters/express");
  const { appRouter } = await import("../server/routers");
  const { createContext } = await import("../server/_core/context");
  const app = express();
  app.use(express.json({ limit: "5mb" }));
  app.use(
    "/",
    createExpressMiddleware({
      router: appRouter,
      createContext,
    })
  );
  app(req as any, res as any);
}
