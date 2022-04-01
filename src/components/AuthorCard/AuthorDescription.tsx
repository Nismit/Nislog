import Link from "next/link";
import styled from "@emotion/styled";
import { SocialList } from "../../../types/social";
import Social from "../Social";
import { ArrowForwardCircle } from "../Icons";

type Props = {
  name: string;
  description: string;
  detailLink?: string;
};

const AuthorDescription: React.VFC<Props> = ({
  name,
  description,
  detailLink,
}) => (
  <_AuthorDescription>
    <h3 className="h4">{name}</h3>

    <p>{description}</p>

    {detailLink && (
      <_DetailLink>
        <ArrowForwardCircle />
        <p>
          <Link href={detailLink}>詳しくはこちら</Link>
        </p>
      </_DetailLink>
    )}

    <_SocialContainer>
      <Social
        items={[
          { type: SocialList.TWITTER, name: "nismit_" },
          { type: SocialList.GITHUB, name: "Nismit" },
        ]}
      />
    </_SocialContainer>
  </_AuthorDescription>
);

const _AuthorDescription = styled.div`
  p {
    line-height: 1.7;
  }

  @media screen and (min-width: 48em) {
    padding-left: 1.5rem;
  }
`;

const _DetailLink = styled.div`
  display: flex;
  gap: 0.3rem;
  align-items: center;
  margin-top: -1rem;

  svg {
    width: 1.3rem;
  }
`;

const _SocialContainer = styled.div`
  display: flex;
  gap: 1.5rem;

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

export default AuthorDescription;
