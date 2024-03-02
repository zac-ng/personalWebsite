import React, { useState } from "react";
import { ChakraProvider, Fade } from "@chakra-ui/react";
import Home from "./pages/Home";
import About from "./pages/About"; // Import other page components
import Experience from "./pages/Experience";
import Projects from "./pages/Projects";
import Navbar from "./components/Navbar";
import theme from "./theme";

export const App = () => {
  const [page, setPage] = useState("home");

  return (
    <ChakraProvider theme={theme}>
      <Fade in transition={{ enter: { delay: 1.5, duration: 1.5 } }}>
        <Navbar setPage={setPage} />
      </Fade>
      {page === "home" && <Home />}
      {page === "about" && <About />}
      {page === "experience" && <Experience />}
      {page === "projects" && <Projects />}
    </ChakraProvider>
  );
};

export default App;
