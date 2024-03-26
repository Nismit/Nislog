import { css } from "hono/css";
import type { FC } from "hono/jsx";

const authorImageClass = css`
  text-align: center;

  img {
    clip-path: polygon(50% 0, 100% 25%, 100% 75%, 50% 100%, 0 75%, 0 25%);
  }

  @media screen and (min-width: 48em) {
    text-align: left;
  }
`;

type Props = {
  imagePath: string;
};

export const AuthorImage: FC<Props> = ({ imagePath }) => (
  <div class={authorImageClass}>
    <img src={imagePath} width="165" height="165" alt="Author" />
  </div>
);
