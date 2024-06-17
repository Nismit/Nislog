import type { FC } from "hono/jsx";
import type { FootnotesParentNode } from "#/types/remark";
import { css } from "hono/css";
import { MarkdownRenderer } from "./MarkdownRenderer";

const footnoteClass = css`
  border-top: 1px solid var(--tertiary);

  ol {
    padding-left: 1.05rem;
    font-size: 0.85rem;
  }
`;

export const Footnotes: FC<{ node?: FootnotesParentNode }> = ({ node }) => {
  if (!node) {
    return <></>;
  }

  return (
    <section class={footnoteClass}>
      <ol>
        <MarkdownRenderer nodes={node.children} />
      </ol>
    </section>
  );
};
