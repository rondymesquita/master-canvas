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
      body: {
        // overflow: 'auto !important',
      },
      '*': {
        boxSizing: 'border-box',
      },
      'html,body': {
        fontFamily,
        color: 'background.800',
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
        borderRadius: 'lg',
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
    secondary: colors.slate,
    destructive: colors.plum,
    background: colors.slate,
    foreground: colors.slate,
    background2: colors.stone,
  },
  zIndices: {
    hide: -1,
    auto: 'auto',
    base: 0,
    docked: 10,
    dropdown: 1000,
    sticky: 1100,
    banner: 1200,
    overlay: 1300,
    modal: 1400,
    drawer: 1450,
    popover: 1500,
    skipLink: 1600,
    toast: 1700,
    tooltip: 1800,
  },
});
