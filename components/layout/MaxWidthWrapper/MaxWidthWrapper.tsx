import { FC, ReactNode, useState, useEffect, useMemo, useRef } from 'react';
import styled from '@emotion/styled';
import NextLink, { LinkProps as NextLinkProps } from 'next/link';
import NextImage, { ImageProps as NextImageProps } from 'next/image';
import { Box, BoxProps } from '@chakra-ui/react';
import { QUERIES } from '../../../context/theme';
// import { SVGWrapper } from '../components/shared/svg';
// import { QUERIES } from '../context/theme';

// import Img from '../public/images/';

// CONSTANTS

// TYPES
// type MaxWidthWrapperType = {};

export const MaxWidthWrapper = styled(Box)`
  padding: 0 16px;
  margin: 0;
  margin-left: auto;
  margin-right: auto;
  min-width: min(100%, var(--max-w));
  max-width: var(--max-w);

  @media ${QUERIES.tabletLargeAndUp} {
    padding-left: 24px;
    padding-right: 24px;
  }

  @media ${QUERIES.laptopAndUp} {
    padding-left: 48px;
    padding-right: 48px;
  }
`;

// STYLED ELEMENTS
