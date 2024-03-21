import { Fragment, ReactNode, useState } from "react";
import { Box, Image, Text, useDisclosure, Modal, ModalOverlay, ModalContent, ModalHeader, ModalFooter, ModalBody, ModalCloseButton, Button, ButtonProps, useColorModeValue } from "@chakra-ui/react";

interface ProjectComponentProps {
  title: string;
  description: string;
  imageName: string;
  buttons?: ReactNode[];
}

const ProjectComponent = ({ title, description, imageName, buttons }: ProjectComponentProps) => {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const [isHovered, setIsHovered] = useState(false);
  const hoverBgColor = useColorModeValue("blackAlpha.300", "whiteAlpha.300");
  const modalBoxBgColor = useColorModeValue("blackAlpha.100", "whiteAlpha.100");

  return (
    <>
      <Box
        h="300px"
        bg="blackAlpha.100"
        display="flex"
        justifyContent="center"
        alignItems="center"
        position="relative"
        onClick={onOpen}
        borderRadius="md"
        cursor="pointer"
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
      >
        <Image
          src={`/projectImages/${imageName}`}
          alt={title}
          maxH="50%"
          borderRadius="lg"
          boxShadow="lg"
        />
        <Box
          position="absolute"
          top={0}
          left={0}
          right={0}
          bottom={0}
          bg={hoverBgColor}
          borderRadius="md"
          display="flex"
          justifyContent="flex-start"
          alignItems="flex-start"
          p={4}
          opacity={isHovered ? 1 : 0}
          transition="opacity 0.3s ease-in-out"
        >
          <Text fontSize="2xl" fontWeight="bold" color="white">
            {title}
          </Text>
        </Box>
      </Box>
      <Modal isOpen={isOpen} onClose={onClose}>
        <ModalOverlay />
        <ModalContent>
          <ModalHeader>{title}</ModalHeader>
          <ModalCloseButton />
          <ModalBody>
            <Box
              h="300px"
              display="flex"
              justifyContent="center"
              alignItems="center"
              borderRadius="md"
              mb={4}
              bg={modalBoxBgColor}
            >
              <Image
                src={`/projectImages/${imageName}`}
                alt={title}
                maxH="50%"
                borderRadius="lg"
                boxShadow="lg"
              />
            </Box>
            <Text fontSize="xl">{description}</Text>
          </ModalBody>
          <ModalFooter>
            {buttons &&
              buttons.map((button, index) => (
                <Fragment key={index}>
                  {index > 0 && <Box ml={2} />}
                  {button}
                </Fragment>
              ))}
          </ModalFooter>
        </ModalContent>
      </Modal>
    </>
  );
};

export default ProjectComponent;
