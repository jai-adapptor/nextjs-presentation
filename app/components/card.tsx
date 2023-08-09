'use client';

import { Box, BoxProps, keyframes } from '@chakra-ui/react';

export function Card({
  children,
  width,
  height,
  isTurbo,
  forceTurbo,
  ...rest
}: BoxProps & { isTurbo?: boolean; forceTurbo?: boolean }) {
  const gradientDark = `radial-gradient(at left top,rgb(113, 113, 122),10%,rgb(39, 39, 42) 50%)`;
  const gradientLight = `radial-gradient(at left top, rgb(221, 221, 221), 10%, rgb(237, 237, 237) 50%)`;
  const gradientTurbo = `linear-gradient(120deg, #e92a67 10%, #2a8af6 90%)`;

  // help here: how to animate the background gradient to shimmer
  const gradientAnimation = keyframes`
    0% {
      background-position: 90% 0;
    }
    50% {
      background-position: 0 90%;
    }
    100% {
      background-position: 90% 0;
    }  
  `;

  return (
    <Box
      _dark={{
        bgImage: forceTurbo ? gradientTurbo : gradientDark,
        _hover: {
          bgImage: isTurbo ? gradientTurbo : gradientDark,
          backgroundSize: '200% 200%',
          animation: isTurbo ? `${gradientAnimation} 2s ease infinite` : 'none',
        },
      }}
      _light={{
        bgImage: forceTurbo ? gradientTurbo : gradientLight,
        _hover: {
          bgImage: isTurbo ? gradientTurbo : gradientLight,
          backgroundSize: '200% 200%',
          animation: isTurbo ? `${gradientAnimation} 2s ease infinite` : 'none',
        },
      }}
      borderRadius='xl'
      boxShadow='lg'
      height={height}
      padding='1px'
      width={width}
    >
      <Box
        _dark={{ bgColor: 'black', color: 'white' }}
        _light={{ bgColor: 'white', color: 'black' }}
        borderRadius='xl'
        height='100%'
        width='100%'
        {...rest}
      >
        {children}
      </Box>
    </Box>
  );
}
