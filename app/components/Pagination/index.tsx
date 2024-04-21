import { css } from "hono/css";
import type { FC } from "hono/jsx";
import { MAX_DISPLAY_ITEM } from "#/consts";

const paginationClass = css`
  margin: 3rem 0 1rem;
  padding-left: 0;
  text-align: center;

  .pagination__item {
    display: inline-block;
    margin: 0 0.3rem 0.5rem;
  }

  .pagination__link {
    display: inline-block;
    padding: 0.2em 0.8em;
    text-decoration: none;
    -webkit-transition: all 0.35s;
    transition: all 0.35s;
    border: 2px solid var(--main-border-color);
  }

  .active > .pagination__link,
  .pagination__link:hover {
    color: var(--body-background-color);
    background-color: var(--secondly-link-color);
    border-color: var(--secondly);
  }
`;

type Props = {
  totalCounts: number;
  currentPageNumber?: number;
};

export const Pagination: FC<Props> = ({ totalCounts, currentPageNumber }) => {
  let links = [];

  for (let i = 1; i < Math.ceil(totalCounts / MAX_DISPLAY_ITEM) + 1; i++) {
    let dynamicClass = "pagination__item";
    if (!currentPageNumber && i === 1) {
      dynamicClass += " active";
    }

    if (i == currentPageNumber) {
      dynamicClass += " active";
    }

    links.push(
      <li className={dynamicClass} key={i}>
        <a className="pagination__link" href={i === 1 ? "/" : `/page/${i}`}>
          {i}
        </a>
      </li>
    );
  }

  return (
    <nav role="navigation">
      <ul class={paginationClass}>{links}</ul>
    </nav>
  );
};
