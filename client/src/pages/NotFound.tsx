import { Center, Heading, Text } from "@chakra-ui/react";

const NotFound = () => {
  return (
    <Center h="60vh" flexDirection="column">
      <Heading size="md" mb={4}>Looks like nothing was found here...</Heading>
      <Text visibility="hidden">Looks like you found something here!</Text>
    </Center>
  );
};

export default NotFound;
