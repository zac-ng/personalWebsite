import { Center, Box, Text, Heading } from "@chakra-ui/react";

const About = () => {
  return (
    <Center h="80vh">
      <Box maxW="lg">
        <Heading textAlign="center" mb={4}>About</Heading>
        <Text>
          Hi there, I'ms
        </Text>
      </Box>
    </Center>
  );
};

export default About;
