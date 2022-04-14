import styled from "@emotion/styled";
import { Twitter, Hatena, Pocket, Feedly } from "../Icons";

type Props = {
  slug: string;
  title: string;
};

const ContentFooter: React.FC<Props> = ({ slug, title }) => (
  <_ContentFooter>
    <a
      className="single-share__link twitter"
      href={`https://twitter.com/intent/tweet?url=${process.env.NEXT_PUBLIC_BASE_URL}/${slug}&text=${title}&tw_p=tweetbutton`}
      title="Twitterでシェア"
      target="_blank"
      rel="noreferrer"
    >
      <Twitter />
    </a>
    <a
      className="single-share__link hatena"
      href={`https://b.hatena.ne.jp/entry/${process.env.NEXT_PUBLIC_BASE_URL}/${slug}`}
      title="はてなブックマークに保存"
      target="_blank"
      rel="noreferrer"
    >
      <Hatena />
    </a>
    <a
      className="single-share__link pocket"
      href={`https://getpocket.com/edit?url=${process.env.NEXT_PUBLIC_BASE_URL}/${slug}&title=${title}`}
      title="Pocketに保存"
      target="_blank"
      rel="nofollow noreferrer"
    >
      <Pocket />
    </a>
    <a
      className="single-share__link feedly"
      href={`https://feedly.com/i/subscription/feed/${process.env.NEXT_PUBLIC_BASE_URL}/feed.xml`}
      title="Feedlyに登録する"
      target="_blank"
      rel="nofollow noreferrer"
    >
      <Feedly />
    </a>
  </_ContentFooter>
);

const _ContentFooter = styled.section`
  display: flex;
  gap: 1rem;
  margin: 1rem 0;
  border-top: 3px solid var(--main-border-color);
  border-bottom: 3px solid var(--main-border-color);

  svg {
    width: 23px;
    height: 23px;
    color: #fff;
  }

  .single-share__link {
    display: flex;
    align-items: center;
    background-color: var(--main-border-color);
    border-radius: 3px;
    padding: 0.4rem 0.55rem;
    margin: 0.5rem 0;
    -webkit-transition: all 0.35s;
    transition: all 0.35s;

    &.twitter {
      background-color: #1da1f2;
    }

    &.facebook {
      background-color: #3b5998;
    }

    &.hatena {
      background-color: #008fde;
    }

    &.pocket {
      background-color: #ef4056;
    }

    &.feedly {
      background-color: #2bb24c;
    }

    &:hover {
      opacity: 0.7;
    }
  }
`;

export default ContentFooter;
