import NextLink, { LinkProps as NextLinkProps } from 'next/link';
import NextImage, { ImageProps as NextImageProps } from 'next/image';
import { HStack } from '@chakra-ui/react';

import AppStore from '../../../public/images/home/logo_app_store.svg';
import PlayStore from '../../../public/images/home/logo_googleplay_store.svg';

export const AppDownloadStickers = () => (
  <HStack
    spacing="var(--s-24)"
    sx={{
      label: 'AppDownloadStickers',
      mt: 'var(--s-32)'
    }}
  >
    <NextLink data-testId="appStore" href="/">
      <a>
        <NextImage src={AppStore} />
      </a>
    </NextLink>
    <NextLink data-testId="playStore" href="/">
      <a>
        <NextImage src={PlayStore} />
      </a>
    </NextLink>
  </HStack>
);
