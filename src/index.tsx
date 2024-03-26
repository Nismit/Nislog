import { Hono } from "hono";
import { serveStatic } from "@hono/node-server/serve-static";
import { FRONT_MATTER_FIELDS } from "./consts";
import { renderer } from "./renderer";
import { markdownParser } from "./lib/parser";
import { getPostBySlug, getAllPosts } from "./lib/posts";
import { MarkdownASTRenderer } from "./components/MarkdownASTRenderer";

const app = new Hono();

app.use(renderer);
app.use("*", serveStatic({ root: "./public" }));

app.get("/", async (c) => {
  const allPosts = await getAllPosts(["date", "title", "description"]);
  const test = markdownParser(`
  # Hello, World
  This is markdown test.
  # hello world2
  foo bar`);

  return c.render(<MarkdownASTRenderer nodes={test.children} />);
});

app.get("/page/:pageNumber", async (c) => {
  const pageNumber = c.req.param("pageNumber");
  return c.render(
    <div>
      <p>This is page page number: {pageNumber}</p>
    </div>
  );
});

app.get(
  "/post/:year{[0-9]{4}}/:month{(0[1-9]|1[0-2])}/:title{[a-z-]+}",
  async (c) => {
    try {
      const { year, month, title } = c.req.param();
      const slug = `${year}/${month}/${title}`;
      const post = getPostBySlug(slug, FRONT_MATTER_FIELDS);

      console.log("front matter:", post.title, post.date, post.tags);
      const root = markdownParser(post.content);

      return c.render(<MarkdownASTRenderer nodes={root.children} />);
    } catch (err) {
      if (err instanceof Error) {
        console.error("[LOG]:", err.message);
      }

      return c.notFound();
    }
  }
);

// app.all("*", (c) => {
//   return c.text("Custom 404 Error", 404);
// });

app.notFound((c) => {
  return c.text("Custom2 404 Message", 404);
});

export default app;
