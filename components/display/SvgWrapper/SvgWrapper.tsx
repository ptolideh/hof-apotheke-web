import { FC } from 'react';
import { Box, BoxProps } from '@chakra-ui/react';

export interface SVGWrapperProps extends BoxProps {
  component: FC;
  label?: string;
}

export const SVGWrapper = ({
  component,
  className,
  width,
  height,
  color,
  ...delegatedProps
}: SVGWrapperProps) => {
  const WrappedComponent = component;
  return (
    <Box
      as="div"
      className={className}
      w={width}
      h={height}
      color={color}
      {...delegatedProps}
    >
      <WrappedComponent />
    </Box>
  );
};
