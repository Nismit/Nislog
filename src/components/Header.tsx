import Link from 'next/link';

const Header: React.FC = () => {
  return (
    <header>
      <h1 className="hero__title">
        <Link href="/" passHref>
          <a title="NISLOG">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="80.839"
              height="24.692"
              viewBox="0 0 81 25"
            >
              <path
                d="M80.839 0v24.692h-7.307v-.008l-.007.008L44.099 0h11.367l18.066 15.16V0h7.307zm-26.77 24.692h11.366L36.026.014 36.014 0l-.002.002L36.009 0l-.012.014-17.992 15.098L0 .003v9.538L18.006 24.65l.006-.008L36.011 9.541l18.058 15.151z" 
              ></path>
            </svg>
          </a>
        </Link>
      </h1>
    </header>
  )
}

export default Header;
