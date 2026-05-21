import { Hono } from "hono";

const app = new Hono();

app.get("/api/health", (c) => {
  return c.json({ message: "Server is running 🔥" });
});

export default app;
