import { Heading, Grid, GridItem, Button } from "@chakra-ui/react";
import { FaFilePdf, FaExternalLinkAlt } from "react-icons/fa";
import ProjectCard from "../components/ProjectCard";
import GithubButton from "../components/GithubButton";

const cardHeight = "40vh";

const Projects = () => {
  return (
    <>
      <Heading textAlign="center" mb={6}>Projects</Heading>
      <Grid templateColumns={{ base: '1fr', md: '1fr 1fr' }} gap="24" m="24">
        <GridItem minH={cardHeight}>
          <ProjectCard
            imageName="noteshare.png"
            title="Noteshare"
            description="Noteshare is a file-sharing platform for effortless electronic note sharing."
            buttons={[
              <GithubButton url="https://github.com/zac-ng/noteshare" />
            ]}
          />
        </GridItem>
        <GridItem minH={cardHeight}>
          <ProjectCard
            imageName="devicon.png"
            title="Chakra Devicon Package"
            description="Custom Icon Library for Chakra UI built on top of Devicon."
            buttons={[
              <GithubButton url="https://github.com/zac-ng/chakra-ui-devicon" />,
              <Button 
                colorScheme="red" 
                as="a" 
                href="https://www.npmjs.com/package/chakra-ui-devicon" 
                target="_blank"
              >
                NPM
              </Button>
            ]}
          />
        </GridItem>
        <GridItem minH={cardHeight}>
          <ProjectCard
            imageName="flimble.png"
            title="Flimble"
            description="Flimble is a browser based VPS Terminal providing a effortless VPS management system."
            buttons={[
              <GithubButton url="https://github.com/zac-ng/Flimble" />
            ]}
          />
        </GridItem>
        <GridItem minH={cardHeight}>
          <ProjectCard
            imageName="clink.png"
            title="Clink"
            description="The Clink application is a social media app aimed at augmenting their drinking experience."
            buttons={[
              <GithubButton url="https://gitlab.cci.drexel.edu/clink/clink" />
            ]}
          />
        </GridItem>
        <GridItem minH={cardHeight}>
          <ProjectCard
            imageName="asdet.png"
            title="Azure Security Data Exploration Toolset"
            description="ASDET provides a toolset to programmatically discover security threats and anomalies."
            buttons={[
              <GithubButton url="https://github.com/microsoft/ASDET" />,
              <Button 
                colorScheme="blue" 
                as="a" 
                href="https://techcommunity.microsoft.com/t5/microsoft-sentinel-blog/introducing-azure-sentinel-data-exploration-toolset-asdet/ba-p/2712728" 
                target="_blank"
                leftIcon={<FaExternalLinkAlt />}
              >
                Blog Post
              </Button>
            ]}
          />
        </GridItem>
        <GridItem minH={cardHeight}>
          <ProjectCard
            imageName="vocalStyleTransfer.png"
            title="Vocal Style Transfer"
            description="Leveraging Pix2PixGAN for vocal style translation. Presented at STAR Symposium."
            buttons={[
              <Button 
                colorScheme="blue" 
                as="a" 
                leftIcon={<FaExternalLinkAlt />}
                href="https://issuu.com/pennonihonorscollege2016/docs/2020_abstract_booklet_web_version/58" target="_blank"
              >
                Abstract
              </Button>,
              <Button
                as="a"
                href="/files/vocalStyleTranslation.pdf"
                target="_blank"
                colorScheme="blue"
                leftIcon={<FaFilePdf />}
              >
                Poster
              </Button>
            ]}
          />
        </GridItem>
      </Grid>
    </>
  );
};

export default Projects;
