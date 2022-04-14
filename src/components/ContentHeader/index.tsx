import Image from "next/image";
import styled from "@emotion/styled";
import PostDate from "../PostDate";

type Props = {
  title: string;
  date: string;
  lastmod?: string;
  eyecatch?: string;
};

const ContentHeader: React.FC<Props> = ({ title, date, lastmod, eyecatch }) => (
  <_ContentHeader>
    <PostDate publishDate={date} lastModifiedDate={lastmod} />

    <h1>{title}</h1>

    {eyecatch && (
      <div>
        <Image src={eyecatch} alt={title} width="717" height="370" />
      </div>
    )}
  </_ContentHeader>
);

const _ContentHeader = styled.section`
  h1 {
    font-size: 1.72rem;
    line-height: 1.5;
    margin-top: 0.6rem;
    margin-bottom: 1rem;
  }

  img {
    width: 100%;
    height: auto;
  }
`;

export default ContentHeader;
