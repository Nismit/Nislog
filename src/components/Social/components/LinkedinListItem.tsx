import { Linkedin } from "../../Icons";

type Props = {
  userName: string;
};

const LinkedinListItem: React.VFC<Props> = ({ userName }) => (
  <a
    title="LinkedIn Profile"
    href={`https://ca.linkedin.com/in/${userName}`}
    target="_blank"
    rel="noopener noreferrer"
  >
    <Linkedin />
  </a>
);

export default LinkedinListItem;
