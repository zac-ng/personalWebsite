import { useState } from "react";
import { ChakraProvider, Fade } from "@chakra-ui/react";
import Home from "./pages/Home";
import About from "./pages/About";
import Projects from "./pages/Projects";
import Experience from "./pages/Experience";
import Navbar from "./components/Navbar";
import theme from "./theme";

export const App = () => {
  const [page, setPage] = useState("home");

  const handlePageChange = (newPage: string) => {
    setPage(newPage);
  };

  return (
    <ChakraProvider theme={theme}>
      <Fade in transition={{ enter: { delay: 1, duration: 1.5 } }}>
        <Navbar setPage={handlePageChange} currentPage={page} />
      </Fade>
      {page === "home" && <Home />}
      {page === "about" && <About />}
      {page === "projects" && <Projects />}
      {page === "experience" && <Experience />}
    </ChakraProvider>
  );
};

export default App;
