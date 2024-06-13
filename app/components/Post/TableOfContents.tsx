import { css } from "hono/css";
import type { FC } from "hono/jsx";
import type { TocNode } from "#/types/remark";

const tocClass = css`
  position: sticky;
  top: 2rem;
  max-width: 350px;
`;

const tocListClass = css`
  list-style: none;
  padding-left: 0;
  font-size: 0.9rem;

  li {
    margin-bottom: 0.4rem;
  }

  ul {
    margin-top: 0.4rem;
    padding-left: 0.9rem;
  }
`;

type Props = {
  toc?: TocNode[];
};

const renderNodes = (nodes: TocNode[]) => {
  return (
    <ul class={tocListClass}>
      {nodes.map((node) => (
        <li key={node.data.hProperties.id}>
          <a href={`#${node.data.hProperties.id}`}>{node.value}</a>
          {node.children?.length > 0 && renderNodes(node.children)}
        </li>
      ))}
    </ul>
  );
};

export const TableOfContents: FC<Props> = ({ toc }) => {
  if (!toc) {
    return <></>;
  }

  return (
    <section class="toc">
      <div className={tocClass}>
        <p class="secondary-text">目次</p>
        {renderNodes(toc)}
      </div>
    </section>
  );
};
