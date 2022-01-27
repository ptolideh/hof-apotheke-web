import {
  FC,
  ReactNode,
  useState,
  useEffect,
  useMemo,
  useRef,
  useCallback,
} from 'react';
import styled from '@emotion/styled';
import NextLink, { LinkProps as NextLinkProps } from 'next/link';
import NextImage, { ImageProps as NextImageProps } from 'next/image';
import {
  Box,
  BoxProps,
  VStack,
  Heading,
  HStack,
  Stack,
  Flex,
} from '@chakra-ui/react';
import { SVGWrapper } from '../../display/SvgWrapper';
import { QUERIES } from '../../../context/theme';
import { HALink } from '../HA_Link';

import { withMQ as mq } from '../../../context/theme';
import { SectionWrapper } from '../../layout/SectionWrapper';

// import Img from '../../public/images/';

// CONSTANTS

// TYPES
// type FooterType = {};

/**
 * TODO
 *  - 3 col grid
 *    - vstack
 *    - hstack
 *  - adjust fonts
 *  - adjust responsiveness
 */

const Footer = (props: any) => {
  const { data } = props;
  const content = data?.items?.[0]?.fields;

  const footerData = useMemo(() => {
    return content ? serializeIncomingData(content) : null;
  }, [content]);

  if (!footerData) return null;

  return (
    <Box
      sx={{
        width: '100%',
        px: '24px',
        background: 'linear-gradient(180deg, #FFFFFF 0%, #FCF7F6 43.75%)',
      }}
    >
      <Flex as="footer" {...styles.Footer}>
        <SVGWrapper
          component={FooterShape}
          sx={mq({
            position: 'absolute',
            left: '-24px',
            width: '100%',
            maxWidth: '1000px',
            bottom: 0,
            _tabletLargeAndUp: {
              width: '70%',
            },
            _laptopAndUp: {
              bottom: '-52px',
              left: '-5%',
            },
          })}
        />
        {footerData.map((section: any) => (
          <VStack
            className="FooterSection-Col"
            key={section.title}
            {...styles.SectionCol} //
          >
            <Heading as="h4" sx={styles.SectionTitle}>
              {section.title}
            </Heading>
            <Stack
              className="FooterSection-ListsWrapper"
              {...styles.ListsWrapper}
            >
              {section.list1 && <LinksList list={section.list1} />}
              {section.list2 && <LinksList list={section.list2} />}
            </Stack>
          </VStack>
        ))}
      </Flex>
      <Flex
        position="relative"
        p="12px"
        background="linear-gradient(to right, hsla(188, 100%, 45%, 1), hsla(222, 97%, 45%, 1))"
        fontSize="xs"
        fontWeight="semibold"
        color="white"
        flexDirection="row-reverse"
        positio="relative"
        zIndex="1"
        mx="-24px"
      >
        © 2021 Hof Apotheke in Bad Hamburg
      </Flex>
    </Box>
  );
};

// HELPERS ////////////////////////////////

function serializeIncomingData(content: any) {
  const columnHeadings = content.columnHeading.map((val: any) => ({
    text: val.fields.name,
    id: val.sys.id,
  }));

  const footerLinks = content.footerLink.map((val: any) => {
    return {
      text: val.fields.label,
      url: val.fields.url ?? '',
      title: {
        id: val.fields.column.sys.id,
      },
    };
  });

  const sections = columnHeadings.map((heading: any) => {
    const sectionLinks = footerLinks.filter(
      (link: any) => link.title.id === heading.id,
    );
    const linksCount = parseInt(sectionLinks.length);
    let itemsPerCol: number = Math.floor(linksCount / 2);
    if (itemsPerCol < 3) itemsPerCol = 3;
    return {
      title: heading.text,
      list1: sectionLinks.slice(0, itemsPerCol),
      list2: sectionLinks.slice(itemsPerCol, sectionLinks.length),
    };
  });

  return sections;
}

// ELEMENTS /////////////////////////////////////////

const LinksList = ({ list }: any) => (
  <VStack className="Footer-LinksList" {...styles.LinksList}>
    {list.map((link: any) => (
      <HALink key={link.url} href={link.url}>
        {link.text}
      </HALink>
    ))}
  </VStack>
);

// STYLED /////////////////////////////////////////

