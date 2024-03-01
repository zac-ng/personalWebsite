import * as React from "react";
import { ChakraProvider, Center } from "@chakra-ui/react";
import Navbar from "./components/Navbar";
import theme from "./theme";

export const App = () => (
  <ChakraProvider theme={theme}>
    <Navbar />
    <Center minH="100vh">
      Hello World
    </Center>
  </ChakraProvider>
);
