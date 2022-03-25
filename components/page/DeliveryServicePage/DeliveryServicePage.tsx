import { FC, ReactNode, useState, useEffect, useMemo, useRef } from 'react';
import { styledMediaQueries as mq } from '../../../context/theme';
import styled from '@emotion/styled';
import NextLink, { LinkProps as NextLinkProps } from 'next/link';
import NextImage, { ImageProps as NextImageProps } from 'next/image';

import { Box, Button, ButtonProps } from '@chakra-ui/react';

import DeliveryHeroImage from '../../../public/images/services/delivery.png';
import { PageWithHero } from '../../layout/PageWithHero';
import { FixedHeroImg } from '../../layout/FixedHeroImage';
import { TitleUnderlined } from '../../layout/TitleUnderlined';
import { getEntries } from '../../../store';

import { documentToReactComponents } from '@contentful/rich-text-react-renderer';

// import AppImage from '../../../public/images/home/Phone.png';
import { PaperSection } from '../../layout/PaperSection';
import { SectionWrapper } from '../../layout/SectionWrapper';

import { RichTextContainer } from '../../display/RichTextContainer';
import { ContactButton } from '../../navigation/ContactButton';

export const DeliveryServicePage = (props: any) => {
  const { content } = props;
  console.log(content);

  const { pageTitle, pageSubtitle, serviceDescription, serviceDetails } =
    content;

  return (
    <PageWithHero style={{ backgroundColor: 'var(--hof-colors-blue-lighter)' }}>
      {/* SECTION: ABTF */}
      <FixedHeroImg
        imageSrc={DeliveryHeroImage}
        imagePosition="center center"
        blur={true}
      >
        <TitleUnderlined title={pageTitle} subtitle={pageSubtitle} />
      </FixedHeroImg>

      {/* SECTION: INTRO */}
      <SectionWrapper
        textAlign={['left', null, 'center']}
        style={{
          backgroundColor: 'var(--hof-colors-blue-lighter)',
          paddingBottom: 'var(--s-72)',
        }}
      >
        <PaperSection overTheFold>
          <RichTextContainer content={serviceDescription} />
          <ContactButton />
        </PaperSection>
      </SectionWrapper>

      {/* SECTION: DETAILS */}
      <SectionWrapper
        style={{
          backgroundColor: 'var(--hof-colors-blue-lighter)',
          paddingBottom: 'var(--s-128)',
        }}
      >
        <DetailsSectionText content={serviceDetails} />
      </SectionWrapper>
    </PageWithHero>
  );
};

// STYLED ELEMENTS /////////////////////////

const DetailsSectionText = (props: { content: any }) => (
  <Box
    sx={mq({
      label: 'DetailsSectionText_Overrides',
      mobileAndUp: {
        'p > b': {
          display: 'block',
          fontSize: 'var(--text-24)',
          textAlign: 'left',
          color: 'var(--chakra-colors-gray-800)',
        },
      },
      tabletLargeAndUp: {
        'p > b': {
          textAlign: 'center',
        },
      },
    })}
  >
    <RichTextContainer content={props.content} />
  </Box>
);
