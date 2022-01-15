import { FC, ReactNode, useState, useEffect, useMemo, useRef } from 'react';
import { styledMediaQueries as mq } from '../context/theme';
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
  Button
} from '@chakra-ui/react';
// import { SVGWrapper } from '../components/shared/svg';
import { QUERIES } from '../context/theme';
import {
  ContactInfoList,
  HoursList,
  StoreMap
} from '../components/display/StoreInfo';
import { MaxWidthWrapper } from '../components/layout/MaxWidthWrapper';
import { Form, Field, useForm, useFormState } from 'react-final-form';

import ContactUsHeroImage from '../public/images/contact/contact-us-hero.png';

/**
  Header
  ImageWrapper
    Title
  FormSection
    FormCard
      FormSectionCol
        Form
      StoreInfoCol
  MapSection
  Footer
 */

const formConfig = {
  name: {
    name: 'name',
    label: 'Full name',
    initialValue: ''
  },
  email: {
    name: 'email',
    label: 'Email',
    initialValue: ''
  },
  subject: {
    name: 'subject',
    label: 'Subject',
    initialValue: ''
  },
  message: {
    name: 'message',
    label: 'Message',
    initialValue: ''
  }
};

const FM = formConfig;

const getId = (name: string) => `contactFomr-${name}`;

export const initialValues = Object.fromEntries(
  Object.entries(formConfig).map(([fieldKey, fieldValues]) => {
    return [fieldKey, fieldValues.initialValue];
  })
);

export const required = (value: any) => (value ? undefined : 'Required');

export const trim = (value: any) => value?.trim() ?? '';

export const getTextFieldErrorProps = (meta: any) => ({
  error: meta.touched && meta.invalid,
  helperText: meta.touched && meta.error
});

export default function ContactUs() {
  return (
    <PageWrapper>
      <ImageBox>
        <NextImage
          src={ContactUsHeroImage}
          layout="fill"
          objectFit="cover"
          objectPosition="center bottom"
        />
        <PageHeadingBox>
          <PageHeadingStack>
            <PageTitle as="h1" size="3xl">
              Contact Us
            </PageTitle>
            <PageSubtitle>
              Feel free to contact us if you have any questions or comments!
            </PageSubtitle>
          </PageHeadingStack>
        </PageHeadingBox>
      </ImageBox>
      <AboveFoldSpacer />
      <ContactInfoSection>
        <MaxWidthWrapper>
          <PaperContainerGrid
            columns={[1, null, null, 2]}
            spacing="var(--s-24)"
            templateRows={['repeat(2, auto)', null, null, 'repeat(1, auto)']}
          >
            <FormSectionCol>
              <Text mb="var(--s-24)">
                Please enter you contact information and message and we will get
                back to you as soon as possible
              </Text>
              <Form
                onSubmit={() => undefined}
                initialValues={initialValues}
                render={() => (
                  <VStack
                    w="100%"
                    alignItems="flex-start"
                    spacing="var(--s-24)"
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
                          <FormLabel fontWeight="semibold">
                            {FM.name.label}
                          </FormLabel>
                          <TextInput {...input} type="email" />
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
                          <FormLabel fontWeight="semibold">
                            {FM.email.label}
                          </FormLabel>
                          <TextInput {...input} type="email" />
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
                          <FormLabel fontWeight="semibold">
                            {FM.subject.label}
                          </FormLabel>
                          <TextInput {...input} type="email" />
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
                          <FormLabel fontWeight="semibold">
                            {FM.message.label}
                          </FormLabel>
                          <Textarea
                            {...input}
                            type="email"
                            borderColor="gray.400"
                          />
                        </FormControl>
                      )}
                    />

                    <SubmitButton size="lg" bgColor="var(--hof-colors-red)">
                      Submit
                    </SubmitButton>
                  </VStack>
                )}
              />
            </FormSectionCol>
            <VStack alignItems="flex-start" spacing="var(--s-24)">
              <ContactInfoList />
              <HoursList />
            </VStack>
            {/* Contact Info */}
            {/* <ContactInfoCol></ContactInfoCol> */}
            {/* Hours */}
            {/* <StoreHoursCol></StoreHoursCol> */}
          </PaperContainerGrid>
        </MaxWidthWrapper>
      </ContactInfoSection>

      {/* Map */}
      <MapSection>
        <StoreMap />
      </MapSection>
    </PageWrapper>
  );
}

