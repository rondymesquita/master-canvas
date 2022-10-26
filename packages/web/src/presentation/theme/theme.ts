import {
  DeepPartial,
  extendTheme,
  Theme,
  ThemeExtension,
  ThemeOverride,
} from '@chakra-ui/react';
import { colors } from './colors';

// const fontFamily = 'Lexend, Avenir, Helvetica, Arial, sans-serif';
// const fontFamily = 'Chivo, Avenir, Helvetica, Arial, sans-serif';
// const fontFamily = 'Helvetica, Arial, sans-serif';
const fontFamily = 'Nunito Sans, Helvetica, Arial, sans-serif';
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
        color: 'fg.700',
        background: 'bg.0',
      },
      a: {
        color: 'primary.600',
        textDecoration: 'underline',
      },
      em: {
        color: 'fg.500',
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
      defaultProps: {
        size: 'sm',
      },
      sizes: {
        sm: { h: '8', minW: '8', fontSize: 'xs', px: '8' },
      },
      variants: {
        primary: (props: any) => ({
          ...defaultTheme.components.Button.variants.solid(props),
          bgGradient: 'linear(to-r, primary.500, primary.300)',
        }),
        action: (props: any) => ({
          ...defaultTheme.components.Button.variants.solid(props),
          bgGradient: 'linear(to-r, primary.500, primary.300)',
          boxShadow:
            '0 10px 15px -3px rgba(0, 0, 0, 0.1), 0 4px 6px -2px rgba(0, 0, 0, 0.05)',
          '&:hover': {
            boxShadow:
              // '0 10px 15px -3px rgb(0 0 0 / 10%), 0 15px 15px -2px rgb(0 0 0 / 10%)',
              '0 10px 15px -3px rgb(0 0 0 / 10%), 0 2px 3px -2px rgb(0 0 0 / 10%)',
            // transform: 'scale(1.03)',
          },
        }),
      },
      baseStyle: {
        borderRadius: 'md',
      },
    },
  },
  colors: {
    primary: colors.bic,
    secondary: colors.slate,
    destructive: colors.plum,
    bg: { 0: 'white', ...colors.slate },
    fg: { 0: 'black', ...colors.slate },
    ...colors,
  },
});
