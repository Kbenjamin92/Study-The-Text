import React from "react";
import ReactDOM from "react-dom/client";
import { ChakraProvider } from "@chakra-ui/react";
import { BrowserRouter } from "react-router-dom";
import { AdminProvider } from "./context/AdminProvider";
import { App } from "./App";
import { system } from "./theme"

const root = ReactDOM.createRoot(document.getElementById("root")!);

root.render(
  <React.StrictMode>
     <BrowserRouter>
      <AdminProvider>
        <ChakraProvider value={system}>
          <App />
        </ChakraProvider>
      </AdminProvider>
    </BrowserRouter>
  </React.StrictMode>
);
