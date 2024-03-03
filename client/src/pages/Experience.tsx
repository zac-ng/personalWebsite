import React from "react";
import { Center } from "@chakra-ui/react";
import { Chrono } from 'react-chrono';

const Experience = () => {
    // Sample data similar to the Pearl Harbor timeline
    const pearlHarborTimeline = [
        {
            title: "Dummy",
            cardTitle: "Title",
            cardSubtitle: "Subttle",
            cardDetailedText: `
                Here is some text.
            `,
        },
        {
          title: "Dummy",
          cardTitle: "Title",
          cardSubtitle: "Subttle",
          cardDetailedText: `
              Here is some text.
          `,
      },
      {
        title: "Dummy",
        cardTitle: "Title",
        cardSubtitle: "Subttle",
        cardDetailedText: `
            Here is some text.
        `,
    },
    ];

    return (
        <Center>
            <Chrono items={pearlHarborTimeline} mode="VERTICAL_ALTERNATING" />
        </Center>
    );
};

export default Experience;
