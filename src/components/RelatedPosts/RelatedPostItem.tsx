import Image from "next/image";
import Link from "next/link";
import styled from "@emotion/styled";
import PostType from "../../../types/post";
import PostDate from "../PostDate";

type Props = {
  post: PostType;
};

const RelatedPostItem: React.FC<Props> = ({ post }) => (
  <Link href={`${process.env.NEXT_PUBLIC_BASE_URL}/${post.slug}`} passHref>
    <_RelatedPostItem className="related-articles--item">
      <div>
        <Image
          src={post.eyecatch ? `${post.eyecatch}` : `/no-image.jpg`}
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
    </_RelatedPostItem>
  </Link>
);

const _RelatedPostItem = styled.a`
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

export default RelatedPostItem;
