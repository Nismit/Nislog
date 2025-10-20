import { ssgParams } from "hono/ssg";
import { createRoute } from "honox/factory";
import PostType from "#/types/post";
import { getAllPosts, getAllTags } from "#/lib/posts";
import { MAX_DISPLAY_ITEM } from "#/consts";
import { PostCard } from "#/components/PostCard";
import { Pagination } from "#/components/Pagination";
import { TagCloud } from "#/components/TagCloud";
import buildData from "#/tmp/build.json";

// The pager starts from 2 because the first page is the root page.
// Total Post = 68, Display Item = 10, equals 6.8 pages and ceil to 7.
const MAX_PAGE = Math.ceil(buildData.totalPosts / MAX_DISPLAY_ITEM) - 1;
const pager = [...Array(MAX_PAGE).keys()];

export default createRoute(
  ssgParams(() => pager.map((page) => ({ page: `${page + 1}` }))),
  async (c) => {
    try {
      const page = Number(c.req.param("page"));
      const allPosts = await getAllPosts<PostType>([
        "draft",
        "date",
        "title",
        "description",
        "tags",
      ]);
      const nextNumberOfPosts = MAX_DISPLAY_ITEM * (page - 1);
      const filteredPosts = allPosts.posts.filter((post) =>
        !import.meta.env.PROD ? true : !post.draft
      );
      const slicedPosts = filteredPosts.slice(
        nextNumberOfPosts,
        nextNumberOfPosts + MAX_DISPLAY_ITEM
      );
      const allTags = await getAllTags();

      if (!slicedPosts.length) {
        return c.notFound();
      }

      return c.render(
        <>
          {slicedPosts.map((post) => (
            <PostCard post={post} />
          ))}
          <Pagination
            totalCounts={allPosts.totalPosts}
            currentPageNumber={page}
          />
          <TagCloud tags={allTags} />
        </>,
        { title: `Page ${page} | NISLOG`, noIndex: true }
      );
    } catch (err) {
      console.error(err);
      return c.notFound();
    }
  }
);
