import { styledMediaQueries as mq } from '../../../context/theme';

import NextImage, { ImageProps as NextImageProps } from 'next/image';

import {
  Box,
  Heading,
  VStack,
  Grid,
  GridItem,
  Flex,
  Modal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalFooter,
  ModalBody,
  ModalCloseButton,
  useDisclosure
} from '@chakra-ui/react';

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
import styled from '@emotion/styled';

export const NaturalRemedies = (props: any) => {
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

  const { isOpen, onOpen, onClose } = useDisclosure();

  return (
    <PageWithHero style={{ backgroundColor: 'var(--hof-colors-blue-lighter)' }}>
      {/* SECTION: ABTF */}
      <FixedHeroImg
        imageSrc={CareAidsHeroImage}
        imagePosition="center top"
        blur={true}
      >
        <TitleUnderlined title={'`pageTitle`'} subtitle={'`pageSubtitle`'} />
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
                  onReadMoreClick={onOpen}
                />
              </MediaBlock_Row>
            </PaperSection>
          ))}
        </MediaBlock_List>
      </SectionWrapper>
      <ReadMoreModal isOpen={isOpen} onClose={onClose} />
    </PageWithHero>
  );
};

// STYLED ELEMENTS /////////////////////////

const MediaBlock_List = (p: { children: any }) => (
  <VStack
    id="MediaBlock_List"
    spacing="var(--s-96)"
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
  onReadMoreClick?: () => any;
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
      data-name="MediaBlock_Heading"
      as="h2"
      sx={{
        display: 'flex',
        alignItems: 'flex-start',
        marginBottom: 'var(--s-24)'
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
          color: 'var(--hof-colors-red)'
        }
      }}
    >
      <RichTextContainer content={p.content} />
      <Box
        data-name="MediaBlock_ReadMoreBtn"
        onClick={p.onReadMoreClick}
        color="var(--hof-colors-red)"
        p="4px 16px"
        ml="-16px"
        bgColor="transparent"
        borderRadius="12px"
        w="fit-content"
        cursor="pointer"
        sx={{
          ':hover': {
            bgColor: 'hsl(0, 0%, 0%, 0.05)'
          }
        }}
      >
        Read more
      </Box>
    </Box>
  </Flex>
);

const ReadMoreModal = (p: { isOpen: boolean; onClose: () => void }) => (
  <Modal
    data-cl="ReadMoreModal"
    isOpen={p.isOpen}
    onClose={p.onClose}
    isCentered
    motionPreset="slideInBottom"
    size="xl"
  >
    <ModalOverlay />
    <ModalContent>
      <ModalHeader data-cl="ReadMoreModal_Header">Modal Title</ModalHeader>
      <ModalCloseButton />
      <ModalBody data-cl="ReadMoreModal_Body">
        Spezielle Arzneimittel können Sie als Kunde nicht privat beziehen. Wir
        helfen Ihnen gerne weiter und bestellen das gewünschte Medikament direkt
        beim Hersteller. Gerne prüfen wir Ihren Bestellwunsch und stellen Ihnen
        schnellstmöglich (Hersteller abhängig) das Produkt zur Verfügung.
      </ModalBody>
    </ModalContent>
  </Modal>
);
