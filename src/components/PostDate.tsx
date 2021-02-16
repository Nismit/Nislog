import styled from "@emotion/styled";

type Props = {
    publishDate: string, 
    lastModifiedDate: string | null
}

const PostDate: React.FC<Props> = ({ publishDate, lastModifiedDate = null }) => {
    const isModified = lastModifiedDate !== null ? true : false;
    const lastEditDate = lastModifiedDate !== null ? lastModifiedDate : publishDate;
    const convertedDate = new Date(lastEditDate);
    const dateOption = { year: 'numeric', month: '2-digit', day: '2-digit' }
    const formattedDate = convertedDate.toLocaleDateString('ja-JP', dateOption);

    return (
        <_PostDate>
            <time dateTime={lastEditDate}>
                <span className="post__date__icon">
                    {isModified ? 
                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512">
                            <path d="M400 148l-21.12-24.57A191.43 191.43 0 00240 64C134 64 48 150 48 256s86 192 192 192a192.09 192.09 0 00181.07-128" strokeLinecap="round" strokeMiterlimit="10" className="ionicon-fill-none ionicon-stroke-width"></path>
                            <path d="M464 97.42V208a16 16 0 01-16 16H337.42c-14.26 0-21.4-17.23-11.32-27.31L436.69 86.1C446.77 76 464 83.16 464 97.42z"></path>
                        </svg>
                    :
                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512">
                            <rect x="48" y="80" width="416" height="384" rx="48" ry="48" strokeLinejoin="round" className="ionicon-fill-none ionicon-stroke-width"></rect>
                            <path d="M397.82 80H114.18C77.69 80 48 110.15 48 147.2V208h16c0-16 16-32 32-32h320c16 0 32 16 32 32h16v-60.8c0-37.05-29.69-67.2-66.18-67.2z"></path>
                            <circle cx="296" cy="232" r="24"></circle>
                            <circle cx="376" cy="232" r="24"></circle>
                            <circle cx="296" cy="312" r="24"></circle>
                            <circle cx="376" cy="312" r="24"></circle>
                            <circle cx="136" cy="312" r="24"></circle>
                            <circle cx="216" cy="312" r="24"></circle>
                            <circle cx="136" cy="392" r="24"></circle>
                            <circle cx="216" cy="392" r="24"></circle>
                            <circle cx="296" cy="392" r="24"></circle>
                            <path strokeLinecap="round" strokeLinejoin="round" d="M128 48v32M384 48v32" className="ionicon-fill-none ionicon-stroke-width"></path>
                        </svg>
                    }
                </span>
                &nbsp;{formattedDate}
            </time>
        </_PostDate>
    )
}

const _PostDate = styled.p`
    margin: 0;
    font-size: .9rem;

    .post__date__icon {
        width: 18px;
        height: 18px;
        display: inline-block;
        vertical-align: text-bottom;

        svg {
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
`;

export default PostDate;