'use client';

import { Flex, Heading, Text } from '@chakra-ui/react';
import { Balancer } from 'react-wrap-balancer';

export function Conclusion() {
  return (
    <Flex
      alignItems='center'
      flexDir='column'
      height='100%'
      justifyContent='center'
      textAlign='center'
      width='100%'
    >
      <Heading marginBottom='6' size='lg'>
        Thank you!
      </Heading>
      <Balancer>
        <Text>If you have any questions, please keep them to yourself.</Text>
      </Balancer>
    </Flex>
  );
}
