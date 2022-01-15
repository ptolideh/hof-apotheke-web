import { FC } from 'react';
import { ChakraThemeProvider } from './theme';

export const AppProviders: FC = ({ children }) => {
  return (
    // <StoreProvider>
    //   <QueryClientProvider>
    <ChakraThemeProvider>{children}</ChakraThemeProvider>
    //   </QueryClientProvider>
    // </StoreProvider>
  );
};
