import styled from "@emotion/styled";

type Props = {
    tags: [string]
}

const TagCloud = ({ tags }: Props) => {
    return (
        <_TagCloud>
            <h2 className="tagCloud__title">Tags</h2>

            <ul className="tagCloud__list" role="navigation">
                {tags.map((tag, i) => {return (
                    <li className="tagCloud__list__item" key={i}>
                        <a href={`${process.env.NEXT_PUBLIC_BASE_URL}/tags/${tag}`} className="tagCloud__link">{ tag }</a>
                    </li>
                )})}
                
            </ul>
        </_TagCloud>
    )
}

const _TagCloud = styled.section`
    margin: 1.5rem 0 2rem;

    .tagCloud__title {
        margin-bottom: .5rem;
    }

    .tagCloud__list {
        padding-left: 0;
        list-style-type: none;

        &__item {
            display: inline-block;
            margin: .3rem .1rem;
        }
    }

    .tagCloud__link {
        display: inline-block;
        padding: .4rem .8rem;
        border: 2px solid var(--main-border-color);
        font-size: .9rem;
        text-decoration: none;
        position: relative;
        outline: none;
        -webkit-transition: all .2s;
        transition: all .2s;
        text-transform: capitalize;
        color: var(--primary-link-color);

        &:after, &:before {
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
            color: var(--secondly-link-color);

            &::before, &::after {
                width: 100%;
                height: 100%;
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

export default TagCloud;