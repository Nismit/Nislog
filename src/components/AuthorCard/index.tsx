import styled from "@emotion/styled";
import AuthorImage from "./AuthorImage";
import AuthorDescription from "./AuthorDescription";

type Props = {
  authorImagePath?: string;
};

const AuthorCard: React.VFC<Props> = ({ authorImagePath }) => (
  <_AuthorCard className="author">
    <div className="author__picture--wrapper">
      <AuthorImage
        imagePath={
          authorImagePath ??
          `${process.env.NEXT_PUBLIC_BASE_URL}/images/profile.png`
        }
      />
    </div>
    <div>
      <AuthorDescription
        name="Michinobu Nishimoto"
        description="記事を書いてる人:
            日本のWeb制作会社に約2年半フロントエンドとして働いた後、カナダのバンクーバーで語学学校->専門学校->Web制作会社にフロントエンドとして就職。
            現在は現地のスタートアップでフロントエンドに従事している。"
        detailLink="/about"
      />
    </div>
  </_AuthorCard>
);

const _AuthorCard = styled.section`
  padding: 1rem;
  margin-top: 3rem;
  border: 1px solid var(--main-border-color);

  @media screen and (min-width: 48em) {
    display: flex;
    & > div:nth-of-type(1) {
      flex-grow: 2;
      flex-basis: 80%;
    }
  }
`;

export default AuthorCard;
