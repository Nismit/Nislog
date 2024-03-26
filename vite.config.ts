import ssg from "@hono/vite-ssg";
import honox from "honox/vite";
import client from "honox/vite/client";
import { defineConfig } from "vite";

const entry = "./app/server.ts";

export default defineConfig(({ mode }) => {
  if (mode === "client") {
    return {
      resolve: {
        alias: [{ find: /#/, replacement: "/app/" }],
      },
      plugins: [client()],
    };
  } else {
    return {
      build: {
        emptyOutDir: false,
        build: {
          // assetsDir: "public/static/", // make all non-island asset imports map to the /dist/static directory when emitted
          ssrEmitAssets: true, // emit all the assets required during the SSR build
        },
      },
      ssr: {
        external: ["remark", "remark-gfm", "fast-glob", "gray-matter"],
      },
      resolve: {
        alias: [{ find: /#/, replacement: "/app/" }],
      },
      plugins: [honox(), ssg({ entry })],
    };
  }
});
