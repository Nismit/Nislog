import { css } from "hono/css";
import type { FC } from "hono/jsx";
import { SocialList } from "../../types/social";
import { Social } from "../Social";

export const Footer: FC = () => (
  <footer class={footerClass}>
    <div class={socialContainerClass}>
      <Social
        items={[
          { type: SocialList.RSS, name: "rss" },
          { type: SocialList.TWITTER, name: "nismit_" },
          { type: SocialList.GITHUB, name: "Nismit" },
          { type: SocialList.LINKEDIN, name: "nismit" },
        ]}
      />
    </div>
    <p className="copyright">© 2017 - {new Date().getFullYear()} NISLOG</p>
  </footer>
);

const footerClass = css`
  display: flex;
  flex-direction: column;
  gap: 0.6rem;
  padding-top: 1.5rem;
  padding-bottom: 1.5rem;

  .copyright {
    font-size: 0.8rem;
    text-align: center;
  }
`;

const socialContainerClass = css`
  display: flex;
  gap: 1.5rem;
  justify-content: center;

  & > div {
    width: 24px;
    height: 24px;
  }

  a {
    display: block;
    transition: all 0.35s;
    color: var(--primary);
    line-height: 1;

    &:hover,
    &:active {
      opacity: 0.6;
    }

    &:focus {
      outline: 1px solid var(--primary);
    }
  }
`;
