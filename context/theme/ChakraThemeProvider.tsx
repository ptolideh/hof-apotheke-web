import { extendTheme, ChakraProvider } from '@chakra-ui/react';
import { baseTheme } from './base';
import { GlobalStyles } from './GlobalStyles';

type ThemePropsType = {
  children: React.ReactNode;
};

const overrides = {
  ...baseTheme
};

const theme = extendTheme(overrides);

const ChakraThemeProvider = (props: ThemePropsType) => {
  const { children } = props;
  return (
    <ChakraProvider theme={theme}>
      {GlobalStyles}
      {children}
    </ChakraProvider>
  );
};

export { ChakraThemeProvider };
