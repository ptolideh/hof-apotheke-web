import { useMemo } from 'react';
import NextLink, { LinkProps as NextLinkProps } from 'next/link';
import {
  HStack,
  Menu,
  MenuButton,
  MenuList,
  MenuItem,
  Button,
  IconButton,
  IconButtonProps,
} from '@chakra-ui/react';

import { HALink } from '../../navigation/HA_Link';
import { CaretRight, CaretLeft, Icon } from 'phosphor-react';
import Slider from 'react-slick';

// CONSTANTS

// TYPES
// type SliderButtonType = {};

type SliderButtonProps = IconButtonProps & {
  slider: any;
  goTo: 'next' | 'prev';
  iconSize?: 'string';
};

const SliderButton = (props: SliderButtonProps) => {
  const { slider, goTo, iconSize = '28px', ...delegatedProps } = props;
  const handleClick = () => {
    goTo === 'next' ? slider?.current.slickNext() : slider?.current.slickPrev();
  };

  const Icon = useMemo(
    () => (goTo === 'next' ? CaretRight : CaretLeft),
    [goTo],
  );

  return (
    <IconButton
      onClick={handleClick}
      colorScheme="transparent"
      color="gray.500"
      // size="lg"
      borderRadius="50%"
      {...delegatedProps}
      icon={<Icon color="currentColor" weight="bold" size={iconSize} />}
    />
  );
};

// STYLED ELEMENTS

export { SliderButton };
