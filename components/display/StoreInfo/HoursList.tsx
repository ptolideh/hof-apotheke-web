import { useMemo } from 'react';
import spacetime from 'spacetime';
import { Box, Stack, VStack, Text } from '@chakra-ui/react';

import { StoreInfoItem, VariantType } from './StoreInfoItem';
import styled from '@emotion/styled';

// TYPES ///////////////////////////////

type InfoType = {
  [key in VariantType]?: string;
};
type InfoEntriesType = [VariantType, string][];

// CONSTANTS //////////////////////////

const hours = {
  weekday: '08:00 - 18:30',
  weekend: '09:00 - 16:00'
};

// COMPONENT -------------------------

const HoursList = () => {
  const todayHours = useMemo(() => {
    const today = spacetime.now().goto('berlin').format('day');
    const weekdays = /monday|tuesday|wednesday|thursday|friday/gim;
    return today.match(weekdays) ? hours.weekday : hours.weekend;
  }, []);

  return (
    <Stack direction="column" spacing="var(--s-12)">
      <StoreInfoItem variant="hours">
        Today:
        <Box as="span" ml={2}>
          {todayHours}
        </Box>
      </StoreInfoItem>
      <DailyScheduleStack>
        <ScheduleDays>Monday - Friday</ScheduleDays>
        <Text as="span">{hours.weekday}</Text>
      </DailyScheduleStack>
      <DailyScheduleStack mt="16px !important">
        <ScheduleDays>Saturday - Sunday</ScheduleDays>
        <Text as="span">{hours.weekend}</Text>
      </DailyScheduleStack>
    </Stack>
  );
};

// STYLES ////////////////////////////

const DailyScheduleStack = styled(VStack)({
  paddingLeft: 'var(--s-48)',
  alignItems: 'flex-start'
});

const ScheduleDays = styled('span')({
  color: 'var(--hof-colors-blue)',
  fontWeight: 600
});

export { HoursList };
