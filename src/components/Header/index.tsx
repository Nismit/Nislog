import styled from "@emotion/styled";
import Link from "next/link";
import { Logo } from "../Icons";
import ColorToggle from "../ColorToggle";

const Header: React.FC = () => (
  <_Header>
    <Link href="/" className="logoLink" title="NISLOG">
      <Logo />
    </Link>
    <div className="subMenu">
      <ColorToggle />
      <Link href="/about" title="About">
        About
      </Link>
    </div>
  </_Header>
);

const _Header = styled.header`
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

export default Header;
