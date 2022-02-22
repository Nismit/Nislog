import styled from "@emotion/styled";

const Article: React.FC = ({ children }) => (
  <_Article className="full-bleed">{children}</_Article>
);

const _Article = styled.article`
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

export default Article;
