import { BoxProps, Grid, GridItem } from '@chakra-ui/react';
import styled from '@emotion/styled';
import { withMQ as mq } from '../../../context/theme';
import { MaxWidthWrapper } from '../../layout/MaxWidthWrapper';

export const RootWrapper = styled.div(
  mq({
    '--section-p': 'var(--s-16)',
    '--lg-card-radii': 'var(--s-16)',
    '--sm-card-radii': '0',
    position: 'relative',
    width: '100%',
    isolate: 'isolation',
    borderBottom: 'var(--s-8) solid var(--hof-colors-red)',
    marginTop: 'var(--s-96)',
    paddingTop: 'var(--section-p)',
    paddingBottom: 'calc(3 * var(--section-p))',
    _tabletAndUp: {
      '--lg-card-radii': 'var(--s-24)'
    },
    _laptopAndUp: {
      '--section-p': 'var(--s-32)',
      marginTop: 'var(--s-64)',
      paddingBottom: 'var(--section-p)'
    }
  })
);

export const BgImage = styled.div({
  position: 'absolute',
  display: 'flex',
  justifyContent: 'cneter',
  alignItems: 'flex-end',
  width: '100%',
  top: 0,
  left: 0,
  right: 0,
  bottom: 0,
  '& > div': {
    width: '100%',
    height: '100%',
    maxHeight: '100%',
    'img': {
      objectFit: 'fill',
      objectPosition: 'center'
    }
  }
});

export const CardsGrid = (props: BoxProps) => (
  <Grid
    as={MaxWidthWrapper}
    className="aboveFold__cards-grid"
    templateColumns="repeat(5, 1fr)"
    gap="var(--s-24)"
    alignContent="start"
    alignItems="start"
    {...props}
  />
);

export const InfoCardColumn = (props: BoxProps) => (
  <GridItem
    className="aboveFold__infoCard-col"
    position="relative"
    zIndex={2}
    minH="100%"
    w="100%"
    gridColumn={['1/-1', null, null, '1 / 3']}
    mt={['calc(-4 * var(--section-p))', null, null, 'revert']}
    // mx: ['auto', null, null, 'revert']
    {...props}
  />
);

export const SliderColumn = (props: BoxProps) => (
  <GridItem
    className="aboveFold__slider-col"
    position="relative"
    zIndex={2}
    gridColumn={['1/-1', null, null, '3 / -1']}
    {...props}
  />
);
