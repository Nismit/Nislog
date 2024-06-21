import { createRoute } from "honox/factory";
import PostType from "#/types/post";
import { DEFAULT_FIELDS } from "#/consts";
import { markdownParser } from "#/lib/parser";
import { getPostBySlug } from "#/lib/posts";
import { Post } from "#/components/Post";

export default createRoute(async (c) => {
  try {
    const article = getPostBySlug<PostType>(
      "about",
      DEFAULT_FIELDS,
      "content/pages/"
    );
    const articleAst = await markdownParser(article.content);

    return c.render(
      <Post post={article} nodes={articleAst.children} isPage />,
      {
        title: article.title,
      }
    );
  } catch (err) {
    console.error(err);
    return c.notFound();
  }
});
