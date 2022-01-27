import { FC, ReactNode, useState, useEffect, useMemo, useRef } from 'react';
import styled from '@emotion/styled';
import NextLink, { LinkProps as NextLinkProps } from 'next/link';
import NextImage, { ImageProps as NextImageProps } from 'next/image';
import { Box, BoxProps, Flex, Heading, VStack, HStack } from '@chakra-ui/react';
// import { SVGWrapper } from '../../components/shared/svg';

import Slider from 'react-slick';
import { SVGWrapper } from '../../display/SvgWrapper';
import { MaxWidthWrapper } from '../../layout/MaxWidthWrapper';
import { SliderStyles } from '../../display/Slider';

import NewsImage1 from '../../../public/images/home/news.png';
import { BREAKPOINTS, QUERIES } from '../../../context/theme';
import { ArrowRight } from 'phosphor-react';
import { SectionHeading } from '../../layout/SectionHeading';
import { withStyle } from '../../../styles/withStyle';
import { OffersTriangle } from '../../display/SvgElements/OffersTriangle';
import { withMQ as mq } from '../../../context/theme';
// CONSTANTS

// TYPES
// type OffersSliderType = {};

const slides = [
  {
    url: '/news-1',
    image: NewsImage1,
    title: 'Lorem ipsum!',
    details:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Egestas risus ultricies pulvinar tincidunt.',
  },
  {
    url: '/news-2',
    image: NewsImage1,
    title: 'Lorem ipsum dolor sit amet! Lorem ipsum dolor sit amet',
    details:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Egestas risus ultricies pulvinar tincidunt.Lorem ipsum dolor sit amet, consectetur adipiscing elit. Egestas risus ultricies pulvinar tincidunt.',
  },
  {
    url: '/news-3',
    image: NewsImage1,
    title: 'Lorem ipsum dolor sit amet!',
    details:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Egestas risus ultricies pulvinar tincidunt.',
  },
];

import * as s from './OffersSection.styles';
import { SectionWrapper } from '../../layout/SectionWrapper';
import { useHomeContent } from '../../../context/content/HomePageContent';

const OffersSlider = (/* props: OffersSliderType */) => {
  const { promos } = useHomeContent();
  const topPromos = promos.promotion.slice(0, 7);
  console.log('topPromos', topPromos);

  const sliderRef = useRef<any>();
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 2,
    slidesToScroll: 1,
    autoplay: true,
    pauseOnHover: true,
    autoplaySpeed: 2000000,
    cssEase: 'ease',
    responsive: [
      {
        breakpoint: 800,
        // breakpoint: BREAKPOINTS.tabletMin,
        settings: {
          slidesToShow: 1,
        },
      },
    ],
    appendDots: (dots: any) => (
      <s.PaginationWrapper>{dots}</s.PaginationWrapper>
    ),
    customPaging: (i: number) => <s.PaginationDot />,
    // fade: true
  };
  return (
    <s.RootWrapper id="Offers">
      <s.HeaderWrapper>
        <SectionHeading>Offers & Promotions</SectionHeading>
      </s.HeaderWrapper>
      <s.ContentWrapper>
        <DecorativeTriangle />
        <s.SliderWrapper bgColor="transparent" maxWidth="md">
          <Slider ref={sliderRef} {...settings}>
            {topPromos.map(
              (promo: any, index: number) => (
                // <s.Slide key={index}>
                //   <s.SlideImage>
                //     <NextImage src={promo.image} />
                //   </s.SlideImage>
                //   <Box as="div">
                //     <s.SlideTitle>{promo.title}</s.SlideTitle>
                //     <s.SlideText>{promo.details}</s.SlideText>
                //   </Box>
                //   <s.ActionIconButton
                //     size="32px"
                //     color="var(--hof-colors-blue)"
                //   />
                // </s.Slide>
                // null
                <s.Slide key={promo.sys.id}>
                  <s.SlideImage>
                    <NextImage
                      src={'https:' + promo.fields.image.fields.file.url}
                      layout="fill"
                    />
                  </s.SlideImage>
                  <Flex direction="column" justify="space-between" h="100%">
                    <Box as="div">
                      <s.SlideTitle>{promo.fields.title}</s.SlideTitle>
                      <s.SlideText>{promo.fields.summary}</s.SlideText>
                    </Box>
                    <s.ActionIconButton
                      size="32px"
                      color="var(--hof-colors-blue)"
                    />
                  </Flex>
                </s.Slide>
              ),

              // </s.Slide>
              // <NextLink
              //   key={promo.sys.id}
              //   href={'/promos/' + promo.fields.slug}
              // >
              // </NextLink>
            )}
          </Slider>
        </s.SliderWrapper>
      </s.ContentWrapper>
    </s.RootWrapper>
  );
};

// STYLED ELEMENTS

const DecorativeTriangle = () => (
  <SVGWrapper
    component={OffersTriangle}
    sx={mq({
      position: 'absolute',
      left: 0,
      top: 0,
      filter: 'drop-shadow(0 0 10px hsl(200, 68%, 86%))',
      width: '60vw',
      _tabletLargeAndUp: {
        width: '50vw',
      },
      _laptopAndUp: {
        width: '40vw',
      },
    })}
  />
);

export { OffersSlider };
