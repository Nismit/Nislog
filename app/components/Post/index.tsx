import { css } from "hono/css";
import type { FC } from "hono/jsx";
import { RootContent } from "mdast";
import { PostHeader } from "./PostHeader";
import { PostContainer } from "./PostContainer";
import { PostTags } from "./PostTags";
import { PostFooter } from "./PostFooter";

const postClass = css`
  width: 100%;
  grid-column: 1 / 4;
  display: grid;
  grid-template-columns: 1fr min(69ch, calc(100% - 2rem)) 1fr;
  grid-column-gap: 1rem;

  > * {
    grid-column: 2;
  }

  .full-bleed {
    width: 100%;
    grid-column: 1 / 4;
  }
`;

type Props = {
  post: any;
  nodes: RootContent[];
  isPage?: boolean;
};

export const Post: FC<Props> = ({ post, nodes, isPage }) => (
  <article className={postClass}>
    <PostHeader
      title={post.title}
      date={post.date}
      lastmod={post.lastmod}
      eyecatch={post.eyecatch}
    />
    <PostContainer nodes={nodes} />
    {!isPage ? <PostTags data={post.tags} /> : null}
    {!isPage ? <PostFooter slug={post.slug} title={post.title} /> : null}
  </article>
);
