import { useContext } from "react";
import styled from "@emotion/styled";
import { THEME_COLORS, ThemeContext } from "../ThemeProvider";

const ColorToggle: React.FC = () => {
  const { colorMode, setColorMode } = useContext(ThemeContext);

  return (
    <_ColorToggle
      title={`Activate ${
        colorMode === THEME_COLORS.LIGHT ? "dark" : "light"
      } mode`}
      onClick={() =>
        setColorMode(
          colorMode === THEME_COLORS.LIGHT
            ? THEME_COLORS.DARK
            : THEME_COLORS.LIGHT
        )
      }
    >
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="24"
        height="24"
        viewBox="0 0 24 24"
        fill="none"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
        stroke="currentColor"
        className={colorMode}
      >
        <mask id="moonMaskCircle">
          <rect x="0" y="0" width="100%" height="100%" fill="#fff" />
          <circle
            cx="12"
            cy="4"
            r="9"
            fill="currentColor"
            className="moonMask"
          />
        </mask>

        <circle
          cx="12"
          cy="12"
          r="9"
          fill="currentColor"
          mask="url(#moonMaskCircle)"
          className="circle"
        />
        <g stroke="currentColor" className="sunLight">
          <line x1="12" y1="1" x2="12" y2="3" />
          <line x1="12" y1="21" x2="12" y2="23" />
          <line x1="4.22" y1="4.22" x2="5.64" y2="5.64" />
          <line x1="18.36" y1="18.36" x2="19.78" y2="19.78" />
          <line x1="1" y1="12" x2="3" y2="12" />
          <line x1="21" y1="12" x2="23" y2="12" />
          <line x1="4.22" y1="19.78" x2="5.64" y2="18.36" />
          <line x1="18.36" y1="5.64" x2="19.78" y2="4.22" />
        </g>
      </svg>
    </_ColorToggle>
  );
};

const _ColorToggle = styled.button`
  display: flex;
  align-items: center;
  background: none;
  border: none;
  box-shadow: none;
  cursor: pointer;

  svg {
    color: var(--primary);
    transition: all 400ms cubic-bezier(0.05, 0.77, 0.97, 0.77);
  }

  svg.dark {
    transform: rotate(40deg);

    .moonMask {
      // should be black for masking
      color: black;
    }

    .sunLight {
      opacity: 0;
    }
  }

  svg.light {
    transform: rotate(90deg);

    .moonMask {
      display: none;
    }

    .circle {
      transform: scale(0.5);
      transform-origin: center center;
    }
  }
`;

export default ColorToggle;
