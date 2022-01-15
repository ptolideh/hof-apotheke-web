import styled from '@emotion/styled';
import { withMQ as mq } from '../../../context/theme';

export const InnerContainer = styled.div({
  position: 'relative',
  width: '100%',
  display: 'grid',
  'gridTemplateColumns': 'repeat(12, 1fr)',
  gridTemplateRows: 'auto auto',
  alignContent: 'start',
  alignItems: 'start'
});

const styles = {
  SectionWrapper: {
    width: '100%',
    py: ['var(--s-64)', 'var(--s-96)', null, 'var(--s-192)'],
    backgroundColor: 'var(--hof-colors-blue-lighter)'
  },
  ContentGrid: {
    position: 'relative',
    width: '100%',
    display: 'grid',
    'gridTemplateColumns': 'repeat(12, 1fr)',
    gridTemplateRows: 'auto auto',
    alignContent: 'start',
    alignItems: 'start'
  }
};

export const StoreImage = styled.figure(
  mq({
    gridRow: 1,
    gridColumn: '3 / 12',
    marginTop: '5%',
    position: 'relative',
    '& img': {
      objectFit: 'contain'
    },
    _tabletAndUp: {
      gridColumn: '4 / -1'
    }
  })
);

export const DecorativeImage = styled.figure(
  mq({
    position: 'absolute',
    gridColumn: '1 / 5',
    gridRow: '1',
    maxHeight: 'var(--s-640)',
    opacity: '0.8',
    '& > div': {
      height: 'auto',
      maxHeight: '100%'
    },
    _tabletAndUp: {
      gridColumn: '1 / 6'
    }
  })
);

export const AboutText = styled.div(
  mq({
    position: 'relative',
    gridColumn: '1 / -1',
    gridRow: '2',
    padding: 'var(--s-16)',
    marginTop: 'var(--s-16)',
    'p': {
      position: 'relative'
    },
    '::before': {
      position: 'absolute',
      content: '""',
      top: 0,
      bottom: 0,
      right: 0,
      left: 0,
      backgroundColor: 'var(--hof-colors-blue-lighter)',
      borderRadius: '24px',
      opacity: 0.7
      /* filter: blur(10px) brightness(100%); */
    },
    _tabletAndUp: {
      gridColumn: '4 / -1'
    },
    _tabletLargeAndUp: {
      gridColumn: '6 / -1',
      marginTop: 0,
      fontSize: 'var(--text-18)',
      lineHeight: '1.7'
    }
  })
);
