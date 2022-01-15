import { FC, ReactNode, useState, useEffect, useMemo, useRef } from 'react';
import styled from '@emotion/styled';
import NextLink, { LinkProps as NextLinkProps } from 'next/link';
import NextImage, { ImageProps as NextImageProps } from 'next/image';
import { Box, BoxProps } from '@chakra-ui/react';

import { Paper } from '../../layout/Paper';
import { MaxWidthWrapper } from '../../layout/MaxWidthWrapper';
import { QUERIES } from '../../../context/theme';
// import { SVGWrapper } from '../components/shared/svg';
// import { QUERIES } from '../context/theme';
import { StoreInfoItem } from '../../display/StoreInfo';
// import Img from '../public/images/';

// CONSTANTS

const info: any /* InfoType */ = {
  address: 'Louisenstr. 5561348 Bad Homburg',
  email: 'info@hofapotheke.com',
  phone: '06172 92420',
  fax: '06172 924292'
};

// TYPES
// type StoreInfoFooterCardType = {};

const StoreInfoFooterCard = (/* props: StoreInfoFooterCardType */) => {
  const infoEntries = Object.entries(info) as any; /* as InfoEntriesType */
  return (
    <MaxWidthWrapper>
      <Paper
        p="var(--s-32)"
        boxShadow="0 4px 15px var(--hof-colors-orange)"
        mb="48px"
      >
        <StoreInfoWrapper>
          {infoEntries.map(([variant, text]: any) => (
            <StoreInfoItem
              className="StoreInfoWrapper-item"
              key={variant}
              variant={variant}
              color="var(--hof-colors-blue)"
            >
              {text}
            </StoreInfoItem>
          ))}
        </StoreInfoWrapper>
        <Box
          className="mapouter"
          // CSS
          position="relative"
          textAlign="right"
          height="500px"
          width="100%"
        >
          <Box
            className="gmap_canvas"
            overflow="hidden"
            backgroun="none !important"
            height="500px"
            width="100%"
            borderRadius="8px"
          >
            <iframe
              width="100%"
              height="500px"
              id="gmap_canvas"
              src="https://maps.google.com/maps?q=Louisenstr.%2055%2061348%20Bad%20Homburg&t=&z=15&ie=UTF8&iwloc=&output=embed"
              frameBorder={0}
              scrolling="no"
              marginHeight={0}
              marginWidth={0}
            />
          </Box>
        </Box>
      </Paper>
    </MaxWidthWrapper>
  );
};

// STYLED ELEMENTS ////////////////////////////////////////

const StoreInfoWrapper = styled.div`
  width: 100%;
  display: grid;
  grid-template-columns: 1fr;
  align-content: center;
  align-items: baseline;
  padding-bottom: var(--s-32);
  gap: var(--s-32);

  @media ${QUERIES.tabletLargeAndUp} {
    grid-template-columns: 1fr 1fr;
    gap: var(--s-16);
  }

  @media ${QUERIES.laptopAndUp} {
    grid-template-columns: 2fr 1fr 1fr 1fr;
  }

  .StoreInfoWrapper-item .StoreInfoItem-text {
    margin-left: var(--s-8);
  }
`;

export { StoreInfoFooterCard };
