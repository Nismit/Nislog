import { css, keyframes } from "hono/css";
import { useState, useEffect, useCallback } from "hono/jsx";

const COLOR_THEME_KEY = "colorTheme";

const THEME_COLORS = {
  LIGHT: "light",
  DARK: "dark",
} as const;

type THEME_TYPE = (typeof THEME_COLORS)[keyof typeof THEME_COLORS];

const colorToggleClass = css`
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

const spinAnimation = keyframes`
  100% {
    transform: rotate(360deg);
  }
`;

const loaderClass = css`
  transform-origin: center;
  animation: ${spinAnimation} 0.75s infinite linear;
`;

export default function ColorToggle() {
  const [color, setColor] = useState<THEME_TYPE | undefined>(undefined);

  useEffect(() => {
    const root = window.document.documentElement.className as THEME_TYPE | null;
    setColor(root || THEME_COLORS.DARK);
  }, []);

  const setTheme = useCallback(
    (args) => {
      const value = args as THEME_TYPE;
      const root = window.document.documentElement;
      root.className = "";
      root.classList.add(value);
      localStorage.setItem(COLOR_THEME_KEY, value);
      setColor(value);
    },
    [color]
  );

  if (!color) {
    return (
      <svg
        width="24"
        height="24"
        viewBox="0 0 24 24"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          fill="currentColor"
          d="M10.14,1.16a11,11,0,0,0-9,8.92A1.59,1.59,0,0,0,2.46,12,1.52,1.52,0,0,0,4.11,10.7a8,8,0,0,1,6.66-6.61A1.42,1.42,0,0,0,12,2.69h0A1.57,1.57,0,0,0,10.14,1.16Z"
          class={loaderClass}
        />
      </svg>
    );
  }

  return (
    <button
      class={colorToggleClass}
      title={`Activate ${color === THEME_COLORS.LIGHT ? "dark" : "light"} mode`}
      onClick={() =>
        setTheme(
          color === THEME_COLORS.LIGHT ? THEME_COLORS.DARK : THEME_COLORS.LIGHT
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
        className={color ?? THEME_COLORS.DARK}
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
    </button>
  );
}
