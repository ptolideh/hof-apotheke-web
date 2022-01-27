import { useMemo } from 'react';
import spacetime from 'spacetime';
import {
  Box,
  Flex,
  Stack,
  VStack,
  Heading,
  SimpleGrid,
} from '@chakra-ui/react';
import { VariantType, StoreInfoItem } from '../../display/StoreInfo';
import { Paper } from '../../layout/Paper';
import { useHomeContent } from '../../../context/content/HomePageContent';
import { capitalizer, removeAllWhiteSpace } from '../../../utils';

// TYPES
// type InfoType = {
//   [key in VariantType]?: string;
// };
// type InfoEntriesType = [VariantType, string][];

type Schedule = { timeline: string; hours: string };

// CONSTANTS
// const info: InfoType = {
//   address: 'Louisenstr. 5561348 Bad Homburg',
//   email: 'info@hofapotheke.com',
//   phone: '06172 92420',
//   fax: '06172 924292'
// };

// const hours = {
//   weekday: '08:00 - 18:30',
//   weekend: '09:00 - 16:00'
// };

const StoreInfoHeaderCard = (/* props: StoreInfoHeaderCardType */) => {
  const { main, storeInfo } = useHomeContent();
  const { pageHeading } = main ?? {};
  const { address, mapUrl, phone, fax, email } = storeInfo;

  // const infoEntries = Object.entries(info) as InfoEntriesType;

  const scheduleList = useMemo(() => {
    type AccType = Schedule[];
    return storeInfo.hoursOfOperation.reduce((acc: AccType, hVal: any) => {
      const firstDay = capitalizer(hVal.days[0]);
      const lastDay = capitalizer(hVal.days[hVal.days.length - 1]);
      acc.push({
        timeline: `${firstDay} - ${lastDay}`,
        hours: `${hVal.start} - ${hVal.end}`,
      });
      return acc;
    }, []);
  }, [storeInfo]);

  const todayHours = useMemo(() => {
    const today = spacetime.now().goto('berlin').format('day').toLowerCase();
    const todayHoursOfOperation = storeInfo.hoursOfOperation?.find((val: any) =>
      val.days?.includes(today),
    );
    const t = todayHoursOfOperation;
    return `${t.start} - ${t.end}`;
  }, [storeInfo]);

  console.log('EMAIL -->>>>', email);

  return (
    <Paper className="ATF-StoreInfoCard-Wrapper" sx={styles.CardWrapper}>
      <Heading as="h1" sx={styles.Heading}>
        <span>{pageHeading[0]}</span>
        <span className="ATF-Heading-Name">
          <strong>{pageHeading[1]}</strong>
        </span>
      </Heading>
      <SimpleGrid spacing="4px" columns={[1, 2, null, 1]}>
        {address && (
          <StoreInfoItem variant="address" href={mapUrl}>
            {address}
          </StoreInfoItem>
        )}
        {email && (
          <StoreInfoItem variant="email" href={`mailto:${email.trim()}}`}>
            {email}
          </StoreInfoItem>
        )}
        {phone && (
          <StoreInfoItem
            variant="phone"
            href={`tel:${removeAllWhiteSpace(phone)}`}
          >
            {phone}
          </StoreInfoItem>
        )}
        {fax && (
          <StoreInfoItem variant="fax" href={`fax:${removeAllWhiteSpace(fax)}`}>
            {fax}
          </StoreInfoItem>
        )}
        <Box>
          <StoreInfoItem variant="hours" mb={['var(--s-16)']} href={mapUrl}>
            <Box
              as="span"
              sx={{
                borderBottom: '1px solid var(--hof-colors-blue)',
                fontStyle: 'none',
              }}
            >
              Today
            </Box>
            &nbsp; Pharmacy Hours
          </StoreInfoItem>
          <VStack data-cl="ScheduleList" align="start" spacing="16px">
            {scheduleList.map((scheduleItem: Schedule) => (
              <Flex
                key={encodeURIComponent(scheduleItem.timeline)}
                className="Schedule"
                sx={styles.Schedule}
              >
                <span className="Schedule-days">{scheduleItem.timeline}</span>
                <span className="Schedule-hours">{scheduleItem.hours}</span>
              </Flex>
            ))}
          </VStack>
        </Box>
      </SimpleGrid>
    </Paper>
  );
};

// sTYLES /////////////////////////////

const styles = {
  CardWrapper: {
    '--px': ['var(--s-8)', null, 'var(--s-32)'],
    '--py': 'var(--s-32)',
    width: '100%',
    mx: 'auto',
    maxWidth: 'var(--s-768)',
    minHeight: 'calc(100% + calc(2.5 * var(--section-p)))',
    position: ['static', null, null, 'absolute'],
    overflow: 'hidden',
    py: 'var(--py)',
    px: 'var(--px)',
    borderRadius: [
      'var(--lg-card-radii)',
      null,
      null,
      'var(--lg-card-radii) var(--sm-card-radii) var(--lg-card-radii) var(--lg-card-radii)',
    ],
  },
  Heading: {
    position: 'relative',
    zIndex: '1',
    width: 'auto',
    minWidth: '100%',
    fontWeight: 'var(--weight-heavy)',
    marginBottom: 'var(--s-32)',
    marginLeft: 'calc(-1 * var(--px))',
    marginRight: ['calc(-1 * var(--px))', null, 0],
    px: ['calc(var(--px) + 8px)', 'var(--px)'],
    paddingTop: 'var(--py)',
    paddingBottom: 'var(--py)',
    borderRadius: [null, null, '0 0 24px 0'],
    marginTop: 'calc(-1 * var(--py))',
    backgroundColor: 'hsl(0, 0%, 96%)',
    color: 'hsl(0, 0%, 30%)',
    fontSize: ['var(--text-30)', 'var(--text-36)', null, 'var(--text-30)'],
    //

    '& span': {
      display: ['block', 'inline-block'],
      marginLeft: [0, 'var(--s-8)', null, 0], // margin for linline mode
    },
    //
    '& .ATF-Heading-Name': {
      display: 'block',
      width: ['fit-content'],
      color: 'hsl(0, 0%, 5%)',
      fontSize: ['1.3em', '1.2em', null, '1.5em'],
      marginTop: [0, 0, 0, 'var(--s-8)'],
      //
      'strong': {
        color: 'var(--hof-colors-red)',
      },
    },
  },
  Schedule: {
    flexDirection: 'column',
    paddingLeft: 'var(--s-48)',
    //
    '.Schedule-days': {
      marginBottom: 'var(--s-4)',
      color: 'var(--chakra-colors-gray-800)',
      fontWeight: 600,
    },
    '.Schedule-hours': {
      fontSize: '1.1rem',
    },
  },
};

//////

export { StoreInfoHeaderCard };
