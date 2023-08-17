"use client";
import { ChakraProvider, extendTheme } from "@chakra-ui/react";


const config = {
  initialColorMode: 'dark',
  useSystemColorMode: false,
}

// 3. extend the theme
const theme = extendTheme({ config })


export default function Providers({ children }: { children: React.ReactNode }) {
  return <ChakraProvider theme={theme} cssVarsRoot="body">{children}</ChakraProvider>;
}
