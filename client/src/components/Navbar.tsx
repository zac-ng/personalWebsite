import { Flex, Link } from "@chakra-ui/react";
import { ColorModeSwitcher } from "../ColorModeSwitcher";

interface NavbarProps {
  setPage: (page: string) => void;
}

const Navbar = ({ setPage }: NavbarProps) => {
  const handlePageChange = (page: string) => {
    setPage(page);
  };

  return (
    <Flex alignItems="center" justifyContent="flex-end" p={4} position="absolute" top="0" left="0" right="0">
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
