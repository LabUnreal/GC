import { Box, Text, useToast, chakra } from "@chakra-ui/react";
import Link from 'next/link';
import { motion, useAnimation } from "framer-motion";
import { useEffect } from "react";

// Create a motion component using chakra
const MotionText = chakra(motion.div);

export default function ContactPage() {
  const controls = useAnimation();

  useEffect(() => {
    controls.start({
      x: ["40%", "0%"], // Starts in the middle and ends in its original position
      opacity: [0, 1], // Starts from 0 opacity to fully visible
      transition: {
        type: "spring",
        stiffness: 30,
        damping: 10,
      },
    });
  }, [controls]);

  return (
    <Box maxW={{ base: "600px", md: "550px", lg: "500px" }} mx="left" pt="6rem">
      <MotionText fontSize="2xl" mb={4} initial={{ x: "40%", opacity: 0 }} animate={controls}>
        Contact Us
      </MotionText>
      <MotionText initial={{ x: "40%", opacity: 0 }} animate={controls}>
        No need for names, just send us <b><Link href="mailto:Gclabprojects@gmail.com">a message</Link></b>. If you are looking to publish, you may want to contact any of the publishers provided in the publishers&apos; page. Guerrilla Concepts is not a publisher.
      </MotionText>
    </Box>
  );
}