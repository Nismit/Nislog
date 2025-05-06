import { css } from "hono/css";
import type { FC } from "hono/jsx";
import PostType from "#/types/post";
import { getTagColor } from "#/utils/color";

const postTagClass = css`
  display: flex;
  gap: 0.5rem;

  > a {
    padding: 0.05rem 0.25rem;
    font-size: 0.7rem;
    text-decoration: none;
    border-radius: 0.2rem;
    text-transform: capitalize;
    color: var(--primary);
  }
`;

type Props = {
  tags: PostType["tags"];
};

export const PostTag: FC<Props> = ({ tags }) => {
  if (!tags || tags.length === 0) {
    return null;
  }

  return (
    <div class={postTagClass}>
      {tags.map((tag) => (
        <a
          href={`/tags/${encodeURIComponent(tag)}`}
          className="postCard__tag"
          title={tag}
          key={tag}
          style={{ backgroundColor: getTagColor(tag) }}
        >
          {tag}
        </a>
      ))}
    </div>
  );
};
