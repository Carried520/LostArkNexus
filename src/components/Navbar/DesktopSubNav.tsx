import { Box, Flex, Icon, Link, Stack, Text } from "@chakra-ui/react";
import { NavItem } from "./DesktopNav";
import { ChevronRightIcon } from "@chakra-ui/icons";

export default function DesktopSubNav({ label, href, subLabel }: NavItem) {
  return (
    <Link href={href} width="50px" role={"group"} display={"block"} p={2} rounded={"md"} _hover={{ bg: "#373742" }} bg="#373742">
      <Stack direction={"row"} align={"center"}>
        <Box>
          <Text transition={"all .3s ease"} _groupHover={{ color: "#d3d3d3" }} fontWeight={500}>
            {label}
          </Text>
          <Text fontSize={"sm"}>{subLabel}</Text>
        </Box>
        <Flex
          transition={"all .3s ease"}
          transform={"translateX(-10px)"}
          opacity={0}
          _groupHover={{ opacity: "100%", transform: "translateX(0)" }}
          justify={"flex-end"}
          align={"center"}
          flex={1}
        >
          <Icon color="#d3d3d3" w={5} h={5} as={ChevronRightIcon} />
        </Flex>
      </Stack>
    </Link>
  );
}
