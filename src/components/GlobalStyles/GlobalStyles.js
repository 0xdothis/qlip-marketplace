import { createGlobalStyle } from "styled-components/macro";
import { COLORS, FONT_SIZES, SPACING, WEIGHTS } from "../../constant";

const GlobalStyles = createGlobalStyle`
/* http://meyerweb.com/eric/tools/css/reset/
   v2.0 | 20110126
   License: none (public domain)
*/
html, body, div, span, applet, object, iframe,
h1, h2, h3, h4, h5, h6, p, blockquote, pre,
a, abbr, acronym, address, big, cite, code,
del, dfn, em, img, ins, kbd, q, s, samp,
small, strike, strong, sub, sup, tt, var,
b, u, i, center,
dl, dt, dd, ol, ul, li,
fieldset, form, label, legend,
table, caption, tbody, tfoot, thead, tr, th, td,
article, aside, canvas, details, embed,
figure, figcaption, footer, header, hgroup,
menu, nav, output, ruby, section, summary,
time, mark, audio, video {
	margin: 0;
	padding: 0;
	border: 0;
  font-size: 100%;
	vertical-align: baseline;
}
/* HTML5 display-role reset for older browsers */
article, aside, details, figcaption, figure,
footer, header, hgroup, menu, nav, section {
	display: block;
}
ol, ul {
	list-style: none;
}
blockquote, q {
	quotes: none;
}
blockquote:before, blockquote:after,
q:before, q:after {
	content: '';
	content: none;
}
table {
	border-collapse: collapse;
	border-spacing: 0;
}



/* GLOBAL STYLES */
*,
*:before,
*:after {
  box-sizing: border-box;
  line-height: 1.5;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: auto;
}

#root {
  /*
    Create a stacking context, without a z-index.
    This ensures that all portal content (modals and tooltips) will
    float above the app.
  */
  isolation: isolate;
}

html {
/* Colors */
--color-primary: hsl(${COLORS.primary});
--color-text-light: hsl(${COLORS.text.light});
--color-outline: hsl(${COLORS.outline});
--color-text-dark: hsl(${COLORS.text.dark});
--color-secondary: hsl(${COLORS.secondary});
--color-from: hsl(${COLORS.gradient.from});
--color-to: hsl(${COLORS.gradient.to});
--color-white: hsl(${COLORS.white});
--color-black: hsl(${COLORS.black});
--color-private: hsl(${COLORS.accents.private});
--color-public: hsl(${COLORS.accents.public});
--color-team: hsl(${COLORS.accents.team});
--color-mined: hsl(${COLORS.accents.mined});
--color-airdrops: hsl(${COLORS.accents.airdrop});
--color-marketing: hsl(${COLORS.accents.marketing});
--color-treasury: hsl(${COLORS.accents.treasury});
--color-bg-dark: hsl(${COLORS.bg.dark});
--color-bg-light: hsl(${COLORS.bg.light});
--color-overlay: hsl(${COLORS.bg.dark} / 0.3);


/* Font-sizes */
--font-h1: calc(${FONT_SIZES.h1 / 16} * 1rem);
--font-h2: calc(${FONT_SIZES.h2 / 16} * 1rem);
--font-h3: calc(${FONT_SIZES.h3 / 16} * 1rem);
--font-h4: calc(${FONT_SIZES.h4 / 16} * 1rem);
--font-h5: calc(${FONT_SIZES.h5 / 16} * 1rem);
--font-h6: calc(${FONT_SIZES.h6 / 16} * 1rem);
--font-body: calc(${FONT_SIZES.body / 16} * 1rem);
--font-small: calc(${FONT_SIZES.small / 16} * 1rem);

--font-normal: ${WEIGHTS.normal};
--font-medium: ${WEIGHTS.medium};
--font-bold: ${WEIGHTS.bold};
--font-black: ${WEIGHTS.black};

/* Padding */
--spacing-top: calc(${SPACING.padding.top / 16} * 1rem);
--spacing-bottom: calc(${SPACING.padding.bottom / 16} * 1rem);
--spacing-left: calc(${SPACING.padding.left / 16} * 1rem);
--spacing-right: calc(${SPACING.padding.right / 16} * 1rem);

  /*
    Silence the warning about missing Reach Dialog styles
  */
  --reach-dialog: 1;

  /* change scrollbar width */
  scrollbar-width: thin;
}


/* Set up default font for heading and body*/
h1, h2, h3, h4, h5, h6 {
  font-family: 'Gilroy', sans-serif;
  font-weight: var(--font-bold);
}

html, body, #root {
  height: 100%;
  font-weight: var(--font-medium);

}
`;

export default GlobalStyles;
