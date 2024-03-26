import { css } from "hono/css";
import type { FC } from "hono/jsx";
import PostType from "../../types/post";
import { ASSETS_PREFIX_PATH } from "../../consts";
import { PostDate } from "../PostDate";

const relatedPostItemClass = css`
  display: flex;
  gap: 1rem;
  padding: 1rem;
  margin-bottom: 1rem;
  text-decoration: none;
  border: 1px solid var(--main-border-color);
  -webkit-transition: all 0.2s;
  transition: all 0.2s;
  position: relative;

  > div {
    flex: 2;
  }

  > div:first-of-type {
    width: 100%;
    max-width: 131px;
    flex: 1;
  }

  time {
    font-size: 0.8rem;
  }

  &::before,
  &::after {
    content: "";
    position: absolute;
    z-index: 2;
    width: 0;
    height: 0;
    border: 1px solid transparent;
    box-sizing: content-box;
  }

  &::before {
    top: -1px;
    left: -1px;
  }

  &::after {
    bottom: -1px;
    right: -1px;
  }

  &:hover {
    color: var(--secondly-link-color);
    text-decoration: none;

    &::before,
    &::after {
      width: 100%;
      height: 100%;
      -webkit-transition: height 0.3s, width 0.3s 0.3s;
      transition: height 0.3s, width 0.3s 0.3s;
    }

    &::before {
      border-bottom-color: var(--secondly-link-color);
      border-left-color: var(--secondly-link-color);
    }

    &::after {
      border-top-color: var(--secondly-link-color);
      border-right-color: var(--secondly-link-color);
    }
  }
`;

type Props = {
  post: PostType;
};

export const RelatedPostItem: FC<Props> = ({ post }) => (
  <a href={`/${post.slug}`} title={post.title} className={relatedPostItemClass}>
    <div>
      <img
        src={
          post.eyecatch
            ? `${ASSETS_PREFIX_PATH}${post.eyecatch}`
            : `${ASSETS_PREFIX_PATH}/no-image.jpg`
        }
        width="130"
        height="76"
        alt="thumbnail"
      />
    </div>
    <div>
      <span>{post.title}</span>
      <br />
      <PostDate
        publishDate={post.date}
        lastModifiedDate={post.lastmod}
        withoutIcon
      />
    </div>
  </a>
);
