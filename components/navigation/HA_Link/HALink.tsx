// import { FC, ReactNode, useState, useEffect, useMemo, useRef } from 'react';
import styled from '@emotion/styled';
import { Link, LinkProps } from '@chakra-ui/react';
import NextLink, { LinkProps as NextLinkProps } from 'next/link';

type HALinkProps = NextLinkProps & LinkProps;

const HALink = (props: HALinkProps) => {
  const {
    children,
    href,
    passHref,
    prefetch,
    replace,
    scroll,
    shallow,
    locale,
    ...chakraLinkProps
  } = props;

  return (
    <NextLink
      href={href}
      passHref={passHref}
      prefetch={prefetch}
      replace={replace}
      scroll={scroll}
      shallow={shallow}
      locale={locale}
    >
      <Link {...chakraLinkProps}>{children}</Link>
    </NextLink>
  );
};

export { HALink };
