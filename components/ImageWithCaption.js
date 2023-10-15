import { Box, Text, Image } from "@chakra-ui/react";
import Link from "next/link";

export default function ImageWithCaption({ src, alt, caption, link }) {
  return (
    <Box display="inline-block" textAlign="center" pl="2rem" pt="4rem" maxW="600px">
      <Image src={src} alt={alt} />
      {link ? (
        <Link href={link}>
          <Text fontSize="sm" color="gray.500" mt={2} cursor="pointer">
            {caption}
          </Text>
        </Link>
      ) : (
        <Text fontSize="sm" color="gray.500" mt={2}>
          {caption}
        </Text>
      )}
    </Box>
  );
}