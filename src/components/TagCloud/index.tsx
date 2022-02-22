import styled from "@emotion/styled";

type Props = {
  tags: Array<string>;
};

const TagCloud: React.VFC<Props> = ({ tags }) => (
  <_TagCloud>
    <h2 className="h4 tagCloud__title">Tags</h2>

    <ul className="tagCloud__list" role="navigation">
      {tags.map((tag, i) => {
        return (
          <li className="tagCloud__list__item" key={i}>
            <a
              href={`${process.env.NEXT_PUBLIC_BASE_URL}/tags/${tag}`}
              className="tagCloud__link"
            >
              {tag}
            </a>
          </li>
        );
      })}
    </ul>
  </_TagCloud>
);

const _TagCloud = styled.section`
  margin: 3rem 0 2rem;

  .tagCloud__title {
    margin-bottom: 0.5rem;
  }

  .tagCloud__list {
    padding-left: 0;
    list-style-type: none;

    &__item {
      display: inline-block;
      margin: 0.3rem 0.1rem;
    }
  }

  .tagCloud__link {
    display: inline-block;
    padding: 0.4rem 0.8rem;
    border: 2px solid var(--main-border-color);
    font-size: 0.9rem;
    text-decoration: none;
    position: relative;
    outline: none;
    -webkit-transition: all 0.2s;
    transition: all 0.2s;
    text-transform: capitalize;
    color: var(--cta);

    &:after,
    &:before {
      content: "";
      position: absolute;
      z-index: 2;
      width: 0;
      height: 0;
      border: 2px solid transparent;
      -webkit-box-sizing: content-box;
      box-sizing: content-box;
    }

    &:before {
      top: -2px;
      left: -2px;
    }

    &:after {
      bottom: -2px;
      right: -2px;
    }

    &:hover {
      text-decoration: none;
      color: var(--secondly);

      &::before,
      &::after {
        width: 100%;
        height: 100%;
        transition: height 0.3s, width 0.3s 0.3s;
      }

      &::before {
        border-bottom-color: var(--secondly);
        border-left-color: var(--secondly);
      }

      &::after {
        border-top-color: var(--secondly);
        border-right-color: var(--secondly);
      }
    }
  }
`;

export default TagCloud;
