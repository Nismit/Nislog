import styled from "@emotion/styled";

type Props = {
  children: React.ReactNode;
};

const Layout: React.FC<Props> = ({ children }) => <_Layout>{children}</_Layout>;

const _Layout = styled.main`
  display: grid;
  grid-template-columns: 1fr min(69ch, calc(100% - 2rem)) 1fr;
  grid-column-gap: 1rem;

  > * {
    grid-column: 2;
  }

  .full-bleed {
    width: 100%;
    grid-column: 1 / 4;
  }
`;

export default Layout;
