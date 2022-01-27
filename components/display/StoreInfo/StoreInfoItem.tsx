import styled from '@emotion/styled';
import {
  Clock,
  EnvelopeSimple,
  MapPin,
  PhoneCall,
  Printer,
} from 'phosphor-react';
import NextLink, { LinkProps as NextLinkProps } from 'next/link';

import { Box, BoxProps } from '@chakra-ui/react';

// CONSTANTS
const INFO_VARIANTS = {
  address: {
    icon: MapPin,
  },
  email: {
    icon: EnvelopeSimple,
  },
  phone: {
    icon: PhoneCall,
  },
  fax: {
    icon: Printer,
  },
  hours: {
    icon: Clock,
  },
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
    rel: 'noreferrer',
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
        bgColor: href ? 'hsl(0, 0%, 95%)' : 'white',
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
      <span
        className={`StoreInfoItem-text ${href ? 'link' : ''}`} //
      >
        {children}
      </span>
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
    display: -webkit-box;
    -webkit-box-orient: vertical;
    -webkit-line-clamp: 3;
    overflow: hidden;
    width: fit-content;
  }

  .StoreInfoItem-text.link {
    color: hsl(208, 99%, 30%);
  }

  .StoreInfoItem-text.link::after {
    content: url(data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAoAAAAKCAYAAACNMs+9AAAAQElEQVR42qXKwQkAIAxDUUdxtO6/RBQkQZvSi8I/pL4BoGw/XPkh4XigPmsUgh0626AjRsgxHTkUThsG2T/sIlzdTsp52kSS1wAAAABJRU5ErkJggg==);
    margin-left: 12px;
  }

  &:hover {
    .StoreInfoItem-text.link::after {
      opacity: 0.5;
    }
  }
`;

export { StoreInfoItem };
