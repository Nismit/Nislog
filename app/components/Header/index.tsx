import { css } from "hono/css";
import type { FC } from "hono/jsx";
import { Logo } from "../Icons";
import ColorToggle from "../../islands/ColorToggle";

const headerClass = css`
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin-top: 2.7rem;
  margin-bottom: 2.7rem;

  .logoLink {
    line-height: 1;

    & > svg {
      color: var(--logo-color);
    }
  }

  .subMenu {
    display: inline-flex;
    gap: 1rem;
  }
`;

export const Header: FC = () => (
  <header class={headerClass}>
    <a href="/" className="logoLink" title="NISLOG">
      <Logo />
    </a>
    <div className="subMenu">
      <ColorToggle />
      <a href="/about" title="About">
        About
      </a>
    </div>
  </header>
);
