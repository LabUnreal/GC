import projectsData from "../../../components/projectsData";
import ImageWithCaption from "../../../components/ImageWithCaption";
import InterviewWithMaureCoise from "../../../components/interviews/interviewWithMaureCoise";
import { Box, Flex, Heading, Text, Divider } from "@chakra-ui/react";
import { IoReturnUpBack, IoReturnUpForwardOutline } from 'react-icons/io5';
import Link from "next/link";

export default function ChamberIII() {
    const project = projectsData[0];
    const session = project.sessions[3];

    return (
        <Box align="center" w="60%" m="auto" pb={40}>
            <Flex alignItems="center" m="auto" justifyContent="center">
                <Link href="/projects/anonymous-sessions/chamber-ii"><IoReturnUpBack size="28px" /></Link>
                <Heading size="xl" pl="1rem">{session.title}</Heading>
            </Flex> 
            <Heading size="xl" pl="2rem" fontWeight={200} pt="4rem">{session.subtitle}</Heading>
            <Heading size="lg" fontStyle="italic" pl="2rem" fontWeight={200}>{session.subtitleAlt}</Heading>
            <ImageWithCaption src={session.image1} alt={session.imageAlt1} caption={session.photographer1} link={session.photographerLink1} />
            <Box textAlign="center" pl="2rem" pt={20}>
                <Text>
                    <b>Objects/Spaces:</b> Smart Sensors; Cyberphysical Systems; Intelligent Networks
                </Text>
                <Text pb={8}>
                    (Hyperconnectivity; Words-as-Shapes)
                </Text>
                <Text>
                    <b>Elements/Moods:</b> Algorithmic; Calculative; Machinic
                </Text>
                <Text pb={8}>
                    (Tech-Age Anomie; Clouds of Biases)
                </Text>
                <Text>
                    <b>Tactics/Rituals:</b> Geocoding; Spectral Analysis; Dynamic Time Warping
                </Text>
                <Text>
                    (Algebraic Topology; Anticipatory Computing; Biohacking)
                </Text>
                <Text py={10}>*</Text>
            </Box>
            <Box textAlign="left" pl="2rem" fontStyle="italic">
                <Text pb={8}>
                    I&apos;ve come to this forest in search of the system known as aurora australis.// I&apos;ve learned that it is audible;// at least, by some definitions of the word audible.// Auroral activity is solar plasma that has been warped by Gaia&apos;s ionospheric electromagnetic activity,// and its ionized particles collude with high altitude atoms.// Stochastic movements where there may be a map,// in the light emissions, distributed,// and computational.
            </Text>
            <Text>
                &ndash; Geophilosophical Branding, p. 96
            </Text>
            </Box>
            <ImageWithCaption src={session.image2} alt={session.imageAlt2} caption={session.photographer2} link={session.photographerLink2} />
            <Box textAlign="left" pl="2rem">
                <Text pb={6} pt={20}>
                    Maure Coise is a pseudonymous xenofeminist author who administers facilitated workshops on writing and its intersections with predictive and anticipatory computing. Coise&apos;s long-poetic works, <em>Geophilosophical Branding</em> (gnOme books, 2016) and <em>Symphony in White: Songs of heroic deeds from a true winner</em> (Solar Luxuriance, 2017), sublimate the traditionally self-absorbed experience of alienation into a collectivist engagement that blends Deleuze & Guattari&apos;s philosophies with algebraic topology, tech-age anomie, gender abolition, singularity, and automation. Coise&apos;s verse carries the residues of individualist melancholy. Yet, these traces of the once-human are increasingly dissolved by an evolving xenotechnological collective—presented in cold contrast and machinic matter-of-factness.
                </Text>
                <Text pb={6}>
                Entering these rare cryptic spaces and maintaining a dialogue with their Coder could be likened to communicating with the cutting edge of sentient software, rather than the flesh and blood of human wetware: to some a hybrid, announcing the age of transhumanism; to others a <Link href="https://en.m.wikipedia.org/wiki/On_the_Origin_of_the_%22Influencing_Machine%22_in_Schizophrenia" target="_blank">schizophrenic influencing machine</Link>, giving credence to all sorts of anti-technological conspiracy theories. In the end, how one reads this encrypted space determines how one deciphers the key and therefore the next coordinates to be unlocked in the map.

                Nevertheless, here one must abandon such naïve notions as unidirectional reading. It is not just you reading Coise. Coise is also reading you.
                </Text>
            </Box>

            <ImageWithCaption src={session.image3} alt={session.imageAlt3} caption={session.photographer3} link={session.photographerLink3} />
            <InterviewWithMaureCoise />
            
            <Flex alignItems="center" pt={10}>
                <Text pr="1rem">Chamber IV: Interview with Vast Abrupt</Text><Link href="/projects/anonymous-sessions/chamber-iv"><IoReturnUpForwardOutline size="28px" /></Link>
            </Flex>
        </Box>
    )
}