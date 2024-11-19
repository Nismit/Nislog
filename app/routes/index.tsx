import { createRoute } from "honox/factory";
import PostType from "#/types/post";
import { getAllPosts, getAllTags } from "#/lib/posts";
import { MAX_DISPLAY_ITEM, DEFAULT_FIELDS } from "#/consts";
import { PostCard } from "#/components/PostCard";
import { Pagination } from "#/components/Pagination";
import { TagCloud } from "#/components/TagCloud";

export default createRoute(async (c) => {
  const allPosts = await getAllPosts<PostType>(DEFAULT_FIELDS);
  const filteredPosts = allPosts.posts.filter((post) =>
    !import.meta.env.PROD ? true : !post.draft
  );
  const slicedPosts = filteredPosts.slice(0, MAX_DISPLAY_ITEM);
  const allTags = await getAllTags();

  if (!slicedPosts.length) {
    return c.notFound();
  }

  return c.render(
    <>
      {slicedPosts.map((post) => (
        <PostCard post={post} />
      ))}
      <Pagination totalCounts={allPosts.totalPosts} />
      <TagCloud tags={allTags} />
    </>,
    { title: "NISLOG" }
  );
});
