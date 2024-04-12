import { useEffect, useState } from "react";
import { Center, Heading, Link, Text, useColorModeValue, useColorMode } from "@chakra-ui/react";
import { Chrono } from 'react-chrono';

const Experience = () => {

    const workExperienceTimeline = [
        {
            title: "June - Sept 2023",
            cardTitle: "Software Engineering Intern",
            cardSubtitle: "Microsoft - Industry and Partner Engineering",
            cardDetailedText: "Developed an OpenAI-based insurance pre-authorization AI, using custom semantic chunking in Azure Cognitive Search to process large documents. Leveraged LLMs to assess patients and generate authorization justification."
        },
        {
            title: "June - Sept 2022",
            cardTitle: "Software Engineering Intern",
            cardSubtitle: "Microsoft - Cloud ADP Mobility",
            cardDetailedText: "Created a data pipeline for Volkswagen’s re-simulation automotive driving, established a workflow for job queuing and time estimation via Azure Durable Functions, and added cost analysis capabilities for process execution costs."
        },
        {
            title: "June - Sept 2021",
            cardTitle: "Explorer Intern",
            cardSubtitle: "Microsoft - Microsoft Threat Intelligence",
            cardDetailedText: "Released a tool-set for security outlier detection through data signature analysis and feature engineering. Introduced Bayesian Anomaly modeling and multivariate time series analysis to spot intruders using feature distribution visualizations."
        },
        {
            title: "June - Sept 2020",
            cardTitle: "STAR Researcher",
            cardSubtitle: "Drexel University",
            cardDetailedText: "Explored GANs for style translation, utilizing Pix2Pix networks to convert vocal styles from sound samples. Conducted data cleaning and hyper-parameter tuning for vocal data simulation, and presented findings at the STAR symposium."
        },
    ];

    /* 
        React chrono will not change color when Chakra UI color switcher is activated
        We can still use ChakraColorValue, but we need to force a rerender
        We can force a rerender by updating key. Issue describing solution can be found below
        https://github.com/prabhuignoto/react-chrono/issues/143
    */
    const { colorMode } = useColorMode();

    const [colorModeKey, setColorModeKey] = useState(0);

    useEffect(() => {
        setColorModeKey((prevKey) => prevKey + 1);
    }, [colorMode]);

    return (
        <>
            <Heading textAlign="center" mt="5vh" mb={12}>Experience</Heading>
            <Center mb={12}>
                <Text maxW="70%">
                Follow my professional journey through the field of Computer Science!
                I have held a wide variety of roles, ranging from machine learning research at my university,
                to working on security toolset for blue team analysts, to building data pipelines for autonomous
                vehicles, to building an insurance pre-authorization using ChatGPT. I have learned a lot throughout
                my career, and I hope to learn a lot more in my future roles! If you are interested in hiring
                me, or what a deeper look at my work take a look at my resume <Link href="/resume.pdf" color="blue.500" target="_blank" rel="noopener noreferrer">here</Link>.
                </Text>
            </Center>
            <Center mb={12}>
                <Chrono 
                    items={workExperienceTimeline} 
                    mode="VERTICAL_ALTERNATING"
                    disableToolbar={true}
                    disableClickOnCircle={true}
                    activeItemIndex={4}
                    borderLessCards={true}
                    disableAutoScrollOnClick={true}
                    disableContentClick={true}
                    disableInteraction={true}
                    enableDarkToggle={true}
                    useReadMore={false}
                    theme={{
                        primary: useColorModeValue("#FFA500", "#FFA500"),
                        titleColor: useColorModeValue("#FFA500", "#FFA500"),
                        cardTitleColor: useColorModeValue("#FFA500", "#FFA500"),
                        cardBgColor: useColorModeValue("white", "#1A202C"),
                        cardSubtitleColor: useColorModeValue("#1A202C", "#EDF2F7"),
                        cardDetailsColor: useColorModeValue("#1A202C", "#EDF2F7"),
                        cardOutline: "darkblue",
                    }}
                    fontSizes={{
                        cardSubtitle: '1rem',
                        cardText: '1rem',
                        cardTitle: '1.2rem',
                        title: '1.2rem',
                    }}
                    key={colorModeKey}
                ></Chrono>
            </Center>
        </>
    );
};

export default Experience;
