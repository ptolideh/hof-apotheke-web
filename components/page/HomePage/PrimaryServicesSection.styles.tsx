import { BoxProps, Button, VStack } from '@chakra-ui/react';
import styled from '@emotion/styled';
import { withMQ as mq } from '../../../context/theme';

export const HeadingWrapper = styled.div({
  width: '100%',
  backgroundColor: 'var(--hof-colors-blue-lighter)',
  paddingBottom: 'var(--s-48)',
  textAlign: 'center'
});

export const SectionWrapper = styled.section({
  position: 'relative',
  display: 'flex',
  width: '100%',
  padding: 'var(--s-64) 0',
  boxShadow: 'inset 0px 0px 40px hsl(216, 30%, 31%, 0.3)'
});

export const BgImageWrapper = styled.div({
  position: 'absolute',
  top: 0,
  bottom: 0,
  left: 0,
  right: 0,
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'flex-end',
  width: '100%',
  overflow: 'hidden',

  //
  '& > div': {
    height: '100%',
    maxHeight: '100%',
    filter: ' blur(3px)',
    '-webkit-filter': 'blur(3px)',
    'img': {
      objectFit: 'cover',
      objectPosition: 'center'
    }
  }
});

export const DottedBoxSX = {
  position: 'absolute',
  top: '80%',
  width: ['var(--s-256)']
} as any;

export const ServicesContainer = styled.div(
  mq({
    position: 'relative',
    display: 'grid',
    gridTemplateColumns: 'repeat(auto-fit, minmax(min(256px, 100%), 1fr))',
    gap: 'var(--s-12)',
    borderRadius: 'var(--chakra-radii-2xl)',
    _tabletAndUp: {
      gap: 'var(--s-24)'
    },
    _tabletLargeAndUp: {
      gridTemplateColumns: 'repeat(auto-fit, minmax(min(352px, 100%), 1fr))'
    }
  })
);

export const ServiceCard = (p: BoxProps) => (
  <VStack
    spacing={6}
    p="var(--s-16)"
    borderRadius="var(--chakra-radii-xl)"
    maxW="100%"
    transition="var(--transition-med)"
    boxShadow="0 2px 20px hsl(215, 60%, 80%, 0.5)"
    bgColor="hsl(0, 0%, 100%, 0.8)"
    transform="translateY(0)"
    borderBottom="4px solid var(--hof-colors-red)"
    sx={{
      ':hover': {
        transform: 'translateY(-4px)'
      }
    }}
    {...p}
  />
);

export const ServiceIcon = styled.span`
  --size: var(--s-64);
  display: flex;
  justify-content: center;
  align-items: center;
  width: var(--size);
  height: var(--size);
  border-radius: 50%;
  background: conic-gradient(
    from 169deg at 50% 50%,
    #ffffff -221.25deg,
    #eef8ff 5.9deg,
    #ffffff 138.75deg,
    #eef8ff 365.9deg
  );
  box-shadow: 0 5px 15px -1px hsl(215, 60%, 88%);
`;

export const ServiceTitle = styled.h3`
  color: var(--hof-colors-blue);
  font-weight: var(--weight-bold);
  font-size: var(--text-20);
  width: 100%;
  text-align: center;
  font-family: var(--font-poppins);
`;

export const ServiceDetails = styled.p`
  /* font-style: italic; */
  font-size: var(--s-16);
  line-height: 1.6;
  width: 100%;
  text-align: center;
`;

export const ActionButton = styled(Button)`
  color: var(--hof-colors-red);
  background-color: hsl(0, 0%, 97%);
  border: 0;
  transition: var(--transition-med);

  &:hover {
    background-color: hsl(0, 0%, 95%);
    cursor: pointer;
  }
`;
