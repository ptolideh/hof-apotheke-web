import { CSSObject, SystemStyleObject } from '@chakra-ui/react';
import {
  ArrayInterpolation,
  CSSProperties,
  FunctionInterpolation,
  Interpolation,
  InterpolationPrimitive
} from '@emotion/serialize';
import emotionStyled from '@emotion/styled';
import { JSXElementConstructor } from 'react';

export const BREAKPOINTS = {
  tabletMin: 550,
  tabletLargeMin: 800,
  laptopMin: 1050,
  desktopMin: 1400,
  DesktopLargeMin: 1920
} as const;

export const QUERIES = {
  tabletAndUp: `(min-width: ${BREAKPOINTS.tabletMin / 16}rem)`,
  tabletLargeAndUp: `(min-width: ${BREAKPOINTS.tabletLargeMin / 16}rem)`,
  laptopAndUp: `(min-width: ${BREAKPOINTS.laptopMin / 16}rem)`,
  desktopAndUp: `(min-width: ${BREAKPOINTS.desktopMin / 16}rem)`,
  desktopLargeAndUp: `(min-width: ${BREAKPOINTS.DesktopLargeMin / 16}rem)`,
  tabletOnly: `
    (min-width: ${BREAKPOINTS.tabletMin / 16}rem) and
    (max-width: ${(BREAKPOINTS.laptopMin - 1) / 16}rem)`
} as const;

type Styles = CSSProperties | null;
type MqKeys = keyof typeof QUERIES | 'mobileAndUp' | 'label';
type MqStyles = {
  [key in MqKeys]?: InterpolationPrimitive;
};

export const withSX = (styles: MqStyles) => ({
  sx: styledMediaQueries(styles)
});

const mqKeys = [
  '_mobileAndUp',
  '_tabletAndUp',
  '_tabletLargeAndUp',
  '_laptopAndUp',
  '_desktopAndUp',
  '_desktopLargeAndUp'
] as const;

type withMqStyles = CSSObject & {
  [key in typeof mqKeys[number]]?: InterpolationPrimitive;
};

export function withMQ(styles: withMqStyles) {
  let sxStyles = styles;
  const keys = Object.keys(styles);
  keys.forEach((key) => {
    const breakpointStyles = styles[key];
    switch (key) {
      case '_mobileAndUp':
        sxStyles = { ...(breakpointStyles as withMqStyles), ...sxStyles };
        break;
      case '_tabletAndUp':
        sxStyles[`@media ${QUERIES.tabletAndUp}`] = breakpointStyles;
        delete sxStyles[`@mobileAndUp`];
        break;
      case '_tabletLargeAndUp':
        sxStyles[`@media ${QUERIES.tabletLargeAndUp}`] = breakpointStyles;
        delete sxStyles[`@tabletLargeAndUp`];
        break;
      case '_laptopAndUp':
        sxStyles[`@media ${QUERIES.laptopAndUp}`] = breakpointStyles;
        delete sxStyles[`@laptopAndUp`];
        break;
      case '_desktopAndUp':
        sxStyles[`@media ${QUERIES.desktopAndUp}`] = breakpointStyles;
        delete sxStyles[`@desktopAndUp`];
        break;
      case '_desktopLargeAndUp':
        sxStyles[`@media ${QUERIES.desktopLargeAndUp}`] = breakpointStyles;
        delete sxStyles[`@desktopLargeAndUp`];
        break;
      default:
        break;
    }
  });
  return sxStyles as any;
}

