// import { SpacingGetterType, FontSizeGetterType } from '../../../types';
import { SPACINGS } from './theme.spacings';
import { FONT_SIZES } from './theme.fontSizes';
// import { COLORS } from './theme.colors';
import { BREAKPOINTS } from './theme.breakpoints';
import { createBreakpoints } from '@chakra-ui/theme-tools';
import { COLORS } from '.';

// const getFontSize: FontSizeGetterType = (size) => FONT_SIZES[`${size}`];
// const getSpacing: SpacingGetterType = (size) => SPACINGS[`${size}`];

const breakpoints = createBreakpoints({
  sm: `${BREAKPOINTS.tabletMin / 16}rem`,
  md: `${BREAKPOINTS.tabletLargeMin / 16}rem`,
  lg: `${BREAKPOINTS.laptopMin / 16}rem`,
  xl: `${BREAKPOINTS.desktopMin / 16}rem`,
  '2xl': `${BREAKPOINTS.DesktopLargeMin / 16}rem`
});

const fontSizes = {
  xs: FONT_SIZES['12'],
  sm: FONT_SIZES['14'],
  md: FONT_SIZES['16'],
  lg: FONT_SIZES['18'],
  xl: FONT_SIZES['20'],
  '2xl': FONT_SIZES['24'],
  '3xl': FONT_SIZES['30'],
  '4xl': FONT_SIZES['36'],
  '5xl': FONT_SIZES['48'],
  '6xl': FONT_SIZES['60'],
  '7xl': FONT_SIZES['72'],
  '8xl': FONT_SIZES['96'],
  '9xl': FONT_SIZES['128']
};

const fonts = {
  body: 'var(--font-poppins)',
  heading: 'var(--font-poppins)',
  mono: 'Menlo, monospace'
};

// 2. Call `extendTheme` and pass your custom values
const baseTheme = {
  breakpoints,
  fonts,
  fontSizes
  // spacing: getSpacing,
  // text: getFontSize
};
export { baseTheme };
