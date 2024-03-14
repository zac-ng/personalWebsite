import { Heading, Text, Image, Stack, Card, Flex, Box } from "@chakra-ui/react";
import { ReactNode } from "react";

interface ProjectCardProps {
  imageName: string;
  title: string;
  description: string;
  buttons?: ReactNode[];
}

const ProjectCard = ({ imageName, title, description, buttons }: ProjectCardProps) => {
  return (
    <Box
      border="1px solid #E2E8F0"
      borderRadius="lg"
      overflow="hidden"
      transition="box-shadow 0.3s ease"
      _hover={{ boxShadow: "md" }}
    >
      <Card minH="40vh" direction={{ base: 'column', sm: 'row' }} overflow="hidden" variant="outline">
        <Stack direction={{ base: 'column', sm: 'row' }} spacing={4} flex={1} alignItems="center">
          <Image
            objectFit="cover"
            maxW="150px"
            maxH="150px"
            src={`/projectImages/${imageName}`}
            alt={title}
            m={4}
          />
          <Stack p={4} spacing={4} flex={1}>
            <Heading as="h2" size="md">{title}</Heading>
            <Text>{description}</Text>
            {buttons && (
              <Flex justifyContent="flex-end">
                {buttons.map((button, index) => (
                  <Flex key={index} alignItems="center" ml={2}>
                    {button}
                  </Flex>
                ))}
              </Flex>
            )}
          </Stack>
        </Stack>
      </Card>
    </Box>
  );
};

export default ProjectCard;
