import { removeAllWhiteSpace } from '../../../utils';
import { StoreInfoItem } from './StoreInfoItem';

// COMPONENT

const ContactInfoList = (props: { storeInfo: any }) => {
  const { address, mapUrl, phone, fax, email } = props.storeInfo;
  return (
    <>
      {address && (
        <StoreInfoItem variant="address" href={mapUrl} w="100%">
          {address}
        </StoreInfoItem>
      )}
      {email && (
        <StoreInfoItem
          variant="email"
          href={`mailto:${email.trim()}}`}
          w="100%"
        >
          {email}
        </StoreInfoItem>
      )}
      {phone && (
        <StoreInfoItem
          variant="phone"
          href={`tel:${removeAllWhiteSpace(phone)}`}
          w="100%"
        >
          {phone}
        </StoreInfoItem>
      )}
      {fax && (
        <StoreInfoItem
          variant="fax"
          href={`fax:${removeAllWhiteSpace(fax)}`}
          w="100%"
        >
          {fax}
        </StoreInfoItem>
      )}
    </>
  );
};

export { ContactInfoList };
