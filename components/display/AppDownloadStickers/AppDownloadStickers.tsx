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
      mt: 'var(--s-32)',
    }}
  >
    <a
      href="https://play.google.com/store/apps/details?id=de.gesund.app"
      target="_blank"
      rel="noreferrer"
    >
      <NextImage src={AppStore} />
    </a>
    <a
      href="https://apps.apple.com/us/app/gesund-de/id1554260352"
      target="_blank"
      rel="noreferrer"
    >
      <NextImage src={AppStore} />
    </a>
  </HStack>
);
