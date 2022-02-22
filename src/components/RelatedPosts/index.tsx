import styled from "@emotion/styled";
import PostType from "../../../types/post";
import RelatedPostItem from "./RelatedPostItem";

type Props = {
  posts: PostType[];
};

const RelatedPosts: React.VFC<Props> = ({ posts }) => {
  const sliced = posts.slice(0, 5);

  return (
    <_RelatedPosts>
      <h2 className="h4">See Also</h2>

      <ul>
        {sliced.map((postData, index) => (
          <li className="related-articles--container" key={index}>
            <RelatedPostItem post={postData} />
          </li>
        ))}
      </ul>
    </_RelatedPosts>
  );
};

const _RelatedPosts = styled.section`
  margin-top: 3rem;
  margin-bottom: 2rem;

  ul {
    padding-left: 0;
    list-style: none;
  }
`;

export default RelatedPosts;
