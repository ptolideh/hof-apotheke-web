import { VStack, Box, BoxProps } from '@chakra-ui/react';
import { MaxWidthWrapper } from '../MaxWidthWrapper';

type MaxWidthType = 'sm' | 'md' | 'lg';
export type SectionWrapperPropTypes = BoxProps & { maxWidth?: MaxWidthType };

export const SectionWrapper = (
  {
    bgColor,
    maxWidth = 'sm',
    sx,
    children,
    ...delegatedProps
  }: SectionWrapperPropTypes //
) => (
  <VStack
    sx={{
      label: 'SectionWrapper',
      position: 'relative',
      backgroundColor: bgColor ?? 'white',
      w: '100%',
      ...(sx || {})
    }}
    {...delegatedProps}
  >
    <MaxWidthWrapper sx={{ '--max-w': convertMaxWidthToPx(maxWidth) }}>
      {children}
    </MaxWidthWrapper>
  </VStack>
);

function convertMaxWidthToPx(maxWidth: MaxWidthType) {
  switch (maxWidth) {
    case 'md':
      return '1256px';
    case 'lg':
      return '1448px';
    case 'sm':
    default:
      return '1128px';
  }
}
