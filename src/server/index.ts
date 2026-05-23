import { Hono } from "hono";
import { accessAuth } from "./middleware/auth";

const app = new Hono();

app.use(accessAuth).get("/api/health", (c) => {
  return c.json({ message: "Server is running 🔥" });
});

export default app;
