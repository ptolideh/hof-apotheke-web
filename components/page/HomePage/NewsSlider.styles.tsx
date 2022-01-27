import { Box, BoxProps, Grid, GridItem } from '@chakra-ui/react';
import { css } from '@emotion/react';
import styled from '@emotion/styled';
import { QUERIES, withMQ as mq } from '../../../context/theme';
import { SliderStyles } from '../../display/Slider';
import { Paper } from '../../layout/Paper';

export const SliderWrapper = styled(Paper)([
  mq({
    '--slide-width': 'min(100%, var(--s-768))',
    display: 'flex',
    flexDirection: 'column',
    position: 'relative',
    margin: '0 auto',
    padding: 0,
    height: '100%',
    maxWidth: 'var(--slide-width)',
    boxShadow: '0 0 0 transparent',
    borderRadius: 'var(--lg-card-radii)',
    overflow: 'hidden',
    _laptopAndUp: {
      borderRadius:
        'var(--sm-card-radii) var(--lg-card-radii) var(--lg-card-radii) var(--lg-card-radii)',
    },
  }),
  css`
    ${SliderStyles}
  `,
]);

export const Slide = (p: { index: number; children: any }) => (
  <Box
    as="article"
    sx={mq({
      'label': 'NewsSlide',
      display: 'flex !important',
      position: 'relative',
      zIndex: 5 - p.index,
      flexDirection: 'column',
      maxWidth: 'var(--slide-width, 200px)',
      // paddingBottom: 'var(--s-16)',
      // _tabletAndUp: {
      //   paddingBottom: 'var(--s-24)',
      // },
    })}
  >
    {p.children}
  </Box>
);

export const SlideImage = styled.figure({
  width: '100%',
  height: '250px',
  '@supports (aspect-ratio: 1 / 1)': {
    height: 'revert',
    aspectRatio: '7/3',
  },
  '& > div': {
    height: '250px',
    '@supports (aspect-ratio: 1 / 1)': {
      height: 'revert',
      aspectRatio: '7/3',
    },
  },
  'img': {
    width: '100%',
    height: '100%',
    objectPosition: 'center 20%',
    objectFit: 'cover',
  },
});

export const SlideDetailsWrapper = styled.div(
  mq({
    display: 'flex',
    flexDirection: 'column',
    padding: 'var(--s-8) var(--s-24)',
    paddingTop: 'var(--s-24)',
    width: '100%',
    minHeight: '100%',
    _tabletAndUp: {
      paddingTop: 'var(--s-32)',
    },
  }),
);

export const SlideTitle = styled.h3(
  mq({
    fontFamily: 'var(--font-lato)',
    color: 'var(--hof-colors-blue)',
    fontSize: 'var(--text-24)',
    fontWeight: 'var(--weight-semibold)',
    marginBottom: 'var(--s-16)',
    '&:hover': {
      textDecoration: 'underline',
    },
    _tabletLargeAndUp: {
      fontSize: '1.75rem',
    },
    _laptopAndUp: {
      fontSize: 'var(--text-24)',
    },
  }),
);

export const SlideText = styled.p(
  mq({
    display: '-webkit-box',
    '-webkit-box-orient': 'vertical',
    '-webkit-line-clamp': '5',
    textOverflow: 'ellipsis',
    overflow: 'hidden',
    fontSize: 'var(--text-16)',
    lineHeight: '1.8',
    marginBottom: 'var(--s-4)',
    // marginBottom: 'var(--s-16)',
    // _tabletAndUp: {
    //   marginBottom: 'var(--s-24)',
    // },
  }),
);

export const SliderFooter = styled.div({
  position: 'relative',
  display: 'flex',
  justifyContent: 'center',
  width: '100%',
  minHeight: '48px',
  padding: '4px 8px 16px 8px',
});

export const SliderButtonSX = {
  ':hover': {
    backgroundColor: 'hsl(20, 0%, 90%)',
  },
};

export const ButtonsWrapper = styled.div(
  mq({
    display: 'flex',
    position: 'absolute',
    bottom: '8px',
    zIndex: 1,
    padding: 'var(--s-4)',
    borderRadius: '9999999px',
    backgroundColor: 'hsl(20, 0%, 97%)',
  }),
);
