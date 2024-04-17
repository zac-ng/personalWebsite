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
  hoveredTitle: string;
  modalTitle: string;
  description: string;
  imageNames: string[];
  tags?: string[];
  buttons?: ReactNode[];
}

const ProjectComponent = ({
  hoveredTitle,
  modalTitle,
  description,
  imageNames,
  tags,
  buttons,
}: ProjectComponentProps) => {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const [isHovered, setIsHovered] = useState(false);
  const hoverBgColor = useColorModeValue("#FFC581", "orange.400");
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
        {imageNames.map((imageName, index) => (
          <Image
            key={index}
            src={`${process.env.PUBLIC_URL}/projectImages/${imageName}`}
            alt={modalTitle}
            maxH="50%"
            w="auto"
            borderRadius="lg"
            boxShadow="lg"
            mr={2}
            flexShrink={0}
          />
        ))}
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
          <Text fontSize="xl" fontWeight="bold" color="orange.900" opacity={1}>
            {hoveredTitle}
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
              {imageNames.map((imageName, index) => (
                <Image
                  key={index}
                  src={`/projectImages/${imageName}`}
                  alt={modalTitle}
                  maxH="50%"
                  w="auto"
                  borderRadius="lg"
                  boxShadow="lg"
                  mr={2}
                  flexShrink={0}
                />
              ))}
            </Box>
            <Flex justifyContent="space-between" alignItems="center" mb={4}>
              <Heading fontSize="2xl">{modalTitle}</Heading>
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
