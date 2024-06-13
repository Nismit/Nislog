import type { FC } from "hono/jsx";
import type { TocNode } from "#/types/remark";
import { css } from "hono/css";
import { RootContent } from "mdast";
import PostType from "#/types/post";
import { PostHeader } from "./PostHeader";
import { PostContainer } from "./PostContainer";
import { PostTags } from "./PostTags";
import { PostFooter } from "./PostFooter";
import { TableOfContents } from "./TableOfContents";

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

  .toc {
    display: block;
    opacity: 1;
    transition: opacity 350ms, display 350ms;
    transition-behavior: allow-discrete;
    grid-column-start: 3;
    grid-row: 2 / 4;
  }

  @media (width <= 1280px) {
    .toc {
      opacity: 0;
      display: none;
    }
  }
`;

type Props = {
  post: PostType;
  nodes: RootContent[];
  isPage?: boolean;
  toc?: TocNode[];
};

export const Post: FC<Props> = ({ post, nodes, isPage, toc }) => (
  <article className={postClass}>
    <PostHeader
      title={post.title}
      date={post.date}
      lastmod={post.lastmod}
      eyecatch={post.eyecatch}
    />
    <TableOfContents toc={toc} />
    <PostContainer nodes={nodes} />
    {!isPage ? <PostTags data={post.tags} /> : null}
    {!isPage ? <PostFooter slug={post.slug} title={post.title} /> : null}
  </article>
);
