import NextImage, { ImageProps as NextImageProps } from 'next/image';
import NextLink from 'next/link';
import { Box, BoxProps, Text, Flex } from '@chakra-ui/react';

import storeImage from '../../../public/images/home/store.png';
import decorativeBgImage from '../../../public/images/home/store-bg.png';
import { SectionWrapper } from '../../layout/SectionWrapper';
import { useHomeContent } from '../../../context/content/HomePageContent';
import { RichTextContainer } from '../../display/RichTextContainer';

import * as s from './AboutSection.styles';

const AboutSection = (/* props: AboutSectionType */) => {
  const { main } = useHomeContent();
  console.log('content --->>>', main);

  return (
    <SectionWrapper
      id="AboutSection"
      maxWidth="sm"
      bgColor="var(--hof-colors-blue-lighter)"
      pt={['var(--s-64)', 'var(--s-96)', null, 'var(--s-256)']}
      pb={['var(--s-32)', 'var(--s-48)', null, 'var(--s-96)']}
      w="100%"
    >
      <s.InnerContainer>
        <s.DecorativeImage>
          <NextImage src={decorativeBgImage} />
        </s.DecorativeImage>
        <s.StoreImage>
          <NextImage className="AboutSection-store" src={storeImage} />
        </s.StoreImage>
        <s.AboutText>
          <RichTextContainer content={main.aboutSectionText.content[0]} />
          {/* TEMP_LANDING_PAGE */}
          {/* <NextLink href="/uber-uns">
            <a className="learn-more">Learn more</a>
          </NextLink> */}
        </s.AboutText>
      </s.InnerContainer>
    </SectionWrapper>
  );
};

export { AboutSection };
