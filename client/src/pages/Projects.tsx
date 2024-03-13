import { Heading, Grid, GridItem } from "@chakra-ui/react";
import ProjectCard from "../components/ProjectCard";

const Projects = () => {
  return (
    <>
      <Heading textAlign="center" mb={6}>Projects</Heading>
      <Grid templateColumns={{ base: '1fr', md: '1fr 1fr' }} gap="24" m="24">
        <GridItem>
          <ProjectCard
            imageName="noteshare.png"
            title="Noteshare"
            description="Noteshare is a file-sharing platform for effortless electronic note sharing. Upload your notes, tag them for easy retrieval, and enable others to discover and access them effortlessly through advanced search filters."
            buttons={[
              { label: "View on GitHub", colorScheme: "blue", href: "https://github.com/zac-ng/noteshare" }
            ]}
          />
        </GridItem>
        <GridItem>
          <ProjectCard
            imageName="devicon.png"
            title="Chakra Devicon Package"
            description="Custom Icon Library for Chakra UI. Built on top of Devicon."
            buttons={[
              { label: "View on GitHub", colorScheme: "blue", href: "https://github.com/zac-ng/chakra-ui-devicon" }
            ]}
          />
        </GridItem>
      </Grid>
    </>
  );
};

export default Projects;
