import styled from "@emotion/styled";

type Props = {
    slug: string,
    title: string
}

const ContentFooter: React.FC<Props> = ({ slug, title }) => {
    return (
        <_ContentFooter>
            <ul className="single-share">
                <li className="single-share__item">
                    <a className="single-share__link twitter" href={`https://twitter.com/intent/tweet?url=${slug}&text=${title}&tw_p=tweetbutton`}
                        title="Twitterでシェア"
                        target="_blank"
                        rel="noreferrer"
                    >
                        <svg 
                            className="icon -share"
                            xmlns="http://www.w3.org/2000/svg"
			                xmlnsXlink="http://www.w3.org/1999/xlink"
                        >
                            <use xlinkHref="#icon-twitter" />
                        </svg>
                    </a>
                </li>
                <li className="single-share__item">
                    <a className="single-share__link facebook" href={`https://www.facebook.com/sharer.php?u=${slug}}&t=${title}`} 
                        title="Facebookでシェア" 
                        target="_blank"
                        rel="noreferrer"
                    >
                        <svg 
                            className="icon -share"
                            xmlns="http://www.w3.org/2000/svg"
			                xmlnsXlink="http://www.w3.org/1999/xlink"
                        >
                            <use xlinkHref="#icon-facebook" />
                        </svg>
                    </a>
                </li>
                <li className="single-share__item">
                    <a className="single-share__link hatena" href={`https://b.hatena.ne.jp/entry/${slug}`} 
                        title="はてなブックマークに保存" 
                        target="_blank"
                        rel="noreferrer"
                    >
                        <svg 
                            className="icon -share"
                            xmlns="http://www.w3.org/2000/svg"
			                xmlnsXlink="http://www.w3.org/1999/xlink"
                        >
                            <use xlinkHref="#icon-hatena" />
                        </svg>
                    </a>
                </li>
                <li className="single-share__item">
                    <a className="single-share__link pocket" href={`https://getpocket.com/edit?url=${slug}&title=${title}`} 
                        title="Pocketに保存" 
                        target="_blank"
                        rel="nofollow" 
                    >
                        <svg 
                            className="icon -share"
                            xmlns="http://www.w3.org/2000/svg"
			                xmlnsXlink="http://www.w3.org/1999/xlink"
                        >
                            <use xlinkHref="#icon-get-pocket" />
                        </svg>
                    </a>
                </li>
                <li className="single-share__item">
                    <a className="single-share__link feedly" href="https://feedly.com/i/subscription/feed/https://blog.nismit.me/feed.xml" 
                        title="Feedlyに登録する"
                        target="_blank"
                        rel="nofollow"
                    >
                        <svg 
                            className="icon -share"
                            xmlns="http://www.w3.org/2000/svg"
			                xmlnsXlink="http://www.w3.org/1999/xlink"
                        >
                            <use xlinkHref="#icon-feedly" />
                        </svg>
                    </a>
                </li>
            </ul>
        </_ContentFooter>
    )
}

const _ContentFooter = styled.section`
    ul {
        padding: 0;
        margin: 1rem 0;
        border-top: 3px solid var(--main-border-color);
        border-bottom: 3px solid var(--main-border-color);

        .single-share__item {
            display: inline-block;
            margin-top: .5rem;
            margin-bottom: .5rem;
            margin-left: .6rem;

            &:first-of-type {
                margin-left: 0;
            }

            svg {
                width: 23px;
                height: 23px;
                fill: #fff;
            }
        }

        .single-share__link {
            display: inline-block;
            background-color: var(--main-border-color);
            border-radius: 3px;
            padding: .4rem .55rem;
            -webkit-transition: all .35s;
            transition: all .35s;

            &.twitter {
                background-color: #1da1f2;
            }

            &.facebook {
                background-color: #3b5998;
            }

            &.hatena {
                background-color: #008fde;
            }

            &.pocket {
                background-color: #ef4056;
            }

            &.feedly {
                background-color: #2bb24c;
            }

            &:hover {
                opacity: .7;
            }
        }
    }
`;

export default ContentFooter;