import { Box, BoxProps } from '@chakra-ui/react';
import { documentToReactComponents } from '@contentful/rich-text-react-renderer';
import { withMQ as mq } from '../../../context/theme';

type PropTypes = {
  content: any;
} & BoxProps;
export const RichTextContainer = ({
  content,
  sx,
  ...otherProps
}: PropTypes) => (
  <Box
    sx={mq({
      label: 'RichTextContainer',
      '--base-text-color': 'var(--chakra-colors-gray-800)',
      'h6': {
        color: 'var(--hof-colors-blue)',
        fontSize: 'var(--text-24)',
        mb: 'var(--s-16)',
        pt: 'var(--s-16)',
        lineHeight: '1.8',
        'i': {
          color: 'var(--hof-colors-red)',
        },
      },
      'p': {
        lineHeight: '1.6',
        mb: 'var(--s-32)',
        padding: '1px 0',
        color: 'var(--base-text-color)',
        'b': {
          color: 'var(--hof-colors-red)',
        },
      },
      'ul': {
        listStyle: 'disc',
        ml: 'var(--s-20)',
        'li': {
          mb: 'var(--s-12)',
        },
        'p': {
          mb: 0,
        },
        'p b': {
          color: 'var(--base-text-color)',
        },
      },
      'p, ul, li, b': {
        fontSize: '1.125rem',
      },
      ...(sx || {}),
    })}
    {...otherProps}
  >
    {documentToReactComponents(content)}
  </Box>
);
