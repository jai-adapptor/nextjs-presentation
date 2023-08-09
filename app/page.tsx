'use client';
import { Box, Flex } from '@chakra-ui/react';
import Image from 'next/image';
import { Card } from './components/card';
import Link from 'next/link';

export default function HomePage() {
  return (
    <Flex
      _dark={{ bgColor: 'rgb(10, 10, 11)' }}
      alignItems='center'
      height='100vh'
      justifyContent='center'
      userSelect='none'
      width='100vw'
    >
      <Link href='/overview'>
        <Box _dark={{ filter: 'invert(1)' }} marginRight={6}>
          <Image alt='Next.js' height={80 / 2} src='/next.svg' width={394 / 2} />
        </Box>
      </Link>
      <Card isTurbo fontSize='xl' fontWeight='bold' paddingX='3' paddingY='1'>
        13.4
      </Card>
    </Flex>
  );
}
