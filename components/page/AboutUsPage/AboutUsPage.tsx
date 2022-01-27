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

export const AboutUsPage = () => {
  const { isOpen, onOpen, onClose } = useDisclosure();

  return (
    <PageWithHero style={{ backgroundColor: 'var(--hof-colors-blue-lighter)' }}>
      {/* SECTION: ABTF */}
      <FixedHeroImg
        imageSrc="https://images.unsplash.com/photo-1642862345501-0f512921f534?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2942&q=80"
        imagePosition="center bottom"
      >
        <TitleUnderlined title={'pageTitle'} subtitle={'pageSubtitle'} />
      </FixedHeroImg>
      <SectionWrapper
        style={{ backgroundColor: 'var(--hof-colors-blue-lighter)' }}
      >
        <PaperSection
          overTheFold
          mb={['var(--s-96)', null, null, 'var(--s-128)']}
        >
          {/* <RichTextContainer content={serviceDescription} /> */}
          <p>
            cheese cheesecheese cheese cheesecheese cheese cheese cheesecheese
            cheese cheesecheesecheese cheese cheese cheese cheese cheesecheese
            cheese cheesecheese cheese cheese cheesecheese cheese cheesecheese
            cheese cheese cheesecheese cheese cheesecheesecheese cheese cheese
            cheese cheese cheesecheese cheese cheesecheese cheese
          </p>
          <br />
          <p>
            cheese cheesecheese cheese cheesecheese cheese cheese cheesecheese
            cheese cheesecheesecheese cheese cheese cheese cheese cheesecheese
            cheese cheesecheese cheese cheese cheesecheese cheese cheesecheese
            cheese cheese cheesecheese cheese cheesecheesecheese cheese cheese
            cheese cheese cheesecheese cheese cheesecheese cheese
          </p>
          <br />
          <AnchorTag id="geschichte" />
          <SectionHeadingUnderlined style={{ marginBottom: '63px' }}>
            Our History
          </SectionHeadingUnderlined>
          <s.History_Section>
            <s.History_ImageCol>
              <NextImage
                src="https://images.unsplash.com/photo-1579762593251-07c01abb6599?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2533&q=80"
                layout="fill"
              />
            </s.History_ImageCol>
            <s.History_DetailsCol>
              <p>
                cheese cheesecheese cheese cheesecheese cheese cheese
                cheesecheese cheese cheesecheesecheese cheese cheese cheese
                cheese cheesecheese cheese cheesecheese cheese cheese
                cheesecheese cheese cheesecheese cheese cheese cheesecheese
                cheese cheesecheesecheese cheese cheese cheese cheese
                cheesecheese cheese cheesecheese cheese
              </p>
              {/* <Button onClick={onOpen}>Open Modal</Button>*/}
              <span onClick={onOpen}>Learn more</span>
            </s.History_DetailsCol>
            <HistoryModal isOpen={isOpen} onClose={onClose} />
          </s.History_Section>
        </PaperSection>
      </SectionWrapper>
      <SectionWrapper
        maxWidth="lg"
        style={{ backgroundColor: 'var(--hof-colors-blue-lighter)' }}
      >
        <AnchorTag id="team" />
        <SectionHeadingUnderlined style={{ marginBottom: '63px' }}>
          Our Team
        </SectionHeadingUnderlined>
        <Box
          as="p"
          sx={{
            textAlign: 'center',
            marginBottom: '63px',
          }}
        >
          cheese cheesecheese cheese cheese cheesecheese cheese cheesecheese
          cheese cheese cheesecheese cheese cheesecheesecheese cheese cheese
          cheese cheese cheesecheese cheese cheesecheese cheese
        </Box>
        <s.TeamMembers_Grid>
          <TeamMemberCard />
          <TeamMemberCard />
          <TeamMemberCard />
          <TeamMemberCard />
          <TeamMemberCard />
          <TeamMemberCard />
          <TeamMemberCard />
          <TeamMemberCard />
        </s.TeamMembers_Grid>
      </SectionWrapper>
    </PageWithHero>
  );
};

