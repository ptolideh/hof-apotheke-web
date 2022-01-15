import { createContext, useContext } from 'react';

export const HomeContentContext = createContext({} as any);

export const useHomeContent = () => {
  const context = useContext(HomeContentContext);
  if (!context) {
    throw new Error('`useHomeContent` must be used inside its provider.');
  }
  return context;
};
