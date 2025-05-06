import { css } from "hono/css";
import type { FC } from "hono/jsx";
import { ArrowForwardCircle } from "../Icons";

const authorDescriptionClass = css`
  p {
    line-height: 1.7;
  }

  @media screen and (min-width: 48em) {
    padding-left: 1.5rem;
  }
`;

const detailLinkClass = css`
  display: flex;
  gap: 0.3rem;
  align-items: center;
  margin-top: -0.3rem;

  svg {
    width: 1.3rem;
  }
`;

type Props = {
  name: string;
  description: string;
  detailLink?: string;
};

export const AuthorDescription: FC<Props> = ({
  name,
  description,
  detailLink,
}) => (
  <div class={authorDescriptionClass}>
    <h3 className="h4">{name}</h3>

    <p>{description}</p>

    {detailLink && (
      <div class={detailLinkClass}>
        <ArrowForwardCircle />
        <span>
          <a href={detailLink}>詳しくはこちら</a>
        </span>
      </div>
    )}
  </div>
);
