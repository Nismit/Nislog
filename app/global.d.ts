import {} from "hono";
import PostType from "./types/post";

type Head = {
  title?: string;
  post?: PostType;
};

declare module "hono" {
  interface Env {
    Variables: {};
    Bindings: {};
  }
  interface ContextRenderer {
    (content: string | Promise<string>, head?: Head):
      | Response
      | Promise<Response>;
  }
}
