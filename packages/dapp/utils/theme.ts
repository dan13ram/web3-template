import { extendTheme } from '@chakra-ui/react';
import { css } from '@emotion/react';

const Switch = {
  baseStyle: ({ colorMode }: { colorMode: string }) => ({
    thumb: {
      bgColor: colorMode === 'dark' ? 'white' : 'black',
    },
    track: {
      bgColor: colorMode === 'dark' ? 'blackAlpha.100' : 'blackAlpha.500',
    },
  }),
};

export const theme = extendTheme({
  breakpoints: {
    '3xl': '108em',
    '2xl': '96em',
    base: '0em',
    lg: '62em',
    md: '48em',
    sm: '30em',
    xl: '80em',
  },
  components: { Switch },
});

export const globalStyles = css`
  /*
   * ADD GLOBAL CSS HERE
  */
`;
