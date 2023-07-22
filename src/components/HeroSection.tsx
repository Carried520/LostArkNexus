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

const HeroSection = () => {
  const classes = [
    { bg: '/BG_Destroyer.png', icon: '/Warrior_Destroyer.png', color: '#23235c', hover: 'hsl(240, 45%, 5%)' },
    { bg: '/BG_Gunlancer.png', icon: '/Warrior_Gunlancer.png', color: '#a6773d', hover: 'hsl(33, 46%, 25%)' },
    { bg: '/BG_Paladin.png', icon: '/Warrior_Paladin.png', color: '#e6c07a', hover: 'hsl(39, 68%, 49%)' },
    { bg: '/BG_Slayer.png', icon: '/Warrior_Slayer.png', color: '#a3343a', hover: 'hsl(357, 52%, 22%)' },
    { bg: '/BG_Arcanist.png', icon: '/Mage_Arcana.png', color:'#a47adb', hover: 'hsl(266, 57%, 47%)'},
    { bg: '/BG_Bard.png', icon: '/Mage_Bard.png', color: '#51698c', hover: 'hsl(216, 27%, 23%)' },
    { bg: '/BG_Sorceress.png', icon: '/Mage_Sorceress.png', color: '#264294', hover: 'hsl(225, 59%, 16%)' },
    { bg: '/BG_Summoner.png', icon: '/Mage_Summoner.png', color: '#363456', hover: 'hsl(244, 25%, 7%)' },
    { bg: '/BG_Glaivier.png', icon: '/Fighter_Glaivier.png', color: '#614483', hover: 'hsl(268, 32%, 19%)' },
    { bg: '/BG_Scrapper.png', icon: '/Fighter_Scrapper.png', color: '#86bd0f', hover: 'hsl(79, 85%, 20%)' },
    { bg: '/BG_Soulfist.png', icon: '/Fighter_Soulfist.png', color: '#f9a95a', hover: ' hsl(30, 93%, 46%)' },
    { bg: '/BG_Striker.png', icon: '/Fighter_Striker.png', color: '#a04437', hover: 'hsl(7, 49%, 22%)' },
    { bg: '/BG_Wardancer.png', icon: '/Fighter_Wardancer.png', color: '#64121e', hover: 'hsl(351, 69%, 3%)' },
    { bg: '/BG_Artillerist.png', icon: '/Gunner_Artillerist.png', color: '#2d687c', hover: 'hsl(195, 47%, 13%)'},
    { bg: '/BG_Deadeye.png', icon: '/Gunner_Deadeye.png', color: '#f28a3c', hover: 'hsl(26, 81%, 33%)' },
    { bg: '/BG_Gunslinger.png', icon: '/Gunner_Gunslinger.png', color: '#6e2f2f', hover: 'hsl(0, 40%, 11%)' },
    { bg: '/BG_Scouter.png', icon: '/Gunner_Scouter.png', color: '#ff6347', hover: 'hsl(9, 100%, 44%)'},
    { bg: '/BG_Sharpshooter.png', icon: '/Gunner_Sharpshooter.png', color: '#37a389', hover: 'hsl(166, 50%, 23%)' },
    { bg: '/BG_Deathblade.png', icon: '/Assassin_Deathblade.png', color: '#6d5f56', hover: 'hsl(23, 12%, 18%)' },
    { bg: '/BG_Reaper.png', icon: '/Assassin_Reaper.png', color: '#af1b1c', hover: 'hsl(360, 73%, 20%)' },
    { bg: '/BG_Shadowhunter.png', icon: '/Assassin_Shadowhunter.png', color: '#471113', hover: 'hsl(358, 61%, 5%)' },
    { bg: '/BG_Souleater.png', icon: '/Assassin_Souleater.png', color: '#89319a', hover: 'hsl(290,51%,19%)' },
    { bg: '/BG_Aeromancer.png', icon: '/Specialist_Aeromancer.png', color: '#ffc0cb', hover: 'hsl(350, 100%, 68%)' },
    { bg: '/BG_Artist.png', icon: '/Specialist_Artist.png', color: '#8f5855', hover: 'hsl(3, 25%, 25%)' },
  ];
  
  const [randomClass] = useState(() => {
    const randomClassIndex = Math.floor(Math.random() * classes.length);
    return classes[randomClassIndex];
  });

return (
  <Container maxW={'85%'} minH={'60rem'} py={"60px"}>
      <Box display='flex'>
        <Box
          pos='absolute' 
          bgImage={randomClass.bg}
          bgRepeat='no-repeat'
          bgPosition='center'
          bgSize='contain'
          boxSize='100%'
          left='22%'
          bottom='8%'
          zIndex='0'>
        </Box>
        <Box 
          pos='absolute'
          bg={randomClass.color}
          bgRepeat='no-repeat'
          bgPosition='center'
          bgSize='contain'
          w='40%'
          h='100%'
          left='55%'
          bottom='5%'
          zIndex='-1'>
        </Box>
        <Box 
          pos='absolute'
          bgImage={randomClass.icon}
          bgRepeat='no-repeat'
          bgSize='contain'
          boxSize='90%'
          bottom='10%'
          left="49.3%"
          zIndex='-1'>
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
          fontSize={{ base: '3xl', sm: '4xl', lg: '8xl' }}
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
          fontFamily={"ProximaBold"}
          
          >
          <Button
            rounded={'full'}
            size={'lg'}
            px={6}
            bg={randomClass.color}
            color={"#ffffff"}
            _hover={{ bg:randomClass.hover }}>
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