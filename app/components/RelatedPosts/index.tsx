import { css } from "hono/css";
import type { FC } from "hono/jsx";
import PostType from "../../../types/post";
import { RelatedPostItem } from "./RelatedPostItem";

const relatedPostsClass = css`
  margin-top: 3rem;
  margin-bottom: 2rem;

  ul {
    padding-left: 0;
    list-style: none;
  }
`;

type Props = {
  posts: PostType[];
};

export const RelatedPosts: FC<Props> = ({ posts }) => {
  const sliced = posts.slice(0, 5);

  return (
    <section class={relatedPostsClass}>
      <h2 className="h4">See Also</h2>

      <ul>
        {sliced.map((postData, index) => (
          <li className="related-articles--container" key={index}>
            <RelatedPostItem post={postData} />
          </li>
        ))}
      </ul>
    </section>
  );
};
