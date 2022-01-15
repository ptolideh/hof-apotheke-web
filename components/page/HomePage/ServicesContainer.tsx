import styled from '@emotion/styled';
import { QUERIES } from '../../../context/theme';

export const ServicesContainer = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(min(256px, 100%), 1fr));
  gap: var(--s-12);
  border: 1px solid red;
  background-color: hsl(0, 0%, 95%);
  padding: var(--s-16);
  border-radius: var(--chakra-radii-2xl);

  @media ${QUERIES.tabletAndUp} {
    gap: var(--s-24);
  }

  @media ${QUERIES.tabletLargeAndUp} {
    grid-template-columns: repeat(auto-fit, minmax(min(352px, 100%), 1fr));
  }

  @media ${QUERIES.laptopAndUp} {
    max-width: 1100px;
    margin: 0 auto;
  }
`;