// STYLES /////////////////////////

const PageWrapper = styled(Box)({
  '--header-h': '148px',
  '--aboveFold-min-h': 'var(--s-128)',
  '--aboveFold-max-h': 'calc(var(--header-h) + var(--s-512))',
  '--aboveFold-h': '50vh'
});

const AboveFoldSpacer = styled('div')({
  width: '100%',
  height: 'var(--aboveFold-h)',
  maxHeight: 'var(--aboveFold-max-h)',
  minHeigh: 'var(--aboveFold-min-h)',
  opacity: 0
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
        backgroundColor: 'hsl(0, 0%, 0%, 0.3)'
      }
    }
  })
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
  borderRadius: '24px 0 24px 0'
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
    backgroundColor: 'var(--hof-colors-red)'
  }
});

const PageSubtitle = styled(Text)({
  fontSize: 'var(--text-24)'
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
  zIndex: 1
});

const ContactInfoSection = styled('section')({
  backgroundColor: 'var(--hof-colors-blue-lighter)',
  position: 'relative',
  paddingTop: 1,
  borderTop: '6px solid var(--hof-colors-blue)',
  paddingBottom: 'var(--s-64)'
});

const PaperContainerGrid = styled(SimpleGrid)({
  position: 'relative',
  backgroundColor: 'white',
  borderRadius: 'var(--chakra-radii-3xl)',
  padding: 'var(--s-48) var(--s-32)',
  marginTop: 'calc(-1 * var(--s-64))',
  boxShadow: '0 4px 15px hsl(215, 60%, 80%, 0.6)'
});

const FormSectionCol = styled(VStack)(
  mq({
    mobileAndUp: {
      // border: '1px solid deeppink',
      gridRow: '2',
      alignItems: 'flex-start',
      alignContent: 'start',
      paddingRight: 'var(--s-24)',
      borderRight: '1px solid var(--chakra-colors-gray-300)'
    },
    laptopAndUp: {
      gridColumn: '1',
      gridRow: '1'
    }
  })
);

// const ContactFormStack = styled(VStack)({

// });

const FormIntroText = styled(Text)({});

const ContactInfoCol = styled(Box)(
  mq({
    mobileAndUp: {
      // border: '1px solid indigo',
      gridColumn: '1 / -1',
      alignSelf: 'start'
    },
    laptopAndUp: {
      gridColumn: '2',
      gridRow: '1'
    }
  })
);

const StoreHoursCol = styled(Box)(
  mq({
    mobileAndUp: {
      // border: '1px solid lightgreen',
      gridColumn: '1 / -1',
      alignSelf: 'start',
      marginTop: 'var(--s-8)'
    },
    laptopAndUp: {
      gridColumn: '2',
      gridRow: '2'
    }
  })
);

const MapSection = styled('section')({
  backgroundColor: 'white',
  position: 'relative',
  padding: 'var(--s-64) 0'
});

const TextInput = styled(Input)({
  borderColor: 'var(--chakra-colors-gray-400)',
  maxWidth: 'var(--s-384)'
});

const SubmitButton = styled(Button)({
  color: 'white',
  transition: 'var(--transition-med)',
  boxShadow: '0 4px 12px -2px hsl(1, 67%, 49%)',

  ':hover': {
    backgroundColor: 'hsl(1, 68%, 45%)',
    boxShadow: '0 2px 4px -1px hsl(1, 67%, 49%)'
  }
});

///////////////////////////////////////
