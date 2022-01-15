import NextLink, { LinkProps as NextLinkProps } from 'next/link';

import {
  Eyedropper,
  FirstAidKit,
  IdentificationCard,
  Leaf
} from 'phosphor-react';

import { useHomeContent } from '../../../context/content/HomePageContent';
import * as s from './RegularServicesSection.styles';

/**
 * TODO:
 * - tile section
 *    - background image
 *    - tile container
 *    - tiles
 *  - decorative graphics
 */

const icons = {
  'IdentificationCard': IdentificationCard,
  'FirstAidKit': FirstAidKit,
  'Leaf': Leaf,
  'Eyedropper': Eyedropper
} as any;

const RegularServicesSection = (/* props: RegularServicesSectionType */) => {
  const {
    main: { secondaryServices: regularServices }
  } = useHomeContent();
  console.log('regularServices--->>>', regularServices);

  return (
    //
    <s.RootWrapper id="RegularServices">
      <s.ServicesContainer>
        {regularServices.map((service: any) => {
          const serviceId = service.sys.id;
          const serviceData = service.fields;
          const Icon = icons[serviceData.iconType];
          return (
            <s.ServiceCard key={serviceId}>
              <s.ServiceIcon>
                <Icon size="32px" weight="fill" color="var(--hof-colors-red)" />
              </s.ServiceIcon>
              <NextLink href={serviceData.servicePageUrl ?? ' '}>
                <s.ServiceTitle>{serviceData.title}</s.ServiceTitle>
              </NextLink>
              <s.ServiceDetails>{serviceData.description}</s.ServiceDetails>
            </s.ServiceCard>
          );
        })}
      </s.ServicesContainer>
    </s.RootWrapper>
  );
};

export { RegularServicesSection };
