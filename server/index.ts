import "dotenv/config";
import express from "express";
import cors from "cors";
import rateLimit from "express-rate-limit";
import { handleDemo } from "./routes/demo";
import demoRequestRouter from "./routes/demo-request";
import contactRouter from "./routes/contact";
import demoFormRouter from "./routes/demo-form";

export function createServer() {
  const app = express();

  // Global rate limiting to prevent CPU overload. Disabled in development to avoid dev HMR / preview rate limits.
  const globalLimiter = rateLimit({
    windowMs: 15 * 60 * 1000, // 5 minutes
    max: process.env.NODE_ENV === "development" ? 1000 : 100, // More lenient in development
    standardHeaders: true,
    legacyHeaders: false,
  });

  // Middleware
  // Apply global limiter only in production or when explicitly enabled via env var
  if (
    process.env.ENABLE_GLOBAL_RATE_LIMIT === "true" &&
    process.env.NODE_ENV !== "development"
  ) {
    app.use(globalLimiter);
  }

  app.use(cors());
  app.use(express.json({ limit: "10mb" })); // Prevent large payloads
  app.use(express.urlencoded({ extended: true, limit: "10mb" }));

  // Add timeout protection to prevent hanging requests
  app.use((req, res, next) => {
    res.setTimeout(30000, () => {
      res.status(408).json({ error: "Request timeout" });
    });
    next();
  });

  // Example API routes
  app.get("/api/ping", (_req, res) => {
    const ping = process.env.PING_MESSAGE ?? "ping";
    res.json({ message: ping });
  });

  app.get("/api/demo", handleDemo);
  app.use("/api", demoRequestRouter);
  app.use("/api", contactRouter);
  app.use("/api", demoFormRouter);

  return app;
}
