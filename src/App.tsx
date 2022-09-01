import { useState } from "react";
import { ChakraProvider, Container } from "@chakra-ui/react";
import reactLogo from "./assets/react.svg";
import "./App.css";

import {
  Alert,
  AlertIcon,
  AlertTitle,
  AlertDescription,
} from "@chakra-ui/react";

import ReactDOM from "react-dom/client";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import DashboardPage from "./presentation/pages/DashboardPage";
import { ModalProvider } from "./presentation/contexts/ModalContext";
import { CommanderProvider } from "./presentation/contexts/CommanderContext";
import Modal from "./presentation/components/Modal";

function App() {
  const [count, setCount] = useState(0);

  return (
    <ChakraProvider>
      <CommanderProvider>
        <ModalProvider>
          <Container maxWidth={"container.md"}>
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
