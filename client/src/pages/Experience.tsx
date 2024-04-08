import { Center } from "@chakra-ui/react";
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

    return (
        <Center>
            <Chrono items={workExperienceTimeline} mode="VERTICAL_ALTERNATING" />
        </Center>
    );
};

export default Experience;
