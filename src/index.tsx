
import { ChakraProvider } from "@chakra-ui/react";
import React from "react";
import { StrictMode } from "react";
import * as ReactDOMClient from 'react-dom/client';
import App from "./App";

const rootElement = document.getElementById("root");
if (!rootElement) throw new Error('No root element');

const root = ReactDOMClient.createRoot(rootElement);

root.render(
    <StrictMode>
        <ChakraProvider>
            <App />
        </ChakraProvider>
    </StrictMode>
);
