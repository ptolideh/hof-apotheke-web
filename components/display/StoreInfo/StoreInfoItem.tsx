import styled from '@emotion/styled';
import {
  Clock,
  EnvelopeSimple,
  MapPin,
  PhoneCall,
  Printer
} from 'phosphor-react';
import NextLink, { LinkProps as NextLinkProps } from 'next/link';

import { Box, BoxProps } from '@chakra-ui/react';

// CONSTANTS
const INFO_VARIANTS = {
  address: {
    icon: MapPin
  },
  email: {
    icon: EnvelopeSimple
  },
  phone: {
    icon: PhoneCall
  },
  fax: {
    icon: Printer
  },
  hours: {
    icon: Clock
  }
};

// TYPES
export type VariantType = keyof typeof INFO_VARIANTS;

type StoreInfoItemType = {
  variant: VariantType;
  size?: string;
  color?: string;
  href?: string;
} & BoxProps;

/////

const StoreInfoItem = (props: StoreInfoItemType) => {
  const {
    variant,
    size = '2rem',
    color = 'var(--hof-colors-red)',
    className,
    children,
    href,
    ...delegatedProps
  } = props;
  const PhosphorIcon = INFO_VARIANTS[variant].icon;
  const asLinkProps = {
    as: 'a',
    href,
    target: '_blank',
    rel: 'noreferrer'
  } as const;

  return (
    <Wrapper
      {...(href ? asLinkProps : {})}
      className={`StoreInfoItem-root ${className ?? ''}`}
      bgColor="white"
      p="16px"
      borderRadius="8px"
      _hover={{
        cursor: href ? 'pointer' : 'default',
        bgColor: href ? 'hsl(0, 0%, 92%)' : 'white'
      }}
      {...delegatedProps}
    >
      <PhosphorIcon
        className="StoreInfoItem-icon"
        weight="bold"
        width={size}
        height={size}
        color={color}
        aria-hidden={true}
      />
      <span className="StoreInfoItem-text">{children}</span>
    </Wrapper>
  );
};

// STYLED ELEMENTS

const Wrapper = styled(Box)`
  display: flex;
  flex-flow: nowrap;
  align-items: center;
  max-width: 100%;

  .StoreInfoItem-icon {
    flex: 0 0 auto;
    align-self: flex-start;
  }

  .StoreInfoItem-text {
    font-weight: var(--weight-semibold);
    font-size: var(--text-16);
    margin-left: var(--s-16);
    flex: 1;
    display: -webkit-box;
    -webkit-box-orient: vertical;
    -webkit-line-clamp: 3;
    overflow: hidden;
  }
`;

export { StoreInfoItem };
