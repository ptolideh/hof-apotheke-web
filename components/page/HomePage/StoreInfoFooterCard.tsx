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
import { SectionWrapper } from '../../layout/SectionWrapper';
import { useHomeContent } from '../../../context/content/HomePageContent';
import { removeAllWhiteSpace } from '../../../utils';
// import Img from '../public/images/';

// CONSTANTS

const info: any /* InfoType */ = {
  address: 'Louisenstr. 5561348 Bad Homburg',
  email: 'info@hofapotheke.com',
  phone: '06172 92420',
  fax: '06172 924292',
};

// TYPES
// type StoreInfoFooterCardType = {};

const StoreInfoFooterCard = (/* props: StoreInfoFooterCardType */) => {
  const infoEntries = Object.entries(info) as any; /* as InfoEntriesType */
  const { storeInfo } = useHomeContent();
  const { address, mapUrl, phone, fax, email } = storeInfo;

  const inlineStyles = {
    className: 'StoreInfoWrapper-item',
    color: 'var(--hof-colors-blue)',
  };
  return (
    <SectionWrapper
      maxWidth="lg"
      // TEMP_LANDING_PAGE ↓
      position="relative"
      zIndex={2}
      bgColor="transparent"
    >
      <Paper
        p="var(--s-32)"
        boxShadow="0 4px 15px var(--hof-colors-orange)"
        mb="48px"
      >
        <StoreInfoWrapper>
          {address && (
            <StoreInfoItem variant="address" href={mapUrl} style={inlineStyles}>
              {address}
            </StoreInfoItem>
          )}
          {email && (
            <StoreInfoItem
              variant="email"
              href={`mailto:${email.trim()}}`}
              style={inlineStyles}
            >
              {email}
            </StoreInfoItem>
          )}
          {phone && (
            <StoreInfoItem
              variant="phone"
              href={`tel:${removeAllWhiteSpace(phone)}`}
              style={inlineStyles}
            >
              {phone}
            </StoreInfoItem>
          )}
          {fax && (
            <StoreInfoItem
              variant="fax"
              href={`fax:${removeAllWhiteSpace(fax)}`}
              style={inlineStyles}
            >
              {fax}
            </StoreInfoItem>
          )}
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
    </SectionWrapper>
  );
};

// STYLED ELEMENTS ////////////////////////////////////////

const StoreInfoWrapper = styled.div`
  display: flex;
  flex-direction: column;
  gap: 16px;
  align-items: baseline;
  width: 100%;
  /* display: grid; */
  /* grid-template-columns: 1fr; */
  /* align-content: center; */
  /* align-items: baseline; */
  padding-bottom: var(--s-16);
  /* gap: var(--s-32); */

  @media (min-width: 43rem) {
    display: grid;
    grid-template-columns: 1fr 1fr;
    gap: var(--s-16);
    margin: 0 auto;
  }

  @media ${QUERIES.tabletLargeAndUp} {
    max-width: 80%;
  }

  @media ${QUERIES.laptopAndUp} {
    display: flex;
    flex-direction: row;
    max-width: 100%;
    justify-content: space-between;
    /* grid-template-columns: 2fr 1fr 1fr 1fr; */
  }

  .StoreInfoWrapper-item .StoreInfoItem-text {
    margin-left: var(--s-8);
  }
`;

export { StoreInfoFooterCard };
