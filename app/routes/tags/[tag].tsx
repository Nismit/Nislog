import { ssgParams } from "hono/ssg";
import { createRoute } from "honox/factory";
import { DEFAULT_FIELDS } from "#/consts";
import PostType from "#/types/post";
import { getAllTags, getPostsFromTag } from "#/lib/posts";
import { PostCard } from "#/components/PostCard";
import { TagCloud } from "#/components/TagCloud";
import buildData from "#/tmp/build.json";

export default createRoute(
  ssgParams(() => buildData.tags.map((tag) => ({ tag }))),
  async (c) => {
    try {
      const tag = c.req.param("tag");
      const allTagPosts = await getPostsFromTag<PostType>(
        [tag],
        DEFAULT_FIELDS
      );
      const allTags = await getAllTags();

      if (!allTagPosts.posts.length) {
        return c.notFound();
      }

      return c.render(
        <>
          {allTagPosts.posts.map((post) => (
            <PostCard post={post} />
          ))}
          <TagCloud tags={allTags} />
        </>,
        { title: "NISLOG", noIndex: true }
      );
    } catch (err) {
      console.error(err);
      return c.notFound();
    }
  }
);
