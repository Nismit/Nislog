import { css } from "hono/css";
import type { FC } from "hono/jsx";

const postDateClass = css`
  margin: 0;
  font-size: 0.9rem;
  width: 80px;
  font-weight: 400;

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
};

export const PostDate: FC<Props> = ({ publishDate, lastModifiedDate }) => {
  const lastEditDate = lastModifiedDate ? lastModifiedDate : publishDate;
  const convertedDate = new Date(lastEditDate);
  const formattedDate = convertedDate.toLocaleDateString("ja-JP", {
    year: "numeric",
    month: "2-digit",
    day: "2-digit",
  });

  return (
    <p class={postDateClass}>
      <time dateTime={lastEditDate}>{formattedDate}</time>
    </p>
  );
};
