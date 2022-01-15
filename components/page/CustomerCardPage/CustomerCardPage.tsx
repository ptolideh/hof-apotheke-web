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

export const CustomerCardPage = (props: any) => {
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
        <TitleUnderlined title={'`pageTitle`'} subtitle={'`pageSubtitle`'} />
      </FixedHeroImg>

      {/* SECTION: INTRO */}
      <SectionWrapper
        textAlign={['left', null, 'center']}
        style={{
          backgroundColor: 'var(--hof-colors-blue-lighter)',
          paddingBottom: 'var(--s-72)'
        }}
      >
        <PaperSection>
          <RichTextContainer content={serviceDescription} />
          <ContactButton />
        </PaperSection>
      </SectionWrapper>

      {/* SECTION: DETAILS */}
      <SectionWrapper
        style={{
          backgroundColor: 'var(--hof-colors-blue-lighter)',
          paddingBottom: 'var(--s-128)'
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
          color: 'var(--chakra-colors-gray-800)'
        }
      },
      tabletLargeAndUp: {
        'p > b': {
          textAlign: 'center'
        }
      }
    })}
  >
    <RichTextContainer content={props.content} />
  </Box>
);

const ContactButton = (props: any) => (
  <Box
    sx={{
      label: 'ContactButton_Wrapper',
      textAlign: 'center',
      paddingBottom: 'var(--s-16)'
    }}
  >
    <NextLink href="/kontakt">
      <a>
        <Button
          tabindex="-1"
          sx={{
            fontSize: '2xl',
            height: '72px',
            width: '256px',
            backgroundColor: 'var(--hof-colors-red)',
            color: 'white',
            transition: 'var(--transition-med)',
            boxShadow: '0 4px 12px -2px hsl(1, 67%, 49%)',

            '&:hover': {
              backgroundColor: 'hsl(1, 68%, 45%)',
              boxShadow: '0 2px 4px -1px hsl(1, 67%, 49%)'
            }
          }}
        >
          Kontakt
        </Button>
      </a>
    </NextLink>
  </Box>
);

const RegularServicesSection = (/* props: RegularServicesSectionType */) => {
  return (
    //
    <Box {...styles.SectionWrapper}>
      <MaxWidthWrapper>
        <ServicesContainer>
          {RegularServices.map((service) => (
            <ServiceCard key={service.id}>
              <ServiceIcon>
                <service.Icon
                  size="32px"
                  weight="fill"
                  color="var(--hof-colors-red)"
                />
              </ServiceIcon>
              <NextLink href={service.link}>
                <ServiceTitle>{service.title}</ServiceTitle>
              </NextLink>
              <ServiceDetails>{service.details}</ServiceDetails>
            </ServiceCard>
          ))}
        </ServicesContainer>
      </MaxWidthWrapper>
    </Box>
  );
};

// STYLED ELEMENTS

/**
 * Primary Services
 */

const styles = withStyle('RegServices', {
  SectionWrapper: {
    as: 'section',
    position: 'relative',
    display: 'flex',
    flexDirection: 'column',
    width: '100%',
    px: 0,
    py: ['var(--s-96)', 'var(--s-64)']
  }
});

const Benefits = (p: {}) => (
  <Box
    id="Benefits"
    data-cl="MediaGrid"
    display="grid"
    position="relative"
    gridTemplateColumns={[
      'repeat(auto-fit, minmax(min(256px, 100%), 1fr))',
      null,
      'repeat(auto-fit, minmax(min(352px, 100%), 1fr))'
    ]}
    gridGap={['var(--s-12)', 'var(--s-24)']}
    maxW={[null, null, null, '1100px']}
    m={[null, null, null, '0 auto']}
  >
    <Box
      data-cl="MediaGrid_Item"
      as="article"
      display="grid"
      gridTemplateColumns="auto 1fr"
      gridTemplateRows="auto auto"
      gridGap="var(--s-8) var(--s-16)"
      alignContent="start"
      justifyContent="start"
      p="var(--s-16)"
      w="100%"
      maxW="100%"
    ></Box>
  </Box>
);

const ServiceIcon = styled.span`
  grid-column: 1;
  grid-row: 1 / -1;
  align-self: start;
  margin-top: -2px;
`;

// const ServiceCard = styled.article`
//   /* display: grid; */
//   /* grid-template-columns: auto 1fr;
//   grid-template-rows: auto auto; */
//   /* gap: var(--s-8) var(--s-16); */
//   /* align-content: start; */
//   /* justify-content: start; */
//   /* padding: var(--s-16);
//   border-radius: var(--chakra-radii-xl);
//   width: 100%;
//   max-width: 100%; */
//   background-color: transparent;
//   transition: var(--transition-med);

//   :hover {
//     cursor: pointer;
//     background-color: hsl(0, 0%, 97%);
//   }
// `;

// const _ServicesContainer = styled.div`
//   background-color: hsl(0, 0%, 100%);
//   /* box-shadow: 0 2px 15px var(--hof-colors-orange); */
//   box-shadow: 0 4px 15px hsl(215, 60%, 80%, 0.6);
//   border-bottom: 4px solid var(--hof-colors-red);

//   padding: var(--s-16);
//   border-radius: var(--chakra-radii-2xl);
//   margin-top: 0;
//   @media ${QUERIES.tabletAndUp} {
//     gap: var(--s-24);
//   }

//   @media ${QUERIES.tabletLargeAndUp} {
//     grid-template-columns: repeat(auto-fit, minmax(min(352px, 100%), 1fr));
//   }

//   @media ${QUERIES.laptopAndUp} {
//     max-width: 1100px;
//     margin: 0 auto;
//   }
// `;

const ServiceTitle = styled.h3`
  grid-column: 2;
  grid-row: 1;
  line-height: 1;
  color: var(--hof-colors-blue);
  font-weight: var(--weight-semibold);
  font-size: var(--text-18);
  width: 100%;
  text-decoration: underline;
  text-underline-offset: 0.15em;
  font-family: var(--font-poppings);

  @media ${QUERIES.tabletLargeAndUp} {
    text-decoration: revert;
  }
`;

const ServiceDetails = styled.p`
  grid-column: 2;
  grid-row: 2;
  font-size: var(--text-16);
  line-height: 1.5;
  width: 100%;
`;

export { RegularServicesSection };
