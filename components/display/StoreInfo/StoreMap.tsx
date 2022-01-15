import { FC, ReactNode, useState, useEffect, useMemo, useRef } from 'react';
import styled from '@emotion/styled';
import NextLink, { LinkProps as NextLinkProps } from 'next/link';
import NextImage, { ImageProps as NextImageProps } from 'next/image';
import { Box, BoxProps } from '@chakra-ui/react';
import { MaxWidthWrapper } from '../../layout/MaxWidthWrapper';
// import { QUERIES } from '../../context/theme';

const StoreMap = (/* props: StoreMapType */) => {
  return (
    <MaxWidthWrapper>
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
          borderRadius="3xl"
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
    </MaxWidthWrapper>
  );
};

export { StoreMap };
