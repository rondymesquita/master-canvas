import { ChakraProvider, Container } from '@chakra-ui/react';
import {
  HashRouter,
  Routes,
  Route,
  Navigate,
  useNavigate,
} from 'react-router-dom';
import CanvasPage from './modules/canvas/CanvasPage';
import { ModalProvider } from './contexts/ModalContext';
import { CommanderProvider } from './contexts/CommanderContext';
import LoginPage from './modules/auth/LoginPage';
import { theme } from './theme/theme';
import ListProjectsPage from './modules/project/ListProjectsPage';
import ListCanvasPage from './modules/canvas/ListCanvasPage';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import { HOME_PAGE, LOGIN_PAGE } from './route/routes';
import PrivateRoute from './route/components/private.route';
import useUser from '../app/usecase/user/useUser';
import useAuthCookie from './hooks/useAuthCookie';
import { useEffect } from 'react';
import RedirectWhenLoggedRoute from './route/components/redirect.when.logged.route';
import { Env } from '../config/env';

const queryClient = new QueryClient();

function App() {
  const basename = import.meta.env.DEV ? '/' : '/master-canvas/';

  Env.init(import.meta.env.DEV ? 'dev' : 'prod');

  const { setUser } = useUser();
  const { cookie } = useAuthCookie();

  useEffect(() => {
    if (cookie) {
      // console.log('>>> called', cookie);
      setUser(cookie);
    }
  }, [cookie]);

  return (
    <ChakraProvider theme={theme} resetCSS={true}>
      <QueryClientProvider client={queryClient}>
        <CommanderProvider>
          <ModalProvider>
            {/* <>{JSON.stringify(user?.firstName)}</> */}
            <HashRouter basename={basename}>
              <Container maxWidth={'full'} p={0}>
                <Routes>
                  {/* <div></div> */}
                  {/* <Route
                    path="/"
                    element={<Navigate to={LOGIN_PAGE} />}
                  ></Route> */}
                  <Route
                    path={HOME_PAGE}
                    element={
                      <PrivateRoute>
                        <ListCanvasPage />
                      </PrivateRoute>
                    }
                  ></Route>
                  <Route
                    path={LOGIN_PAGE}
                    element={
                      <RedirectWhenLoggedRoute>
                        <LoginPage />
                      </RedirectWhenLoggedRoute>
                    }
                  />
                  <Route
                    path="/canvas/:canvasId"
                    element={
                      <PrivateRoute>
                        <CanvasPage />
                      </PrivateRoute>
                    }
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
