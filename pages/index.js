import { Grid, GridItem, Box, chakra } from "@chakra-ui/react";
import BearingScale from '../components/BearingScale'
import SignIn from '../components/SignIn'
import { motion, useAnimation } from "framer-motion";
import { useEffect } from "react";

// Create a motion component using chakra
const MotionText = chakra(motion.div);

export default function Home() {
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
    <Grid templateColumns='repeat(5, 1fr)' gap={2}>
      <GridItem 
        colSpan={{ base: 5, md: 3, lg: 2 }}
        pt="8rem"
      >
        <MotionText initial={{ x: "40%", opacity: 0 }} animate={controls}>
          Guerrilla Concepts is a workshop for collaborative projects between various anonymous/pseudonymous authors and underground literary circles. Authors & artists with an idea for a joint project may write to us through the contact page or DM via Twitter.
        </MotionText>
      </GridItem>
      <GridItem colStart={{ lg: 4 }} colEnd={{ lg: 6 }} display={{ base: "none", lg: "block" }}>
        <BearingScale />
        <SignIn />
      </GridItem>
    </Grid>
  )
}

