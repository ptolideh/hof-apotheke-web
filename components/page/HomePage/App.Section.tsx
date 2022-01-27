import {
  FC,
  ReactNode,
  useState,
  useEffect,
  useMemo,
  useRef,
  memo,
  SVGProps,
} from 'react';
import styled from '@emotion/styled';

import { QUERIES, withMQ as mq } from '../../../context/theme';

import NextImage, { ImageProps as NextImageProps } from 'next/image';
import {
  Box,
  BoxProps,
  Text,
  Grid,
  GridItem,
  chakra,
  HStack,
} from '@chakra-ui/react';
// import { SVGWrapper } from '../components/shared/svg';
// import { QUERIES } from '../context/theme';
import { SectionHeading } from '../../layout/SectionHeading';

import AppImage from '../../../public/images/home/Phone.png';

import * as React from 'react';
import { SVGWrapper } from '../../display/SvgWrapper';
import { MaxWidthWrapper } from '../../layout/MaxWidthWrapper';
import { withStyle, withStyles } from '../../../styles/withStyle';
import { AppDownloadStickers } from '../../display/AppDownloadStickers';
import { useHomeContent } from '../../../context/content/HomePageContent';
import { RichTextContainer } from '../../display/RichTextContainer';
import { SectionWrapper } from '../../layout/SectionWrapper';

// CONSTANTS

// TYPES
// type AppSectionType = {};

const AppSection = (props: any) => {
  const content = useHomeContent();

  console.log('app section content -->>>', content);
  const sectionTitle = content?.main?.appSectionTitle ?? '';
  const sectionText = content?.main?.appSectionText ?? [];
  return (
    <SectionWrapper maxWidth="lg">
      <MaxWidthWrapper px={['24px', '32px', null, '16px']}>
        <SectionHeading
          className="AppSection-Title"
          display={[null, null, 'none !important']}
          sx={{
            mt: '64px',
            width: '100% !important',
            justifyContent: 'center !important',
          }}
        >
          {sectionTitle}
        </SectionHeading>
        <Grid {...s.ContentGrid}>
          <GridItem {...s.DetailsGridCol}>
            <SectionHeading
              // whiteSpace={[null, null, null, 'nowrap']}
              className="AppSection-Title"
              display={['none !important', null, 'inline-flex !important']}
            >
              {sectionTitle}
            </SectionHeading>
            <Box sx={s.BodyText}>
              <RichTextContainer content={sectionText} />
            </Box>
            <AppDownloadStickers />
          </GridItem>
          <SVGWrapper component={PhoneBackground} sx={s.BgEffectImage} />
          <GridItem {...s.ImageGridCol}>
            <NextImage src={AppImage} />
          </GridItem>
        </Grid>
        {/* <SectionWrapper>
        <BodyText>
          <p>
            In Germany there are over 20,000 pharmacies with the well-known
            "Apotheken-A". We, the more than 1,000 LINDA pharmacies, offer you
            more than just quality medicines.
          </p>
          <p>
            Not only that you can collect a lot of PAYBACK points with us , but
            also that we are probably the best partner for competent solutions
            for everything to do with your wellbeing.
          </p>
        </BodyText>
        <AppLinkWrapper>
          <NextLink href="/">
            <a>
              <NextImage src={AppStore} />
            </a>
          </NextLink>
          <NextLink href="/">
            <a>
              <NextImage src={PlayStore} />
            </a>
          </NextLink>
        </AppLinkWrapper>
        <ImageGridColumn>
          <NextImage src={AppImage} />
        </ImageGridColumn>
      </SectionWrapper> */}
      </MaxWidthWrapper>
    </SectionWrapper>
  );
};
// {/* */}

//STYLES ///////////////////////////////////////

