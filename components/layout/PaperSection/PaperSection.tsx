// import { FC, ReactNode, useState, useEffect, useMemo, useRef } from 'react';
import { Box, BoxProps } from '@chakra-ui/react';
import { styledMediaQueries as mq } from '../../../context/theme';

type ShadowSpreadType = 'sm' | 'md' | 'lg';
type PropTypes = BoxProps & {
  shadowSpread?: ShadowSpreadType;
  overTheFold?: boolean;
};
export const PaperSection = ({
  sx,
  shadowSpread = 'md',
  overTheFold = false,
  children,
  ...delegatedProps
}: PropTypes) => (
  <Box
    sx={mq({
      label: 'PaperSection',
      mobileAndUp: {
        position: 'relative',
        backgroundColor: 'white',
        borderRadius: 'var(--chakra-radii-3xl)',
        padding: 'var(--s-32)',
        marginTop: overTheFold ? '-64px' : '24px',
        boxShadow: getShadow(shadowSpread),
      },
      tabletLargeAndUp: {
        padding: 'var(--s-48)',
      },
    })}
    {...delegatedProps}
  >
    {children}
  </Box>
);

function getShadow(spread: ShadowSpreadType) {
  switch (spread) {
    case 'md':
      return '0 4px 15px hsl(215, 60%, 80%, 0.6)';
    case 'lg':
      return '0 8px 32px hsl(215, 60%, 80%, 0.8)';
    case 'sm':
    default:
      return '0 2px 10px hsl(215, 60%, 80%, 0.5)';
  }
}
