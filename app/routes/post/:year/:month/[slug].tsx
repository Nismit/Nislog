import { ssgParams } from "hono/ssg";
import { createRoute } from "honox/factory";
import { DEFAULT_FIELDS } from "#/consts";
import PostType from "#/types/post";
import { markdownParser } from "#/lib/parser";
import { getPostBySlug, getPostsFromTag } from "#/lib/posts";
import { Post } from "#/components/Post";
import { RelatedPosts } from "#/components/RelatedPosts";
import buildData from "#/tmp/build.json";

export default createRoute(
  ssgParams(() =>
    buildData.slugs.map((slug) => {
      const params = slug.split("/");
      return {
        year: params[0],
        month: params[1],
        slug: params[2],
      };
    })
  ),
  async (c) => {
    try {
      const year = c.req.param("year");
      const month = c.req.param("month");
      const slug = c.req.param("slug");
      const path = `post/${year}/${month}/${slug}`;

      if (year === ":year" || month === ":month" || slug === ":slug") {
        return c.notFound();
      }

      const post = getPostBySlug<PostType>(path, ["toc", ...DEFAULT_FIELDS]);
      const postAst = await markdownParser(post.content);
      const { toc, footnotes } = postAst.data;
      const tags: string[] = [...new Set(post.tags)];
      const postsFromTags = await getPostsFromTag<PostType>(
        tags,
        DEFAULT_FIELDS
      );
      const filteredPostsFromTags = postsFromTags.posts
        .filter((_post) => _post.slug !== post.slug)
        .filter((_post) => !_post.draft);

      return c.render(
        <>
          <Post
            post={post}
            nodes={postAst.children}
            toc={post.toc ? toc : undefined}
            footnotes={footnotes}
          />
          <RelatedPosts posts={filteredPostsFromTags} />
        </>,
        { title: post.title, post }
      );
    } catch (err) {
      console.error(err);
      return c.notFound();
    }
  }
);