const s = withStyles('AppSection', {
  ContentGrid: {
    mt: ['var(--s-48)', null, 'var(--s-96)'],
    templateColumns: ['repeat(12, 1fr)'],
    templateRows: ['auto auto', null, '1fr'],
    gap: ['16px'],
    position: 'relative',
    mb: ['var(--s-64)', null, null, '196px'],
  },
  ImageGridCol: {
    gridColumn: ['1 / -1', null, '8/-1'],
    gridRow: ['1'],
    sx: {
      position: 'relative',
      justifySelf: 'center',
      alignSelf: 'start',
      justifyContent: 'center',
      width: 'min(256px, 50%)',

      /* NextJS image fixes */
      '& > div': {
        height: '100%',
        maxHeight: '100%',
      },
      '& img': {
        objectFit: 'cover',
        objectPosition: 'center',
      },
    },
  },
  DetailsGridCol: {
    gridColumn: ['1/ -1', null, '1/8'],
    gridRow: ['2', null, '1'],
    my: ['var(--s-32)', null, 0],
  },
  BgEffectImage: {
    position: 'absolute',
    width: ['110%', '80%', '55%'],
    maxWidth: '700px',
    top: ['0', null, '-10%', '-20%'],
    right: 0,
    // right: '-10%',
    // right: ['0', null, '-10%'],
    // transform: 'scale(1.25)'
  },
  BodyText: mq({
    'p': {
      fontSize: 'var(--text-18) !important',
      lineHeight: '1.7',
      mb: 'var(--s-16)',
    },
    _tabletLargeAndUp: {
      my: 'var(--s-48)',
    },
  }),
});

// const SectionWrapper = styled.div`
//   display: grid;
//   width: 100%;
//   grid-template-columns: repeat(12, 1fr);
//   grid-template-rows: repeat(4, auto);
//   align-content: start;
//   max-height: var(--s-640);
//   max-width: 1000px;
//   margin: 40px auto;

//   .AppSection-Title {
//     grid-column: 1 / -1;
//     grid-row: 1;
//     margin-bottom: var(--s-32);
//   }
// `;

const BodyText = styled.div`
  grid-column: 1 / -1;
  grid-row: 3;
  /* grid-column: 1/ 6; */
  font-size: var(--text-18);
  line-height: 1.7;

  p {
    margin-bottom: var(--s-16);
  }
`;

const AppLinkWrapper = styled.div`
  display: flex;
  flex-wrap: nowrap;
  grid-column: 1 / -1;
  grid-row: 4;

  /* grid-column: 1 / 6; */

  a:not(:last-of-type) {
    margin-right: var(--s-24);
  }
`;

const BackgrounEffect = styled(SVGWrapper)`
  position: absolute;
  max-width: 100%;
  width: 60%;
  right: 0;
`;

const ImageGridColumn = styled.figure`
  position: relative;
  width: 100%;
  grid-column: 3 / 11;
  grid-row: 2;
  /* grid-column: 8 / 11; */
  /* grid-row: 1 / -1; */

  /* display: flex;
    margin: calc(-1 * var(--slide-padding));
    margin-bottom: 0; */

  /* mobile */
  /* height: 100vh;
    --ratio: 60vw;
    --space-around: calc(2 * var(--slide-margin));
    --aspect-ratio-height: calc(var(--ratio) - var(--space-around));
    max-height: min(var(--aspect-ratio-height), var(--s-192));

    @media {QUERIES.tabletAndUp} {
      --ratio: 40vw;
    } */

  /* NextJS image fixes */
  & > div {
    height: 100%;
    max-height: 100%;

    img {
      object-fit: contain;
      object-position: center;
    }
  }
`;

///////////////////////////////////////////////////////////////

