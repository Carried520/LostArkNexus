import {
  Container,
  Stack,
  Flex,
  Box,
  Heading,
  Text,
  Button,
  Image,
  Icon,
  IconButton,
  createIcon,
  IconProps,
  useColorModeValue,
} from '@chakra-ui/react';

import { FaDiscord } from 'react-icons/fa';

export default function HeroSection() {
  return (
    <Container
      maxW={'7xl'}
      bgImage={'/scooter@2x.png'}
      bgPosition="right"
      bgSize="35%"
      bgRepeat="no-repeat"
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
              _after={{
                content: "''",
                width: 'full',
                height: '30%',
                position: 'absolute',
                bottom: 1,
                left: 0,
                zIndex: -1,
              }}>
              Lost Ark <br />
              Nexus
            </Text>
          </Heading>
          <Stack
            spacing={{ base: 4, sm: 6 }}
            direction={{ base: 'column', sm: 'row' }}>
            <Button
              rounded={'full'}
              size={'lg'}
              fontWeight={'500'}
              px={6}
              colorScheme={'red'}
              bg="#fc9480"
              _hover={{ bg: 'red.500' }}>
              About Us
            </Button>
            <a href="https://discord.gg/lostark">
              <Button
                rounded={'full'}
                size={'lg'}
                fontWeight={'500'}
                px={6}
                leftIcon={<FaDiscord color={'gray.300'} />}>
                Join Us On Discord
              </Button>
            </a>
          </Stack>
        </Stack>
      </Stack>
    </Container>
  );
}
