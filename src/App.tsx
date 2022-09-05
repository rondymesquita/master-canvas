import { useState } from 'react';
import { ChakraProvider, Container } from '@chakra-ui/react';
import reactLogo from './assets/react.svg';
import './App.css';

import {
  Alert,
  AlertIcon,
  AlertTitle,
  AlertDescription,
} from '@chakra-ui/react';

import ReactDOM from 'react-dom/client';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import DashboardPage from './presentation/pages/DashboardPage';
import { ModalProvider } from './presentation/contexts/ModalContext';
import { CommanderProvider } from './presentation/contexts/CommanderContext';
import Modal from './presentation/components/Modal';
import { extendTheme } from '@chakra-ui/react';
import Header from './presentation/components/Header';
const fontFamily = 'Roboto';
const theme = extendTheme({
  styles: {
    global: {
      'html,body': {
        fontFamily,
      },
    },
  },
  components: {
    Heading: {
      baseStyle: {
        fontFamily,
      },
    },
  },
  colors: {
    primary: {
      50: '#ebf8ff',
      100: '#bee3f8',
      200: '#90cdf4',
      300: '#63b3ed',
      400: '#4299e1',
      500: '#3182ce',
      600: '#2b6cb0',
      700: '#2c5282',
      800: '#2a4365',
      900: '#1A365D',
    },
  },
});

// console.log(theme);

function App() {
  const [count, setCount] = useState(0);

  return (
    <ChakraProvider theme={theme}>
      <CommanderProvider>
        <ModalProvider>
          <Header />
          <Container maxWidth={'container.lg'} marginTop={'4'}>
            <BrowserRouter>
              <Routes>
                <Route path="/" element={<DashboardPage />}></Route>
              </Routes>
            </BrowserRouter>
          </Container>
        </ModalProvider>
      </CommanderProvider>
    </ChakraProvider>
  );
}

export default App;
