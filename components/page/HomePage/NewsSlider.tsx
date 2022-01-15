import { FC, useRef } from 'react';
import NextLink, { LinkProps as NextLinkProps } from 'next/link';
import NextImage, { ImageProps as NextImageProps } from 'next/image';

import { HALink } from '../../navigation/HA_Link';

import Slider from 'react-slick';
import { SliderButton } from '../../display/Slider';

import { useHomeContent } from '../../../context/content/HomePageContent';

import * as s from './NewsSlider.styles';

const NewsSlider = (/* props: NewsSliderType */) => {
  const { posts } = useHomeContent();
  const topPosts = posts.post.slice(0, 5);

  console.log('posts -->>>', posts);
  const sliderRef = useRef<any>();
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    ST_slidesToroll: 1,
    fade: true,
    autoplay: true,
    pauseOnHover: true,
    autoplaySpeed: 5000,
    cssEase: 'ease-in-out'
  };

  return (
    <s.SliderWrapper id="NewsSlider">
      <s.ButtonsWrapper>
        <SliderButton
          aria-label="Got to previous slide"
          slider={sliderRef}
          goTo="prev"
          sx={s.SliderButtonSX}
          size="sm"
        />
        <SliderButton
          aria-label="Got to next slide"
          slider={sliderRef}
          goTo="next"
          sx={s.SliderButtonSX}
          size="sm"
        />
      </s.ButtonsWrapper>
      <Slider ref={sliderRef} {...settings}>
        {topPosts.map((post: any, index: number) => (
          <s.Slide key={post.sys.id} index={index}>
            <s.SlideImage>
              {/* <NextImage src={NewsImage1} /> */}
              <NextImage
                src={'https:' + post.fields.image.fields.file.url}
                priority={true}
                layout="fill"
              />
            </s.SlideImage>
            <s.SlideDetailsWrapper>
              <s.SlideTitle
                data-testid={`${post.sys.id}-title`}
                key={`${post.sys.id}-title`}
              >
                <NextLink href={'/posts/' + post.fields.slug}>
                  <a>{post.fields.title}</a>
                </NextLink>
              </s.SlideTitle>
              <s.SlideText>{post.fields.summary}</s.SlideText>
              <LearnMoreLink slug={'/posts/' + post.fields.slug} />
            </s.SlideDetailsWrapper>
          </s.Slide>
        ))}
      </Slider>
    </s.SliderWrapper>
  );
};

// STYLES /////////////////////////////////

const LearnMoreLink = (p: { slug: string }) => (
  <HALink
    data-testid="Slide-LearnMoreLink-@NewsSlider"
    href={`/posts/${p.slug}`}
    sx={{
      color: 'var(--hof-colors-red) !important',
      fontWeight: 'semibold',
      justifyContent: 'space-evenly',
      w: 'fit-content',
      p: '8px 6px',
      ml: '-6px',
      borderRadius: '8px',
      ':hover': {
        textDecoration: 'none',
        bgColor: 'hsl(1, 67%, 49%, 0.08)'
      }
    }}
  >
    Learn more
  </HALink>
);

export { NewsSlider };
