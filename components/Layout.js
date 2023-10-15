import Head from "next/head";
import { Box, Flex, IconButton, useColorMode } from "@chakra-ui/react";
import { SunIcon, MoonIcon } from "@chakra-ui/icons";

export default function Layout({ children }) {
  const { colorMode, toggleColorMode } = useColorMode();

  return (
    <Box w={["100%", "100%", "90%", "85%"]} mx="auto">
        <Head>
            <title>Guerrilla Concepts</title>
            <meta name="description" content="Anonymous Literature" />
            <link rel="icon" href="/images/favicon.png" />
        </Head>
        <Flex justifyContent="flex-end" position="sticky" top={4}>
            <IconButton
            aria-label="Toggle Dark Mode"
            icon={colorMode === "light" ? <MoonIcon /> : <SunIcon />}
            onClick={toggleColorMode}
            />
        </Flex>
        
        {/* Children refers to any elements wrapped by this Layout */}
        {children}
    </Box>
  );
}