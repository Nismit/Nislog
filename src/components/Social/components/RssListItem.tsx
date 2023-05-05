import { Rss } from "../../Icons";

const RssListItem: React.FC = () => (
  <a
    title="RSS Feed"
    href={`${process.env.NEXT_PUBLIC_BASE_URL}/feed.xml`}
    rel="alternate"
  >
    <Rss />
  </a>
);

export default RssListItem;
