import NextImage, { ImageProps as NextImageProps } from 'next/image';

import heroBg from '../../../public/images/home/hero-bg.png';
import { StoreInfoHeaderCard } from './StoreInfoHeaderCard';
import { NewsSlider } from './NewsSlider';
import { SectionWrapper } from '../../layout/SectionWrapper';

import * as s from './AboveFoldSection.styles';

const AboveFoldSection = () => {
  return (
    <>
      {/* <Header sx={{ position: 'static' }} /> */}
      <s.RootWrapper id="AboveFoldSection">
        <s.BgImage>
          <NextImage src={heroBg} />
        </s.BgImage>
        <SectionWrapper bgColor={'transparent'} maxWidth="lg" w="100%">
          <s.CardsGrid>
            <s.InfoCardColumn>
              <StoreInfoHeaderCard />
            </s.InfoCardColumn>
            <s.SliderColumn>
              <NewsSlider />
            </s.SliderColumn>
          </s.CardsGrid>
        </SectionWrapper>
      </s.RootWrapper>
    </>
  );
};

export { AboveFoldSection };
