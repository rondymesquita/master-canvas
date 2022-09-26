import { ChakraProvider, Container } from '@chakra-ui/react';
import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom';
import CanvasPage from './modules/canvas/CanvasPage';
import { ModalProvider } from './contexts/ModalContext';
import { CommanderProvider } from './contexts/CommanderContext';
import LoginPage from './modules/auth/LoginPage';
import { theme } from './theme/theme';
import ListProjectsPage from './modules/project/ListProjectsPage';
import ListCanvasPage from './modules/canvas/ListCanvasPage';

function App() {
  const basename = import.meta.env.DEV ? '/' : '/master-canvas/';

  return (
    <ChakraProvider theme={theme} resetCSS={true}>
      <CommanderProvider>
        <ModalProvider>
          <BrowserRouter basename={basename}>
            <Container maxWidth={'full'} p={0}>
              <Routes>
                {/* <Route path="/" element={<ListProjectsPage />}></Route> */}
                <Route path="/canvas" element={<ListCanvasPage />}></Route>
                <Route path="/login" element={<LoginPage />} />
                <Route
                  path="/canvas/:canvasId"
                  element={<CanvasPage />}
                ></Route>
              </Routes>
            </Container>
          </BrowserRouter>
        </ModalProvider>
      </CommanderProvider>
    </ChakraProvider>
  );
}

export default App;
