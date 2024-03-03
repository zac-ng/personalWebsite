import { Center, Box, Text, Heading } from "@chakra-ui/react";

const About = () => {
  return (
    <Center h="80vh">
      <Box maxW="lg">
        <Heading textAlign="center" mb={4}>About</Heading>
        <Text>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed
          vestibulum lectus non velit vestibulum fermentum. Morbi vel
          consectetur nisi. Pellentesque quis interdum arcu. Donec in augue
          vitae nunc ullamcorper egestas. Vivamus sit amet elit sit amet
          lectus viverra mattis. Proin commodo felis non velit maximus
          molestie. Integer vulputate metus eu pharetra ultricies. Nullam nec
          ipsum nec justo tempor rutrum. Suspendisse eu semper sem.
        </Text>
      </Box>
    </Center>
  );
};

export default About;
