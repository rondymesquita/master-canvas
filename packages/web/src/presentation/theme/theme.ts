import {
  DeepPartial,
  extendTheme,
  Theme,
  ThemeExtension,
  ThemeOverride,
} from '@chakra-ui/react';
import { colors } from './colors';

const fontFamily = 'Chivo, Inter, Avenir, Helvetica, Arial, sans-serif';
const defaultTheme = extendTheme();

console.log(defaultTheme);

export const theme = extendTheme({
  styles: {
    global: {
      'html,body': {
        fontFamily,
        color: 'background.900',
        background: 'background.100',
      },
      '.quill .ql-editor': {
        fontSize: '1.1em',
      },
      'input:focus': {
        outline: 'none !important',
      },
    },
  },
  components: {
    Heading: {
      baseStyle: {
        fontFamily,
      },
    },
    Button: {
      variants: {
        call: {
          // ...defaultTheme.components.Button.baseStyle,
          boxShadow:
            '0 10px 15px -3px rgba(0, 0, 0, 0.1), 0 4px 6px -2px rgba(0, 0, 0, 0.05)',
          '&:hover': {
            boxShadow:
              '0 10px 15px -3px rgb(0 0 0 / 10%), 0 15px 15px -2px rgb(0 0 0 / 10%)',
            transform: 'scale(1.03)',
          },
        },
      },
      baseStyle: {
        borderRadius: 'full',
        // boxShadow:
        //   '0 10px 15px -3px rgba(0, 0, 0, 0.1), 0 4px 6px -2px rgba(0, 0, 0, 0.05)',
        // '&:hover': {
        //   boxShadow:
        //     '0 10px 15px -3px rgb(0 0 0 / 10%), 0 15px 15px -2px rgb(0 0 0 / 10%)',
        //   transform: 'scale(1.03)',
        // },
      },
    },
  },
  colors: {
    primary: defaultTheme.colors.purple,
    // primary: colors.plum,
    accent: colors.plum,
    destructive: colors.plum,
    background: colors.slate,
    foreground: colors.slate,
    background2: colors.stone,
  },
});
