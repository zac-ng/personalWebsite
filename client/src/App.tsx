import { ChakraProvider, Fade } from "@chakra-ui/react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import About from "./pages/About";
import Projects from "./pages/Projects";
import Experience from "./pages/Experience";
import Navbar from "./components/Navbar";
import { extendTheme } from "@chakra-ui/react";
import NotFound from "./pages/NotFound";

const config = {
  initialColorMode: "light",
  useSystemColorMode: false,
};

const theme = extendTheme({ config });

export const App = () => {

  return (
    <ChakraProvider theme={theme}>
      <Router>
        <Fade in transition={{ enter: { delay: 1, duration: 1.5 } }}>
          <Navbar />
        </Fade>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/projects" element={<Projects />} />
          <Route path="/experience" element={<Experience />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </Router>
    </ChakraProvider>
  );
};

export default App;
