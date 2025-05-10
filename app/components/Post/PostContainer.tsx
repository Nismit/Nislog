import { css } from "hono/css";
import type { FC } from "hono/jsx";
import { RootContent } from "mdast";
import { MarkdownRenderer } from "./MarkdownRenderer";

const postContainerClass = css`
  > *:first-child {
    margin-top: 1.5rem;
  }

  h1 {
    padding-bottom: 0.1em;
    margin-top: 4rem;
    margin-bottom: 0.9rem;
    font-size: 1.53rem;
    line-height: 1.5;
  }

  h2 {
    margin-top: 2rem;
    margin-bottom: 0.9rem;
    font-size: 1.38rem;
    line-height: 1.5;
  }

  h3 {
    margin-top: 2rem;
    margin-bottom: 0.9rem;
    font-size: 1.18rem;
  }

  // h4-h6 are the same
  h4,
  h5,
  h6 {
    margin-top: 1.3rem;
    margin-bottom: 1.2rem;
    font-size: 1.1rem;
  }

  h1 + h2 {
    margin-top: 1.5rem;
  }

  // Typography
  p {
    line-height: 1.7;
    margin-bottom: 1.45rem;
    // Ref: https://ics.media/entry/240411/
    overflow-wrap: anywhere;
    word-break: normal;
    line-break: strict;
  }

  strong {
    background: linear-gradient(transparent 70%, var(--cta) 70%);
  }

  // Image
  img {
    height: auto;
    max-width: 100%;
    vertical-align: bottom;
  }

  figure {
    margin: 2rem 0 2.5rem;
  }

  figcaption {
    text-align: center;
    font-size: 0.92rem;
    opacity: 0.9;
  }

  // Horizontal Rule
  hr {
    border: 0;

    &:before {
      content: "*\a0\a0\a0*\a0\a0\a0*";
    }
  }

  // Table
  table {
    width: 100%;
    border: 1px solid var(--main-border-color);
    border-collapse: collapse;
    margin: 1.3em 0;

    th,
    td {
      border: 1px solid var(--main-border-color);
      padding: 0.3em 0.5em;
    }
  }

  // Blockquote
  blockquote {
    font-style: italic;
    position: relative;
    margin: 2.5rem 0;
    padding: 0 1rem;
    border-left: 5px solid var(--accent);
  }

  ul {
    margin: 1rem 0;
    padding-left: 1em;

    li {
      margin: 0.75rem 0;

      a {
        word-break: break-all;
      }
    }

    ul {
      margin: 0;

      li {
        margin: 0.55rem 0;
      }
    }

    p {
      margin: 0;
    }
  }

  // Code
  code {
    padding: 0.2em 0.4em;
    margin: 0 0.3rem;
    font-size: 95%;
    background-color: var(--code-background-color);
    border-radius: 5px;
  }

  // Pre
  pre {
    padding: 16px;
    overflow: auto;
    font-size: 90%;
    line-height: 1.5;
    background-color: var(--pre-background-color);
    border-radius: 5px;

    > code {
      margin: 0;
      padding: 0;
      font-size: 100%;
      background-color: transparent;
      border-radius: 0;
    }
  }

  a {
    color: var(--cta);

    &:hover {
      color: var(--ctaInvert);
    }
  }
`;

type Props = {
  nodes: RootContent[];
};

export const PostContainer: FC<Props> = ({ nodes }) => (
  <section className={postContainerClass}>
    <MarkdownRenderer nodes={nodes} />
  </section>
);
