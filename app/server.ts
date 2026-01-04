import { showRoutes } from "hono/dev";
import { createApp } from "honox/server";
import { trimTrailingSlash } from "hono/trailing-slash";

const app = createApp();

// Remove trailing slashes from all routes
app.use("*", trimTrailingSlash());

showRoutes(app);

export default app;
