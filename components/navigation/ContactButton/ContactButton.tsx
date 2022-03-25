import { Box, Button } from '@chakra-ui/react';
import NextLink from 'next/link';

export const ContactButton = (props: any) => (
  <Box
    sx={{
      label: 'ContactButton_Wrapper',
      textAlign: 'center',
      paddingBottom: 'var(--s-16)',
      width: '100%',
    }}
  >
    <NextLink href="/kontakt">
      <a>
        <Button
          tabindex="-1"
          sx={{
            fontSize: '2xl',
            height: '72px',
            width: 'min(100%, 256px)',
            backgroundColor: 'var(--hof-colors-red)',
            color: 'white',
            transition: 'var(--transition-med)',
            boxShadow: '0 4px 12px -2px hsl(1, 67%, 49%)',

            '&:hover': {
              backgroundColor: 'hsl(1, 68%, 45%)',
              boxShadow: '0 2px 4px -1px hsl(1, 67%, 49%)',
            },
          }}
        >
          {props.children || 'Kontakt'}
        </Button>
      </a>
    </NextLink>
  </Box>
);
