import { BoxProps, Button, VStack } from '@chakra-ui/react';
import styled from '@emotion/styled';
import { withMQ as mq } from '../../../context/theme';
import {
  SectionWrapper,
  SectionWrapperPropTypes,
} from '../../layout/SectionWrapper';

export const RootWrapper = (p: SectionWrapperPropTypes) => (
  <SectionWrapper
    position="relative"
    px={0}
    pt={['var(--s-96)', 'var(--s-64)']}
    pb={['var(--s-36)', null, 'var(--s-40)', 'var(--s-56)']}
    {...p}
  />
);

export const ServicesContainer = styled.div(
  mq({
    position: 'relative',
    display: 'grid',
    gridTemplateColumns: 'repeat(auto-fit, minmax(min(256px, 100%), 1fr))',
    gap: 'var(--s-12)',
    backgroundColor: 'hsl(0, 0%, 100%)',
    boxShadow: '0 4px 15px hsl(215, 60%, 80%, 0.6)',
    borderBottom: '4px solid var(--hof-colors-red)',
    padding: 'var(--s-16)',
    borderRadius: 'var(--chakra-radii-2xl)',
    marginTop: 0,
    _tabletAndUp: {
      gap: 'var(--s-24)',
    },
    _tabletLargeAndUp: {
      gridTemplateColumns: 'repeat(auto-fit, minmax(min(352px, 100%), 1fr))',
    },
    _laptopAndUp: {
      maxWidth: '1100px',
      margin: '0 auto',
    },
  }),
);

export const ServiceCard = styled.article(
  mq({
    display: 'grid',
    gridTemplateColumns: 'auto 1fr',
    gridTemplateRows: 'auto auto',
    gap: 'var(--s-8) var(--s-16)',
    alignContent: 'start',
    justifyContent: 'start',
    padding: 'var(--s-16) 0',
    borderRadius: 'var(--chakra-radii-xl)',
    width: '100%',
    maxWidth: '100%',
    backgroundColor: 'transparent',
    transition: 'var(--transition-med)',
    ':hover': {
      cursor: 'default',
      // cursor: 'pointer',
      // backgroundColor: 'hsl(0, 0%, 97%)'
    },
    _tabletAndUp: {
      padding: 'var(--s-16)',
    },
  }),
);

export const ServiceIcon = styled.span({
  gridColumn: '1',
  gridRow: '1 / -1',
  alignSelf: 'start',
  marginTop: '-2px',
});

export const ServiceTitle = styled.h3(
  mq({
    gridColumn: 2,
    gridRow: 1,
    lineHeight: '1.5',
    color: 'var(--hof-colors-blue)',
    fontWeight: 'var(--weight-semibold)',
    fontSize: 'var(--text-18)',
    width: '100%',
    // textDecoration: 'underline',
    textUnderlineOffset: '0.15em',
    fontFamily: 'var(--font-poppings)',
    _tabletLargeAndUp: {
      textDecoration: 'revert',
    },
  }),
);

export const ServiceDetails = styled.p({
  gridColumn: '2',
  gridRow: '2',
  fontSize: 'var(--text-16)',
  lineHeight: '1.5',
  width: '100%',
});

// const ServicesContainer = styled.div`
//   position: relative;
//   display: grid;
//   grid-template-columns: repeat(auto-fit, minmax(min(256px, 100%), 1fr));
//   gap: var(--s-12);
//   background-color: hsl(0, 0%, 100%);
//   /* box-shadow: 0 2px 15px var(--hof-colors-orange); */
//   box-shadow: 0 4px 15px hsl(215, 60%, 80%, 0.6);
//   border-bottom: 4px solid var(--hof-colors-red);

//   padding: var(--s-16);
//   border-radius: var(--chakra-radii-2xl);
//   margin-top: 0;
//   @media ${QUERIES.tabletAndUp} {
//     gap: var(--s-24);
//   }

//   @media ${QUERIES.tabletLargeAndUp} {
//     grid-template-columns: repeat(auto-fit, minmax(min(352px, 100%), 1fr));
//   }

//   @media ${QUERIES.laptopAndUp} {
//     max-width: 1100px;
//     margin: 0 auto;
//   }
// `;

// const ServiceCard = styled.article`
//   display: grid;
//   grid-template-columns: auto 1fr;
//   grid-template-rows: auto auto;
//   gap: var(--s-8) var(--s-16);
//   align-content: start;
//   justify-content: start;
//   padding: var(--s-16);
//   border-radius: var(--chakra-radii-xl);
//   width: 100%;
//   max-width: 100%;
//   background-color: transparent;
//   transition: var(--transition-med);

//   :hover {
//     cursor: pointer;
//     background-color: hsl(0, 0%, 97%);
//   }
// `;

// const ServiceIcon = styled.span`
//   grid-column: 1;
//   grid-row: 1 / -1;
//   align-self: start;
//   margin-top: -2px;
// `;

// const ServiceTitle = styled.h3`
//   grid-column: 2;
//   grid-row: 1;
//   line-height: 1;
//   color: var(--hof-colors-blue);
//   font-weight: var(--weight-semibold);
//   font-size: var(--text-18);
//   width: 100%;
//   text-decoration: underline;
//   text-underline-offset: 0.15em;
//   font-family: var(--font-poppings);

//   @media ${QUERIES.tabletLargeAndUp} {
//     text-decoration: revert;
//   }
// `;

// const ServiceDetails = styled.p`
//   grid-column: 2;
//   grid-row: 2;
//   font-size: var(--text-16);
//   line-height: 1.5;
//   width: 100%;
// `;
