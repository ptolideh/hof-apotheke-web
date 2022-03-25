import { useEffect, useMemo } from 'react';
import NextLink, { LinkProps as NextLinkProps } from 'next/link';
import NextImage, { ImageProps as NextImageProps } from 'next/image';
import { Box, VStack, HStack } from '@chakra-ui/react';
import { SVGWrapper } from '../../display/SvgWrapper';

import { Logo } from '../../display/SvgElements/Logo';
import { MobileNav } from './MobileNav';
import { DesktopNav } from './DesktopNav';
import { HALink } from '../HA_Link';

// CONSTANTS ///////////////////////////////

// TYPES
// type HeaderType = {};

const Header = (props: any) => {
  useEffect(() => {
    const header = document.getElementById('myHeader');
    const sticky = header?.offsetTop ?? 0;
    function myFunction() {
      if (window.pageYOffset > sticky + 10) {
        header?.classList.add('sticky');
      } else {
        header?.classList.remove('sticky');
      }
    }
    window.onscroll = function () {
      myFunction();
    };
  }, []);

  const { data } = props;
  const content = data?.items?.[0]?.fields;

  const navItems = useMemo(() => {
    return content ? serializeIncomingData(content) : null;
  }, [content]);

  if (!navItems) return null;

  console.log('navItems', navItems);

  return (
    <>
      <VStack as="header" spacing={0} sx={styles.Wrapper} {...props}>
        <Box className="Header-Ribbon" sx={styles.Ribbon} />
        <HStack className="Header-Content" {...styles.Content}>
          <HALink href="/">
            <SVGWrapper id="logo" component={Logo} sx={styles.logo} />
          </HALink>
          {/* TEMP_LANDING_PAGE */}
          {/* <DesktopNav navItems={navItems} /> */}
          {/* <MobileNav navItems={navItems} /> */}
        </HStack>
      </VStack>

      {/* Psuedo Static Header - Used to push the content down */}
      <Box
        sx={{ ...styles.Wrapper, ...styles.pseudoWrapper }}
        aria-hidden="true"
        {...props}
      >
        <SVGWrapper id="logo" component={Logo} sx={styles.logo} />
      </Box>
    </>
  );
};

// HELPERS ////////////////////////////////

function serializeIncomingData(content: any) {
  const navItems = content.navLink
    .filter((link: any) => {
      return !link.fields.parent;
    })
    .map((mLink: any) => {
      const subLinks = content.navLink
        .filter((link: any) => {
          return link.fields.parent?.sys.id === mLink.sys.id;
        })
        .map((sLink: any) => ({
          text: sLink.fields.label,
          url: sLink.fields.url,
        }));

      return {
        text: mLink.fields.label,
        url: mLink.fields.url,
        subLinks,
      };
    });

  return navItems;
}

// STYLES ////////////////////////////////////////

const styles = {
  Wrapper: {
    '--p-top': ['var(--s-12)', null, null, null, 'var(--s-24)'],
    position: 'fixed',
    zIndex: 4,
    backgroundColor: 'white',
    width: '100%',
    top: 0,
    left: 0,
    right: 0,
    transform: 'scale(1)',
    pb: '24px',
    '&.sticky': {
      boxShadow: '0 5px 10px -1px hsl(0, 0%, 30%, 0.3)',
      '#logo': {
        width: '175px',
      },
      '--p-top': '8px',
    },
  },
  Ribbon: {
    position: 'absolute',
    top: 0,
    right: 0,
    left: 0,
    height: 'var(--p-top)',
    width: '100%',
    transition: 'height 150ms ease',
    backgroundColor: 'var(--hof-colors-red)',
  },
  Content: {
    spacing: 'auto',
    sx: {
      width: '100%',
      paddingTop: 'var(--p-top)',
      paddingRight: '32px',
      alignItems: 'flex-end',
      transition: 'padding 150ms ease',
    },
  },
  logo: {
    transition: 'width 150ms ease',
    width: ['var(--s-192)', null, 'var(--s-256)', null /* 'var(--s-384)' */],
  },
  pseudoWrapper: {
    opacity: 0,
    position: 'static',
    '&.sticky': {
      boxShadow: 'none',
      '#logo': {
        width: '175px',
      },
    },
  },
};

export { Header };
