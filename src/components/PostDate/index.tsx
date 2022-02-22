import styled from "@emotion/styled";
import { ReloadOutline, Calendar } from "../Icons";

type Props = {
  publishDate: string;
  lastModifiedDate?: string;
  withoutIcon?: boolean;
};

const PostDate: React.FC<Props> = ({
  publishDate,
  lastModifiedDate,
  withoutIcon,
}) => {
  const lastEditDate = lastModifiedDate ? lastModifiedDate : publishDate;
  const convertedDate = new Date(lastEditDate);
  const formattedDate = convertedDate.toLocaleDateString("ja-JP", {
    year: "numeric",
    month: "2-digit",
    day: "2-digit",
  });

  return (
    <_PostDate>
      <time dateTime={lastEditDate}>
        {!withoutIcon && (
          <>
            <span className="post__date__icon">
              {lastModifiedDate ? <ReloadOutline /> : <Calendar />}
            </span>
            &nbsp;
          </>
        )}
        {formattedDate}
      </time>
    </_PostDate>
  );
};

const _PostDate = styled.p`
  margin: 0;
  font-size: 0.9rem;

  .post__date__icon {
    width: 18px;
    height: 18px;
    display: inline-block;
    vertical-align: text-bottom;

    svg {
      vertical-align: top;
      fill: currentcolor;
      stroke: currentcolor;
    }

    .ionicon-stroke-width {
      stroke-width: 32px;
    }

    .ionicon-fill-none {
      fill: none;
    }
  }
`;

export default PostDate;
