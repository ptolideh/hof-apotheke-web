import {
  Box,
  Flex,
  Heading,
  Modal,
  ModalBody,
  ModalCloseButton,
  ModalContent,
  ModalFooter,
  ModalHeader,
  ModalOverlay,
  SimpleGrid,
  useDisclosure,
  VStack,
} from '@chakra-ui/react';
import { RichTextContainer } from '../../display/RichTextContainer';
import { FixedHeroImg } from '../../layout/FixedHeroImage';
import { PageWithHero } from '../../layout/PageWithHero';
import { PaperSection } from '../../layout/PaperSection';
import { SectionWrapper } from '../../layout/SectionWrapper';
import { TitleUnderlined } from '../../layout/TitleUnderlined';
import NextImage, { ImageProps as NextImageProps } from 'next/image';

import * as s from './AboutUsPage.styles';
import { SectionHeadingUnderlined } from '../../layout/SectionHeadingUnderlined';
import { Anchor } from 'phosphor-react';
import { AnchorTag } from '../../navigation/AnchorTag';

export const AboutUsPage = ({ content }: any) => {
  console.log('about us content -->>>', content);
  const {
    historyDescription,
    historyTitle,
    historySummary,
    historyImage,
    introSection,
    member: teamMembers,
    teamTitle,
    teamSubtitle,
    name,
    pageSubtitle,
    pageTitle,
    heroImage,
  } = content;
  const { isOpen, onOpen, onClose } = useDisclosure();

  return (
    <PageWithHero style={{ backgroundColor: 'var(--hof-colors-blue-lighter)' }}>
      {/* SECTION: ABTF */}
      <FixedHeroImg
        imageSrc={'https:' + heroImage.fields.file.url}
        imagePosition="center bottom"
      >
        <TitleUnderlined title={pageTitle} subtitle={pageSubtitle} />
      </FixedHeroImg>
      <SectionWrapper
        style={{ backgroundColor: 'var(--hof-colors-blue-lighter)' }}
      >
        <PaperSection
          overTheFold
          mb={['var(--s-96)', null, null, 'var(--s-128)']}
        >
          <RichTextContainer content={historyDescription} />
          <br />
          <AnchorTag id="geschichte" />
          <SectionHeadingUnderlined style={{ marginBottom: '63px' }}>
            {historyTitle}
          </SectionHeadingUnderlined>
          <s.History_Section>
            <s.History_ImageCol>
              <NextImage
                src={'https:' + historyImage.fields.file.url}
                layout="fill"
              />
            </s.History_ImageCol>
            <s.History_DetailsCol>
              {historySummary}
              {/* <Button onClick={onOpen}>Open Modal</Button>*/}
              <span onClick={onOpen}>Learn more</span>
            </s.History_DetailsCol>
            <HistoryModal
              isOpen={isOpen}
              onClose={onClose}
              content={historyDescription}
              headerTitle={historyTitle}
            />
          </s.History_Section>
        </PaperSection>
      </SectionWrapper>
      <SectionWrapper
        maxWidth="lg"
        style={{ backgroundColor: 'var(--hof-colors-blue-lighter)' }}
      >
        {/* TEAM */}
        <AnchorTag id="team" />
        <SectionHeadingUnderlined style={{ marginBottom: '63px' }}>
          {teamTitle}
        </SectionHeadingUnderlined>
        <s.TeamSectionSubtitle>{teamSubtitle}</s.TeamSectionSubtitle>
        <s.TeamMembers_Grid>
          {teamMembers.map((member: any) => (
            <TeamMemberCard key={member.sys.id} member={member.fields} />
          ))}

          {/* Fix for Card loses layout due to absolute pos */}
          <TeamMemberCard
            style={{
              opacity: 0,
            }}
            aria-hidden="true"
            member={{
              fullName: 'placeholder',
              title: 'placeholder',
            }}
          />
        </s.TeamMembers_Grid>
      </SectionWrapper>
    </PageWithHero>
  );
};

const TeamMemberCard = ({ member, ...rest }: any) => (
  <s.TeamMemberCard__Root {...rest}>
    <s.TeamMemberCard_OuterBox>
      <s.TeamMemberCard_InnerStack>
        {member.photo ? (
          <s.TeamMemberCard_Photo>
            <NextImage
              src={'https:' + member.photo?.fields.file.url}
              layout="fill"
            />
          </s.TeamMemberCard_Photo>
        ) : (
          <s.TeamMemberCard_PlaceholderImage>
            {member.fullName[0].toUpperCase()}
          </s.TeamMemberCard_PlaceholderImage>
        )}
        <s.TeamMemberCard_Name>{member.fullName}</s.TeamMemberCard_Name>
        <s.TeamMemberCard_Title>{member.title}</s.TeamMemberCard_Title>
        <s.TeamMemberCard_Bio>{member.bio}</s.TeamMemberCard_Bio>
      </s.TeamMemberCard_InnerStack>
    </s.TeamMemberCard_OuterBox>
  </s.TeamMemberCard__Root>
);

const HistoryModal = ({ isOpen, onClose, content, headerTitle }: any) => {
  const sharedStyles = {
    containerPadding: ['18px', null, '32px', '32px 40px'],
  };

  return (
    <>
      <Modal
        isOpen={isOpen}
        onClose={onClose}
        isCentered
        scrollBehavior="inside"
        size="4xl"
      >
        <ModalOverlay />
        <ModalContent minHeight={['100%', '100%', 'auto']}>
          <ModalHeader
            p={sharedStyles.containerPadding}
            color="var(--hof-colors-red)"
            paddingRight="40px"
            boxShadow="0 4px 4px hsl(0, 0%, 90%)"
          >
            {headerTitle}
          </ModalHeader>
          <ModalCloseButton size="xl" padding="16px" />
          <ModalBody p={sharedStyles.containerPadding}>
            <RichTextContainer content={content} />
          </ModalBody>
          <ModalFooter></ModalFooter>
        </ModalContent>
      </Modal>
    </>
  );
};
