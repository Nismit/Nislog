import styled from "@emotion/styled";

const Footer: React.FC = () => {
    const currentYear = new Date().getFullYear();

    return (
        <_Footer>
            <ul className="footer__social">
                <li className="footer__social__item">
                    <a href={`${process.env.NEXT_PUBLIC_BASE_URL}/feed.xml`} rel="alternate">
                        <svg className="icon -small"><use xlinkHref="#icon-feed"></use></svg>
                    </a>
                </li>
                <li className="footer__social__item">
                    <a href="https://twitter.com/nismit_" target="_blank" rel="noopener noreferrer">
                        <svg className="icon -small"><use xlinkHref="#icon-twitter"></use></svg>
                    </a>
                </li>
                <li className="footer__social__item">
                    <svg className="icon -small -heart"><use xlinkHref="#icon-heart"></use></svg>
                </li>
                <li className="footer__social__item">
                    <a href="https://github.com/Nismit" target="_blank" rel="noopener noreferrer">
                        <svg className="icon -small"><use xlinkHref="#icon-github"></use></svg>
                    </a>
                </li>
                <li className="footer__social__item">
                    <a href="https://ca.linkedin.com/in/nismit" target="_blank" rel="noopener noreferrer">
                        <svg className="icon -small"><use xlinkHref="#icon-linkedin"></use></svg>
                    </a>
                </li>
            </ul>

            <p className="copyright">© 2017 - {currentYear} NISLOG</p>
        </_Footer>
    )
}

const _Footer = styled.footer`
    padding-bottom: 1.5rem;

    .footer__social {
        padding-left: 0;
        text-align: center;

        &__item {
            padding: .3rem .8rem;
            display: inline-block;

            a {
                transition: all .35s;
            }

            svg {
                width: 22px;
                height: 22px;
                fill: var(--body-font-color);
            }
        }
    }

    .copyright {
        font-size: .8rem;
        text-align: center;
    }
`;

export default Footer;
