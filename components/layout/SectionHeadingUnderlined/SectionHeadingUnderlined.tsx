import { Heading, HeadingProps } from '@chakra-ui/react';
import styled from '@emotion/styled';

export const SectionHeadingUnderlined = ({
  id,
  className,
  style,
  ...restProps
}: HeadingProps) => {
  return (
    <S_RootContainer
      id={id}
      className={`c-SectionHeadingUnderlined ${className}`}
      style={style}
    >
      <S_Title {...restProps} />
    </S_RootContainer>
  );
};

// STYLES ///////////////////////////

const S_RootContainer = styled.div({
  display: 'flex',
  justifyContent: 'center',
});

const S_Title = ({ sx, ...resProps }: HeadingProps) => (
  <Heading
    sx={{
      position: 'relative',
      lineHeight: '1.4',
      '::after': {
        position: 'absolute',
        bottom: '-0.4em',
        left: '50%',
        transform: 'translateX(-50%)',
        content: '""',
        width: '40%',
        height: '6px',
        backgroundColor: 'var(--hof-colors-red)',
        ...(sx || {}),
      },
    }}
    {...resProps}
  />
);
