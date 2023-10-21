import {
    Box,
    Text,
    Flex,
    Heading,
    useDisclosure,
    Drawer,
    DrawerOverlay,
    DrawerContent,
    DrawerCloseButton,
    VStack, 
    Button
  } from "@chakra-ui/react";
  import Link from 'next/link';
  import NextLink from 'next/link';

export default function Navbar() {
    const { isOpen, onToggle, onClose } = useDisclosure();

    return (
      <Box pt={4} pb={12}>
        <Flex w="100%" h={10} alignItems={"center"} justifyContent={"space-between"}>
            <Heading as="h3" size="lg">Guerrilla Concepts</Heading>
            <Flex display={{ base: "none", md: "flex" }} spacing={4}>
                <Text ml={4}><NextLink href="/">Home</NextLink></Text>
                <Text ml={4}><NextLink href="/publishers">Publishers</NextLink></Text>
                <Text ml={4}><NextLink href="/projects">Projects</NextLink></Text>
                <Text ml={4}><NextLink href="/contact">Contact</NextLink></Text>
            </Flex>
            <Button display={{ base: "flex", md: "none" }} onClick={onToggle} mr={8}>
                ☰
            </Button>
        </Flex>
  
        <Drawer isOpen={isOpen} placement="right" onClose={onClose} size="full">
          <DrawerOverlay>
            <DrawerContent>
              <DrawerCloseButton />
              <VStack mt={40} spacing={4} align="center">
                <Link href="/" onClick={onClose}>Home</Link>
                <Link href="/publishers" onClick={onClose}>Publishers</Link>
                <Link href="/projects" onClick={onClose}>Projects</Link>
                <Link href="/contact" onClick={onClose}>Contact</Link>
              </VStack>
            </DrawerContent>
          </DrawerOverlay>
        </Drawer>
      </Box>
    );
}
  