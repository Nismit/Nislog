import type { FC } from "hono/jsx";
import { Bluesky } from "../../Icons";

type Props = {
  userName: string;
};

export const BlueskyListItem: FC<Props> = ({ userName }) => (
  <a
    title="Bluesky Profile"
    href={`https://bsky.app/profile/${userName}.bsky.social`}
    target="_blank"
    rel="noopener noreferrer"
  >
    <Bluesky />
  </a>
);
