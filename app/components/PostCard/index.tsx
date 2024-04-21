import { css } from "hono/css";
import type { FC } from "hono/jsx";
import PostType from "#/types/post";
import { PostDate } from "../PostDate";

const postCardClass = css`
  .postCard__link {
    display: block;
    padding: 1.3rem 0;
    text-decoration: none;
    color: var(--main-font-color);
    border-bottom: 1px solid var(--main-border-color);
    -webkit-transition: all 0.35s;
    transition: all 0.35s;

    &:hover {
      opacity: 0.8;
      color: var(--secondly-link-color);
    }
  }

  .postCard__title {
    font-size: 1.4rem;
    margin-bottom: 1rem;
  }

  .postCard__desc {
    margin-top: 0.5em;
    margin-bottom: 0.5em;
  }
`;

type Props = {
  post: PostType;
};

export const PostCard: FC<Props> = ({ post }) => {
  const { slug, title, date, lastmod, description } = post;

  return (
    <article class={postCardClass}>
      <a href={`/${slug}`} class="postCard__link" title={title}>
        <h1 className="postCard__title">{title}</h1>
        <p className="postCard__desc">{description}</p>
        <PostDate publishDate={date} lastModifiedDate={lastmod} />
      </a>
    </article>
  );
};
