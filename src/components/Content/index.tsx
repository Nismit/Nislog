import styled from "@emotion/styled";

type Props = {
  children: React.ReactNode;
};

const Content: React.FC<Props> = ({ children }) => (
  <_Content>{children}</_Content>
);

const _Content = styled.section`
  h1 {
    padding-bottom: 0.1em;
    margin-top: 3rem;
    margin-bottom: 1.5rem;
    border-bottom: 4px solid var(--cta);
    font-size: 1.65rem;
    line-height: 1.5;
  }

  h2 {
    padding: 0.25em 0 0.25em 0.45em;
    margin-top: 2rem;
    margin-bottom: 1.3rem;
    border-left: 6px solid var(--cta);
    font-size: 1.56rem;
    line-height: 1.5;
  }

  h3 {
    margin-top: 1.5rem;
    margin-bottom: 1.5rem;
    font-size: 1.5rem;
  }

  h4 {
    margin-top: 1.5rem;
    margin-bottom: 1.5rem;
    font-size: 1.28rem;
  }

  h5 {
    margin-bottom: 0.7rem;
  }

  h6 {
    margin-bottom: 0.5rem;
  }

  // Typography
  p {
    line-height: 1.7;
    margin-bottom: 1.45rem;
  }

  strong {
    background: linear-gradient(transparent 70%, var(--cta) 70%);
  }

  // Image
  img {
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
      margin: 0.7rem 0;
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

export default Content;
