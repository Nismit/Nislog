import Link from "next/link";
import styled from "@emotion/styled";
import PostDate from "../PostDate";
import PostType from "../../../types/post";

type Props = {
  post: PostType;
};

const Post: React.FC<Props> = ({ post }) => {
  const { slug, title, date, lastmod, description } = post;

  return (
    <_Post>
      <Link href={`/${slug}`} className="post__link" title={title}>
        <h1 className="post__title">{title}</h1>
        <p className="post__desc">{description}</p>
        <PostDate publishDate={date} lastModifiedDate={lastmod} />
      </Link>
    </_Post>
  );
};

const _Post = styled.article`
  .post__link {
    display: block;
    padding: 1.3rem 0;
    text-decoration: none;
    color: var(--main-font-color);
    border-bottom: 1px solid var(--main-border-color);
    -webkit-transition: all 0.35s;
    transition: all 0.35s;

    &:hover {
      opacity: 0.8;
      color: var(--secondly-link-color);
    }
  }

  .post__title {
    font-size: 1.4rem;
    margin-bottom: 1rem;
  }

  .post__desc {
    margin-top: 0.5em;
    margin-bottom: 0.5em;
  }
`;

export default Post;
