'use client';
import { Flex } from '@chakra-ui/react';
import { Card } from './card';
import { usePathname } from 'next/navigation';

export function Content({ children }: { children: React.ReactNode }) {
  const pathname = usePathname();
  return (
    <Flex
      _dark={{ bgColor: 'rgb(10, 10, 11)', bgImage: 'url(/grid.svg)' }}
      _light={{ bgColor: 'rgb(245, 245, 255)', bgImage: 'url(/grid-light.svg)' }}
      alignItems='center'
      bgRepeat='repeat'
      justifyContent='center'
    >
      <Card
        forceTurbo={pathname.includes('conclusion')}
        height='80%'
        isTurbo={pathname.includes('conclusion')}
        maxH='calc(100vh - 10px)'
        overflowY='auto'
        padding='10'
        width='80%'
      >
        {children}
      </Card>
    </Flex>
  );
}
