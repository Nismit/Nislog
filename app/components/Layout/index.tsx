import { css } from "hono/css";
import type { FC, PropsWithChildren } from "hono/jsx";

const layoutClass = css`
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

export const Layout: FC<PropsWithChildren> = ({ children }) => (
  <main class={layoutClass}>{children}</main>
);