const TeamMemberCard = () => (
  <s.TeamMemberCard__Root>
    <s.TeamMemberCard_OuterBox>
      <s.TeamMemberCard_InnerStack>
        <s.TeamMemberCard_Image>
          <NextImage
            src="https://images.unsplash.com/photo-1559839734-2b71ea197ec2?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2940&q=80"
            layout="fill"
          />
        </s.TeamMemberCard_Image>
        <s.TeamMemberCard_Name>
          AngelaAngela Cheese MerkleMerkle
        </s.TeamMemberCard_Name>
        <s.TeamMemberCard_Title>Pharmacist</s.TeamMemberCard_Title>
        <s.TeamMemberCard_Bio>
          cheese cheesecheese cheese cheese cheesecheese cheese cheesecheese
          cheese cheese cheesecheese
        </s.TeamMemberCard_Bio>
      </s.TeamMemberCard_InnerStack>
    </s.TeamMemberCard_OuterBox>
  </s.TeamMemberCard__Root>
);

const HistoryModal = ({ isOpen, onClose }: any) => {
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
            History of Hof-Apotheke Bod Humburg
          </ModalHeader>
          <ModalCloseButton size="xl" padding="16px" />
          <ModalBody p={sharedStyles.containerPadding}>
            <p>
              cheese cheesecheese cheese cheesecheese cheese cheese cheesecheese
              cheese cheesecheesecheese cheese cheese cheese cheese cheesecheese
              cheese cheesecheese cheese cheese cheesecheese cheese cheesecheese
              cheese cheese cheesecheese cheese cheesecheesecheese cheese cheese
              cheese cheese cheesecheese cheese cheesecheese cheese cheese
              cheesecheese cheese cheesecheese cheese cheese cheesecheese cheese
              cheesecheesecheese cheese cheese cheese cheese cheesecheese cheese
              cheesecheese cheese cheese cheesecheese cheese cheesecheese cheese
              cheese cheesecheese cheese cheesecheesecheese cheese cheese cheese
              cheese cheesecheese cheese cheesecheese cheese
            </p>
            <br />
            <p>
              cheese cheesecheese cheese cheesecheese cheese cheese cheesecheese
              cheese cheesecheesecheese cheese cheese cheese cheese cheesecheese
              cheese cheesecheese cheese cheese cheesecheese cheese cheesecheese
              cheese cheese cheesecheese cheese cheesecheesecheese cheese cheese
              cheese cheese cheesecheese cheese cheesecheese cheese cheese
              cheesecheese cheese cheesecheese cheese cheese cheesecheese cheese
              cheesecheesecheese cheese cheese cheese cheese cheesecheese cheese
              cheesecheese cheese cheese cheesecheese cheese cheesecheese cheese
              cheese cheesecheese cheese cheesecheesecheese cheese cheese cheese
              cheese cheesecheese cheese cheesecheese cheese
            </p>
            <br />
            <p>
              cheese cheesecheese cheese cheesecheese cheese cheese cheesecheese
              cheese cheesecheesecheese cheese cheese cheese cheese cheesecheese
              cheese cheesecheese cheese cheese cheesecheese cheese cheesecheese
              cheese cheese cheesecheese cheese cheesecheesecheese cheese cheese
              cheese cheese cheesecheese cheese cheesecheese cheese cheese
              cheesecheese cheese cheesecheese cheese cheese cheesecheese cheese
              cheesecheesecheese cheese cheese cheese cheese cheesecheese cheese
              cheesecheese cheese cheese cheesecheese cheese cheesecheese cheese
              cheese cheesecheese cheese cheesecheesecheese cheese cheese cheese
              cheese cheesecheese cheese cheesecheese cheese
            </p>
          </ModalBody>
          <ModalFooter></ModalFooter>
        </ModalContent>
      </Modal>
    </>
  );
};
