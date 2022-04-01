import { Github } from "../../Icons";

type Props = {
  userName: string;
};

const GithubListItem: React.VFC<Props> = ({ userName }) => (
  <a
    title="GitHub Profile"
    href={`https://github.com/${userName}`}
    target="_blank"
    rel="noopener noreferrer"
  >
    <Github />
  </a>
);

export default GithubListItem;
