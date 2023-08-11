"use client";

import { CacheProvider } from "@chakra-ui/next-js";
import { ChakraProvider } from "@chakra-ui/react";

export default function Providers({ children }: { children: React.ReactNode }) {
  return <ChakraProvider cssVarsRoot="body">{children}</ChakraProvider>;
}
