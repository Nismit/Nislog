import { css, cx } from "hono/css";
import type { FC } from "hono/jsx";
import PostType from "#/types/post";
import { PostCard } from "#/components/PostCard";

const relatedPostsClass = css`
  margin: 2rem 0;
  padding: 1.5rem 0;
  background-color: #1e1e20;

  ul {
    margin: 0;
    padding-left: 0;
    list-style: none;
  }
`;

type Props = {
  posts: PostType[];
};

export const RelatedPosts: FC<Props> = ({ posts }) => {
  const shuffleArray = (array: PostType[]): PostType[] => {
    const shuffled = [...array];
    for (let i = shuffled.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [shuffled[i], shuffled[j]] = [shuffled[j], shuffled[i]];
    }
    return shuffled;
  };

  const slicedPosts = shuffleArray(posts).slice(0, 5);

  return (
    <section class={cx("full-bleed-center", relatedPostsClass)}>
      <h2 class="h4">See Also</h2>

      <ul class="related-articles--container">
        {slicedPosts.map((post, index) => (
          <li key={index}>
            <PostCard post={post} isHideTags={true} />
          </li>
        ))}
      </ul>
    </section>
  );
};
