import React, { useState } from "react";
import { Flex, Image, Text, Menu, MenuList, MenuItem, MenuButton, Button, HStack, Box, VStack } from "@chakra-ui/react";
import { Link } from "@chakra-ui/next-js";
import { color } from "framer-motion";

export default function TempClasses() {
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
        {/*Warrior */}
        <HStack spacing={5}>
          <Link href="https://lostark.nexus/Slayer">
            <VStack>
              <Image boxSize="100px" objectFit="contain" src="/Warrior_Slayer.png" />
              <Text fontSize="18px" fontWeight={"500"} textAlign="center">
                Slayer
              </Text>
            </VStack>
          </Link>

          <Link href="https://lostark.nexus/Berserker">
            <VStack>
              <Image boxSize="100px" objectFit="contain" src="/Warrior_Berserker.png" />
              <Text fontSize="18px" fontWeight={"500"} textAlign="center">
                Berserker
              </Text>
            </VStack>
          </Link>

          <Link href="https://lostark.nexus/Destroyer">
            <VStack>
              <Image boxSize="100px" objectFit="contain" src="/Warrior_Destroyer.png" />
              <Text fontSize="18px" fontWeight={"500"} textAlign="center">
                Destroyer
              </Text>
            </VStack>
          </Link>

          <Link href="https://lostark.nexus/Gunlancer">
            <VStack>
              <Image boxSize="100px" objectFit="contain" src="/Warrior_Gunlancer.png" />
              <Text fontSize="18px" fontWeight={"500"} textAlign="center">
                Gunlancer
              </Text>
            </VStack>
          </Link>

          <Link href="https://lostark.nexus/Paladin">
            <VStack>
              <Image boxSize="100px" objectFit="contain" src="/Warrior_Paladin.png" />
              <Text fontSize="18px" fontWeight={"500"} textAlign="center">
                Paladin
              </Text>
            </VStack>
          </Link>
        </HStack>

        {/*Mage */}
        <HStack spacing={5}>
          <Link href="https://lostark.nexus/Sorceress">
            <VStack>
              <Image boxSize="100px" objectFit="contain" src="/Mage_Sorceress.png" />
              <Text fontSize="18px" fontWeight={"500"} textAlign="center">
                Sorceress
              </Text>
            </VStack>
          </Link>

          <Link href="https://lostark.nexus/Arcana">
            <VStack>
              <Image boxSize="100px" objectFit="contain" src="/Mage_Arcana.png" />
              <Text fontSize="18px" fontWeight={"500"} textAlign="center">
                Arcana
              </Text>
            </VStack>
          </Link>

          <Link href="https://lostark.nexus/Summoner">
            <VStack>
              <Image boxSize="100px" objectFit="contain" src="/Mage_Summoner.png" />
              <Text fontSize="18px" fontWeight={"500"} textAlign="center">
                Summoner
              </Text>
            </VStack>
          </Link>

          <Link href="https://lostark.nexus/Bard">
            <VStack>
              <Image boxSize="100px" objectFit="contain" src="/Mage_Bard.png" />
              <Text fontSize="18px" fontWeight={"500"} textAlign="center">
                Bard
              </Text>
            </VStack>
          </Link>
        </HStack>

        {/*Fighter */}
        <HStack spacing={5}>
          <Link href="https://lostark.nexus/Striker">
            <VStack>
              <Image boxSize="100px" objectFit="contain" src="/Fighter_Striker.png" />
              <Text fontSize="18px" fontWeight={"500"} textAlign="center">
                Striker
              </Text>
            </VStack>
          </Link>

          <Link href="https://lostark.nexus/Wardancer">
            <VStack>
              <Image boxSize="100px" objectFit="contain" src="/Fighter_Wardancer.png" />
              <Text fontSize="18px" fontWeight={"500"} textAlign="center">
                Wardancer
              </Text>
            </VStack>
          </Link>

          <Link href="https://lostark.nexus/Scrapper">
            <VStack>
              <Image boxSize="100px" objectFit="contain" src="/Fighter_Scrapper.png" />
              <Text fontSize="18px" fontWeight={"500"} textAlign="center">
                Scrapper
              </Text>
            </VStack>
          </Link>

          <Link href="https://lostark.nexus/Soulfist">
            <VStack>
              <Image boxSize="100px" objectFit="contain" src="/Fighter_Soulfist.png" />
              <Text fontSize="18px" fontWeight={"500"} textAlign="center">
                Soulfist
              </Text>
            </VStack>
          </Link>

          <Link href="https://lostark.nexus/Glaivier">
            <VStack>
              <Image boxSize="100px" objectFit="contain" src="/Fighter_Glaivier.png" />
              <Text fontSize="18px" fontWeight={"500"} textAlign="center">
                Glaivier
              </Text>
            </VStack>
          </Link>
        </HStack>

        {/*Gunner */}
        <HStack spacing={5}>
          <Link href="https://lostark.nexus/Gunslinger">
            <VStack>
              <Image boxSize="100px" objectFit="contain" src="/Gunner_Gunslinger.png" />
              <Text fontSize="18px" fontWeight={"500"} textAlign="center">
                Gunslinger
              </Text>
            </VStack>
          </Link>

          <Link href="https://lostark.nexus/Deadeye">
            <VStack>
              <Image boxSize="100px" objectFit="contain" src="/Gunner_Deadeye.png" />
              <Text fontSize="18px" fontWeight={"500"} textAlign="center">
                Deadeye
              </Text>
            </VStack>
          </Link>

          <Link href="https://lostark.nexus/Artillerist">
            <VStack>
              <Image boxSize="100px" objectFit="contain" src="/Gunner_Artillerist.png" />
              <Text fontSize="18px" fontWeight={"500"} textAlign="center">
                Artillerist
              </Text>
            </VStack>
          </Link>

          <Link href="https://lostark.nexus/Machinist">
            <VStack>
              <Image boxSize="100px" objectFit="contain" src="/Gunner_Scouter.png" />
              <Text fontSize="18px" fontWeight={"500"} textAlign="center">
                Machinist
              </Text>
            </VStack>
          </Link>

          <Link href="https://lostark.nexus/Sharpshooter">
            <VStack>
              <Image boxSize="100px" objectFit="contain" src="/Gunner_Sharpshooter.png" />
              <Text fontSize="18px" fontWeight={"500"} textAlign="center">
                Sharpshooter
              </Text>
            </VStack>
          </Link>
        </HStack>

        {/*Assassin */}
        <HStack spacing={5}>
          <Link href="https://lostark.nexus/Shadowhunter">
            <VStack>
              <Image boxSize="100px" objectFit="contain" src="/Assassin_Shadowhunter.png" />
              <Text fontSize="18px" fontWeight={"500"} textAlign="center">
                Shadowhunter
              </Text>
            </VStack>
          </Link>

          <Link href="https://lostark.nexus/Deathblade">
            <VStack>
              <Image boxSize="100px" objectFit="contain" src="/Assassin_Deathblade.png" />
              <Text fontSize="18px" fontWeight={"500"} textAlign="center">
                Deathblade
              </Text>
            </VStack>
          </Link>

          <Link href="https://lostark.nexus/Reaper">
            <VStack>
              <Image boxSize="100px" objectFit="contain" src="/Assassin_Reaper.png" />
              <Text fontSize="18px" fontWeight={"500"} textAlign="center">
                Reaper
              </Text>
            </VStack>
          </Link>
        </HStack>

        {/*Specialist */}
        <HStack spacing={5}>
          <Link href="https://lostark.nexus/Artist">
            <VStack>
              <Image boxSize="100px" objectFit="contain" src="/Specialist_Artist.png" />
              <Text fontSize="18px" fontWeight={"500"} textAlign="center">
                Artist
              </Text>
            </VStack>
          </Link>

          <Link href="https://lostark.nexus/Aeromancer">
            <VStack>
              <Image boxSize="100px" objectFit="contain" src="/Specialist_Aeromancer.png" />
              <Text fontSize="18px" fontWeight={"500"} textAlign="center">
                Aeromancer
              </Text>
            </VStack>
          </Link>
        </HStack>
      </VStack>
    </Flex>
  );
}
