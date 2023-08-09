'use client';
import { Box, Code, Flex, Heading, ListItem, Stack, Text, UnorderedList } from '@chakra-ui/react';
import Image from 'next/image';
import { useState } from 'react';
import Balancer from 'react-wrap-balancer';
import { SubPageNav } from '../components/sub-page-nav';
import { Card } from '../components/card';

const fetchAndCacheList = [
  <>
    Next.js extends native <Code fontSize='xl'>fetch</Code> web API to allow for finer control over
    caching and revalidation.
    <Text color='gray.600' fontSize='sm' mt={1}>
      * they also provide special named exports for controlling cache behaviour if you&apos;re not
      using fetch
    </Text>
  </>,
  <>
    This pattern replaces the old Next.js-specific data fetching methods like{' '}
    <Code fontSize='xl'>getStaticProps</Code> and <Code fontSize='xl'>getServerSideProps</Code>
  </>,
  `Combined with Server Actions, this could be considered a React-ier alternative to third-party tools like react-query or swr`,
];

const listItems = [
  `Fetch and render data on the server, sending HTML to the browser.`,
  <>
    Avoids client-side re-rendering. No page reloads and fewer <Code fontSize='xl'>useEffect</Code>
    s.
    <Text color='gray.600' fontSize='sm' mt={1}>
      * although maybe <code>useTransition</code> or <code>useOptimistic</code> for mutations
    </Text>
  </>,
  <>
    To be used with <Code fontSize='xl'>{`<Suspense />`}</Code>
  </>,
];

export function ReactServerComponents() {
  const [page, setPage] = useState(0);

  return (
    <Box height='100%' position='relative' width='100%'>
      {page === 0 && (
        <Box bottom={0} position='absolute' right={0} width='60%' zIndex={0}>
          <Image alt='Client & Server' height={832} src='/client-server.png' width={1686} />
        </Box>
      )}
      <Box position='relative'>
        <Flex alignItems='center' marginBottom='8'>
          <Heading marginRight='4' size='lg'>
            React Server Components
          </Heading>
          <SubPageNav
            activeIndex={page}
            routes={[
              { index: 0, name: 'Overview' },
              { index: 1, name: 'Streaming' },
              { index: 2, name: 'Parallel Routes' },
              { index: 3, name: 'Caching' },
            ]}
            onChange={(index) => setPage(index)}
          />
        </Flex>
        {page === 0 && (
          <UnorderedList fontSize='2xl'>
            {listItems.map((item, i) => (
              <ListItem key={`list-item-${i}`} mb='4'>
                <Balancer>{item}</Balancer>
              </ListItem>
            ))}
          </UnorderedList>
        )}

        {page === 1 && (
          <Stack>
            <Box position='relative'>
              <Box left={4} position='absolute' top={4}>
                <Card fontSize='sm' fontWeight='bold' px={3} py={1}>
                  SSR Page (No Streaming)
                </Card>
              </Box>
              <Image
                alt='Server Rendering Without Streaming Chart'
                height='612'
                src='/server-rendering-without-streaming-chart.png'
                width='1600'
              />
            </Box>
            <Box position='relative'>
              <Box left={4} position='absolute' top={4}>
                <Card fontSize='sm' fontWeight='bold' px={3} py={1}>
                  SSR Page (No Streaming)
                </Card>
              </Box>
              <Image
                alt='Server Rendering Without Streaming'
                height='748'
                src='/server-rendering-without-streaming.png'
                width='1600'
              />
            </Box>
            <Box position='relative'>
              <Box left={4} position='absolute' top={4}>
                <Card fontSize='sm' fontWeight='bold' px={3} py={1}>
                  Server Component (Streaming)
                </Card>
              </Box>
              <Image
                alt='Server Rendering With Streaming'
                height='785'
                src='/server-rendering-with-streaming.png'
                width='1600'
              />
            </Box>
            <Box position='relative'>
              <Box left={4} position='absolute' top={4}>
                <Card fontSize='sm' fontWeight='bold' px={3} py={1}>
                  Server Component (Streaming)
                </Card>
              </Box>
              <Image
                alt='Server Rendering With Streaming Chart'
                height='730'
                src='/server-rendering-with-streaming-chart.png'
                width='1600'
              />
            </Box>
          </Stack>
        )}

        {page === 2 && (
          <Image
            alt='Parallel Routes'
            height='1218'
            src='/parallel-routes-cinematic-universe.png'
            width='1600'
          />
        )}
        {page === 3 && (
          <>
            <UnorderedList fontSize='2xl'>
              {fetchAndCacheList.map((item, i) => (
                <ListItem key={`list-item-${i}`} mb='4'>
                  <Balancer>{item}</Balancer>
                </ListItem>
              ))}
            </UnorderedList>
            <Image alt='Caching Overview' height={1179} src='/caching-overview.png' width={1600} />
            <Box my={24} />
            <Image alt='Data Cache' height={661} src='/data-cache.png' width={1600} />
          </>
        )}
      </Box>
    </Box>
  );
}
