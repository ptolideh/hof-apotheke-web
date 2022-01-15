import { Stack } from '@chakra-ui/react';
import { StoreInfoItem, VariantType } from './StoreInfoItem';

// TYPES //////////////////////

type InfoType = {
  [key in VariantType]?: string;
};
type InfoEntriesType = [VariantType, string][];

// CONSTANTS ///////////////////

const info: InfoType = {
  address: 'Louisenstr. 5561348 Bad Homburg',
  email: 'info@hofapotheke.com',
  phone: '06172 92420',
  fax: '06172 924292'
};

// COMPONENT

const ContactInfoList = () => {
  const infoEntries = Object.entries(info) as InfoEntriesType;
  return (
    <Stack direction="column" spacing="var(--s-24)">
      {infoEntries.map(([variant, text]) => (
        <StoreInfoItem key={variant} variant={variant}>
          {text}
        </StoreInfoItem>
      ))}
    </Stack>
  );
};

export { ContactInfoList };
