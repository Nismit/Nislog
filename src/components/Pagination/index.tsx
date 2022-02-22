import Link from "next/link";
import styled from "@emotion/styled";

type Props = {
  totalCounts: number;
  currentPageNumber?: number;
};

const MAX_DISPLAY_ITEM = 5;

const Pagination: React.FC<Props> = ({ totalCounts, currentPageNumber }) => {
  let links = [];

  // set link number (currently, 5)

  for (let i = 1; i < totalCounts / MAX_DISPLAY_ITEM; i++) {
    let dynamicClass = "pagination__item";
    if (!currentPageNumber && i === 1) {
      dynamicClass += " active";
    }

    if (i == currentPageNumber) {
      dynamicClass += " active";
    }

    links.push(
      <li className={dynamicClass} key={i}>
        <Link href={`${process.env.NEXT_PUBLIC_BASE_URL}/page/${i}`}>
          <a className="pagination__link">{i}</a>
        </Link>
      </li>
    );
  }

  return (
    <nav role="navigation">
      <_Pagination>{links}</_Pagination>
    </nav>
  );
};

const _Pagination = styled.ul`
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

export default Pagination;
