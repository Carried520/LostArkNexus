import { Box } from "@chakra-ui/react";
import Image from 'next/image';
type ImageProps = {
    bg : string,
    name : string,
    color : string,
    icon : string
}
export default function HeroSectionImages(randomClass : ImageProps){
    return <Box display='flex'>
    <Box
    pos='fixed' 
    bgRepeat='no-repeat'
    bgPosition='center'
    bgSize='contain'
    boxSize='100%'
    left='22%'
    bottom='4%'
    zIndex='0'
    display={{ base: 'none', xl: 'block' }}>
    <Image
      className='object-contain'
      priority
      loading='eager'
      src={randomClass.bg}
      alt={randomClass.name}
      fill
      
      quality={100}
    />
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
}