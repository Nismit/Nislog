import type { FC } from "hono/jsx";
import { Github } from "../../Icons";

type Props = {
  userName: string;
};

export const GithubListItem: FC<Props> = ({ userName }) => (
  <a
    title="GitHub Profile"
    href={`https://github.com/${userName}`}
    target="_blank"
    rel="noopener noreferrer"
  >
    <Github />
  </a>
);
