import { css } from "hono/css";
import type { FC } from "hono/jsx";
import { ASSETS_PREFIX_PATH } from "../../consts";
import { AuthorImage } from "./AuthorImage";
import { AuthorDescription } from "./AuthorDescription";

const authorCardClass = css`
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

type Props = {
  authorImagePath?: string;
};

export const AuthorCard: FC<Props> = ({ authorImagePath }) => (
  <section class={authorCardClass}>
    <div className="author__picture--wrapper">
      <AuthorImage
        imagePath={
          authorImagePath ?? `${ASSETS_PREFIX_PATH}/images/profile.png`
        }
      />
    </div>
    <div>
      <AuthorDescription
        name="Michinobu Nishimoto"
        description="記事を書いてる人: 日本とカナダのWeb制作会社で数年間の経験を積んだ後、カナダのスタートアップでフロントエンドエンジニアとしてWebアプリケーションの開発をしている。"
        detailLink="/about"
      />
    </div>
  </section>
);
