import { ChakraProvider, Container } from '@chakra-ui/react';
import { HashRouter, Routes, Route, Navigate } from 'react-router-dom';
import CanvasPage from './modules/canvas/CanvasPage';
import { ModalProvider } from './contexts/ModalContext';
import { CommanderProvider } from './contexts/CommanderContext';
import LoginPage from './modules/auth/LoginPage';
import { theme } from './theme/theme';
import ListProjectsPage from './modules/project/ListProjectsPage';
import ListCanvasPage from './modules/canvas/ListCanvasPage';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import { LOGIN_PAGE } from './route/routes';
import PrivateRoute from './route/components/private.route';

const queryClient = new QueryClient();

function App() {
  const basename = import.meta.env.DEV ? '/' : '/master-canvas/';

  return (
    <ChakraProvider theme={theme} resetCSS={true}>
      <QueryClientProvider client={queryClient}>
        <CommanderProvider>
          <ModalProvider>
            <HashRouter basename={basename}>
              <Container maxWidth={'full'} p={0}>
                <Routes>
                  <Route
                    path="/"
                    element={<Navigate to={LOGIN_PAGE} />}
                  ></Route>
                  <Route
                    path="/canvas"
                    element={
                      <PrivateRoute>
                        <ListCanvasPage />
                      </PrivateRoute>
                    }
                  ></Route>
                  <Route path={LOGIN_PAGE} element={<LoginPage />} />
                  <Route
                    path="/canvas/:canvasId"
                    element={<CanvasPage />}
                  ></Route>
                </Routes>
              </Container>
            </HashRouter>
          </ModalProvider>
        </CommanderProvider>
      </QueryClientProvider>
    </ChakraProvider>
  );
}

export default App;
