import { SimpleGrid } from '@chakra-ui/react';
import NextImage, { ImageProps as NextImageProps } from 'next/image';
import { SectionHeading } from '../../layout/SectionHeading';
import { SectionWrapper } from '../../layout/SectionWrapper';
import * as s from './NewsAndOffersPage.styles';
export const NewsAndOffers = () => {
  return (
    <SectionWrapper className="RootPageWrapper" pt="64px" pb="128px">
      <SectionHeading
        pt={[null, null, '36px']}
        pb="48px" //
      >
        News and Offers
      </SectionHeading>
      <SimpleGrid className="" minChildWidth="300px" spacing="32px">
        <Card />
        <Card />
        <Card />
        <Card />
      </SimpleGrid>
    </SectionWrapper>
  );
};

const Card = () => (
  <s.Card data-testid="news-offer-card">
    <s.CardImage>
      <NextImage
        src="https://images.unsplash.com/photo-1642862345501-0f512921f534?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2942&q=80"
        layout="fill"
      />
    </s.CardImage>
    <s.ContentWrapper>
      <s.CardTitle>
        Cheese CheeseCheese CheeseCheeseCheese CheeseCheese Cheese Cheese Cheese
        Cheese{' '}
      </s.CardTitle>
      <s.CardSummary>
        Cheese CheeseCheese CheeseCheeseCheese CheeseCheese Cheese Cheese Cheese
        Cheese Cheese CheeseCheese CheeseCheeseCheese CheeseCheese Cheese Cheese
        Cheese Cheese Cheese CheeseCheese CheeseCheeseCheese CheeseCheese Cheese
        Cheese Cheese Cheese{' '}
      </s.CardSummary>
    </s.ContentWrapper>
  </s.Card>
);
