import NextLink, { LinkProps as NextLinkProps } from 'next/link';
import NextImage, { ImageProps as NextImageProps } from 'next/image';
import { SectionHeading } from '../../layout/SectionHeading';
import { DeviceMobile, FirstAid, Pill, Truck, X } from 'phosphor-react';

import { SVGWrapper } from '../../display/SvgWrapper';

import BgImage from '../../../public/images/home/services-bg.png';
import { DottedBox } from '../../display/SvgElements/DottedBox';

/**
 * TODO:
 * - tile section
 *    - background image
 *    - tile container
 *    - tiles
 *  - decorative graphics
 */

import * as s from './PrimaryServicesSection.styles';
import { SectionWrapper as InnerSectionWrapper } from '../../layout/SectionWrapper';
import { useHomeContent } from '../../../context/content/HomePageContent';

const icons = {
  'Pill': Pill,
  'Truck': Truck,
  'FirstAid': FirstAid,
  'DeviceMobile': DeviceMobile
} as any;

const PrimaryServicesSection = (/* props: PrimaryServicesSectionType */) => {
  const {
    main: { primaryServices }
  } = useHomeContent();

  return (
    //
    <>
      <s.HeadingWrapper id="PrimaryServicesHeading">
        <SectionHeading id="service">Our Services</SectionHeading>
      </s.HeadingWrapper>
      <s.SectionWrapper id="PrimaryServicesSection">
        <s.BgImageWrapper>
          <NextImage src={BgImage} />
        </s.BgImageWrapper>
        <SVGWrapper component={DottedBox} {...s.DottedBoxSX} />
        <InnerSectionWrapper bgColor="transparent">
          <s.ServicesContainer>
            {primaryServices.map((service: any) => {
              const serviceData = service.fields;
              const Icon = icons[serviceData.iconName];
              return (
                <s.ServiceCard key={service.sys.id}>
                  <s.ServiceIcon>
                    <Icon
                      size="32px"
                      weight="fill"
                      color="var(--hof-colors-blue)"
                    />
                  </s.ServiceIcon>
                  <s.ServiceTitle>{serviceData.title}</s.ServiceTitle>
                  <s.ServiceDetails>{serviceData.description}</s.ServiceDetails>
                  <NextLink href={serviceData.buttonLink}>
                    <s.ActionButton as="a" size="lg">
                      {serviceData.buttonText}
                    </s.ActionButton>
                  </NextLink>
                </s.ServiceCard>
              );
            })}
          </s.ServicesContainer>
        </InnerSectionWrapper>
      </s.SectionWrapper>
    </>
  );
};

export { PrimaryServicesSection };
