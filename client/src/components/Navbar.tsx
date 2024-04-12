import { Flex, Link, Heading, Image, HStack, Box } from "@chakra-ui/react";
import { ColorModeSwitcher } from "../ColorModeSwitcher";
import { Link as RouterLink, useLocation } from "react-router-dom";

const Navbar = () => {
  const location = useLocation();
  const currentPage = location.pathname.substring(1);

  return (
    <Flex alignItems="center" justifyContent="space-between" p={4} h='5rem'>
      <Flex alignItems="center">
        {currentPage !== "" && (
          <Link as={RouterLink} to="/">
            <HStack>
              <Image src="/dog.svg" alt="Dog Logo" boxSize="50px" mr={2} />
              <Heading size="md">Zachary Nguyen</Heading>
            </HStack>
          </Link>
        )}
      </Flex>
      <Flex alignItems="center">
        <Link as={RouterLink} to="/about" mr={4}>
          About
        </Link>
        <Link as={RouterLink} to="/experience" mr={4}>
          Experience
        </Link>
        <Link as={RouterLink} to="/projects" mr={4}>
          Projects
        </Link>
        <ColorModeSwitcher ml={4} />
      </Flex>
    </Flex>
  );
};

export default Navbar;
