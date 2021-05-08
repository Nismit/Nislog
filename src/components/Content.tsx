import styled from "@emotion/styled";

type Props = {
    children: JSX.Element
}

const Content: React.FC<Props> = ({ children }) => {
    return (
        <section className="full-bleed">
            <_Content>{children}</_Content>
        </section>
    )
}

const _Content = styled.article`
    display: grid;
    grid-template-columns: 1fr min(69ch, calc(100% - 2rem)) 1fr;
    grid-column-gap: 1rem;

    > * {
        grid-column: 2;
    }

    .full-bleed {
        width: 100%;
        grid-column: 1 / 4;
    }

    // Headline 1-4
    h1 {
        padding-bottom: .10em;
        margin-top: 2em;
        margin-bottom: .8em;
        border-bottom: 4px solid var(--secondly-font-color);
        font-size: 1.5rem;
        line-height: 1.5;
    }

    h2 {
        padding: .25em 0 .25em .45em;
        margin-top: 1em;
        margin-bottom: .8em;
        border-left: 6px solid var(--secondly-font-color);
        font-size: 1.45rem;
        line-height: 1.5;
    }

    h3 {
        margin-top: 1.4em;
        margin-bottom: .8em;
        font-size: 1.36rem;
    }

    h4 {
        margin-top: .5em;
        margin-bottom: .5em;
        font-size: 1.28rem;
    }

    // Typography
    p {
        line-height: 1.7;
        margin-bottom: 1.45rem;
    }

    strong {
        background: linear-gradient(transparent 70%, var(--highlight-color) 70%);
    }

    // Image
    img {
        max-width: 100%;
        vertical-align: bottom;
    }

    // Horizontal Rule
    hr {
        border: 0;

        &:before {
            content: "*\a0\a0\a0*\a0\a0\a0*";
        }
    }

    // Table
    table {
        width: 100%;
        border: 1px solid var(--main-border-color);
        border-collapse: collapse;
        margin: 1.3em 0;

        th, td {
            border: 1px solid var(--main-border-color);
            padding: .3em .5em;
        }
    }

    // Blockquote
    blockquote {
        font-style: italic;
        position: relative;
        margin: 2.5rem 0;
        margin-left: 1rem;
        padding: 0 1rem;
        border-left: 5px solid var(--body-font-color);
    }

    // Code
    code {
        padding: 0.2em 0.4em;
        margin: 0;
        font-size: 90%;
        background-color: var(--code-background-color);
        border-radius: 3px;
    }

    // Pre
    pre {
        padding: 16px;
        overflow: auto;
        font-size: 90%;
        line-height: 1.5;
        background-color: var(--pre-background-color);
        border-radius: 5px;

        > code {
            padding: 0;
            font-size: 100%;
            background-color: transparent;
            border-radius: 0;
        }
    }
`;

export default Content;
