import styled from '@emotion/styled';
import { Box } from '@chakra-ui/react';

export const PageWithHero = styled(Box)({
  '--header-h': '148px',
  '--aboveFold-min-h': 'var(--s-128)',
  '--aboveFold-max-h': 'calc(var(--header-h) + var(--s-512))',
  '--aboveFold-h': '65vh',
});
