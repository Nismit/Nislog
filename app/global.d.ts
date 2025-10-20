import {} from "hono";
import PostType from "./types/post";

type Head = {
  title?: string;
  post?: PostType;
  noIndex?: boolean;
};

declare module "hono" {
  interface ContextRenderer {
    (content: string | Promise<string>, head?: Head):
      | Response
      | Promise<Response>;
  }
}
