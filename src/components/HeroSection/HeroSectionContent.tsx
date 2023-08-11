'use client'
import {Button, Container, Heading, Stack , Text } from "@chakra-ui/react"; 
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
}
type HeroSectionContentProps =  {
    setShowAboutUs: (aboutUs:boolean) => void;
    showAboutUs: boolean;
    setShowHeroSection: (aboutUs:boolean) => void;
    showHeroSection: boolean;
    children : React.ReactNode;
    randomClass : randomClassType
  }

export default function HeroSectionContent({ setShowAboutUs, showAboutUs, setShowHeroSection, showHeroSection , children , randomClass } : HeroSectionContentProps){

    const handleAboutUsClick = () => {
        setShowHeroSection(false);
        setShowAboutUs(true);
      }
    
    return(
        <Container maxW={'85%'} minH={'60rem'} py={"60px"}>
      {children}
    <Stack
      align={'center'}
      spacing={{ base: 8, md: 10 }}
      py={{ base: 20, md: 28 }}
      direction={{ base: 'column', md: 'row' }}>
      <Stack flex={1} spacing={{ base: 5, md: 10 }}>
        <Heading
          lineHeight={1.1}
          fontWeight={700}
          fontSize={{ base: '3xl', sm: '4xl', lg: '5xl', xl: '7xl' }}
          color="#ffffff"
          style={{ userSelect: 'none' }}>
          <Text
            as={'span'}
            position={'relative'}
            fontFamily={"Lexend Zetta"}
            _after={{
              content: "''",
              width: 'full',
              height: '30%',
              position: 'absolute',
              bottom: 1,
              left: 0,
              zIndex: -1,
            }}>
            LOST ARK <br />
            NEXUS
          </Text>
        </Heading>
        <Stack
          spacing={{ base: 4, sm: 6 }}
          direction={{ base: 'column', sm: 'row' }}
          fontFamily={"Nunito Sans"}
          
          >
          <Button
            rounded={'full'}
            size={'lg'}
            px={6}
            bg={randomClass.color}
            color={"#ffffff"}
            _hover={{ bg:randomClass.hover }}
            onClick={handleAboutUsClick}
            >
            About Us
          </Button>
          <a href="https://discord.gg/lostark">
            <Button
              rounded={'full'}
              size={'lg'}

              px={6}
              leftIcon={<FaDiscord color={'gray.300'} style={{ fontSize: '24px' }} />}>
              Discord
            </Button>
          </a>
        </Stack>
      </Stack>
    </Stack>
  </Container>
    )
}