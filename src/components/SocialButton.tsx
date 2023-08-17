import { Button, VisuallyHidden } from "@chakra-ui/react";
import { ReactNode } from "react";

const SocialButton = ({ children, label, href }: { children: ReactNode; label: string; href: string }) => {
    return (
      <Button
        className="bg-[#ffffff]"
        color="#141418"
        rounded={"full"}
        w={'50px'}
        h={'30px'}
        cursor={"pointer"}
        as={"a"}
        href={href}
        display={"inline-flex"}
        alignItems={"center"}
        justifyContent={"center"}
        transition={"background 0.3s ease"}
        _hover={{
          bg: "blackAlpha.200",
          color: "#ffffff",
        }}
      >
        <VisuallyHidden>{label}</VisuallyHidden>
        {children}
      </Button>
    );
  };

  export default SocialButton;