const styles = {
  Footer: {
    direction: ['column', null, 'row'] as any,
    sx: {
      justifyContent: [null, null, 'space-between'],
      gap: ['var(--s-48)', null, 'var(--s-48)'],
      position: 'relative',
      alignItems: ['flex-start'],
      padding: ['var(--s-16)', null, 'var(--s-48)'],
      width: '100%',
      // maxWidth: ['100%', 'var(--s-512)', 'revert'],
      margin: ['0', '0 auto'],
      zIdnex: 1,

      '&::before': {
        content: '""',
        position: 'absolute',
        background: 'linear-gradient(180deg, #FFFFFF 0%, #FCF7F6 43.75%)',
        right: 0,
        left: 0,
        bottom: 0,
        width: '100%',
        height: '100%',
      },
    },
  },
  SectionCol: {
    spacing: ['8px'],
    sx: {
      position: 'relative',
      zIndex: 2,
      alignItems: 'flex-start',
      width: ['100%'],
    },
  },
  SectionTitle: {
    width: '100%',
    paddingBottom: 'var(--s-8)',
    borderBottom: '1px solid hsl(0, 0%, 90%)',
    marginBottom: 'var(--s-16)',
    fontSize: 'var(--text-24)',
    color: 'var(--hof-colors-blue)',
    whiteSpace: 'nowrap',
  },
  ListsWrapper: {
    direction: ['column', 'row'] as any,
    spacing: ['var(--s-24)', 'var(--s-48)', 'var(--s-24)', 'var(--s-32)'],
    sx: {
      alignItems: ['flex-start'],
      width: '100%',
    },
    // justifyContent: ['flex-start', 'space-between']
  },
  LinksList: {
    spacing: ['var(--s-24)', null, 'var(--s-16)'],
    sx: {
      alignItems: 'flex-start',
      '& a': {
        fontSize: ['var(--text-18)', null, 'var(--s-16)'],
      },
    },
  },
};

////////

function FooterShape(props: any) {
  return (
    <svg
      width="100%"
      height="auto"
      viewBox="0 0 547 428"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <path
        d="M17.96 216.054c-80.909 0-146.499 65.366-146.499 146h293c0-80.634-65.59-146-146.5-146z"
        fill="url(#prefix__paint0_radial_420:3)"
      />
      <path
        d="M10.96 298.056c-49.428 0-89.5 39.846-89.5 89h179.001c0-49.154-40.07-89-89.5-89z"
        fill="url(#prefix__paint1_radial_420:3)"
      />
      <path
        opacity={0.55}
        d="M61.004 167.692c35.16 36.527 84.249 54.762 135.057 66.175 50.809 11.413 104.25 16.604 154.149 30.103 49.9 13.498 97.025 36.093 127.51 77.673 11.591 15.815 20.742 34.584 22.978 56.998 2.236 22.413-3.055 48.847-17.437 71.284-14.31 22.313-36.202 38.648-57.903 47.762-21.692 9.1-43.389 11.722-64.366 12.753-133.085 6.506-247.313-47.637-340.774-123.93-34.611-28.26-67.258-60.138-88.125-102.713-20.867-42.575-29.129-97.129-14.013-154.247 7.607-28.769 21.695-57.73 40.434-82.918C-30.126 51.358 12.408-.339 16.156 28.06c3.51 26.61-.342 52.952 8.018 78.074 7.982 24.037 20.726 44.844 36.83 61.559z"
        fill="url(#prefix__paint2_linear_420:3)"
        fillOpacity={0.68}
      />
      <defs>
        <radialGradient
          id="prefix__paint0_radial_420:3"
          cx={0}
          cy={0}
          r={1}
          gradientUnits="userSpaceOnUse"
          gradientTransform="matrix(-235.70653 329.5837 -659.89947 -471.9366 218.854 111.974)"
        >
          <stop stopColor="#FEE0D3" stopOpacity={0.86} />
          <stop offset={1} stopColor="#fff" />
        </radialGradient>
        <radialGradient
          id="prefix__paint1_radial_420:3"
          cx={0}
          cy={0}
          r={1}
          gradientUnits="userSpaceOnUse"
          gradientTransform="matrix(-143.99728 200.91094 -402.55178 -288.5177 133.691 234.61)"
        >
          <stop offset={0.214} stopColor="#FEE0D3" stopOpacity={0.86} />
          <stop offset={1} stopColor="#fff" />
        </radialGradient>
        <linearGradient
          id="prefix__paint2_linear_420:3"
          x1={-88.732}
          y1={134.13}
          x2={453.588}
          y2={512.576}
          gradientUnits="userSpaceOnUse"
        >
          <stop stopColor="#fff" />
          <stop offset={0.266} stopColor="#FEE0D3" stopOpacity={0.86} />
          <stop offset={0.711} stopColor="#FEE0D3" />
          <stop offset={1} stopColor="#FFCDB7" />
        </linearGradient>
      </defs>
    </svg>
  );
}

export { Footer };
