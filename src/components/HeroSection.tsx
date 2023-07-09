import {
  Container,
  Stack,
  Heading,
  Text,
  Button,
} from '@chakra-ui/react';

import { FaDiscord } from 'react-icons/fa';

export default function HeroSection() {
  return (
  <Container
    maxW={'7xl'}
    py={"60px"}
    bgPosition="right"
    bgSize="55%"
    bgRepeat="no-repeat"
    bgImage={"/bgScouter.png"}
  >
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
              fontFamily={"Frutiger"}
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
            {/* 
            <Button
              rounded={'full'}
              size={'lg'}
              px={6}
              bg="#fb9484"
              color={"#ffffff"}
              _hover={{ bg: 'red.500' }}>
              About Us
            </Button>*/}
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
  );
}
