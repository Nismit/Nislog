import Image from 'next/image';
import PostDate from './PostDate';
import styled from "@emotion/styled";

type Props = {
  title: string,
  date: string,
  lastmod?: string,
  eyecatch?: string
}

const ContentHeader: React.FC<Props> = ({ title, date, lastmod, eyecatch }) => {
  return (
    <_ContentHeader>
      <PostDate publishDate={date} lastModifiedDate={lastmod ?? null} />

      <h1>{title}</h1>

      {eyecatch && 
        <div>
          <Image src={eyecatch} alt={title} width="688" height="360" />
        </div>
      }
    </_ContentHeader>
  )
}

const _ContentHeader = styled.section`
  h1 {
    font-size: 1.6rem;
    margin-bottom: .5em;
  }

  img {
    width: 100%;
    height: auto;
  }
`;

export default ContentHeader;