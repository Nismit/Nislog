import styled from "@emotion/styled";
import Image from "next/image";

type Props = {
  imagePath: string;
};

const AuthorImage: React.FC<Props> = ({ imagePath }) => (
  <_AuthorImage>
    <Image src={imagePath} width="165" height="165" alt="Author" />
  </_AuthorImage>
);

const _AuthorImage = styled.div`
  text-align: center;

  img {
    clip-path: polygon(50% 0, 100% 25%, 100% 75%, 50% 100%, 0 75%, 0 25%);
  }

  @media screen and (min-width: 48em) {
    text-align: left;
  }
`;

export default AuthorImage;
