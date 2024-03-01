import * as React from "react";
import { ChakraProvider, Center, Heading, Text, Flex, Button, Icon } from "@chakra-ui/react";
import { FaGithub, FaLinkedin, FaEnvelope } from "react-icons/fa";
import Navbar from "./components/Navbar";
import theme from "./theme";

export const App = () => (
  <ChakraProvider theme={theme}>
    <Navbar />
    <Center minH="100vh" flexDirection="column">
      <Heading size="2xl" mb={4}>Zachary Nguyen</Heading>
      <Text fontSize="lg" mb={4}>Student, developer, croissant enthusiast</Text>
      <Flex alignItems="center">
        <Button as="a" variant="unstyled" colorScheme="gray" leftIcon={<Icon as={FaGithub} />} mr={6} href="https://github.com/zac-ng" target="_blank">
          GitHub
        </Button>
        <Button as="a" variant="unstyled" colorScheme="gray" leftIcon={<Icon as={FaLinkedin} />} mr={6} href="https://www.linkedin.com/in/zac-ng" target="_blank">
          LinkedIn
        </Button>
        <Button as="a" variant="unstyled" colorScheme="gray" leftIcon={<Icon as={FaEnvelope} />} mr={6} href="mailto:zncodebox@gmail.com">
          Email
        </Button>
      </Flex>
    </Center>
  </ChakraProvider>
);
