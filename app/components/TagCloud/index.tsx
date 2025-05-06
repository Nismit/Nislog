import { css } from "hono/css";
import type { FC } from "hono/jsx";
import { getTagColor } from "#/utils/color";

const tagCloudClass = css`
  margin: 3rem 0 2rem;

  .tagCloud__title {
    margin-bottom: 0.5rem;
  }

  .tagCloud__list {
    padding-left: 0;
    list-style-type: none;
  }

  .tagCloud__list__item {
    display: inline-block;
    margin: 0.4rem 0.7rem 0.4rem 0;
  }

  .tagCloud__link {
    display: inline-block;
    padding: 0.1rem 0.3rem;
    font-size: 0.9rem;
    text-decoration: none;
    border-radius: 0.2rem;
    color: var(--primary);
    text-transform: capitalize;
  }
`;

type Props = {
  tags: Array<string>;
};

export const TagCloud: FC<Props> = ({ tags }) => (
  <section class={tagCloudClass}>
    <h2 class="h4 tagCloud__title">Tags</h2>

    <ul class="tagCloud__list" role="navigation">
      {tags.map((tag, i) => {
        return (
          <li class="tagCloud__list__item" key={i}>
            <a
              href={`/tags/${encodeURIComponent(tag)}`}
              class="tagCloud__link"
              style={{ backgroundColor: getTagColor(tag) }}
            >
              {tag}
            </a>
          </li>
        );
      })}
    </ul>
  </section>
);
