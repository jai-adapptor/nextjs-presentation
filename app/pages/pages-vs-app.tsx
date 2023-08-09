'use client';
import { Box, Flex, Heading } from '@chakra-ui/react';
import Image from 'next/image';
import { useState } from 'react';
import { SubPageNav } from '../components/sub-page-nav';

export function PagesVsApp() {
  const [page, setPage] = useState(0);

  return (
    <Box>
      <Flex alignItems='center' marginBottom='4'>
        <Heading marginRight='4' size='lg'>
          Router
        </Heading>
        <SubPageNav
          activeIndex={page}
          routes={[
            { index: 0, name: 'Rendering' },
            { index: 1, name: 'Structure' },
          ]}
          onChange={(index) => setPage(index)}
        />
      </Flex>
      {page === 0 && (
        <Image
          alt='Pages vs App Router Rendering'
          height='780'
          src='/pages-router-vs-app-router-rendering.png'
          width='1240'
        />
      )}
      {page === 1 && (
        <Image
          alt='Pages vs App Router Structure'
          height='2360'
          src='/pages-router-vs-app-router-structure.png'
          width='1240'
        />
      )}
    </Box>
  );
}
