import type { FC } from "hono/jsx";
import { Linkedin } from "../../Icons";

type Props = {
  userName: string;
};

export const LinkedinListItem: FC<Props> = ({ userName }) => (
  <a
    title="LinkedIn Profile"
    href={`https://ca.linkedin.com/in/${userName}`}
    target="_blank"
    rel="noopener noreferrer"
  >
    <Linkedin />
  </a>
);
