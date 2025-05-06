import { css } from "hono/css";
import type { FC } from "hono/jsx";
import PostType from "#/types/post";
import { PostDate } from "../PostDate";
import { PostTag } from "../PostTag";

const postCardClass = css`
  display: flex;
  gap: 1rem;
  margin-bottom: 1.5rem;

  .postCard__date {
    margin-top: 0.03rem;
  }

  .postCard__link {
    text-decoration: none;
    color: var(--main-font-color);
    -webkit-transition: all 0.35s;
    transition: all 0.35s;

    &:hover {
      opacity: 0.8;
      color: var(--secondly-link-color);
    }
  }

  .postCard__title {
    font-size: 1.2rem;
    margin-bottom: 0;
  }

  .postCard__content {
    display: flex;
    flex-direction: column;
    gap: 0.3rem;
  }
`;

type Props = {
  post: PostType;
  isHideTags?: boolean;
};

export const PostCard: FC<Props> = ({ post, isHideTags }) => {
  const { slug, title, date, lastmod, tags } = post;

  return (
    <article class={postCardClass}>
      <span class="postCard__date">
        <PostDate publishDate={date} lastModifiedDate={lastmod} />
      </span>

      <div class="postCard__content">
        <a href={`/${slug}`} class="postCard__link" title={title}>
          <h1 class="postCard__title">{title}</h1>
        </a>
        {isHideTags ? null : <PostTag tags={tags} />}
      </div>
    </article>
  );
};
