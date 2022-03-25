import {
  FC,
  ReactNode,
  useState,
  useEffect,
  useMemo,
  useRef,
  SyntheticEvent,
} from 'react';
import { styledMediaQueries as mq } from '../../../context/theme';
import styled from '@emotion/styled';
import NextLink, { LinkProps as NextLinkProps } from 'next/link';
import NextImage, { ImageProps as NextImageProps } from 'next/image';
import {
  Box,
  BoxProps,
  Heading,
  Flex,
  Grid,
  VStack,
  Text,
  Input,
  Textarea,
  FormControl,
  FormLabel,
  SimpleGrid,
  FormErrorMessage,
  FormHelperText,
  Button,
  InputProps,
  useToast,
} from '@chakra-ui/react';
// import { SVGWrapper } from '../components/shared/svg';

import {
  Form,
  Field,
  useForm,
  useFormState,
  FormRenderProps,
} from 'react-final-form';
import { FM, getId, initialValues, required, trim } from './formUtils';

import ContactUsHeroImage from '../../../public/images/contact/contact-us-hero.png';
import { MaxWidthWrapper } from '../../layout/MaxWidthWrapper';
import { ContactInfoList, HoursList, StoreMap } from '../../display/StoreInfo';
import { PageWithHero } from '../../layout/PageWithHero';
import { FixedHeroImg } from '../../layout/FixedHeroImage';
import { TitleUnderlined } from '../../layout/TitleUnderlined';
import { SectionWrapper } from '../../layout/SectionWrapper';
import { FormApi } from 'final-form';

