/* eslint-disable @next/next/no-img-element */
import {
  Container,
  Stack,
  Heading,
  Text,
  Button,
  Box,
} from '@chakra-ui/react';
import { useState } from 'react';
import { FaDiscord } from 'react-icons/fa';
import classData from "../data/classData.json";

interface HeroSectionProps {
  setShowAboutUs: (aboutUs:boolean) => void;
  showAboutUs: boolean;
  setShowHeroSection: (aboutUs:boolean) => void;
  showHeroSection: boolean;
}

const HeroSection: React.FC<HeroSectionProps> = ({ setShowAboutUs, showAboutUs, setShowHeroSection, showHeroSection }) => {
  const handleAboutUsClick = () => {
    setShowHeroSection(false);
    setShowAboutUs(true);
  }

  const classArray = Object.values(classData);
  
  const [randomClass] = useState(() => {
    const randomClassIndex = Math.floor(Math.random() * classArray.length);
    return classArray[randomClassIndex];
  });

return (
  <Container suppressHydrationWarning={true} maxW={'85%'} minH={'60rem'} py={"60px"}>
      <Box display='flex'>
        <Box
          pos='fixed' 
          bgImage={randomClass.bg}
          bgRepeat='no-repeat'
          bgPosition='center'
          bgSize='contain'
          boxSize='100%'
          left='22%'
          bottom='4%'
          zIndex='0'
          display={{ base: 'none', xl: 'block' }}>
        </Box>
        <Box 
          pos='fixed'
          bg={randomClass.color}
          bgRepeat='no-repeat'
          bgPosition='center'
          bgSize='contain'
          w='40%'
          h='100vh'
          bottom='0'
          left={{ base:'85%', lg: '55%' }}
          zIndex='-1'>
        </Box>
        <Box 
          pos='fixed'
          bgImage={randomClass.icon}
          bgRepeat='no-repeat'
          bgSize='contain'
          boxSize='90%'
          bottom={{ base:'5%', lg:'10%'}}
          left={{ base:'55%', lg:"49.3%" }}
          zIndex='-1'
          display={{ base: 'none', md: 'block' }}>
        </Box>
      </Box>
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
            onClick={handleAboutUsClick}>
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
};

export default HeroSection;