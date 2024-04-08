import { Fragment, ReactNode, useState } from "react";
import {
  Box,
  Heading,
  Image,
  Text,
  useDisclosure,
  Modal,
  ModalOverlay,
  ModalContent,
  ModalBody,
  ModalCloseButton,
  useColorModeValue,
  Flex,
  Tag,
  ModalFooter,
  Button,
} from "@chakra-ui/react";

interface ProjectComponentProps {
  title: string;
  description: string;
  imageName: string;
  tags?: string[];
  buttons?: ReactNode[];
}

const ProjectComponent = ({
  title,
  description,
  imageName,
  tags,
  buttons,
}: ProjectComponentProps) => {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const [isHovered, setIsHovered] = useState(false);
  const hoverBgColor = useColorModeValue("orange.300", "orange.300");
  const defaultBgColor = useColorModeValue("blackAlpha.100", "whiteAlpha.100");

  return (
    <>
      <Box
        h="300px"
        bg={isHovered ? hoverBgColor : defaultBgColor}
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
          bg={isHovered ? hoverBgColor : "transparent"}
          borderRadius="md"
          display="flex"
          justifyContent="flex-start"
          alignItems="flex-start"
          p={4}
          opacity={isHovered ? 0.6 : 0}
          transition="opacity 0.3s ease-in-out"
        >
          <Text fontSize="xl" fontWeight="bold" color="white">
            {title}
          </Text>
        </Box>
      </Box>
      <Modal size="3xl" isOpen={isOpen} onClose={onClose}>
        <ModalOverlay />
        <ModalContent>
          <ModalBody>
            <Box
              h="300px"
              display="flex"
              justifyContent="center"
              alignItems="center"
              borderRadius="md"
              mt={4}
              mb={4}
              bg={defaultBgColor}
            >
              <ModalCloseButton />
              <Image
                src={`/projectImages/${imageName}`}
                alt={title}
                maxH="50%"
                borderRadius="lg"
                boxShadow="lg"
              />
            </Box>
            <Flex justifyContent="space-between" alignItems="center" mb={4}>
              <Heading fontSize="2xl">{title}</Heading>
              {tags && (
                <Flex>
                  {tags.map((tag, index) => (
                    <Tag key={index} colorScheme="orange" mr={2} p={2}>
                      {tag}
                    </Tag>
                  ))}
                </Flex>
              )}
            </Flex>
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
