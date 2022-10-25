import { ChakraProvider, Container } from '@chakra-ui/react';
import {
  HashRouter,
  Routes,
  Route,
  Navigate,
  useNavigate,
} from 'react-router-dom';
import ViewCanvasPage from './modules/canvas/pages/ViewCanvasPage';
import ListCanvasPage from './modules/canvas/pages/ListCanvasPage';
import { ModalProvider } from './contexts/ModalContext';
import { CommanderProvider } from './contexts/CommanderContext';
import LoginPage from './modules/auth/LoginPage';
import { theme } from './theme/theme';
import ListProjectsPage from './modules/project/ListProjectsPage';
import {
  CANVAS_PAGE,
  CANVAS_VIEW_PAGE,
  HOME_PAGE,
  LOGIN_PAGE,
} from './route/routes';
import PrivateRoute from './route/components/private.route';
import useUser from '../app/usecase/user/useUser';
import useAuthCookie from './hooks/useAuthCookie';
import { useEffect } from 'react';
import RedirectWhenLoggedRoute from './route/components/redirect.when.logged.route';
import { Env } from '../config/env';
import { PortalProvider } from './contexts/PortalContext';
import ModalContainer from './containers/ModalContainer';

function App() {
  Env.init(import.meta.env.DEV ? 'dev' : 'prod');
  const basename = Env.getEnv().HOST;

  const { setUser } = useUser();
  const { cookie } = useAuthCookie();

  useEffect(() => {
    if (cookie) {
      setUser(cookie);
    }
  }, [cookie]);

  return (
    <ChakraProvider theme={theme} resetCSS={true}>
      <CommanderProvider>
        <PortalProvider>
          <ModalProvider>
            {/* <>{JSON.stringify(user?.firstName)}</> */}

            <>
              <ModalContainer></ModalContainer>
            </>

            <HashRouter basename={basename}>
              <Container maxWidth={'full'} p={0}>
                <Routes>
                  <Route
                    path={HOME_PAGE}
                    element={<Navigate to={CANVAS_PAGE} />}
                  ></Route>
                  <Route
                    path={CANVAS_PAGE}
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
                    path={CANVAS_VIEW_PAGE}
                    element={
                      <PrivateRoute>
                        <ViewCanvasPage />
                      </PrivateRoute>
                    }
                  ></Route>
                </Routes>
              </Container>
            </HashRouter>
          </ModalProvider>
        </PortalProvider>
      </CommanderProvider>
    </ChakraProvider>
  );
}

export default App;
