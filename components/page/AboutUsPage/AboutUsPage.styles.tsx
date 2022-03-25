import {
  BoxProps,
  Heading,
  HeadingProps,
  SimpleGrid,
  SimpleGridProps,
  VStack,
} from '@chakra-ui/react';
import styled from '@emotion/styled';
import { QUERIES, withMQ as mq } from '../../../context/theme';

const sharedStyles = {
  TeamMemberCard_OuterBox: {
    backgroundColor: 'white',
    boxShadow: '0 2px 6px hsl(215, 60%, 80%, 0.6)',
    padding: '0 12px 24px 12px',
  },
};

/**
 * HISTORY SECTION
 */

export const History_Section = styled.div(
  mq({
    display: 'flex',
    flexWrap: 'wrap',
    justifyContent: 'center',
    _laptopAndUp: {
      flexWrap: 'nowrap',
      justifyContent: 'flex-start',
    },
  }),
);

export const History_ImageCol = styled.figure(
  mq({
    position: 'relative',
    display: 'block',
    flex: '1 0 100%',
    maxWidth: '375px',
    marginBottom: '40px',
    overflow: 'hidden',
    borderRadius: '24px',
    aspectRatio: '6 / 4',
    '@supports not (aspect-ratio: 6 / 4)': {
      height: '250px',
    },

    '& img': {
      objectFit: 'cover',
    },

    _laptopAndUp: {
      marginBottom: 0,
      marginRight: '32px',
    },
  }),
);

export const History_DetailsCol = styled.p({
  flex: 1,
  minWidth: '50%',
  display: 'flex',
  flexDirection: 'column',
  fontSize: '1.125rem',
  lineHeight: '1.6',
  'span': {
    display: 'inline-flex',
    alignItems: 'center',
    marginTop: '8px',
    padding: '8px 16px 8px 0',
    fontWeight: 'bold',
    color: 'var(--hof-colors-red)',
    fontSize: '1.2rem',
    ':hover': {
      cursor: 'pointer',
      ':after': {
        color: 'var(--hof-colors-blue)',
        marginLeft: '8px',
      },
    },
    ':after': {
      transition: '100ms margin ease',
      content: '"→"',
      marginLeft: '4px',
      fontSize: '1.4rem',
    },
  },
});

/**
 * TEAM SECTION
 */

export const TeamSectionSubtitle = styled.p`
  width: min(100%, 900px);
  margin: 0 auto;
  text-align: center;
  padding-bottom: 80px;
  font-size: 1.125rem;
  line-height: 1.6;
`;

export const TeamMembers_Grid = (props: SimpleGridProps) => (
  <SimpleGrid
    className="TeamMembers_Grid"
    minChildWidth="240px"
    spacing="24px"
    mx={[null, null, '32px', null]}
    mb="128px"
    {...props}
  />
);

export const TeamMemberCard_OuterBox = styled.div(
  mq({
    position: 'relative',
    zIndex: 1,
    isolation: 'isolate',
    display: 'flex',
    textAlign: 'center',
    borderRadius: 'var(--s-16)',
    ...sharedStyles.TeamMemberCard_OuterBox,
    _tabletLargeAndUp: {
      backgroundColor: 'transparent',
      boxShadow: '0 0px 0px hsl(215, 60%, 80%, 0.6)',
    },
  }),
);

export const TeamMemberCard_Bio = styled.span(
  mq({
    fontWeight: 400,
    fontSize: '0.95rem',
    lineHeight: '1.5',
    color: 'var(--chakra-colors-gray-700)',
    _tabletLargeAndUp: {
      height: 0,
      overflow: 'hidden',
    },
  }),
);

export const TeamMemberCard__Root = styled.div(
  mq({
    position: 'relative',
    cursor: 'default',
    paddingBottom: '16px',
    // only apply hover styles if screen is large,
    // otherwise show the cards
    _tabletLargeAndUp: {
      ':hover': {
        [`${TeamMemberCard_OuterBox}`]: {
          position: 'absolute',
          width: '120%',
          right: '-10%',
          zIndex: 2,
          ...sharedStyles.TeamMemberCard_OuterBox,
        },
        'img': {
          transform: 'scale(1.3)',
        },
        [`${TeamMemberCard_Bio}`]: {
          height: 'auto',
        },
      },
    },
  }),
);

export const TeamMemberCard_InnerStack = (props: BoxProps) => (
  <VStack
    spacing="12px"
    sx={{
      'label': 'TeamMemberCard_InnerStack',
      bgColor: 'transparent',
      textAlign: 'center',
      ...(props.sx || {}),
    }}
    {...props}
  />
);

export const TeamMemberCard_BaseImage = styled.figure({
  display: 'flex',
  position: 'relative',
  top: -16,
  justifyContent: 'center',
  alignItems: 'center',
  flexShrink: 0,
  width: '100%',
  maxWidth: '125px',
  borderRadius: '100%',
  overflow: 'hidden',
  aspectRatio: '1 / 1',
  '@supports not (aspect-ratio: 1 / 1)': {
    height: '100%',
    '&::before': {
      pt: '100%',
      content: '""',
    },
    '&::after': {
      display: 'block',
      content: '""',
      clear: 'both',
    },
  },
});

export const TeamMemberCard_PlaceholderImage = styled(TeamMemberCard_BaseImage)(
  {
    backgroundColor: 'var(--hof-colors-blue)',
    fontSize: '3rem',
    fontWeight: 'bold',
    color: 'white',
  },
);

export const TeamMemberCard_Photo = styled(TeamMemberCard_BaseImage)({
  /* NextJS image fixes */
  '& > div': {
    height: '100%',
    maxHeight: '100%',
  },
  '& img': {
    transform: 'scale(1.1)',
    transition: 'transform 200ms ease-out',
    width: '100%',
    height: '100%',
    objectFit: 'cover',
    objectPosition: 'center top',
  },
});

export const TeamMemberCard_Name = styled.h3({
  fontWeight: 600,
  color: 'var(--chakra-colors-gray-700)',
  fontSize: '1.1rem',
});

export const TeamMemberCard_Title = styled.span({
  fontWeight: 900,
  fontSize: '1.05rem',
  lineHeight: 1,
  color: 'var(--hof-colors-blue)',
});
