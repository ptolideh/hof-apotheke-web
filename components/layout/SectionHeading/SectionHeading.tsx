import { FC, ReactNode, useState, useEffect, useMemo, useRef } from 'react';
import styled from '@emotion/styled';
import NextLink, { LinkProps as NextLinkProps } from 'next/link';
import NextImage, { ImageProps as NextImageProps } from 'next/image';
import { Box, BoxProps, Heading, HeadingProps } from '@chakra-ui/react';
// import { SVGWrapper } from '../components/shared/svg';
// import { QUERIES } from '../context/theme';

// import Img from '../public/images/';

// CONSTANTS

// TYPES
// type SectionHeadingType = {};
/**
 * TODO
 */

const SectionHeading = (props: HeadingProps) => {
  const { children, ...delegatedProps } = props;
  return (
    <HeadingWrapper as="h2" size="2xl" {...delegatedProps}>
      {children}
    </HeadingWrapper>
  );
};

const HeadingWrapper = styled(Heading)`
  display: inline-flex;
  justify-content: flex-start;
  align-items: baseline;
  width: fit-content;
  font-weight: var(--weight-heavy);
  line-height: 1 !important;
  color: var(--hof-colors-blue);

  &::before {
    flex: 0 0 auto;
    content: '';
    margin-right: var(--s-16);
    height: 0.75em;
    width: 0.75em;
    background-color: var(--hof-colors-red);
    clip-path: polygon(100% 0, 0% 100%, 100% 100%);
  }
`;

// STYLED ELEMENTS

export { SectionHeading };
