import {
    Box,
    chakra,
    Container,
    Link,
    Stack,
    Text,
    useColorModeValue,
    VisuallyHidden,
  } from '@chakra-ui/react';
  import { FaDiscord} from 'react-icons/fa';
  import { ReactNode } from 'react';
  
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
        bg="#010101"
        color="grey"
        fontFamily={"Nunito Sans"}
        position="fixed"
        bottom='0'
        minW='100%'
        z-index='9999'
        >
  
        <Box>
          <Container
            as={Stack}
            maxW={'2xl'}
            py={3}
            direction={{ base: 'column', md: 'row' }}
            spacing={1}
            justify={{ base: 'center', md: 'space-between' }}
            align={{ base: 'center', md: 'center' }}
            zIndex={9999}>
            <Text fontSize="9px"  style={{ userSelect: 'none' }}>
                © 2023 This website is a fan-made site and is not affiliated with or endorsed by LostArk or its developers.<br />
                All game-related assets, including images, logos, and trademarks, are the property of LostArk and their respective owners.
            </Text>
            <Stack direction={'row'} spacing={2}>
              <SocialButton label={'Discord'} href={'https://discord.gg/lostark'}>
                <FaDiscord />
              </SocialButton>
            </Stack>
          </Container>
        </Box>
      </Box>
    );
  }