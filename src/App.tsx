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
import { extendTheme } from "@chakra-ui/react";

const theme = extendTheme({
  colors: {
    primary: {
      "50": "#E6FFFA",
      "100": "#B2F5EA",
      "200": "#81E6D9",
      "300": "#4FD1C5",
      "400": "#38B2AC",
      "500": "#319795",
      "600": "#2C7A7B",
      "700": "#285E61",
      "800": "#234E52",
      "900": "#1D4044",
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
