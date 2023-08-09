'use client';

import { Box, Heading, ListItem, UnorderedList } from '@chakra-ui/react';
import Image from 'next/image';
import { Balancer } from 'react-wrap-balancer';

const listItems = [`Still in alpha`, `I don't understand them`];

export function ServerActions() {
  return (
    <Box>
      <Heading marginBottom='8' marginRight='4' size='lg'>
        Server Actions
      </Heading>

      <UnorderedList fontSize='2xl'>
        {listItems.map((item, i) => (
          <ListItem key={`list-item-${i}`} mb='4'>
            <Balancer>{item}</Balancer>
          </ListItem>
        ))}
      </UnorderedList>

      <Image alt='Server Action Example' height={886} src='/server-action-code.png' width={1312} />
    </Box>
  );
}
