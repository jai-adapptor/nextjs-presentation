'use client';

import { Box, Flex, IconButton, Stack, useColorMode } from '@chakra-ui/react';
import { Link } from '@chakra-ui/next-js';
import { navItems } from '../navigation';
import { usePathname, useRouter } from 'next/navigation';
import { ExternalLinkIcon, InfoIcon, MoonIcon, SunIcon } from '@chakra-ui/icons';
import Image from 'next/image';
import { Card } from './card';
import { useState, useEffect } from 'react';

export function Sidebar() {
  const pathname = usePathname();
  const router = useRouter();

  const [selectedIndex, setSelectedIndex] = useState(
    navItems.findIndex((item) => item.route === pathname)
  );

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'ArrowDown') {
        e.preventDefault();
        const newIndex = (selectedIndex + 1) % navItems.length;
        setSelectedIndex(newIndex);
        router.push(navItems[newIndex].route);
      }
      if (e.key === 'ArrowUp') {
        e.preventDefault();
        const newIndex = (selectedIndex - 1 + navItems.length) % navItems.length;
        setSelectedIndex(newIndex);
        router.push(navItems[newIndex].route);
      }
    };

    window.addEventListener('keydown', handleKeyDown);
    return () => {
      window.removeEventListener('keydown', handleKeyDown);
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [selectedIndex]);

  const activeNavItem = navItems[selectedIndex];

  const { colorMode, toggleColorMode } = useColorMode();

  return (
    <Box
      _dark={{ bgColor: 'black', borderColor: 'rgb(39, 39, 42)' }}
      _light={{ bgColor: 'white', borderColor: 'rgb(219, 219, 220)' }}
      as='aside'
      borderRightWidth={1}
      paddingBottom='8'
      paddingLeft='8'
      paddingRight='16'
      paddingTop='12'
      position='relative'
    >
      <Flex alignItems='center' marginBottom='12' userSelect='none'>
        <Link _dark={{ filter: 'invert(1)' }} href='/' marginRight='8'>
          <Image alt='Next.js' height={80 / 3} src='/next.svg' width={394 / 3} />
        </Link>
        <Card isTurbo fontWeight='bold' paddingX='3' paddingY='1'>
          13.4
        </Card>
      </Flex>
      <Flex>
        <Box
          _dark={{ bgColor: 'gray.900' }}
          _light={{ bgColor: 'gray.200' }}
          borderRadius='full'
          marginRight={'4'}
          width='1.5'
        >
          <Box
            bg='#e92a67'
            borderRadius='full'
            height='10'
            transform={`translateY(${activeNavItem.order * 40 - 40}px)`}
            width='1.5'
          />
        </Box>
        <Stack gap='0'>
          {navItems.map((item) => {
            const isActive = pathname === item.route;
            return (
              <Link
                key={item.route}
                _dark={{ color: isActive ? 'white' : 'gray.700' }}
                _light={{ color: isActive ? 'black' : 'gray.400' }}
                alignItems='center'
                display='flex'
                fontSize='xl'
                fontWeight='bold'
                height='10'
                href={item.route}
                userSelect='none'
              >
                {item.name}
              </Link>
            );
          })}
        </Stack>
      </Flex>
      <Flex bottom={0} left={0} padding='4' position='absolute' width='100%'>
        <IconButton
          aria-label='Toggle color mode'
          icon={colorMode === 'light' ? <MoonIcon /> : <SunIcon />}
          rounded='full'
          variant='ghost'
          onClick={toggleColorMode}
        />
        <IconButton
          aria-label='Next.js Docs'
          as='a'
          href='https://nextjs.org/docs'
          icon={<InfoIcon />}
          rounded='full'
          target='_blank'
          variant='ghost'
        />
        <IconButton
          aria-label='App Playground'
          as='a'
          href='https://app-router.vercel.app/'
          icon={<ExternalLinkIcon />}
          rounded='full'
          target='_blank'
          variant='ghost'
        />
      </Flex>
    </Box>
  );
}
