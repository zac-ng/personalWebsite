import { Center, Box, Text, Heading } from "@chakra-ui/react";

const About = () => {
  return (
    <Center mt="5vh">
      <Box maxW="lg">
        <Heading textAlign="center" mb={6}>About Me</Heading>
        <Text>
          Hey there, I'm Zac! 👋 I'm a senior majoring in Computer Science at Drexel University. I'm passionate about solving challenging problems and building tools that make the world a better place.
          <br/><br/>
          I have extensive experience in backend and full-stack roles, and have also worked as a data scientist, project manager, and machine learning researcher.
          <br/><br/>
          Outside of coding, you'll find me sailing on the Delaware River, teaching dance classes, or critiquing croissants at a local cafe. 🥐
          <br/><br/>
          If you enjoyed my website, feel free to reach out to talk about my projects, passions, or our mutual love for croissants!
        </Text>
      </Box>
    </Center>
  );
};

export default About;
