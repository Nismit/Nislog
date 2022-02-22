import { Twitter } from "../../Icons";

type Props = {
  userName: string;
};

const TwitterListItem: React.VFC<Props> = ({ userName }) => (
  <a
    title="Twitter Profile"
    href={`https://twitter.com/${userName}`}
    target="_blank"
    rel="noopener noreferrer"
  >
    <Twitter />
  </a>
);

export default TwitterListItem;
