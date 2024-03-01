// theme.ts
import { extendTheme } from '@chakra-ui/react';

const theme = extendTheme({
  colors: {
    primary: {
      light: '#fff',
      dark: '#000',
    },
    text: {
      light: '#000',
      dark: '#fff',
    },
  },
});

export default theme;
