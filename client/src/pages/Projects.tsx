import { Box, Heading, Grid, GridItem, Button, Image } from "@chakra-ui/react";
import { FaFilePdf, FaExternalLinkAlt } from "react-icons/fa";
import GithubButton from "../components/GithubButton";
import ProjectComponent from "../components/ProjectComponent";

const cardHeight = "40vh";

const Projects = () => {
  return (
    <>
      <Heading textAlign="center" mt="5vh" mb={6}>Projects</Heading>
      <Grid templateColumns={{ base: '1fr', md: '1fr 1fr' }} gap="24" m="24">
        <GridItem minH={cardHeight}>
          <ProjectComponent
            imageName="flimble.png"
            title="Flimble"
            description="Flimble is a browser based VPS Terminal providing a effortless
             VPS management system. Users can create an account to access their own personal
             VPS all within the comfort of their browser. Flimble features automatic 
             resource provisioning and auto-scaling, making it perfect for any number of users."
            buttons={[
              <GithubButton url="https://github.com/zac-ng/Flimble" />
            ]}
            tags={["AWS EC2 & S3", "Node.js", "React.js", "Redis", "PostgreSQL"]}
          />
        </GridItem>
        <GridItem minH={cardHeight}>
          <ProjectComponent
            imageName="clink.png"
            title="Clink"
            description="The Clink application is a social media app aimed at 
            users who want to either find a place to start drinking or to augment 
            their current drinking experience. Clink leverages an existing database of drinks 
            and integrates a recommendation algorithm to tailor the user experience 
            based on individual preferences, fostering a personalized social environment 
            within the app where users can like, dislike, favorite, rate, and log drinks."
            buttons={[
              <GithubButton url="https://gitlab.cci.drexel.edu/clink/clink" />
            ]}
            tags={["Firebase Cloud","FireStore", "Flutter", "BeautifulSoup"]}
          />
        </GridItem>
        <GridItem minH={cardHeight}>
          <ProjectComponent
            imageName="asdet.png"
            title="Azure Security Data Exploration Toolset"
            description="ASDET, the Azure Sentinel Data Exploration Toolset, is a collection 
            of Python modules within Jupyter notebooks aimed at simplifying the analysis 
            of large datasets in Azure Sentinel. It assists security analysts by helping 
            them identify potential attackers, select relevant features, and detect anomalies. 
            ASDET streamlines the data exploration process, making it easier for 
            analysts to gain insights and identify potential security threats efficiently."
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
            tags={["Python", "Pandas", "KQL"]}
          />
        </GridItem>
        <GridItem minH={cardHeight}>
          <ProjectComponent
            imageName="vocalStyleTransfer.png"
            title="Vocal Style Transfer"
            description="This research project focuses on investigating the potential of Pix2Pix, a generative adversarial network (GAN), to preform vocal style translation. Unlike previous efforts focusing on voice synthesis, this project aims to translate audio from one speaker to another using paired audio sources.
            "
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
            tags={["Python", "Pandas", "Jupyter Notebook"]}
          />
        </GridItem>
        <GridItem minH={cardHeight}>
          <ProjectComponent
            imageName="noteshare.png"
            title="Noteshare"
            description="Noteshare is a platform that allows users to share notes and other files remotely with other users. Primarily focused on sharing class notes, it features several search parameters implemented to help find relevant files such as subject, date, teacher, or other tags. Users can upload files to the database assigning various tags such as subject, file name, date, teacher, etc which can then be queried."
            buttons={[
              <GithubButton url="https://github.com/zac-ng/noteshare" />
            ]}
            tags={["HTML", "CSS", "Javascript", "MySQL", "Bash"]}
          />
        </GridItem>
        <GridItem minH={cardHeight}>
          <ProjectComponent
            imageName="devicon.png"
            title="Chakra Devicon Package"
            description="Custom Icon Library for Chakra UI built on top of Devicon.
            Chakra UI's default icon library is missing a lot of common icons. This
            library focuses on providing a more comprehensive supplement to the icons 
            currently available."
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
            tags={["Node.js", "Handlebar.js", "Javascript", "Bash"]}
          />
        </GridItem>
      </Grid>
    </>
  );
};

export default Projects;
