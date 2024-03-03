import { Flex, Link, Heading } from "@chakra-ui/react";
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
      <Flex alignItems="center">
        {currentPage !== "home" && (
          <Link mr={4} onClick={() => handlePageChange("home")}>
            <Heading ml={4} size="md">Zachary Nguyen</Heading>
          </Link>
        )}
      </Flex>
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
