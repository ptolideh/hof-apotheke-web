import { styledMediaQueries as mq } from '../../../context/theme';

import NextImage, { ImageProps as NextImageProps } from 'next/image';

import { Box, Heading, VStack, Grid, GridItem, Flex } from '@chakra-ui/react';

import CareAidsHeroImage from '../../../public/images/services/careaids.jpeg';
import MedProcurementImage from '../../../public/images/services/medicine-procurement.png';
import RscProcurementImage from '../../../public/images/services/resource-procurement.png';
import { PageWithHero } from '../../layout/PageWithHero';
import { FixedHeroImg } from '../../layout/FixedHeroImage';
import { TitleUnderlined } from '../../layout/TitleUnderlined';

// import AppImage from '../../../public/images/home/Phone.png';
import { PaperSection } from '../../layout/PaperSection';
import { SectionWrapper } from '../../layout/SectionWrapper';

import { RichTextContainer } from '../../display/RichTextContainer';
import { AppDownloadStickers } from '../../display/AppDownloadStickers';

export const CarAidPage = (props: any) => {
  const { content } = props;
  console.log(content);

  const {
    pageTitle,
    pageSubtitle,
    type
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
        imageSrc={CareAidsHeroImage}
        imagePosition="center top"
        blur={true}
      >
        <TitleUnderlined title={pageTitle} subtitle={pageSubtitle} />
      </FixedHeroImg>
      <SectionWrapper bgColor="var(--hof-colors-blue-lighter)">
        <RichTextContainer content={content.introSection} py="var(--s-40)" />
      </SectionWrapper>
      <SectionWrapper maxWidth="md" bgColor="var(--hof-colors-blue-lighter)">
        <MediaBlock_List>
          {content.type?.map((aidType: any) => (
            <PaperSection key={aidType.sys.id} shadowSpread="sm">
              <MediaBlock_Row>
                <MediaBlock_ImageCol
                  img={'https:' + aidType.fields.image.fields.file.url}
                />
                <MediaBlock_DetailsCol
                  heading={aidType.fields.title}
                  content={aidType.fields.description}
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
    spacing="var(--s-96)"
    sx={{
      label: 'MediaBlock_List',
      position: 'relative',
      mb: 'var(--s-128)'
    }}
  >
    {p.children}
  </VStack>
);

const MediaBlock_Row = (p: { reverse?: boolean; children: any }) => (
  <Flex
    sx={mq({
      label: 'MediaBlock_Row',
      mobileAndUp: {
        gap: 'var(--s-48)',
        width: '100%',
        flexDirection: 'column'
      },
      tabletLargeAndUp: {
        alignItems: 'flex-start',
        flexDirection: p.reverse ? 'row-reverse' : 'row'
      }
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
        flex: '1 10 100%',
        maxWidth: '400px',
        borderRadius: '40px 4px 40px 4px',
        overflow: 'hidden',

        aspectRatio: '1 / 1',
        '@supports not (aspect-ratio: 1 / 1)': {
          '&::before': {
            float: 'left',
            pt: '100%',
            content: '""'
          },
          '&::after': {
            display: 'block',
            content: '""',
            clear: 'both'
          }
        },

        /* NextJS image fixes */
        '& > div': {
          height: '100%',
          maxHeight: '100%'
        },
        '& img': {
          objectFit: 'cover',
          objectPosition: 'center'
        }
      }
    })}
  >
    <NextImage src={p.img} layout="fill" />
  </Flex>
);

const MediaBlock_DetailsCol = (p: {
  reverse?: boolean;
  heading: string;
  content: any;
}) => (
  <Flex
    flexDirection="column"
    sx={mq({
      label: 'MediaBlock_DetailsCol',
      mobileAndUp: {
        // border: '1px solid green',
        flex: '1',
        backgroundColor: 'white'
      },
      laptopAndUp: {}
    })}
  >
    {/* Title */}
    <Heading
      as="h2"
      sx={{
        label: 'MediaBlock_Heading',
        display: 'flex',
        alignItems: 'flex-start',
        marginBottom: 'var(--s-24)'
      }}
    >
      <Box
        as="span"
        sx={{
          label: 'MediaBlock_Heading-Decoration',
          display: 'inline-flex',
          justifyContent: 'center',
          flexShrink: 0,
          alignItems: 'baseline',
          color: 'white',
          pt: '1.25em',
          marginRight: 'var(--s-16)',
          borderLeft: 'var(--s-8) solid var(--hof-colors-red)'
        }}
      ></Box>
      <Box
        as="span"
        sx={{
          label: 'MediaBlock_Heading-Text',
          color: 'var(--hof-colors-blue)'
        }} //
      >
        {p.heading}
      </Box>
    </Heading>

    {/* Content */}
    <Box
      sx={{
        label: 'MediaBlock-Content',
        fontSize: 'var(--text-20)',
        lineHeight: '1.85',
        mb: 'var(--s-32)',
        color: 'var(--chakra-colors-gray-800)',
        'b': {
          color: 'var(--hof-colors-red)'
        }
      }}
    >
      <RichTextContainer content={p.content} />
    </Box>
  </Flex>
);

// const MediaBlock_Row = (p: { children: any }) => (
//   <Grid
//     templateColumns="repeat(16, 1fr)"
//     sx={mq({
//       label: 'MediaBlock_Row',
//       mobileAndUp: {
//         paddingBottom: 'var(--s-32)'
//       },
//       laptopAndUp: {
//         paddingBottom: 'var(--s-64)'
//       }
//     })}
//   >
//     {p.children}
//   </Grid>
// );

// const MediaBlock_ImageCol = (p: {
//   img: NextImageProps['src'];
//   reverse?: boolean;
// }) => (
//   <GridItem
//     gridColumn={['1 / -1', null, null, p.reverse ? '2/7' : '10/-1']}
//     gridRow={['1']}
//     sx={mq({
//       label: 'MediaBlock_ImageCol',
//       mobileAndUp: {
//         //
//         position: 'relative',
//         justifySelf: 'center',
//         alignSelf: 'start',
//         justifyContent: 'center',
//         width: 'min(400px, 100%)',

//         /* NextJS image fixes */
//         '& > div': {
//           height: '100%',
//           maxHeight: '100%'
//         },
//         '& img': {
//           objectFit: 'cover',
//           objectPosition: 'center'
//         }
//       }
//     })}
//   >
//     <NextImage src={p.img} />
//   </GridItem>
// );

// const MediaBlock_DetailsCol = (p: {
//   reverse?: boolean;
//   heading: { num: number; text: string };
//   children: any;
// }) => (
//   <GridItem
//     gridColumn={['1 / -1', null, null, p.reverse ? '8/16' : '1/10']}
//     sx={mq({
//       label: 'MediaBlock_DetailsCol',
//       mobileAndUp: {
//         backgroundColor: 'white',
//         padding: 'var(--s-24)',
//         py: 'var(--s-40)',
//         borderRadius: '12px 12px 24px 24px',
//         boxShadow: '0 -4px 12px hsl(215deg 60% 80% / 40%)',
//         marginTop: '-128px',
//         zIndex: 1
//       },
//       laptopAndUp: {
//         boxShadow: '0 1px 6px hsl(215deg 60% 80% / 40%)',
//         padding: 'var(--s-40)',
//         borderRadius: p.reverse ? '40px 40px 40px 4px' : '40px 40px 4px 40px',
//         marginTop: 0
//       }
//     })}
//   >
//     {/* Title */}
//     <Heading
//       as="h2"
//       sx={{
//         label: 'ActionStep_Heading',
//         display: 'flex',
//         alignItems: 'center',
//         marginBottom: 'var(--s-24)'
//       }}
//     >
//       <Box
//         as="span"
//         sx={{
//           label: 'ActionStep_Heading-Number',
//           display: 'inline-flex',
//           justifyContent: 'center',
//           flexShrink: 0,
//           alignItems: 'baseline',
//           backgroundColor: 'var(--hof-colors-red)',
//           width: '1.45em',
//           padding: '0.1em 0',
//           borderRadius: '50%',
//           color: 'white',
//           marginRight: 'var(--s-20)'
//         }}
//       >
//         {p.heading.num}
//       </Box>
//       <Box
//         as="span"
//         sx={{
//           label: 'ActionStep_Heading-Text',
//           color: 'var(--hof-colors-blue)'
//         }} //
//       >
//         {p.heading.text}
//       </Box>
//     </Heading>

//     {/* Content */}
//     <Box
//       sx={{
//         label: 'ActionStepDesc-Content',
//         fontSize: 'var(--text-20)',
//         lineHeight: '1.85',
//         mb: 'var(--s-32)',
//         color: 'var(--chakra-colors-gray-800)',
//         'b': {
//           color: 'var(--hof-colors-red)'
//         }
//       }}
//     >
//       {p.children}
//     </Box>
//   </GridItem>
// );
