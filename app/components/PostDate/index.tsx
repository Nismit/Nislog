import { css } from "hono/css";
import type { FC } from "hono/jsx";
import { ReloadOutline, Calendar } from "../Icons";

const postDateClass = css`
  margin: 0;
  font-size: 0.9rem;

  .postDate__icon {
    width: 18px;
    height: 18px;
    display: inline-block;
    margin-right: 0.25rem;
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

type Props = {
  publishDate: string;
  lastModifiedDate?: string;
  withoutIcon?: boolean;
};

export const PostDate: FC<Props> = ({
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
    <p class={postDateClass}>
      <time dateTime={lastEditDate}>
        {!withoutIcon && (
          <span className="postDate__icon">
            {lastModifiedDate ? <ReloadOutline /> : <Calendar />}
          </span>
        )}
        {formattedDate}
      </time>
    </p>
  );
};
