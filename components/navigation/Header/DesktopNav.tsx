import NextLink, { LinkProps as NextLinkProps } from 'next/link';
import {
  HStack,
  Menu,
  MenuButton,
  MenuList,
  MenuItem,
  Button
} from '@chakra-ui/react';

import { HALink } from '../HA_Link';
import { CaretDown } from 'phosphor-react';

// CONSTANTS ///////////////////////////////

// TYPES
// type HeaderType = {};

const DesktopNav = ({ navItems }: any) => {
  return (
    <HStack as="nav" {...styles.WrapperStack}>
      {navItems.map((navItem: any) => {
        if (navItem.subLinks.length > 0) {
          return (
            <Menu key={navItem.url}>
              {({ isOpen }) => (
                <>
                  <MenuButton
                    as={Button}
                    rightIcon={<CaretDown {...styles.menuButtonIcon} />}
                    sx={styles.menuButton}
                  >
                    {navItem.text}
                  </MenuButton>
                  <MenuList sx={styles.menuList}>
                    {navItem.subLinks.map((subLink: any) => (
                      <MenuItem
                        key={subLink.url}
                        as={HALink}
                        href={subLink.url}
                        sx={styles.subLink}
                      >
                        {subLink.text}
                      </MenuItem>
                    ))}
                  </MenuList>
                </>
              )}
            </Menu>
          );
        }
        return (
          <HALink key={navItem.url} href={navItem.url} sx={styles.link}>
            {navItem.text}
          </HALink>
        );
      })}
    </HStack>
  );
};

// STYLES ////////////////////////////////////////
const styles = {
  WrapperStack: {
    spacing: [null, null, '16px', '32px', '36px'],
    sx: {
      '--link-color': 'hsl(0, 0%, 30%)',
      '--link-hover-color': 'var(--hof-colors-red)',
      display: ['none', 'none', 'revert'],
      marginLeft: 'auto'
    }
  },
  link: {
    fontSize: 'var(--text-20)',
    color: 'var(--link-color)',
    fontWeight: 'var(--weight-semibold)',
    whiteSpace: 'nowrap',
    //
    ':hover': {
      textDecoration: 'none',
      color: 'var(--link-hover-color)'
    }
  },
  get subLink() {
    return {
      ...this.link,
      color: 'hsl(0, 0%, 25%)',
      fontSize: 'var(--text-18)',
      padding: '12px 14px',
      borderRadius: '8px',
      //
      ':hover': {
        ...this.link[':hover'],
        backgroundColor: 'hsl(0, 0%, 97%)'
      }
    };
  },
  get menuButton() {
    return {
      ...this.link,
      backgroundColor: 'transparent',
      padding: 0,
      //
      '&[data-active]': {
        backgroundColor: 'transparent'
      },
      //
      ':hover': {
        ...this.link[':hover'],
        backgroundColor: 'transparent',
        color: 'var(--link-hover-color)'
      },
      //
      '& .chakra-button__icon': {
        marginLeft: '4px'
      }
    };
  },
  menuButtonIcon: {
    weight: 'bold',
    size: '18px',
    color: 'currentColor'
  } as any,

  menuList: {
    padding: 'var(--s-16)',
    boxShadow: '0 8px 15px hsl(0, 0%, 0%, 0.35)'
  }
};

export { DesktopNav };
