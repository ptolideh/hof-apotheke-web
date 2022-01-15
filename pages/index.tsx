import type { NextPage } from 'next';
import styled from '@emotion/styled';
import NextLink, { LinkProps as NextLinkProps } from 'next/link';
import NextImage, { ImageProps as NextImageProps } from 'next/image';
import {
  HStack,
  Box,
  Flex,
  Link,
  Heading,
  Spacer,
  LinkProps,
  BoxProps
} from '@chakra-ui/react';
import { QUERIES } from '../context/theme';
import { createContext, ReactNode, useContext } from 'react';

import { MapPin } from 'phosphor-react';
import { StoreInfoHeaderCard } from '../components/page/HomePage/StoreInfoHeaderCard';
import {
  NewsSlider,
  AboutSection,
  RegularServicesSection,
  AppSection,
  StoreInfoFooterCard,
  AboveFoldSection
} from '../components/page/HomePage';
import { PrimaryServicesSection as PrimaryServices } from '../components/page/HomePage/PrimaryServicesSection';
import { OffersSlider } from '../components/page/HomePage';
import { getEntries } from '../store';
import { HomeContentContext } from '../context/content/HomePageContent';

const Home: NextPage = ({ content }: any) => {
  console.log('HOME PAGE CONTENT ->>>>', content);

  if (!content) {
    return <>Loading...</>;
  }

  return (
    <HomeContentContext.Provider value={content}>
      <AppWrapper>
        {/* <Header id="myHeader" /> */}
        <AboveFoldSection />
        <AboutSection />
        <PrimaryServices />
        <RegularServicesSection />
        <OffersSlider />
        {/* <AppSection /> */}
        <StoreInfoFooterCard />

        {/* <Footer /> */}
      </AppWrapper>
    </HomeContentContext.Provider>
  );
};

export async function getStaticProps(context: any) {
  const homeData = (await getEntries('homePage')) as any;
  const storeInfoData = await getEntries('storeInformation');
  const postsData = await getEntries('posts');
  const promoData = await getEntries('promos');
  // console.log('promoData---', promoData);
  return {
    props: {
      content: {
        main: homeData ? homeData.items[0].fields : null,
        storeInfo: storeInfoData ? storeInfoData.items[0].fields : null,
        posts: postsData ? postsData.items[0]?.fields : null,
        promos: promoData ? promoData.items[0]?.fields : null
      }
    }
  };
}

// STYLED ELEMENTS

// -----------------------------------

const AppWrapper = styled(Flex)`
  display: flex;
  flex-direction: column;
  flex-wrap: nowrap;
  align-items: stretch;
  justify-content: flex-start;
  min-height: 100%;
  background-color: var(--chakra-colors-white);
  min-width: 100%;
  max-width: 100%;

  @media ${QUERIES.tabletAndUp} {
    --base-gap: min(4vw, var(--s-48));
  }
`;

// const Header = styled.header`
//   --p-top: var(--s-12);
//   flex-wrap: nowrap;
//   padding-top: var(--p-top);

//   .nav-bar {
//     display: none;
//   }

//   @media (min-width: 768px) {
//     .nav-bar {
//       display: revert;
//     }
//   }
// `;

// const Ribbon = styled.div`
//   position: absolute;
//   top: 0;
//   right: 0;
//   left: 0;
//   height: var(--p-top);
//   width: 100%;
//   background-color: var(--hof-colors-red);
// `;

type HALinkProps = NextLinkProps & LinkProps;

const HALink = (props: HALinkProps) => {
  const {
    children,
    href,
    passHref,
    prefetch,
    replace,
    scroll,
    shallow,
    locale,
    ...chakraLinkProps
  } = props;

  return (
    <NextLink
      href={href}
      passHref={passHref}
      prefetch={prefetch}
      replace={replace}
      scroll={scroll}
      shallow={shallow}
      locale={locale}
    >
      <Link {...chakraLinkProps}>{children}</Link>
    </NextLink>
  );
};

export default Home;