/* const mqKeys = [
  '_mobileAndUp',
  '_tabletAndUp',
  '_tabletLargeAndUp',
  '_laptopAndUp',
  '_desktopAndUp',
  '_desktopLargeAndUp'
] as const;

type withMqStyles = SystemStyleObject & {
  [key in typeof mqKeys[number]]?: SystemStyleObject;
};

export function withMQ(styles: withMqStyles): SystemStyleObject {
  let sxStyles: SystemStyleObject = styles;
  const keys = Object.keys(styles);
  keys.forEach((key) => {
    const breakpointStyles = styles[key];
    switch (key) {
      case '_mobileAndUp':
        sxStyles = { ...styles[key], ...sxStyles };
        break;
      case '_tabletAndUp':
        sxStyles[`@media ${QUERIES.tabletAndUp}`] = breakpointStyles;
        delete sxStyles[`@mobileAndUp`];
        break;
      case '_tabletLargeAndUp':
        sxStyles[`@media ${QUERIES.tabletLargeAndUp}`] = breakpointStyles;
        delete sxStyles[`@tabletLargeAndUp`];
        break;
      case '_laptopAndUp':
        sxStyles[`@media ${QUERIES.laptopAndUp}`] = breakpointStyles;
        delete sxStyles[`@laptopAndUp`];
        break;
      case '_desktopAndUp':
        sxStyles[`@media ${QUERIES.desktopAndUp}`] = breakpointStyles;
        delete sxStyles[`@desktopAndUp`];
        break;
      case '_desktopLargeAndUp':
        sxStyles[`@media ${QUERIES.desktopLargeAndUp}`] = breakpointStyles;
        delete sxStyles[`@desktopLargeAndUp`];
        break;
      default:
        break;
    }
  });
  return sxStyles;
}
 */
export function styledMediaQueries(styles: MqStyles) {
  let result = {} as any;
  const keys = Object.keys(styles) as MqKeys[];
  keys.forEach((key) => {
    const breakpointStyles = styles[key];
    switch (key) {
      case 'mobileAndUp':
        result = { ...(styles[key] as any), ...result };
        break;
      case 'tabletAndUp':
        result[`@media ${QUERIES.tabletAndUp}`] = breakpointStyles;
        break;
      case 'tabletLargeAndUp':
        result[`@media ${QUERIES.tabletLargeAndUp}`] = breakpointStyles;
        break;
      case 'laptopAndUp':
        result[`@media ${QUERIES.laptopAndUp}`] = breakpointStyles;
      case 'desktopAndUp':
        result[`@media ${QUERIES.desktopAndUp}`] = breakpointStyles;
        break;
      case 'desktopLargeAndUp':
        result[`@media ${QUERIES.desktopLargeAndUp}`] = breakpointStyles;
        break;
      case 'label':
        result['label'] = styles[key];
      default:
        break;
    }
  });
  return result;
}

export function styledQueries(...stylesWithBp: Styles[]) {
  const result = stylesWithBp.map((style, index) => {
    switch (index) {
      case 0:
        return style;
      case 1:
        return { [`@media ${QUERIES.tabletAndUp}`]: style };
      case 2:
        return { [`@media ${QUERIES.tabletLargeAndUp}`]: style };
      case 3:
        return { [`@media ${QUERIES.laptopAndUp}`]: style };
      case 4:
        return { [`@media ${QUERIES.desktopAndUp}`]: style };
      case 5:
        return { [`@media ${QUERIES.desktopLargeAndUp}`]: style };
      default:
        return {};
    }
  }) as any;
  return result;
}
// export function styled(component: any) {
//   return function (...stylesWithBp: (Styles | ((props: any) => Styles[]))[]) {
//     return emotionStyled(component)((props) => {
//       const styles =
//         typeof stylesWithBp[0] === 'function'
//           ? stylesWithBp[0](props)
//           : stylesWithBp;

//       const result = styles.map((style, index) => {
//         switch (index) {
//           case 0:
//             return style;
//           case 1:
//             return { [`@media ${QUERIES.tabletAndUp}`]: style };
//           case 2:
//             return { [`@media ${QUERIES.tabletLargeAndUp}`]: style };
//           case 3:
//             return { [`@media ${QUERIES.laptopAndUp}`]: style };
//           case 4:
//             return { [`@media ${QUERIES.desktopAndUp}`]: style };
//           case 5:
//             return { [`@media ${QUERIES.desktopLargeAndUp}`]: style };
//           default:
//             return {};
//         }
//       }) as any;
//       return result;
//     });
//   };
// }
