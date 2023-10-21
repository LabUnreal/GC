import { Box, Center, Text, Heading, Image } from '@chakra-ui/react'
import { motion } from 'framer-motion'

const MotionBox = motion(Box)

export default function OGPage() {

    const bearingBottom = {
        initial: { opacity: 1 },
        hover: { opacity: 0 }
    }

    const bearingTop = {
        initial: { opacity: 0 },
        hover: { opacity: 1 },
        tap: { opacity: 0 }
    }

    const bearingLeft = {
        initial: { opacity: 0  },
        tap: { opacity: 1 }
    }

  return (
    <Box align="center">
        <Heading size="xl" pb={4}>Ontological Game</Heading>
        <Text fontSize="larger" pb={10}>Hack Reality</Text>
        <MotionBox initial="initial" whileHover="hover" whileTap="tap">
            <Center>
            <MotionBox initial="initial" whileHover={{ rotate: 180 }} whileTap={{ rotate: -270 }}
            >
                <Image src="/images/mechanic_minotaur.png" w={350} alt="Mechanic Minotaur" />
            </MotionBox>
            </Center>
        </MotionBox>
        <Text pt={6} fontSize="large">A game of ontological crossings</Text>
    </Box>
  )
}
