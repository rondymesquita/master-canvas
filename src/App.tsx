import { ChakraProvider, Container } from '@chakra-ui/react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import DashboardPage from './presentation/pages/DashboardPage';
import { ModalProvider } from './presentation/contexts/ModalContext';
import { CommanderProvider } from './presentation/contexts/CommanderContext';
import LoginPage from './presentation/pages/LoginPage';
import { theme } from './presentation/theme/theme';
import ProjectsPage from './presentation/modules/project/ProjectsPage';

function App() {
  const basename = import.meta.env.DEV ? '/' : '/master-canvas/';

  return (
    <ChakraProvider theme={theme} resetCSS={true}>
      <CommanderProvider>
        <ModalProvider>
          <BrowserRouter basename={basename}>
            <Container maxWidth={'full'} p={0}>
              <Routes>
                <Route path="/canvas" element={<DashboardPage />}></Route>
                <Route path="/" element={<ProjectsPage />}></Route>
                <Route path="/login" element={<LoginPage />} />
              </Routes>
            </Container>
          </BrowserRouter>
        </ModalProvider>
      </CommanderProvider>
    </ChakraProvider>
  );
}

export default App;
