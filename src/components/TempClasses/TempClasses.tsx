import React from 'react';
import { Flex, Image, Text, HStack, VStack } from '@chakra-ui/react';
import { Link } from '@chakra-ui/next-js';
import guides from '../../findClassGuide/guides.json'
import classNames from './classNames.json'

export default function TempClasses() {
  
  const filterclassLinks = (arr : string[]) => guides.filter(item => arr.includes(item.className)).map((item , index) => <Link key={index.toString()} href={`https://lostark.nexus/${item.className}`}>
  <VStack>
    <Image boxSize="100px" objectFit="contain" src={item.image} alt={item.className} />
    <Text fontSize="18px" fontWeight={"500"} textAlign="center" >{item.className[0].toUpperCase() + item.className.slice(1)}</Text>
  </VStack>
</Link>)


  const guideRefs = classNames.map((item , index) => {
    return <HStack key={index.toString()} spacing={5}>
          {filterclassLinks(item.classes)}
      </HStack>
  })

  return (
    <Flex
      paddingY="50px"
      align="center"
      justify="center"
      bg="#202026"
      color="#ffffff"
      fontWeight="500"
      fontSize="32px"
      direction="column"
      fontFamily={"Proxima"}
    >
      <Text textAlign="center" marginBottom="40px" fontFamily={"ProximaBold"} fontSize="48px">
      Class Guides
      </Text>


      <VStack spacing={5}>
        {guideRefs}
      </VStack>
      
    </Flex>
  );
}