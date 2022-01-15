import { Box, BoxProps } from '@chakra-ui/react';

const Paper = (props: BoxProps) => {
  const { children, ...delegatedProps } = props;
  const boxShadow = `
    0px 0px 5px hsl(270, 50%, 95%),
    0px 10px 30px -1px hsl(240, 50%, 80%)
  `;
  return (
    <Box
      bg="white"
      p={4}
      borderRadius="2xl"
      boxShadow={boxShadow}
      {...delegatedProps}
    >
      {children}
    </Box>
  );
};

export { Paper };
