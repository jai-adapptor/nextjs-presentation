'use client';
import { Box, Heading, ListItem, UnorderedList } from '@chakra-ui/react';
import Image from 'next/image';
import { Balancer } from 'react-wrap-balancer';

const listItems = [
  `Web framework that tightly couples server and client.`,
  `Jointly developed between Vercel and React team.`,
  `Used as an on-ramp to Vercel's platform.`,
  `Recently and perhaps prematurely released an overhaul to routing and rendering.`,
];

export function Overview() {
  return (
    <Box height='100%' position='relative' width='100%'>
      <Box bottom={0} position='absolute' right={0} width='70%' zIndex={0}>
        <Image alt='Overview' height={1281} src='/overview.png' width={2481} />
      </Box>
      <Heading marginBottom='6' size='lg'>
        Next.js Overview
      </Heading>
      <UnorderedList fontSize='2xl'>
        {listItems.map((item, i) => (
          <ListItem key={`list-item-${i}`} mb='4'>
            <Balancer>{item}</Balancer>
          </ListItem>
        ))}
      </UnorderedList>
    </Box>
  );
}
