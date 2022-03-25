import { withMQ as mq } from '../../../context/theme';
import styled from '@emotion/styled';
import NextImage /* , { ImageProps as NextImageProps } */ from 'next/image';

import { Flex, Box } from '@chakra-ui/react';

export const FixedHeroImg = (props: any) => {
  const {
    children,
    imageSrc,
    imagePosition,
    blur = false,
    ...delegatedProps
  } = props;
  return (
    <>
      <ImageBox
        {...delegatedProps}
        sx={{
          '--p-blur': blur ? 'blur(3px)' : 0,
          '--img-position': imagePosition || 'center 20%',
          ...delegatedProps.sx,
        }}
      >
        <NextImage
          src={imageSrc}
          layout="fill"
          objectFit="cover"
          // objectPosition={imagePosition}
          priority={true}
        />
        <CenterBox>{children}</CenterBox>
      </ImageBox>
      {/* Pushes content below the fixed image */}
      <AboveFoldSpacer />
    </>
  );
};

// STYLES /////////////////////////

const ImageBox = styled(Box)(
  mq({
    position: 'fixed',
    left: 0,
    right: 0,
    width: '100%',
    minHeight: 'var(--aboveFold-min-h)',
    maxHeight: 'var(--aboveFold-max-h)',
    height: 'var(--aboveFold-h)',

    '&::after': {
      content: '""',
      position: 'absolute',
      top: 0,
      bottom: 0,
      left: 0,
      right: 0,
      backgroundColor: 'hsl(0, 0%, 0%, 0.3)',
    },
    '& img': {
      filter: 'var(--p-blur)',
      objectFit: 'cover',
      objectPosition: 'var(--img-position)',
    },
    _tabletLargeAndUp: {
      top: '98px', // (148 - 98) / 2
    },
  }),
);

const CenterBox = styled(Flex)(
  mq({
    position: 'absolute',
    top: '8px',
    left: 0,
    right: 0,
    bottom: 0,
    width: '100%',
    height: '100%',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    zIndex: 1,
    _tabletLargeAndUp: {
      top: '25px', // (148 - 98) / 2
    },
  }),
);

const AboveFoldSpacer = styled('div')({
  width: '100%',
  height: 'var(--aboveFold-h)',
  maxHeight: 'var(--aboveFold-max-h)',
  minHeight: 'var(--aboveFold-min-h)',
  opacity: 0,
});
