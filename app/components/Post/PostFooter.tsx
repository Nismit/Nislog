import { css } from "hono/css";
import type { FC } from "hono/jsx";
import { BASE_PATH } from "#/consts";
import { Twitter, Hatena, Pocket, Feedly, Bluesky } from "../Icons";

const postFooterClass = css`
  display: flex;
  gap: 1rem;
  margin-top: 2rem;

  svg {
    width: 19px;
    height: 19px;
    color: #fff;
  }

  .single-share__link {
    display: flex;
    align-items: center;
    background-color: var(--main-border-color);
    border-radius: 3px;
    padding: 0.4rem 0.5rem;
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

    &.bluesky {
      background-color: #1185fe;
    }

    &:hover {
      opacity: 0.7;
    }
  }
`;

type Props = {
  slug: string;
  title: string;
};

export const PostFooter: FC<Props> = ({ slug, title }) => (
  <section class={postFooterClass}>
    <a
      className="single-share__link twitter"
      href={`https://twitter.com/intent/tweet?url=${BASE_PATH()}/${slug}&text=${title}&tw_p=tweetbutton`}
      title="Twitterでシェア"
      target="_blank"
      rel="noreferrer"
    >
      <Twitter />
    </a>
    <a
      className="single-share__link bluesky"
      href={`https://bsky.app/intent/compose?text=${title}+%7C+${BASE_PATH()}/${slug}`}
      title="Blueskyでシェア"
      target="_blank"
      rel="noreferrer"
    >
      <Bluesky />
    </a>
    <a
      className="single-share__link hatena"
      href={`https://b.hatena.ne.jp/entry/${BASE_PATH()}/${slug}`}
      title="はてなブックマークに保存"
      target="_blank"
      rel="noreferrer"
    >
      <Hatena />
    </a>
    <a
      className="single-share__link pocket"
      href={`https://getpocket.com/edit?url=${BASE_PATH()}/${slug}&title=${title}`}
      title="Pocketに保存"
      target="_blank"
      rel="nofollow noreferrer"
    >
      <Pocket />
    </a>
    <a
      className="single-share__link feedly"
      href={`https://feedly.com/i/subscription/feed/${BASE_PATH()}/feed.xml`}
      title="Feedlyに登録する"
      target="_blank"
      rel="nofollow noreferrer"
    >
      <Feedly />
    </a>
  </section>
);
