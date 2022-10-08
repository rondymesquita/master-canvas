import { extendTheme } from '@chakra-ui/react';

const fontFamily = 'Chivo';
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
    },
  },
  components: {
    Heading: {
      baseStyle: {
        fontFamily,
      },
    },
    Button: {
      // baseStyle: {
      //   boxShadow:
      //     '0 10px 15px -3px rgba(0, 0, 0, 0.1), 0 4px 6px -2px rgba(0, 0, 0, 0.05)',
      //   '&:hover': {
      //     boxShadow:
      //       '0 10px 15px -3px rgb(0 0 0 / 10%), 0 15px 15px -2px rgb(0 0 0 / 10%)',
      //     transform: 'scale(1.03)',
      //   },
      // },
    },
  },
  colors: {
    primary: defaultTheme.colors.purple,
    accent: {
      '50': '#FDE8EE',
      '100': '#F9BED0',
      '200': '#F494B2',
      '300': '#F06B94',
      '400': '#EC4176',
      '500': '#E81758',
      '600': '#B91346',
      '700': '#8B0E35',
      '800': '#5D0923',
      '900': '#2E0512',
    },
    destructive: {
      '50': '#FDE8EE',
      '100': '#F9BED0',
      '200': '#F494B2',
      '300': '#F06B94',
      '400': '#EC4176',
      '500': '#E81758',
      '600': '#B91346',
      '700': '#8B0E35',
      '800': '#5D0923',
      '900': '#2E0512',
    },
    secondary: {
      '50': '#E7F8FD',
      '100': '#BDEBF9',
      '200': '#93DEF6',
      '300': '#68D2F2',
      '400': '#3EC5EF',
      '500': '#14B8EB',
      '600': '#1093BC',
      '700': '#0C6E8D',
      '800': '#084A5E',
      '900': '#04252F',
    },
    background: {
      '50': '#f8fafc',
      '100': '#f1f5f9',
      '200': '#e2e8f0',
      '300': '#cbd5e1',
      '400': '#94a3b8',
      '500': '#64748b',
      '600': '#475569',
      '700': '#334155',
      '800': '#1e293b',
      '900': '#0f172a',
    },
    foreground: {
      '50': '#f8fafc',
      '100': '#f1f5f9',
      '200': '#e2e8f0',
      '300': '#cbd5e1',
      '400': '#94a3b8',
      '500': '#64748b',
      '600': '#475569',
      '700': '#334155',
      '800': '#1e293b',
      '900': '#0f172a',
    },
    background2: {
      50: '#fafaf9',
      100: '#f5f5f4',
      200: '#e7e5e4',
      300: '#d6d3d1',
      400: '#a8a29e',
      500: '#78716c',
      600: '#57534e',
      700: '#44403c',
      800: '#292524',
      900: '#1c1917',
    },
  },
});
