
import React, { useState } from 'react';
import { useTransition, animated } from 'react-spring';
import { Box } from '@chakra-ui/react';
import Image from 'next/image';
import { useRandomClass } from '@/Store/RandomClassStore';



export default function HeroSectionImages() {
  const [showComponent] = useState(true);

  const [randomClass , updateClass] = useRandomClass((state) => [state.randomClass , state.updateClass]);
  const transitions = useTransition(showComponent, {
    from: { opacity: 0},
    enter: { opacity: 1},
    leave: { opacity: 0},
    config: { duration: 2000 },
    reset : true
  });

  return (
    <div className="flex">
      {transitions((style , item) => 
      <Box display="flex" as={animated.div} style={style}>
            <Box
              pos="fixed"
              bgRepeat="no-repeat"
              bgPosition="center"
              bgSize="contain"
              boxSize="100%"
              left="22%"
              bottom="4%"
              zIndex="0"
              display={{ base: 'none', xl: 'block' }}
            >
              <Image
                className="object-contain"
                src={randomClass.bg}
                priority
                alt={'class-image'}
                fill
              />
            </Box>
            <Box
              pos="fixed"
              bg={randomClass.color}
              bgRepeat="no-repeat"
              bgPosition="center"
              bgSize="contain"
              w="40%"
              h="100vh"
              bottom="0"
              left={{ base: '85%', lg: '55%' }}
              zIndex="-1"
            ></Box>
            <Box
              pos="fixed"
              bgImage={randomClass.icon}
              bgRepeat="no-repeat"
              bgSize="contain"
              boxSize="90%"
              bottom={{ base: '5%', lg: '10%' }}
              left={{ base: '55%', lg: '49.3%' }}
              zIndex="-1"
              display={{ base: 'none', md: 'block' }}
            ></Box>
          </Box>
      )}
          
    </div>
  );
}


