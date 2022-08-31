import { useState } from "react";
import { ChakraProvider } from "@chakra-ui/react";
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
import ModalContext from "./presentation/contexts/ModalContext";

function App() {
  const [count, setCount] = useState(0);

  return (
    <ChakraProvider>
      <ModalContext>
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<DashboardPage />}></Route>
          </Routes>
        </BrowserRouter>
      </ModalContext>
    </ChakraProvider>
  );
}

export default App;
