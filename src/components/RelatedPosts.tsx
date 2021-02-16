import styled from "@emotion/styled";
import PostType from '../../types/post';
import RelatedPostItem from './RelatedPostItem';

type Props = {
    posts: PostType[]
}

const RelatedPosts: React.FC<Props> = ({ posts }) => {
    const sliced = posts.slice(0, 5);

    return (
        <_RelatedPosts>
            <h2>See Also</h2>

            <ul>
                { 
                    sliced.map((postData) => {
                        return (
                            <li className="related-articles--container" key={postData.date}>
                                <RelatedPostItem post={postData} />
                            </li>
                        )
                    })
                }
            </ul>
        </_RelatedPosts>
    )
}

const _RelatedPosts = styled.section`
    margin-bottom: 2rem;

    ul {
        padding-left: 0;
        list-style: none;
    }

    .related-articles--item {
        display: flex;
        padding: 1rem;
        margin-bottom: 1rem;
        text-decoration: none;
        border: 1px solid var(--main-border-color);
        -webkit-transition: all .2s;
        transition: all .2s;
        position: relative;

        img {
            width: 130px;
            height: auto;
            margin-right: 1rem;
        }

        time {
            font-size: .8rem;
        }

        &::before, &::after {
            content: "";
            position: absolute;
            z-index: 2;
            width: 0;
            height: 0;
            border: 1px solid transparent;
            box-sizing: content-box;
        }

        &::before {
            top: -1px;
            left: -1px;
        }

        &::after {
            bottom: -1px;
            right: -1px;
        }

        &:hover {
            color: var(--secondly-link-color);
            text-decoration: none;

            &::before, &::after {
                width: 100%;
                height: 100%;
                -webkit-transition: height .3s,width .3s .3s;
                transition: height .3s,width .3s .3s;
            }

            &::before {
                border-bottom-color: var(--secondly-link-color);
                border-left-color: var(--secondly-link-color);
            }

            &::after {
                border-top-color: var(--secondly-link-color);
                border-right-color: var(--secondly-link-color);
            }
        }
    }
`;

export default RelatedPosts;