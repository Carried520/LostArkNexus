"use client";
import { useStore } from "@/Store/RandomClassStore";
import { Button, Container, Heading, Stack, Text } from "@chakra-ui/react";
import Link from "next/link";
import { useEffect } from "react";
import { FaDiscord } from "react-icons/fa";

type randomClassType = {
  name: string;
  description: string;
  base: string;
  bg: string;
  icon: string;
  color: string;
  hover: string;
  links: {
    link: string;
    linkname: string;
    linkdescription: string;
  }[];
};

export default function HeroSectionContent() {

  const [randomClass] = useStore((state) => [state.randomClass , state.updateClass]);
  
  return (
    
      <Stack align={"center"} spacing={{ base: 8, md: 10 }} py={{ base: 20, md: 28 }} direction={{ base: "column", md: "row" }}>
        <Stack flex={1} spacing={{ base: 5, md: 10 }}>
          <Heading lineHeight={1.1} fontWeight={700} fontSize={{ base: "3xl", sm: "4xl", lg: "5xl", xl: "7xl" }} color="#ffffff" style={{ userSelect: "none" }}>
            <Text
              as={"span"}
              position={"relative"}
              fontFamily={"Lexend Zetta"}
              _after={{
                content: "''",
                width: "full",
                height: "30%",
                position: "absolute",
                bottom: 1,
                left: 0,
                zIndex: -1,
              }}
            >
              LOST ARK <br />
              NEXUS
            </Text>
          </Heading>
          <Stack spacing={{ base: 4, sm: 6 }} direction={{ base: "column", sm: "row" }} fontFamily={"Nunito Sans"}>
            <Button
              rounded={"full"}
              size={"lg"}
              px={6}
              bg={randomClass.color}
              color={"#ffffff"}
              _hover={{ bg: randomClass.hover }}
              as={Link}
              href='/AboutUs'
            >
              About Us
            </Button>
              <Button as={Link} className="bg-white" href='https://discord.gg/lostark' rounded={"full"} size={"lg"} px={6} leftIcon={<FaDiscord color={"gray.300"} style={{ fontSize: "24px" }} />}>
                Discord
              </Button>
          </Stack>
        </Stack>
      </Stack>
  );
}
