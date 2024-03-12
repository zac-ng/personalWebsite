import { Flex, Link, Heading, Image, HStack, Box } from "@chakra-ui/react";
import { ColorModeSwitcher } from "../ColorModeSwitcher";

interface NavbarProps {
  setPage: (page: string) => void;
  currentPage: string;
}

const Navbar = ({ setPage, currentPage }: NavbarProps) => {
  const handlePageChange = (page: string) => {
    setPage(page);
  };

  return (
    <Flex alignItems="center" justifyContent="space-between" p={4}>
      {currentPage !== "home" ? (
        <Link mr={4} onClick={() => handlePageChange("home")}>
          <HStack>
            <Image src="/dog.svg" alt="Dog Logo" boxSize="50px" mr={2} />
            <Heading size="md">Zachary Nguyen</Heading>
          </HStack>
        </Link>
      ): <Box boxSize="50px"></Box>}
      <Flex alignItems="center">
        <Link mr={4} onClick={() => handlePageChange("about")}>About</Link>
        <Link mr={4} onClick={() => handlePageChange("experience")}>Experience</Link>
        <Link mr={4} onClick={() => handlePageChange("projects")}>Projects</Link>
        <ColorModeSwitcher ml={4} />
      </Flex>
    </Flex>
  );
};

export default Navbar;