function PhoneBackground(props: SVGProps<SVGSVGElement>) {
  return (
    <svg
      width="100%"
      height="auto"
      viewBox="0 0 777 892"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <g filter="url(#prefix__filter0_f_302:37)">
        <path
          d="M341.859 336.165a211.738 211.738 0 01214.078 208.887l2.189 178.351a33.173 33.173 0 01-32.726 33.538l-178.35 2.189a211.501 211.501 0 01-214.078-208.887 211.5 211.5 0 01208.887-214.078z"
          fill="url(#prefix__paint0_radial_302:37)"
          fillOpacity={0.49}
        />
      </g>
      <g filter="url(#prefix__filter1_f_302:37)">
        <circle
          cx={481}
          cy={306}
          r={161}
          fill="url(#prefix__paint1_radial_302:37)"
        />
      </g>
      <g filter="url(#prefix__filter2_f_302:37)">
        <path
          d="M244.027 431.923c-20.157-.022-39.481-7.769-53.734-21.541s-22.27-32.444-22.293-51.921v-61.952c.004-3.052 1.26-5.977 3.493-8.134 2.233-2.158 5.26-3.372 8.418-3.375h64.116c20.163 0 39.501 7.74 53.759 21.516 14.257 13.777 22.267 32.462 22.267 51.945 0 19.484-8.01 38.169-22.267 51.945-14.258 13.777-33.596 21.517-53.759 21.517z"
          fill="url(#prefix__paint2_linear_302:37)"
        />
      </g>
      <defs>
        <filter
          id="prefix__filter0_f_302:37"
          x={0.957}
          y={204.151}
          width={689.172}
          height={686.995}
          filterUnits="userSpaceOnUse"
          colorInterpolationFilters="sRGB"
        >
          <feFlood floodOpacity={0} result="BackgroundImageFix" />
          <feBlend in="SourceGraphic" in2="BackgroundImageFix" result="shape" />
          <feGaussianBlur
            stdDeviation={66}
            result="effect1_foregroundBlur_302:37"
          />
        </filter>
        <filter
          id="prefix__filter1_f_302:37"
          x={175}
          y={0}
          width={612}
          height={612}
          filterUnits="userSpaceOnUse"
          colorInterpolationFilters="sRGB"
        >
          <feFlood floodOpacity={0} result="BackgroundImageFix" />
          <feBlend in="SourceGraphic" in2="BackgroundImageFix" result="shape" />
          <feGaussianBlur
            stdDeviation={72.5}
            result="effect1_foregroundBlur_302:37"
          />
        </filter>
        <filter
          id="prefix__filter2_f_302:37"
          x={126}
          y={243}
          width={236.053}
          height={230.923}
          filterUnits="userSpaceOnUse"
          colorInterpolationFilters="sRGB"
        >
          <feFlood floodOpacity={0} result="BackgroundImageFix" />
          <feBlend in="SourceGraphic" in2="BackgroundImageFix" result="shape" />
          <feGaussianBlur
            stdDeviation={21}
            result="effect1_foregroundBlur_302:37"
          />
        </filter>
        <radialGradient
          id="prefix__paint0_radial_302:37"
          cx={0}
          cy={0}
          r={1}
          gradientUnits="userSpaceOnUse"
          gradientTransform="rotate(-133.245 436.917 263.317) scale(527.258)"
        >
          <stop stopColor="#8AD2E9" />
          <stop offset={1} stopColor="#1C81CD" />
        </radialGradient>
        <radialGradient
          id="prefix__paint1_radial_302:37"
          cx={0}
          cy={0}
          r={1}
          gradientUnits="userSpaceOnUse"
          gradientTransform="matrix(0 161 -161 0 481 306)"
        >
          <stop stopColor="#F8E1CE" stopOpacity={0} />
          <stop offset={1} stopColor="#FFCDB7" />
        </radialGradient>
        <linearGradient
          id="prefix__paint2_linear_302:37"
          x1={244.027}
          y1={431.923}
          x2={244.027}
          y2={285}
          gradientUnits="userSpaceOnUse"
        >
          <stop stopColor="#FAEFCC" />
          <stop offset={1} stopColor="#FAEFCC" stopOpacity={0} />
        </linearGradient>
      </defs>
    </svg>
  );
}

// STYLED ELEMENTS

export { AppSection };
