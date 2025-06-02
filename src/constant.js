export const COLORS = {
  primary: "254deg 71% 47%",
  secondary: "157deg 85% 37%",
  gradient: {
    from: "254deg 75% 52%",
    to: "254deg 73% 43%",
  },
  white: "0deg 0% 97%",
  accents: {
    private: "254deg 71% 47%",
    public: "187deg 89% 58%",
    team: "35deg 100% 64%",
    mined: "144deg 64% 50%",
    airdrop: "14deg 100% 64%",
    marketing: "263deg 99% 67%",
    treasury: "222deg 100% 50%",
  },
  bg: {
    dark: "240deg 13% 6%",
    light: "0deg 0% 96%",
  },
  text: {
    light: "210deg 17% 55%",
    dark: "0deg 0% 27%",
  },
  outline: "240deg 15% 10%",
  black: "0deg 0% 13%",
};

export const WEIGHTS = {
  normal: 400,
  medium: 500,
  bold: 700,
  black: 900,
};

export const BREAKPOINTS = {
  phone: 600,
  tablet: 950,
  laptop: 1300,
};

export const QUERIES = {
  phoneAndSmaller: `(max-width:${BREAKPOINTS.phone / 16}rem)`,
  tabletAndSmaller: `(max-width:${BREAKPOINTS.tablet / 16}rem)`,
  laptopAndSmaller: `(max-width:${BREAKPOINTS.laptop / 16}rem)`,
};

export const FONT_SIZES = {
  small: `clamp(0.75rem, 0.571rem + 0.476vw, 1rem)`,
  body: `clamp(1rem, 0.911rem + 0.238vw, 1.125rem)`,
  h1: `clamp(2.5rem, 1.429rem + 2.857vw, 4rem)`,
  h2: `clamp(2rem, 0.929rem + 2.857vw, 3.5rem)`,
  h3: `clamp(1.5rem, 0.429rem + 2.857vw, 3rem)`,
  h4: `clamp(1.125rem, 0.143rem + 2.619vw, 2.5rem)`,
  h5: `clamp(0.625rem, 0rem + 1.667vw, 1.5rem)`,
  h6: `clamp(0.625rem, 0rem + 1.667vw, 1.5rem)`,
  logo: `clamp(1.5rem, 1.009rem + 1.31vw, 2.188rem)`,
};

export const SPACING = {
  padding: {
    top: 74,
    bottom: 74,
    left: 32,
    right: 32,
  },
};
