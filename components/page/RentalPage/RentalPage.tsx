import { styledMediaQueries as mq } from '../../../context/theme';

import NextImage, { ImageProps as NextImageProps } from 'next/image';

import { Box, Heading, VStack, Grid, GridItem, Flex } from '@chakra-ui/react';

import RentalHeroImage from '../../../public/images/services/rental.jpg';
import { PageWithHero } from '../../layout/PageWithHero';
import { FixedHeroImg } from '../../layout/FixedHeroImage';
import { TitleUnderlined } from '../../layout/TitleUnderlined';

// import AppImage from '../../../public/images/home/Phone.png';
import { PaperSection } from '../../layout/PaperSection';
import { SectionWrapper } from '../../layout/SectionWrapper';

import { RichTextContainer } from '../../display/RichTextContainer';
import { ContactButton } from '../../navigation/ContactButton';

export const RentalPage = (props: any) => {
  const { content } = props;
  console.log('rental -->', content);

  const {
    pageTitle,
    pageSubtitle,
    type,
    // serviceDescription,
    // stepOneTitle,
    // stepOneDescription,
    // stepTwoTitle,
    // stepTwoDescription,
    // stepThreeTitle,
    // stepThreeDescription
  } = content;

  return (
    <PageWithHero style={{ backgroundColor: 'var(--hof-colors-blue-lighter)' }}>
      {/* SECTION: ABTF */}
      <FixedHeroImg
        imageSrc={RentalHeroImage}
        imagePosition="center top"
        blur={true}
      >
        <TitleUnderlined title={pageTitle} subtitle={pageSubtitle} />
      </FixedHeroImg>
      <SectionWrapper maxWidth="sm" bgColor="var(--hof-colors-blue-lighter)">
        <RichTextContainer
          content={content.introSection}
          py="var(--s-40)"
          w="min(100%, 900px)"
          mx="auto"
          textAlign="center"
        />
        <Flex justifyContent="center" w="100%" mt="-24px" pb="24px">
          <ContactButton />
        </Flex>
      </SectionWrapper>

      <SectionWrapper maxWidth="md" bgColor="var(--hof-colors-blue-lighter)">
        <MediaBlock_List>
          {content.type?.map((rentalType: any) => (
            <PaperSection key={rentalType.sys.id} shadowSpread="sm">
              <MediaBlock_Row>
                <MediaBlock_ImageCol
                  img={'https:' + rentalType.fields.image.fields.file.url}
                />
                <MediaBlock_DetailsCol
                  heading={rentalType.fields.title}
                  content={rentalType.fields.description}
                  fees={{
                    rent: rentalType.fields.rentalFee,
                    deposit: rentalType.fields.deposit,
                    period: rentalType.fields.time,
                  }}
                />
              </MediaBlock_Row>
            </PaperSection>
          ))}
        </MediaBlock_List>
      </SectionWrapper>
    </PageWithHero>
  );
};

// STYLED ELEMENTS /////////////////////////

const MediaBlock_List = (p: { children: any }) => (
  <VStack
    id="MediaBlock_List"
    spacing="64px"
    position="relative"
    mb="var(--s-128)"
  >
    {p.children}
  </VStack>
);

const MediaBlock_Row = (p: { reverse?: boolean; children: any }) => (
  <Flex
    data-testid="MediaBlock_Row"
    sx={mq({
      mobileAndUp: {
        gap: 'var(--s-48)',
        width: '100%',
        flexDirection: 'column',
      },
      tabletLargeAndUp: {
        alignItems: 'flex-start',
        flexDirection: p.reverse ? 'row-reverse' : 'row',
      },
    })}
  >
    {p.children}
  </Flex>
);

const MediaBlock_ImageCol = (p: {
  img: NextImageProps['src'];
  reverse?: boolean;
}) => (
  <Flex
    sx={mq({
      label: 'MediaBlock_ImageCol',
      mobileAndUp: {
        position: 'relative',
        justifyContent: 'center',
        borderRadius: '40px 4px 40px 4px',
        overflow: 'hidden',

        aspectRatio: '6 / 3',
        '@supports not (aspect-ratio: 6 / 3)': {
          height: '100vh',
          maxHeight: '250px',
        },

        /* NextJS image fixes */
        '& > div': {
          height: '100%',
          maxHeight: '100%',
          minHeight: '100%',
        },
        '& img': {
          objectFit: 'cover',
          objectPosition: 'center 20%',
        },
      },
      tabletLargeAndUp: {
        justifyContent: 'center',
        flex: '1 10 100%',
        maxWidth: '320px',

        aspectRatio: '1 / 1',
        '@supports not (aspect-ratio: 1 / 1)': {
          height: 'revert',
          maxHeight: 'revert',
          '&::before': {
            float: 'left',
            pt: '100%',
            content: '""',
          },
          '&::after': {
            display: 'block',
            content: '""',
            clear: 'both',
          },
        },
      },
    })}
  >
    <NextImage src={p.img} layout="fill" />
  </Flex>
);

const MediaBlock_DetailsCol = (p: {
  reverse?: boolean;
  heading: string;
  content: any;
  fees: { rent: number; deposit: number; period: string };
}) => (
  <Flex
    flexDirection="column"
    sx={mq({
      label: 'MediaBlock_DetailsCol',
      mobileAndUp: {
        // border: '1px solid green',
        flex: '1',
        backgroundColor: 'white',
      },
      laptopAndUp: {},
    })}
  >
    {/* Title */}
    <Heading
      data-name="MediaBlock_Heading"
      as="h2"
      sx={{
        display: 'flex',
        alignItems: 'flex-start',
        marginBottom: 'var(--s-24)',
      }}
    >
      <Box
        data-name="MediaBlock_Heading-Decoration"
        display="inline-flex"
        justify="center"
        flexShrink={0}
        alignItems="baseline"
        color="white"
        pt="1.25em"
        mr="var(--s-16)"
        borderLeft="var(--s-8) solid var(--hof-colors-red)"
      ></Box>

      <Box
        data-name="MediaBlock_Heading-Text"
        display="inline-block"
        color="var(--hof-colors-blue)"
      >
        {p.heading}
      </Box>
    </Heading>

    {/* Content */}
    <Box
      data-name="MediaBlock_Content"
      fontSize="var(--text-20)"
      lineHeight="1.85"
      mb="var(--s-32)"
      color="var(--chakra-colors-gray-800)"
      sx={{
        'b': {
          color: 'var(--hof-colors-red)',
        },
      }}
    >
      <RichTextContainer content={p.content} />

      {/* Fees */}
      <Box
        className="rental-fees"
        fontWeight="bold"
        color="gray.700"
        mt="-16px"
        fontSize="1.1em"
        lineHeight="2"
      >
        <div>
          €{p.fees.rent} / {p.fees.period}{' '}
        </div>
        <div>€{p.fees.deposit} deposit </div>
      </Box>
    </Box>
  </Flex>
);
