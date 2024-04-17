import { Center, Heading, Text, Flex, Button, Icon, SlideFade, Fade, Image } from "@chakra-ui/react";
import { FaGithub, FaLinkedin, FaEnvelope } from "react-icons/fa";

const Home = () => (
  <Center minH="65vh" flexDirection="column">
    <SlideFade in offsetY={30} transition={{ enter: { duration: 2 } }}>
      <Image src="dog.svg" alt="dog" boxSize="150px" mb={-6} />
    </SlideFade>
    <SlideFade in offsetY={30} transition={{ enter: { duration: 2 } }}>
      <Heading size="2xl" mb={6}>Zachary Nguyen</Heading>
    </SlideFade>
    <Fade in transition={{ enter: { delay: 1, duration: 1.5 } }}>
      <Center flexDirection="column">
        <Text fontSize="lg" mb={6}>Student, developer, croissant enthusiast 🥐</Text>
        <Flex justifyContent="center">
          <Button as="a" variant="unstyled" colorScheme="gray" leftIcon={<Icon as={FaGithub} />} mr={6} href="https://github.com/zac-ng" target="_blank">
            GitHub
          </Button>
          <Button as="a" variant="unstyled" colorScheme="gray" leftIcon={<Icon as={FaLinkedin} />} mr={6} href="https://www.linkedin.com/in/zac-ng" target="_blank">
            LinkedIn
          </Button>
          <Button as="a" variant="unstyled" colorScheme="gray" leftIcon={<Icon as={FaEnvelope} />} href="mailto:zncodebox@gmail.com">
            Email
          </Button>
        </Flex>
      </Center>
    </Fade>
  </Center>
);

export default Home;
