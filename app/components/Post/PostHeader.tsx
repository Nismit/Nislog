import { css } from "hono/css";
import type { FC } from "hono/jsx";
import PostType from "#/types/post";
import { ASSETS_PREFIX_PATH } from "#/consts";
import { PostDate } from "../PostDate";
import { PostTag } from "../PostTag";

const postHeaderClass = css`
  h1 {
    font-size: 1.65rem;
    line-height: 1.4;
    margin-top: 0.3rem;
    margin-bottom: 1rem;
  }

  img {
    width: 100%;
    height: auto;
  }

  .postHeader__meta {
    display: flex;
    align-items: center;
    justify-content: space-between;
    > div {
      height: 19.52px;
    }
  }
`;

type Props = {
  title: PostType["title"];
  date: PostType["date"];
  lastmod: PostType["lastmod"];
  eyecatch: PostType["eyecatch"];
  tags: PostType["tags"];
};

export const PostHeader: FC<Props> = ({
  title,
  date,
  lastmod,
  eyecatch,
  tags,
}) => (
  <section class={postHeaderClass}>
    <div class="postHeader__meta">
      <PostDate publishDate={date} lastModifiedDate={lastmod} />
      <PostTag tags={tags} />
    </div>

    <h1>{title}</h1>

    {eyecatch && (
      <div>
        <img
          src={`${ASSETS_PREFIX_PATH}${eyecatch}`}
          alt={title}
          width="717"
          height="370"
        />
      </div>
    )}
  </section>
);
