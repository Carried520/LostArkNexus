import React, { useState } from 'react';
import { Flex, Image, Text } from '@chakra-ui/react';

export default function SubclassSection() {
  const [hoveredImage, setHoveredImage] = useState(null);

  const handleMouseEnter = (image) => {
    setHoveredImage(image);
  };

  const handleMouseLeave = () => {
    setHoveredImage(null);
  };

  const renderSubImages = (images) => {
    if (hoveredImage === null) {
      return null;
    }

    if (hoveredImage === images[0]) {
      return (
        <Flex
          direction="row"
          justify="center"
          align="center"
          marginTop="16px"
          transition="opacity 4.3s ease" // Add a transition effect
        >
          <Image src="/class-warrior.png" boxSize="80px" objectFit="cover" marginRight="20px" />
          <Image src="/class-warrior.png" boxSize="80px" objectFit="cover" marginRight="20px" />
          <Image src="/class-warrior.png" boxSize="80px" objectFit="cover" />
        </Flex>
      );
    }

    // Render sub-images for other main images if needed
    // ...

    return null;
  };

  return (
    <Flex
      paddingY="100px"
      align="center"
      justify="center"
      bg="#373742"
      color="#ffffff"
      fontWeight="500"
      fontSize="32px"
      direction="column"
    >
      <Text textAlign="center" marginBottom="40px" fontSize="62px">
      Class Guides
      </Text>
      <Flex direction="row" justify="center" align="center">
        <Flex
          direction="column"
          align="center"
          marginRight="60px"
          onMouseEnter={() => handleMouseEnter('/class-warrior.png')}
          onMouseLeave={handleMouseLeave}
        >
          <Image src="/class-warrior.png" boxSize="125px" objectFit="cover" />
          <Text textAlign="center" paddingTop="8px">
            Warrior
          </Text>
          {renderSubImages(['/class-warrior.png'])}
        </Flex>
       <Flex
          direction="column"
          align="center"
          marginRight="60px"
          onMouseEnter={() => handleMouseEnter('/class-mage.png')}
          onMouseLeave={handleMouseLeave}
        >
          <Image src="/class-mage.png" boxSize="125px" objectFit="cover" />
          <Text textAlign="center" paddingTop="8px">
            Mage
          </Text>
          {renderSubImages(['/class-mage.png'])}
        </Flex>
        <Flex
          direction="column"
          align="center"
          marginRight="60px"
          onMouseEnter={() => handleMouseEnter('/class-fighter.png')}
          onMouseLeave={handleMouseLeave}
        >
          <Image src="/class-fighter.png" boxSize="125px" objectFit="cover" />
          <Text textAlign="center" paddingTop="8px">
            Fighter
          </Text>
          {renderSubImages(['/class-fighter.png'])}
        </Flex>
        <Flex
          direction="column"
          align="center"
          marginRight="60px"
          onMouseEnter={() => handleMouseEnter('/class-gunner.png')}
          onMouseLeave={handleMouseLeave}
        >
          <Image src="/class-gunner.png" boxSize="125px" objectFit="cover" />
          <Text textAlign="center" paddingTop="8px">
            Gunner
          </Text>
          {renderSubImages(['/class-gunner.png'])}
        </Flex>
        <Flex
          direction="column"
          align="center"
          marginRight="60px"
          onMouseEnter={() => handleMouseEnter('/class-assassin.png')}
          onMouseLeave={handleMouseLeave}
        >
          <Image src="/class-assassin.png" boxSize="125px" objectFit="cover" />
          <Text textAlign="center" paddingTop="8px">
            Assassin
          </Text>
          {renderSubImages(['/class-assassin.png'])}
        </Flex>
        <Flex
          direction="column"
          align="center"
          marginRight="60px"
          onMouseEnter={() => handleMouseEnter('/class-specialist.png')}
          onMouseLeave={handleMouseLeave}
        >
          <Image src="/class-specialist.png" boxSize="125px" objectFit="cover" />
          <Text textAlign="center" paddingTop="8px">
            Specialist
          </Text>
          {renderSubImages(['/class-specialist.png'])}
        </Flex>
      </Flex>
    </Flex>
  );
}