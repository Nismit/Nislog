import type { FC } from "hono/jsx";
import { Twitter } from "../../Icons";

type Props = {
  userName: string;
};

export const TwitterListItem: FC<Props> = ({ userName }) => (
  <a
    title="Twitter Profile"
    href={`https://twitter.com/${userName}`}
    target="_blank"
    rel="noopener noreferrer"
  >
    <Twitter />
  </a>
);
