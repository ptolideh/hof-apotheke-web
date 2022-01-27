import { Box, BoxProps, Button, HStack, VStack } from '@chakra-ui/react';
import { css } from '@emotion/react';
import styled from '@emotion/styled';
import { ArrowRight } from 'phosphor-react';
import { FC } from 'react';
import { QUERIES, withMQ as mq } from '../../../context/theme';
import { SliderStyles } from '../../display/Slider';
import {
  SectionWrapper,
  SectionWrapperPropTypes,
} from '../../layout/SectionWrapper';

export const RootWrapper = styled.section(
  mq({
    '--slide-padding': 'var(--s-24)',
    '--slide-margin': 'var(--s-4)',
    width: '100%',
    maxWidth: '100%',
    marginTop: 'var(--s-128)',
    _tabletAndUp: {
      '--slide-margin': 'var(--s-16)',
    },
    _laptopAndUp: {
      '--slide-padding': 'var(--s-32)',
    },
  }),
);

export const HeaderWrapper: FC<SectionWrapperPropTypes> = (p) => (
  <SectionWrapper
    paddingBottom="var(--s-48)"
    sx={{
      '& h2': {
        paddingLeft: 'var(--slide-margin)',
      },
    }}
    {...p}
  />
);

export const ContentWrapper = styled.main(
  mq({
    position: 'relative',
    width: '100%',
    padding: 0,
    paddingTop: 'var(--s-24)',
    paddingBottom: 'var(--s-40)',
    _tabletAndUp: {
      paddingBottom: 'var(--s-56)',
    },
    _tabletLargeAndUp: {
      paddingTop: 'var(--s-32)',
    },
    _laptopAndUp: {
      paddingBottom: 'var(--s-64)',
    },
  }),
);

export const PaginationWrapper: FC<BoxProps> = (p = {}) => (
  <HStack
    sx={{
      paddingTop: 'var(--s-20) !important',
      bottom: '-40px !important',
      //
      'li': {
        width: 'fit-content !important',
        height: 'auto !important',
      },
      //
      'li.slick-active > span': {
        backgroundColor: 'var(--hof-colors-blue)',
      },
    }}
    {...p}
  />
);

export const PaginationDot = styled.span(
  mq({
    display: 'inline-block',
    boxSizing: 'content-box',
    height: 'var(--s-20)',
    width: 'var(--s-20)',
    borderRadius: '50%',
    margin: '0 8px',
    backgroundColor: 'hsl(0, 0%, 90%)',
    boxShadow: 'inset 0 1px 3px hsl(0, 0%, 80%)',
    ':hover': {
      backgroundColor: 'hsl(208, 99%, 88%)',
    },
    // _tabletLargeAndUp: {
    //   margin: '0 8px',
    //   // height: 'var(--s-16)',
    //   // width: 'var(--s-16)',
    // },
  }),
);

export const SliderWrapper = styled(SectionWrapper)([
  {
    // '--slide-width': 'min(100%, 1000px)',
    paddingBottom: 'var(--s-64)',
    // maxWidth: '100%',
    // overflow: 'hidden'
  },
  css`
    ${SliderStyles}
  `,
]);

export const Slide = styled.article(
  mq({
    position: 'relative',
    display: 'flex !important',
    flexDirection: 'column',
    justifyContent: 'flex-start',
    width: 'fit-content !important',
    margin: ' 16px var(--slide-margin)',
    padding: 'var(--slide-padding)',
    overflow: 'hidden',
    backgroundColor: 'white',
    borderRadius: 'var(--s-16)',
    boxShadow: '0 6px 12px hsl(215, 60%, 80%, 0.6)',
    height: '400px',
    transition: 'var(--transition-med)',
    transform: 'translateY(0)',
    //
    ':hover': {
      cursor: 'pointer',
      transform: 'translateY(-4px)',
      // boxShadow: '0 6px 12px hsl(215, 60%, 60%, 0.6)',
      //
      'h3': {
        color: 'hsl(208, 99%, 38%)',
        transition: 'var(--transition-med)',
      },
      //
      'figure::before': {
        opacity: '0.2',
      },
      'img': {
        transition: 'transform 800ms ease-out',
        transform: 'scale(1.03)',
      },
    },
    _tabletLargeAndUp: {
      height: 'var(--s-384)',
    },
  }),
);

/* width: '100%',
height: '250px',
'@supports (aspect-ratio: 1 / 1)': {
  height: 'revert',
  aspectRatio: '7/3'
},
'& > div': {
  height: '250px',
  '@supports (aspect-ratio: 1 / 1)': {
    height: 'revert',
    aspectRatio: '7/3'
  }
},
'img': {
  width: '100%',
  height: '100%',
  objectFit: 'cover'
} */

export const SlideImage = styled.figure(
  mq({
    position: 'relative',
    display: 'flex',
    margin: 'calc(-1 * var(--slide-padding))',
    marginBottom: 0,
    height: '100vh',

    // mobile
    '--ratio': '60vw',
    '--space-around': 'calc(2 * var(--slide-margin))',
    '--aspect-ratio-height': 'calc(var(--ratio) - var(--space-around))',
    maxHeight: 'min(var(--aspect-ratio-height), var(--s-192))',

    /* decorative line above */
    '&::after': {
      content: '""',
      position: 'absolute',
      right: 0,
      left: 0,
      bottom: '-2px',
      height: '2px',
      width: '100%',
      background:
        'linear-gradient(to right, hsla(222, 97%, 45%, 1), hsla(188, 100%, 45%, 1))',
    },

    '&::before': {
      content: '""',
      position: 'absolute',
      right: 0,
      left: 0,
      top: '60%',
      bottom: 0,
      width: '100%',
      zIndex: 2,
      transition: 'opacity 800ms ease',
      opacity: '0.3',
      background:
        'linear-gradient( to bottom, rgba(255,255,255, 0) 0%, rgba(0,0,0, 1) 100%)',
    },

    /* NextJS image fixes */
    '& > div': {
      height: '100%',
      maxHeight: '100%',
    },
    'img': {
      transform: 'scale(1)',
      transition: 'transform 1000ms ease-out',
      width: '100%',
      height: '100%',
      objectFit: 'cover',
      objectPosition: 'center 20%',
    },
    _tabletAndUp: {
      '--ratio': '40vw',
    },
  }),
);

export const SlideTitle = styled.h3`
  font-family: var(--font-poppins);
  font-weight: var(--weight-bold);
  color: var(--hof-colors-red);
  font-size: var(--text-18);
  margin: var(--slide-margin) 0 var(--s-8) 0;
  padding-top: 8px;

  @media ${QUERIES.laptopAndUp} {
    padding-top: 4px;
  }
`;

export const SlideText = styled.p`
  display: -webkit-box;
  -webkit-box-orient: vertical;
  -webkit-line-clamp: 4;
  text-overflow: ellipsis;
  overflow: hidden;
  font-size: calc(15 / 16 * 1rem);
  line-height: 1.6;

  @media ${QUERIES.tabletLargeAndUp} {
    -webkit-line-clamp: 3;
  }
`;

export const ActionIconButton = styled(ArrowRight)`
  align-self: flex-end;
  margin-top: 8px;
  padding: 4px;
  background-color: hsl(1, 67%, 49%, 0.05);
  border-radius: 50%;

  @media ${QUERIES.tabletLargeAndUp} {
    display: none;
  }
`;
