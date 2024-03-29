import { Box, Center, Text, Image } from '@chakra-ui/react'
import { motion } from 'framer-motion'
import BearingsData from './BearingsData'
import { useEffect, useState } from 'react';

const MotionText = motion(Text)
const MotionBox = motion(Box)

// Shuffle function using the Fisher-Yates algorithm
function shuffleArray(array) {
    let currentIndex = array.length,  randomIndex;

    // While there remain elements to shuffle...
    while (currentIndex !== 0) {

        // Pick a remaining element...
        randomIndex = Math.floor(Math.random() * currentIndex);
        currentIndex--;

        // And swap it with the current element.
        [array[currentIndex], array[randomIndex]] = [
            array[randomIndex], array[currentIndex]];
    }

    return array;
}

export default function BearingScale() {
    // Shuffle the BearingsData and select the first three unique items
    const [bearingsData, setBearingsData] = useState([]);

    useEffect(() => {
      // Parse the string from the environment variable back into an array
      const data = process.env.NEXT_PUBLIC_BEARINGS_DATA.split(',');
      setBearingsData(shuffleArray(data)); // Assuming shuffleArray is defined elsewhere
  }, []);

  // Ensure bearingsData is loaded before trying to access its items
  if (bearingsData.length < 3) return <div>Loading...</div>;

  const dataTop = bearingsData[0];
  const dataBottom = bearingsData[1];
  const dataLeft = bearingsData[2];

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
        <MotionBox initial="initial" whileHover="hover" whileTap="tap">
            
            <MotionText suppressHydrationWarning variants={bearingTop} align="center">{dataTop}</MotionText>
            
            <Center>
                <MotionText suppressHydrationWarning position="absolute" mr={430} variants={bearingLeft} align="left">{dataLeft}</MotionText>
                <MotionBox initial="initial" whileHover={{ rotate: 180 }} whileTap={{ rotate: -270 }}
                >
                    <Image src="/images/1001-b.png" w={350} alt="1001 Eye" />
                </MotionBox>
            </Center>

            <MotionText suppressHydrationWarning variants={bearingBottom} align="center">{dataBottom}</MotionText>

        </MotionBox>
    )
}