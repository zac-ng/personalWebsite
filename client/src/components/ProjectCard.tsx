import { Heading, Text, Button, Image, Stack, Card, CardBody, CardFooter } from "@chakra-ui/react";

interface ProjectCardProps {
  imageName: string;
  title: string;
  description: string;
  buttons?: {
    label: string;
    colorScheme?: string;
    href?: string;
    onClick?: () => void;
  }[];
}

const ProjectCard = ({ imageName, title, description, buttons }: ProjectCardProps) => {
  return (
    <Card p={4} direction={{ base: 'column', sm: 'row' }} overflow="hidden" variant="outline">
      <Image
        objectFit="cover"
        maxW={{ base: '100%', sm: '200px' }}
        src={`/projectImages/${imageName}`}
        alt={title}
      />

      <Stack p="6" spacing="4">
        <Heading as="h2" size="md">{title}</Heading>
        <Text>{description}</Text>
        {buttons && buttons.map((button, index) => (
          <Button key={index} colorScheme={button.colorScheme} as="a" href={button.href} target="_blank" onClick={button.onClick}>{button.label}</Button>
        ))}
      </Stack>
    </Card>
  );
};

export default ProjectCard;
