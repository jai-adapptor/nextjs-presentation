'use client';
import { Box, Heading, ListItem, UnorderedList } from '@chakra-ui/react';
import Image from 'next/image';
import { Balancer } from 'react-wrap-balancer';

const listItems = [
  `Released too early; not ready for production.`,
  `index.php is back.`,
  `Are client components bad now?`,
];

export function Controversy() {
  return (
    <Box height='100%' position='relative' width='100%'>
      <Box bottom={0} position='absolute' right={0} width='100%' zIndex={0}>
        <Image alt='YouTube Comments' height={426} src='/controversy.png' width={1240} />
      </Box>
      <Box position='relative'>
        <Heading mb='6' size='lg'>
          Version 13 Controversy
        </Heading>
        <UnorderedList fontSize='2xl'>
          {listItems.map((item, i) => (
            <ListItem key={`list-item-${i}`} mb='4'>
              <Balancer>{item}</Balancer>
            </ListItem>
          ))}
        </UnorderedList>
      </Box>
    </Box>
  );
}
