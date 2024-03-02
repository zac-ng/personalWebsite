import { Flex, Link } from "@chakra-ui/react";
import { ColorModeSwitcher } from "../ColorModeSwitcher";

const Navbar = () => {
  return (
    <Flex alignItems="center" justifyContent="flex-end" p={4} position="absolute" top="0" left="0" right="0">
      <Flex alignItems="center">
        <Link mr={4}>About</Link>
        <Link mr={4}>Experience</Link>
        <Link mr={4}>Projects</Link>
        <ColorModeSwitcher ml={4} />
      </Flex>
    </Flex>
  );
};

export default Navbar;
