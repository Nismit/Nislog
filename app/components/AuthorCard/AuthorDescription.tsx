import { css } from "hono/css";
import type { FC } from "hono/jsx";
import { SocialList } from "#/types/social";
import { Social } from "../Social";
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

const socialContainerClass = css`
  display: flex;
  gap: 1.5rem;
  margin-top: 1.7rem;

  & > div {
    width: 24px;
    height: 24px;
  }

  a {
    display: block;
    transition: all 0.35s;
    color: var(--primary);
    line-height: 1;

    &:hover,
    &:active {
      opacity: 0.6;
    }

    &:focus {
      outline: 1px solid var(--primary);
    }
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

    <div class={socialContainerClass}>
      <Social
        items={[
          { type: SocialList.TWITTER, name: "nismit_" },
          { type: SocialList.BLUESKY, name: "nismit" },
          { type: SocialList.GITHUB, name: "Nismit" },
        ]}
      />
    </div>
  </div>
);
