import { useMemo } from 'react';
import { Box, Stack, VStack, Text, Flex } from '@chakra-ui/react';

import { StoreInfoItem, VariantType } from './StoreInfoItem';
import { capitalizer } from '../../../utils';
import { useHomeContent } from '../../../context/content/HomePageContent';

// TYPES ///////////////////////////////

type Schedule = { timeline: string; hours: string };

// COMPONENT -------------------------

const HoursList = ({ storeInfo }: any) => {
  const { mapUrl } = storeInfo;

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

  return (
    <Box width="100%">
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
            sx={{
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
            }}
          >
            <span className="Schedule-days">{scheduleItem.timeline}</span>
            <span className="Schedule-hours">{scheduleItem.hours}</span>
          </Flex>
        ))}
      </VStack>
    </Box>
  );
};

export { HoursList };