export const ContactUsPage = ({ content }: any) => {
  console.log('Contact Us Page --> ', content);
  const { main, storeInfo } = content;
  const { pageSubtitle, pageTitle, heroImage, introText } = main;
  const toast = useToast();

  const handleFormSubmit = (formValues: any, form: FormApi) => {
    console.log(formValues);
    const data = JSON.stringify(formValues);
    fetch('/api/contact', {
      method: 'POST',
      headers: {
        'Accept': 'application/json, text/plain, */*',
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(data),
    })
      .then((res) => {
        if (res.status === 200) {
          console.log('Response succeeded!');
        } else {
          throw new Error('something went wrong');
        }
      })
      .catch((e) => {
        console.log(e);
        toast({
          title: `Something went wrong. Please contact ${storeInfo.email}.`,
          status: 'error',
          duration: Infinity,
          isClosable: true,
        });
      })
      .finally(() => {
        form.restart(initialValues);
        toast({
          title: `Your message was successfully sent to Hof-Apotheke.`,
          status: 'success',
          duration: 9000,
          isClosable: true,
        });
      });
  };

  return (
    <PageWithHero style={{ backgroundColor: 'var(--hof-colors-blue-lighter)' }}>
      {/* SECTION: ABTF */}
      <FixedHeroImg
        imageSrc={'https:' + heroImage.fields.file.url}
        imagePosition="center bottom"
      >
        <TitleUnderlined title={pageTitle} subtitle={pageSubtitle} />
      </FixedHeroImg>
      <ContactInfoSection>
        <SectionWrapper
          maxWidth="md"
          style={{ backgroundColor: 'var(--hof-colors-blue-lighter)' }}
        >
          <PaperContainerGrid
            columns={[1, null, null, 2]}
            spacing="var(--s-24)"
            templateRows={['repeat(2, auto)', null, null, 'repeat(1, auto)']}
          >
            <FormSectionCol>
              <Text
                mb="var(--s-40)" //
                fontSize="1.125rem"
                lineHeight="1.6"
              >
                {introText}
              </Text>
              <Form
                onSubmit={handleFormSubmit}
                initialValues={initialValues}
                render={ContactForm}
              />
            </FormSectionCol>
            <VStack alignItems="flex-start" spacing="12px">
              <ContactInfoList storeInfo={storeInfo} />
              <HoursList storeInfo={storeInfo} />
            </VStack>
          </PaperContainerGrid>
        </SectionWrapper>
      </ContactInfoSection>

      {/* Map */}
      <SectionWrapper maxWidth="sm">
        <MapSection>
          <StoreMap />
        </MapSection>
      </SectionWrapper>
    </PageWithHero>
  );
};

// COMPONENTS //////////////////////
const CustomTextInput = (props: InputProps) => (
  <TextInput size="lg" w="100%" maxW="100% !important" {...props} />
);

const ContactForm = ({ handleSubmit }: FormRenderProps) => {
  return (
    <VStack
      as="form"
      w="100%"
      alignItems="flex-start"
      spacing="var(--s-24)"
      onSubmit={handleSubmit}
    >
      {/* Name */}
      <Field
        name={FM.name.name}
        validate={required}
        format={trim}
        formatOnBlur
        render={({ input, meta }) => (
          <FormControl
            id={getId(FM.name.name)}
            // {...getTextFieldErrorProps(meta)}
          >
            <FormLabel fontWeight="semibold">{FM.name.label}</FormLabel>
            <CustomTextInput {...input} />
          </FormControl>
        )}
      />

      {/* Email */}
      <Field
        name={FM.email.name}
        validate={required}
        format={trim}
        formatOnBlur
        render={({ input, meta }) => (
          <FormControl
            id={getId(FM.email.name)}
            // {...getTextFieldErrorProps(meta)}
          >
            <FormLabel fontWeight="semibold">{FM.email.label}</FormLabel>
            <CustomTextInput {...input} type="email" />
          </FormControl>
        )}
      />

      {/* Subject */}
      <Field
        name={FM.subject.name}
        validate={required}
        format={trim}
        formatOnBlur
        render={({ input, meta }) => (
          <FormControl
            id={getId(FM.subject.name)}
            // {...getTextFieldErrorProps(meta)}
          >
            <FormLabel fontWeight="semibold">{FM.subject.label}</FormLabel>
            <CustomTextInput {...input} />
          </FormControl>
        )}
      />

      {/* Message */}
      <Field
        name={FM.message.name}
        validate={required}
        format={trim}
        formatOnBlur
        render={({ input, meta }) => (
          <FormControl
            id={getId(FM.message.name)}
            // {...getTextFieldErrorProps(meta)}
          >
            <FormLabel fontWeight="semibold">{FM.message.label}</FormLabel>
            <Textarea
              {...input}
              borderColor="gray.400"
              size="lg"
              rows={4}
              fontSize="1rem"
            />
          </FormControl>
        )}
      />

      <SubmitButton type="submit" size="lg" bgColor="var(--hof-colors-red)">
        Submit
      </SubmitButton>
    </VStack>
  );
};

// STYLES /////////////////////////

const PageWrapper = styled(Box)({
  '--header-h': '148px',
  '--aboveFold-min-h': 'var(--s-128)',
  '--aboveFold-max-h': 'calc(var(--header-h) + var(--s-512))',
  '--aboveFold-h': '50vh',
});

const AboveFoldSpacer = styled('div')({
  width: '100%',
  height: 'var(--aboveFold-h)',
  maxHeight: 'var(--aboveFold-max-h)',
  minHeigh: 'var(--aboveFold-min-h)',
  opacity: 0,
});

const ImageBox = styled('div')(
  mq({
    mobileAndUp: {
      position: 'fixed',
      top: 0,
      left: 0,
      right: 0,
      width: '100%',
      paddingTop: '148px',
      minHeight: 'var(--aboveFold-min-h)',
      maxHeight: 'var(--aboveFold-max-h)',
      height: '50vh',

      '&::after': {
        content: '""',
        position: 'absolute',
        top: 0,
        bottom: 0,
        left: 0,
        right: 0,
        backgroundColor: 'hsl(0, 0%, 0%, 0.3)',
      },
    },
  }),
);

const PageHeadingStack = styled(VStack)({
  marginTop: 'calc(var(--header-h) - var(--s-64))',
  color: 'white',
  textShadow: '0 0 30px hsl(0, 0%, 0%)',
  backgroundColor: 'hsl(0, 0%, 0%, 0.2)',
  backdropFilter: 'blur(5px)',
  padding: 'var(--s-32)',
  maxWidth: 'var(--s-768)',
  textAlign: 'center',
  border: '1px solid hsl(0, 0%, 0%, 0.05)',
  borderRadius: '24px 0 24px 0',
});

const PageTitle = styled(Heading)({
  position: 'relative',
  wordSpacing: 'var(--s-12)',
  marginBottom: 'var(--s-16)',
  lineHeight: '1.8',
  '::after': {
    position: 'absolute',
    bottom: 0,
    left: '50%',
    transform: 'translateX(-50%)',
    content: '""',
    width: '40%',
    height: '6px',
    backgroundColor: 'var(--hof-colors-red)',
  },
});

const PageSubtitle = styled(Text)({
  fontSize: 'var(--text-24)',
});

const PageHeadingBox = styled(Flex)({
  position: 'absolute',
  top: 0,
  left: 0,
  right: 0,
  bottom: 0,
  width: '100%',
  height: '100%',
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',
  zIndex: 1,
});

const ContactInfoSection = styled('section')({
  backgroundColor: 'var(--hof-colors-blue-lighter)',
  position: 'relative',
  paddingTop: 1,
  // borderTop: '6px solid var(--hof-colors-blue)',
  paddingBottom: 'var(--s-64)',
});

const PaperContainerGrid = styled(SimpleGrid)({
  position: 'relative',
  backgroundColor: 'white',
  borderRadius: 'var(--chakra-radii-3xl)',
  padding: 'var(--s-48) var(--s-32)',
  marginTop: 'calc(-1 * var(--s-64))',
  boxShadow: '0 4px 15px hsl(215, 60%, 80%, 0.6)',
});

const FormSectionCol = styled(VStack)(
  mq({
    mobileAndUp: {
      // border: '1px solid deeppink',
      gridRow: '1',
      alignItems: 'flex-start',
      alignContent: 'start',
      paddingBottom: '72px',
      marginBottom: '40px',
      borderBottom: '1px solid var(--chakra-colors-gray-300)',
    },
    laptopAndUp: {
      gridColumn: '1',
      gridRow: '1',
      paddingRight: 'var(--s-32)',
      marginBottom: 'revert',
      paddingBottom: 'revert',
      borderBottom: 'revert',
      borderRight: '1px solid var(--chakra-colors-gray-300)',
    },
  }),
);

// const ContactFormStack = styled(VStack)({

// });

const FormIntroText = styled(Text)({});

const ContactInfoCol = styled(Box)(
  mq({
    mobileAndUp: {
      // border: '1px solid indigo',
      gridColumn: '1 / -1',
      alignSelf: 'start',
    },
    laptopAndUp: {
      gridColumn: '2',
      gridRow: '1',
    },
  }),
);

const StoreHoursCol = styled(Box)(
  mq({
    mobileAndUp: {
      // border: '1px solid lightgreen',
      gridColumn: '1 / -1',
      alignSelf: 'start',
      marginTop: 'var(--s-8)',
    },
    laptopAndUp: {
      gridColumn: '2',
      gridRow: '2',
    },
  }),
);

const MapSection = styled('section')({
  backgroundColor: 'white',
  position: 'relative',
  paddingTop: 'var(--s-64)',
  paddingBottom: 'var(--s-128)',
});

const TextInput = styled(Input)({
  borderColor: 'var(--chakra-colors-gray-400)',
  maxWidth: 'var(--s-384)',
});

const SubmitButton = styled(Button)({
  color: 'white',
  transition: 'var(--transition-med)',
  boxShadow: '0 4px 12px -2px hsl(1, 67%, 49%)',

  ':hover': {
    backgroundColor: 'hsl(1, 68%, 45%)',
    boxShadow: '0 2px 4px -1px hsl(1, 67%, 49%)',
  },
});

///////////////////////////////////////
