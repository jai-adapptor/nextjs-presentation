import { extendTheme } from '@chakra-ui/react';
import { Work_Sans } from 'next/font/google';

const workSans = Work_Sans({ subsets: ['latin'] });

export const theme = extendTheme({
  config: {
    initialColorMode: 'dark',
    useSystemColorMode: false,
    disableTransitionOnChange: false,
  },
  fonts: {
    heading: workSans.style.fontFamily,
    body: workSans.style.fontFamily,
  },
  styles: {
    global: {
      '::selection': {
        background: 'pink.400',
        color: 'white',
      },
      '*::-webkit-scrollbar': {
        display: 'none',
      },
    },
  },
});
