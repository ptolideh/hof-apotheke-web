import { Global, css } from '@emotion/react';
import { FONT_SIZES, SPACINGS, COLORS } from './base';

const BASE_RESET = `
  html, body, div, span, applet, object, iframe, h1, h2, h3, h4, h5, h6, p, blockquote, pre, a, abbr, acronym, address, big, cite, code, del, dfn, em, img, ins, kbd, q, s, samp, small, strike, strong, sub, sup, tt, var, b, u, i, center, dl, dt, dd, ol, ul, li, fieldset, form, label, legend, table, caption, tbody, tfoot, thead, tr, th, td, article, aside, canvas, details, embed, figure, figcaption, footer, header, hgroup, menu, nav, output, ruby, section, summary, time, mark, audio, video {
    margin: 0;
    padding: 0;
    border: 0;
    font-size: 100%;
    vertical-align: baseline;
  }
  /* HTML5 display-role reset for older browsers */
  article, aside, details, figcaption, figure, footer, header, hgroup, menu, nav ,section {
    display: block;
  }
  ol, ul {
    list-style: none;
  }
  blockquote, q {
    quotes: none;
  }
  blockquote:before,
  blockquote:after,
  q:before,
  q:after {
    content: '';
    content: none;
  }
  table {
    border-collapse: collapse;
    border-spacing: 0;
  }
`;

const GlobalStyles = (
  <Global
    styles={css`
      ${BASE_RESET}

      html,
      body,
      #root {
        height: 100%;
      }

      *,
      *:before,
      *:after {
        box-sizing: border-box;
        -webkit-font-smoothing: antialiased;
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
        /* SPACINGS -- Used for: Padding and Margin */
        ${generateCSSVarsFromTokens({ tokenHash: SPACINGS, prefix: 's' })}

        /* FONT SIZES */
				${generateCSSVarsFromTokens({ tokenHash: FONT_SIZES, prefix: 'text' })}

				/* COLOR SET */
        --white: #FFF;
        --hof-colors-red: hsl(1, 67%, 49%);
        --hof-colors-orange: hsl(18, 94%, 93%);
        --hof-colors-blue-dark: hsl(213, 71%, 34%);
        --hof-colors-blue: hsl(208, 99%, 38%);
        --hof-colors-blue-lighter: hsl(196, 73%, 97%);

        --base-gap: var(--s-16);
        ${generateColorVarsFromTokens()}

        /* FONT WEIGHTS */
        --weight-heavy: 900;
        --weight-bold: 700;
        --weight-semibold: 600;
        --weight-reg: 400;

        /* FONT FAMILIES */

        --font-sans-serif: -apple-system, BlinkMacSystemFont, avenir next,
          avenir, segoe ui, helvetica neue, helvetica, Ubuntu, roboto, noto,
          arial, sans-serif;

        --font-serif: Iowan Old Style, Apple Garamond, Baskerville,
          Times New Roman, Droid Serif, Times, Source Serif Pro, serif,
          Apple Color Emoji, Segoe UI Emoji, Segoe UI Symbol;

        --font-lato: 'Lato', var(--font-sans-serif);
        --font-poppins: 'Poppins', var(--font-sans-serif);

        * {
          font-family: var(--font-poppins);
        }

        /* h1,
        h2,
        h3 {
          font-family: var(--font-lato);
        } */

        --transition-short: all 150ms ease;
        --transition-med: all 300ms ease;
      }
    `}
  />
);

interface ICSSVarGeneratorArgs {
  tokenHash: { [key: string]: string };
  prefix: string;
}

function generateCSSVarsFromTokens({
  tokenHash,
  prefix
}: ICSSVarGeneratorArgs) {
  return Object.entries(tokenHash) //
    .map(([key, val]) => `--${prefix}-${key}: ${val};`) //
    .join('');
}

function generateColorVarsFromTokens() {
  return Object.entries(COLORS) //
    .map(([colorKey, colorSet]) => {
      return Object.entries(colorSet)
        .map(([variantKey, colorValue]) => {
          return `--colors-${colorKey}-${variantKey}: ${colorValue};`;
        })
        .join('');
    })
    .join('');
}

export { GlobalStyles };
