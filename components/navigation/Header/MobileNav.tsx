import { useRef } from 'react';
import NextLink, { LinkProps as NextLinkProps } from 'next/link';
import {
  Box,
  VStack,
  IconButton,
  Drawer,
  DrawerBody,
  DrawerHeader,
  DrawerOverlay,
  DrawerContent,
  DrawerCloseButton,
  useDisclosure,
  Accordion,
  AccordionItem,
  AccordionButton,
  AccordionPanel,
  AccordionIcon
} from '@chakra-ui/react';
import { List } from 'phosphor-react';
import { HALink } from '../HA_Link';

// CONSTANTS ///////////////////////////////

// TYPES
// type HeaderType = {};

// DRAWER ////////////////////////////////////////

const MobileNav = ({ navItems }: any) => {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const btnRef = useRef<any>();
  return (
    <>
      <IconButton
        ref={btnRef}
        onClick={onOpen}
        colorScheme="whiteAlpha"
        aria-label="Toggle navigation menu"
        sx={styles.NavIconButton.Btn}
        icon={<List {...styles.NavIconButton.Icon} />}
      />
      <Drawer
        isOpen={isOpen}
        placement="right"
        onClose={onClose}
        finalFocusRef={btnRef}
      >
        <DrawerOverlay />
        <DrawerContent sx={styles.DrawerContentWrapper}>
          <DrawerHeader sx={styles.DrawerHeader}>
            Hof Apotheke Navigation Menu
          </DrawerHeader>
          <DrawerCloseButton sx={styles.CloseBtn} />
          <DrawerBody
            as={VStack}
            spacing={0}
            sx={{ ...styles.LinkListStack, ...styles.DrawerContent }}
          >
            {navItems.map((navItem: any) => {
              if (navItem.subLinks.length > 0) {
                return (
                  <Accordion key={navItem.url} w="100%" allowMultiple>
                    <AccordionItem>
                      <AccordionButton sx={styles.AccordionButton}>
                        <Box sx={styles.link}>{navItem.text}</Box>
                        <AccordionIcon />
                      </AccordionButton>
                      <AccordionPanel pb={4} as={VStack}>
                        {navItem.subLinks.map((subLink: any) => (
                          <HALink
                            key={subLink.url}
                            href={subLink.url}
                            sx={{ ...styles.link, ...styles.sublink }}
                          >
                            {subLink.text}
                          </HALink>
                        ))}
                      </AccordionPanel>
                    </AccordionItem>
                  </Accordion>
                );
              } else {
                return (
                  <HALink key={navItem.url} href={navItem.url} sx={styles.link}>
                    {navItem.text}
                  </HALink>
                );
              }
            })}
          </DrawerBody>
        </DrawerContent>
      </Drawer>
    </>
  );
};

// STYLES ////////////////////////////////////////

const styles = {
  NavIconButton: {
    Btn: {
      display: [null, null, 'none'],
      marginLeft: 'auto'
    },
    Icon: {
      weight: 'bold',
      size: '40px',
      color: 'var(--chakra-colors-gray-700)'
    } as any
  },
  DrawerContentWrapper: {
    '&::after': {
      position: 'absolute',
      content: '""',
      minHeight: '100%',
      maxHeight: '100%',
      width: 'var(--s-16)',
      top: 0,
      right: 0,
      backgroundColor: 'var(--hof-colors-red)'
    }
  },
  DrawerHeader: {
    padding: 'var(--s-32)',
    overflow: 'hidden',
    opacity: 0
  },
  DrawerContent: {
    paddingRight: 'var(--s-32)'
  },
  LinkListStack: {
    '--border': '1px solid var(--chakra-colors-gray-200)',
    alignItems: 'flex-start',
    width: '100%',
    '& > *': {
      borderTop: 'var(--border)'
    },
    '& > *:last-child': {
      borderBottom: 'var(--border)'
    }
  },
  link: {
    textTransform: 'uppercase',
    marginRight: 'auto',
    textAlign: 'left',
    fontSize: '18px',
    fontWeight: 'var(--weight-bold)',
    width: '100%',
    padding: '20px 0'
  },
  sublink: {
    position: 'relative',
    textTransform: 'revert',
    padding: '16px 0',
    color: 'hsl(0, 0%, 40%)',

    '&::after': {
      display: 'inline-block',
      position: 'absolute',
      fontFamily: 'monospace',
      content: '"^"',
      fontSize: 'var(--text-24)',
      top: '55%',
      transform: 'translateY(-55%) rotate(90deg)',
      lineHeight: '1'
    }
  },
  CloseBtn: {
    fontSize: 'var(--s-24)',
    padding: 'var(--s-24)'
  },
  AccordionButton: {
    padding: 0,
    fontSize: 'var(--s-24)'
  }
};

export { MobileNav };
