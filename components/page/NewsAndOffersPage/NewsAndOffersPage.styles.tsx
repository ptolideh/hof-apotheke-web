import styled from '@emotion/styled';
import { QUERIES, withMQ as mq } from '../../../context/theme';

export const Card = styled.article(
  mq({
    '--slide-margin': 'var(--s-16)',
    position: 'relative',
    display: 'flex !important',
    flexDirection: 'column',
    justifyContent: 'flex-start',
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
        transition: 'var(--transition-med)'
      },
      //
      'figure::before': {
        opacity: '0.2'
      },
      'img': {
        transition: 'transform 800ms ease-out',
        transform: 'scale(1.03)'
      }
    },
    _tabletLargeAndUp: {
      height: 'var(--s-384)'
    }
  })
);

export const CardImage = styled.figure(
  mq({
    position: 'relative',
    display: 'flex',
    marginBottom: 0,
    height: '100vh',

    // mobile
    '--ratio': '70vw',
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
        'linear-gradient(to right, hsla(222, 97%, 45%, 1), hsla(188, 100%, 45%, 1))'
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
        'linear-gradient( to bottom, rgba(255,255,255, 0) 0%, rgba(0,0,0, 1) 100%)'
    },

    /* NextJS image fixes */
    '& > div': {
      height: '100%',
      maxHeight: '100%'
    },
    'img': {
      transform: 'scale(1)',
      transition: 'transform 1000ms ease-out',
      width: '100%',
      height: '100%',
      objectFit: 'cover'
    }
  })
);

export const ContentWrapper = styled.div({
  padding: '0 18px 18px 18px'
});

export const CardTitle = styled.h3(
  mq({
    fontFamily: 'var(--font-poppins)',
    fontWeight: 'var(--weight-bold)',
    color: 'var(--hof-colors-red)',
    fontSize: 'var(--text-18)',
    margin: 'var(--slide-margin) 0 var(--s-8) 0',
    _laptopAndUp: {
      paddingtop: '4px'
    }
  })
);

export const CardSummary = styled.p`
  display: -webkit-box;
  -webkit-box-orient: vertical;
  -webkit-line-clamp: 4;
  text-overflow: ellipsis;
  overflow: hidden;
  font-size: calc(15 / 16 * 1rem);
  line-height: 1.6;
  margin-bottom: 8px;

  @media ${QUERIES.tabletLargeAndUp} {
    -webkit-line-clamp: 3;
  }
`;
