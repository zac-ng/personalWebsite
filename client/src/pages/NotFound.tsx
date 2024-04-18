import { Center, Heading, Text, Fade } from "@chakra-ui/react";

const NotFound = () => {
  return (
    <Fade in transition={{ enter: { delay: 1, duration: 1.5 } }}>
      <Center h="60vh" flexDirection="column">
        <Heading size="md" mb={4}>Looks like nothing was found here...</Heading>
        <Text visibility="hidden">Looks like you found something here!</Text>
      </Center>
    </Fade>
  );
};

export default NotFound;
