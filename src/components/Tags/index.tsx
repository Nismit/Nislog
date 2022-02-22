import styled from "@emotion/styled";

type Props = {
  data: string[];
};

const Tags: React.FC<Props> = ({ data }) => (
  <_Tags>
    <ul>
      <li>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="ionicon s-ion-icon"
          viewBox="0 0 512 512"
        >
          <path
            d="M403.29 32H280.36a14.46 14.46 0 00-10.2 4.2L24.4 281.9a28.85 28.85 0 000 40.7l117 117a28.86 28.86 0 0040.71 0L427.8 194a14.46 14.46 0 004.2-10.2v-123A28.66 28.66 0 00403.29 32z"
            strokeLinecap="round"
            strokeLinejoin="round"
            className="ionicon-fill-none ionicon-stroke-width"
          ></path>
          <path d="M352 144a32 32 0 1132-32 32 32 0 01-32 32z"></path>
          <path
            d="M230 480l262-262a13.81 13.81 0 004-10V80"
            strokeLinecap="round"
            strokeLinejoin="round"
            className="ionicon-fill-none ionicon-stroke-width"
          ></path>
        </svg>
      </li>

      {data.map((item: string, i: number) => {
        return (
          <li className="article__tags__item" key={i}>
            <a href={`https://blog.nismit.me/tags/${item}/`}>{item}</a>
          </li>
        );
      })}
    </ul>
  </_Tags>
);

const _Tags = styled.div`
  margin-top: 2rem;
  text-align: right;

  ul {
    padding-left: 0;
    list-style-type: none;

    li:first-of-type {
      display: inline-block;
    }

    svg {
      width: 20px;
      height: 20px;
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

  .article__tags__item {
    display: inline-block;
    margin-left: 0.3rem;
    padding-left: 0.2em;
    padding-right: 0.5em;

    a {
      display: inline-block;
      text-decoration: none;
      text-transform: capitalize;
      padding: 1px 7px;
      border-radius: 6px;
      border: 1px solid var(--main-border-color);
    }
  }
`;

export default Tags;
