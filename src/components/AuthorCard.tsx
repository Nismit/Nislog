import styled from "@emotion/styled";

const AuthorCard: React.FC = () => {
    return (
        <_AuthorCard className="author">
            <div className="author__picture--wrapper">
                <svg className="author__picture">
                    <defs>
                        <polygon points="140,112.5 75,150 10,112.5 10,37.5 75,0 140,37.5 " id="shape-hex-polygon"></polygon>
                    </defs>
                    <clipPath id="hex-clip">
                        <use xlinkHref="#shape-hex-polygon" x="0" y="0"></use>
                    </clipPath>
                    
                    <image x="0" y="0" width="150" height="150" xlinkHref={`${process.env.NEXT_PUBLIC_BASE_URL}/images/profile.png`} clipPath="url(#hex-clip)"></image>
                </svg>
            </div>
            <div>
                <div className="author__desc">
                    <h3>Michinobu Nishimoto (<a href="https://twitter.com/nismit_" target="_blank">@nismit_</a>)</h3>

                    <p>記事を書いてる人: 日本のWeb制作会社に約2年半フロントエンドとして働いた後、カナダのバンクーバーで語学学校-&gt;専門学校-&gt;現地のWeb制作会社にフロントエンドとして就職。<br /> 
                    詳しく知りたい方は<a href={`${process.env.NEXT_PUBLIC_BASE_URL}/about`}>こちら</a>へ。</p>

                    <ul className="author__social">
                        <li className="author__social__item">
                            <a href="https://twitter.com/nismit_" target="_blank" rel="noopener noreferrer">
                                <svg 
                                    className="icon -share"
                                    xmlns="http://www.w3.org/2000/svg"
                                    xmlnsXlink="http://www.w3.org/1999/xlink"
                                >
                                    <use xlinkHref="#icon-twitter" />
                                </svg>
                            </a>
                        </li>
                        <li className="author__social__item">
                            <a href="https://github.com/Nismit" target="_blank" rel="noopener noreferrer">
                                <svg 
                                    className="icon -share"
                                    xmlns="http://www.w3.org/2000/svg"
                                    xmlnsXlink="http://www.w3.org/1999/xlink"
                                >
                                    <use xlinkHref="#icon-github" />
                                </svg>
                            </a>
                        </li>
                    </ul>
                </div>
            </div>
        </_AuthorCard>
    )
}

const _AuthorCard = styled.section`
    padding: 1rem;
    margin: 3rem 0 2rem;
    border: 1px solid var(--main-border-color);

    .author__picture {
        width: 150px;
        height: 150px;

        &--wrapper {
            text-align: center;
        }
    }

    .author__desc {
        p {
            line-height: 1.7;
        }
    }

    .author__social {
        padding: 0;
        margin-bottom: 0;

        &__item {
            display: inline-block;
            padding: .5rem .8rem 0 0;

            svg {
                width: 22px;
                height: 22px;
                fill: var(--body-font-color);
            }
        }
    }

    @media screen and (min-width: 48em) {
        display: flex;

        .author__desc {
            padding-left: 1.5rem;
        }
    }
`;

export default AuthorCard;