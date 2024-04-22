import type { FC } from "hono/jsx";
import { Rss } from "../../Icons";

export const RssListItem: FC = () => (
  <a title="RSS Feed" href="/feed.xml" rel="alternate">
    <Rss />
  </a>
);
