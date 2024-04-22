import { css } from "hono/css";
import type { FC } from "hono/jsx";
import { ASSETS_PREFIX_PATH } from "#/consts";
import { PostDate } from "../PostDate";

const postHeaderClass = css`
  h1 {
    font-size: 1.72rem;
    line-height: 1.5;
    margin-top: 0.6rem;
    margin-bottom: 1rem;
  }

  img {
    width: 100%;
    height: auto;
  }
`;

type Props = {
  title: string;
  date: string;
  lastmod?: string;
  eyecatch?: string;
};

export const PostHeader: FC<Props> = ({ title, date, lastmod, eyecatch }) => (
  <section class={postHeaderClass}>
    <PostDate publishDate={date} lastModifiedDate={lastmod} />

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
