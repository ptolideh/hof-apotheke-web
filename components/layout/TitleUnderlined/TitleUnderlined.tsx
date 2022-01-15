import styled from '@emotion/styled';

import { Heading, Flex, VStack, Text } from '@chakra-ui/react';

export const TitleUnderlined = (props: any) => {
  const { as = 'h1', size = '3xl', title, subtitle } = props;
  return (
    <PageHeadingBox>
      <PageHeadingStack>
        <PageTitle as={as} size={size}>
          {title}
        </PageTitle>
        <PageSubtitle>{subtitle}</PageSubtitle>
      </PageHeadingStack>
    </PageHeadingBox>
  );
};

// STYLES /////////////////////////

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

const PageSubtitle = styled(Text)({
  fontSize: 'var(--text-24)'
});

const PageTitle = styled(Heading)({
  position: 'relative',
  wordSpacing: 'var(--s-12)',
  marginBottom: 'var(--s-40)',
  lineHeight: '1.4',
  '::after': {
    position: 'absolute',
    bottom: '-0.4em',
    left: '50%',
    transform: 'translateX(-50%)',
    content: '""',
    width: '40%',
    height: '6px',
    backgroundColor: 'var(--hof-colors-red)'
  }
});

const PageHeadingStack = styled(VStack)({
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
