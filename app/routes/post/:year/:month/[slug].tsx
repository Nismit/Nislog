import { ssgParams } from "hono/ssg";
import { createRoute } from "honox/factory";
import { DEFAULT_FIELDS } from "#/consts";
import PostType from "#/types/post";
import { markdownParser } from "#/lib/parser";
import { getPostBySlug, getPostsFromTag } from "#/lib/posts";
import { Post } from "#/components/Post";
import { AuthorCard } from "#/components/AuthorCard";
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
      const { year, month, slug } = c.req.param();
      const path = `post/${year}/${month}/${slug}`;

      if (year === ":year" || month === ":month" || slug === ":slug") {
        return c.notFound();
      }

      const post = getPostBySlug<PostType>(path, DEFAULT_FIELDS);
      const postAst = markdownParser(post.content);
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
          <Post post={post} nodes={postAst.children} />
          <AuthorCard />
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
