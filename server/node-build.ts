import { createServer } from "./index";
import * as express from "express";
import path from "path";
import { registerBlogOgRoute } from "./routes/blog-og";

const app = createServer();
const port = Number(process.env.PORT || 3000);

// In production, serve the built SPA files
const __dirname = import.meta.dirname;
// Point to the spa directory where Vite outputs the build
const distPath = path.join(__dirname, "..", "spa");

// Serve static files
app.use(express.static(distPath));

// Server-side OG injection for blog posts (must run before catch-all)
registerBlogOgRoute(app, distPath);

// Handle React Router - serve index.html for all non-API routes
app.get("*", (req, res) => {
  // Don't serve index.html for API routes
  if (req.path.startsWith("/api/") || req.path.startsWith("/health")) {
    return res.status(404).json({ error: "API endpoint not found" });
  }

  res.sendFile(path.join(distPath, "index.html"));
});

// Bind to all interfaces (0.0.0.0) for container networking
app.listen(port, "0.0.0.0", () => {
  console.log(`🚀 Prompt Tax server running on port ${port}`);
  console.log(`📱 Frontend: http://0.0.0.0:${port}`);
  console.log(`🔧 API: http://0.0.0.0:${port}/api`);
  console.log(`💖 Health: http://0.0.0.0:${port}/api/ping`);
});

// Graceful shutdown
process.on("SIGTERM", () => {
  console.log("🛑 Received SIGTERM, shutting down gracefully");
  process.exit(0);
});

process.on("SIGINT", () => {
  console.log("🛑 Received SIGINT, shutting down gracefully");
  process.exit(0);
});
