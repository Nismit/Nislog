import { Github } from "../../Icons";

type Props = {
  userName: string;
};

const GithubListItem: React.FC<Props> = ({ userName }) => (
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
