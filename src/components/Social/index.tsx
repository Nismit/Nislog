import { SocialList, SocialType } from "../../../types/social";
import GithubListItem from "./components/GithubListItem";
import LinkedinListItem from "./components/LinkedinListItem";
import TwitterListItem from "./components/TwitterListItem";
import RssListItem from "./components/RssListItem";

type Props = {
  items: Array<{ type: SocialType; name: string }>;
};

const SocialMapping = {
  [SocialList.GITHUB]: GithubListItem,
  [SocialList.LINKEDIN]: LinkedinListItem,
  [SocialList.TWITTER]: TwitterListItem,
  [SocialList.RSS]: RssListItem,
};

const Social: React.FC<Props> = ({ items }) => {
  if (items.length <= 0) return <></>;

  return (
    <>
      {items.map((item, i) => {
        const Comp = SocialMapping[item.type];
        return (
          <div key={i}>
            <Comp userName={item.name} />
          </div>
        );
      })}
    </>
  );
};

export default Social;
