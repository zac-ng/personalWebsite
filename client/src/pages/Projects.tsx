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
            description="Noteshare is a file-sharing platform for effortless electronic note sharing."
            buttons={[
              { label: "View on GitHub", colorScheme: "blue", href: "https://github.com/zac-ng/noteshare" }
            ]}
          />
        </GridItem>
        <GridItem>
          <ProjectCard
            imageName="devicon.png"
            title="Chakra Devicon Package"
            description="Custom Icon Library for Chakra UI built on top of Devicon."
            buttons={[
              { label: "View on GitHub", colorScheme: "blue", href: "https://github.com/zac-ng/chakra-ui-devicon" },
              { label: "NPM", colorScheme: "blue", href: "https://www.npmjs.com/package/chakra-ui-devicon" }
            ]}
          />
        </GridItem>
        <GridItem>
          <ProjectCard
            imageName="flimble.png"
            title="Flimble"
            description="Flimble is a browser based VPS Terminal providing a effortless VPS management system."
            buttons={[
              { label: "View on GitHub", colorScheme: "blue", href: "https://github.com/zac-ng/Flimble" },
            ]}
          />
        </GridItem>
        <GridItem>
          <ProjectCard
            imageName="clink.png"
            title="Clink"
            description="The Clink application is a social media app aimed at users who want to either find a place to start drinking or to augment their current drinking experience."
            buttons={[
              { label: "View on GitHub", colorScheme: "blue", href: "https://gitlab.cci.drexel.edu/clink/clink" },
            ]}
          />
        </GridItem>
        <GridItem>
          <ProjectCard
            imageName="asdet.png"
            title="Azure Security Data Exploration Toolset"
            description="ASDET provides a security analyst a complete set of tools to explore any security log dataset programmatically instead of manually."
            buttons={[
              { label: "View on GitHub", colorScheme: "blue", href: "https://github.com/microsoft/ASDET" },
              { label: "Blog Post", colorScheme: "blue", href: "https://techcommunity.microsoft.com/t5/microsoft-sentinel-blog/introducing-azure-sentinel-data-exploration-toolset-asdet/ba-p/2712728" },
            ]}
          />
        </GridItem>
      </Grid>
    </>
  );
};

export default Projects;
