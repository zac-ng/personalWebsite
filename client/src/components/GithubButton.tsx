import { Button } from "@chakra-ui/react";
import { FaGithub } from "react-icons/fa";

interface GithubButtonProps {
  url: string;
}

const GithubButton = ({ url }: GithubButtonProps) => {
  return (
    <Button
      as="a"
      href={url}
      leftIcon={<FaGithub />}
      colorScheme="gray"
      target="_blank"
    >
      GitHub
    </Button>
  );
};

export default GithubButton;
