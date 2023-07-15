'use client'
import {
    Box,
    chakra,
    Container,
    Stack,
    Text,
    useColorModeValue,
    VisuallyHidden,
  } from '@chakra-ui/react';
  import { FaDiscord} from 'react-icons/fa';
  import { ReactNode } from 'react';
  
  const Logo = (props: any) => {
    return (
        <div style={{ display: 'flex', flexDirection: 'row', alignItems: 'center' }}>
        <img src="/loa-nav.png" style={{ marginRight: '10px' }} />
        <Text
        fontFamily="Frutiger"
        color="#ffffff"
        fontWeight="600"
        style={{ userSelect: 'none' }}
        >
        Lost Ark Nexus
        </Text>
    </div>
    );
  };
  
  const SocialButton = ({
    children,
    label,
    href,
  }: {
    children: ReactNode;
    label: string;
    href: string;
  }) => {
    return (
      <chakra.button
        bg="#ffffff"
        color="#141418"
        rounded={'full'}
        w={30}
        h={30}
        cursor={'pointer'}
        as={'a'}
        href={href}
        display={'inline-flex'}
        alignItems={'center'}
        justifyContent={'center'}
        transition={'background 0.3s ease'}
        _hover={{
          bg: useColorModeValue('blackAlpha.200', 'whiteAlpha.200'),
          color: "#ffffff"
        }}>
        <VisuallyHidden>{label}</VisuallyHidden>
        {children}
      </chakra.button>
    );
  };
  
  export default function Footer() {
    return (
      
      
      <Box
        bg="#141418"
        color="#ffffff"
        fontFamily={"Proxima"}
        >
        <Container
          as={Stack}
          maxW={'6xl'}
          py={4}
          spacing={4}
          justify={'center'}
          align={'center'}
          bottom={'0'}>
          <Logo />
          {/* <Stack direction={'row'} spacing={6}>
            <Link href={'#'}>Home</Link>
            <Link href={'#'}>Guides</Link>
            <Link href={'#'}>About Us</Link>
            <Link href={'#'}>Submit Content</Link>
          </Stack>*/}
        </Container>
  
        <Box
          borderTopWidth={1}
          borderStyle={'solid'}
          borderColor={useColorModeValue('gray.200', 'gray.700')}>
          <Container
            as={Stack}
            maxW={'6xl'}
            py={4}
            direction={{ base: 'column', md: 'row' }}
            spacing={4}
            justify={{ base: 'center', md: 'space-between' }}
            align={{ base: 'center', md: 'center' }}>
            <Text fontSize="12px" style={{ userSelect: 'none' }}>
                © 2023 This website is a fan-made site and is not affiliated with or endorsed by LostArk or its developers.<br />
                All game-related assets, including images, logos, and trademarks, are the property of LostArk and their respective owners.
            </Text>
            <Stack direction={'row'} spacing={6}>
              <SocialButton label={'Discord'} href={'https://discord.gg/lostark'}>
                <FaDiscord />
              </SocialButton>
            </Stack>
          </Container>
        </Box>
      </Box>
    );
  }