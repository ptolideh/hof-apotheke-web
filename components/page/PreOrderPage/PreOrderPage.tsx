import { styledMediaQueries as mq } from '../../../context/theme';

import NextImage, { ImageProps as NextImageProps } from 'next/image';

import { Box, Heading, VStack, Grid, GridItem } from '@chakra-ui/react';

import PreorderHeroImage from '../../../public/images/services/preorder.png';
import { PageWithHero } from '../../layout/PageWithHero';
import { FixedHeroImg } from '../../layout/FixedHeroImage';
import { TitleUnderlined } from '../../layout/TitleUnderlined';

import AppImage from '../../../public/images/home/Phone.png';
import { PaperSection } from '../../layout/PaperSection';
import { SectionWrapper } from '../../layout/SectionWrapper';

import { RichTextContainer } from '../../display/RichTextContainer';
import { AppDownloadStickers } from '../../display/AppDownloadStickers';

export const PreOrderPage = (props: any) => {
  const { content } = props;

  const {
    pageTitle,
    pageSubtitle,
    serviceDescription,
    stepOneTitle,
    stepOneDescription,
    stepTwoTitle,
    stepTwoDescription,
    stepThreeTitle,
    stepThreeDescription,
  } = content;

  return (
    <PageWithHero style={{ backgroundColor: 'var(--hof-colors-blue-lighter)' }}>
      {/* SECTION: ABTF */}
      <FixedHeroImg
        imageSrc={PreorderHeroImage}
        imagePosition="center top"
        blur={true}
      >
        <TitleUnderlined title={pageTitle} subtitle={pageSubtitle} />
      </FixedHeroImg>

      {/* SECTION: INTRO */}
      <SectionWrapper
        style={{ backgroundColor: 'var(--hof-colors-blue-lighter)' }}
      >
        <PaperSection mb={['var(--s-96)', null, null, 'var(--s-128)']}>
          <RichTextContainer content={serviceDescription} />
        </PaperSection>
      </SectionWrapper>

      {/* SECTION: ACTION STEPS */}
      <SectionWrapper
        style={{ backgroundColor: 'var(--hof-colors-blue-lighter)' }}
      >
        <ActionSteps_Container>
          {/* STEP 1 */}
          <ActionStep_Row>
            <ActionStepImage_Col img={AppImage} />
            <ActionStepDesc_Col heading={{ num: 1, text: stepOneTitle }}>
              {stepOneDescription}
              <AppDownloadStickers />
            </ActionStepDesc_Col>
          </ActionStep_Row>

          {/* STEP 2 */}
          <ActionStep_Row>
            <ActionStepImage_Col img={AppImage} reverse />
            <ActionStepDesc_Col
              heading={{ num: 2, text: stepTwoTitle }}
              reverse
            >
              {stepTwoDescription}
            </ActionStepDesc_Col>
          </ActionStep_Row>

          {/* STEP 3 */}
          <ActionStep_Row>
            <ActionStepImage_Col img={AppImage} />
            <ActionStepDesc_Col heading={{ num: 3, text: stepThreeTitle }}>
              {stepThreeDescription}
            </ActionStepDesc_Col>
          </ActionStep_Row>
        </ActionSteps_Container>
      </SectionWrapper>
    </PageWithHero>
  );
};

// STYLED ELEMENTS /////////////////////////

const ActionSteps_Container = (p: { children: any }) => (
  <VStack
    spacing="var(--s-64)"
    sx={{
      label: 'ActionSteps_Container',
      position: 'relative',
      mb: 'var(--s-128)',
    }}
  >
    {p.children}
  </VStack>
);

const ActionStep_Row = (p: { children: any }) => (
  <Grid
    templateColumns="repeat(16, 1fr)"
    sx={mq({
      label: 'ActionStep_Row',
      mobileAndUp: {
        paddingBottom: 'var(--s-32)',
      },
      laptopAndUp: {
        paddingBottom: 'var(--s-64)',
      },
    })}
  >
    {p.children}
  </Grid>
);

const ActionStepImage_Col = (p: {
  img: NextImageProps['src'];
  reverse?: boolean;
}) => (
  <GridItem
    gridColumn={['1 / -1', null, null, p.reverse ? '2/7' : '11/16']}
    gridRow={['1']}
    sx={{
      label: 'ActionStepImage_Col',
      //
      position: 'relative',
      justifySelf: 'center',
      alignSelf: 'start',
      justifyContent: 'center',
      width: 'min(400px, 100%)',

      /* NextJS image fixes */
      '& > div': {
        height: '100%',
        maxHeight: '100%',
      },
      '& img': {
        objectFit: 'cover',
        objectPosition: 'center',
      },
    }}
  >
    <NextImage src={p.img} />
  </GridItem>
);

const ActionStepDesc_Col = (p: {
  reverse?: boolean;
  heading: { num: number; text: string };
  children: any;
}) => (
  <GridItem
    gridColumn={['1 / -1', null, null, p.reverse ? '8/16' : '2/10']}
    sx={mq({
      label: 'ActionStepDesc_Col',
      mobileAndUp: {
        backgroundColor: 'white',
        padding: 'var(--s-24)',
        py: 'var(--s-40)',
        borderRadius: '12px 12px 24px 24px',
        boxShadow: '0 -4px 12px hsl(215deg 60% 80% / 40%)',
        marginTop: '-320px',
        zIndex: 1,
      },
      laptopAndUp: {
        boxShadow: '0 1px 6px hsl(215deg 60% 80% / 40%)',
        padding: 'var(--s-40)',
        borderRadius: p.reverse ? '40px 40px 40px 4px' : '40px 40px 4px 40px',
        marginTop: 0,
      },
    })}
  >
    {/* Title */}
    <Heading
      as="h2"
      sx={{
        label: 'ActionStep_Heading',
        display: 'flex',
        alignItems: 'center',
        marginBottom: 'var(--s-24)',
      }}
    >
      <Box
        as="span"
        sx={{
          label: 'ActionStep_Heading-Number',
          display: 'inline-flex',
          justifyContent: 'center',
          flexShrink: 0,
          alignItems: 'baseline',
          backgroundColor: 'var(--hof-colors-red)',
          width: '1.45em',
          padding: '0.1em 0',
          borderRadius: '50%',
          color: 'white',
          marginRight: 'var(--s-20)',
        }}
      >
        {p.heading.num}
      </Box>
      <Box
        as="span"
        sx={{
          label: 'ActionStep_Heading-Text',
          color: 'var(--hof-colors-blue)',
        }} //
      >
        {p.heading.text}
      </Box>
    </Heading>

    {/* Content */}
    <Box
      sx={{
        label: 'ActionStepDesc-Content',
        fontSize: 'var(--text-20)',
        lineHeight: '1.85',
        mb: 'var(--s-32)',
        color: 'var(--chakra-colors-gray-800)',
        'b': {
          color: 'var(--hof-colors-red)',
        },
      }}
    >
      {p.children}
    </Box>
  </GridItem>
);
