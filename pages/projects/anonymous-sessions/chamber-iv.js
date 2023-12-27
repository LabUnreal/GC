import projectsData from "@components/projectsData";
import ImageWithCaption from "@components/ImageWithCaption";
import InterviewWithVastAbrupt from "@components/interviews/InterviewWithVastAbrupt";
import { Box, Flex, Heading, Text, Divider } from "@chakra-ui/react";
import { IoReturnUpBack, IoReturnUpForwardOutline } from 'react-icons/io5';
import Link from "next/link";

export default function ChamberIV() {
    const project = projectsData[0];
    const session = project.sessions[4];

    return (
        <Box 
            align="center" 
            w={{base: "100%", md: "80%", lg: "60%"}}
            m="auto" 
            pb={40}
        >
            <Flex alignItems="center" m="auto" justifyContent="center">
                <Link href="/projects/anonymous-sessions/chamber-iii"><IoReturnUpBack size="28px" /></Link>
                <Heading size="xl" pl="1rem">{session.title}</Heading>
            </Flex> 
            <Heading size="xl" pl="2rem" fontWeight={200} pt="4rem">{session.subtitle}</Heading>
            <Heading size="lg" fontStyle="italic" pl="2rem" fontWeight={200}>{session.subtitleAlt}</Heading>
            <ImageWithCaption src={session.image1} alt={session.imageAlt1} caption={session.photographer1} link={session.photographerLink1} />
            <Box textAlign="center" pl="2rem" pt={20}>
                <Text>
                    <b>Objects/Spaces:</b> The Maze; The Threshold; The Hourglass; The Sigil
                </Text>
                <Text pb={8}>
                    (The Archive; Maps; Schemata; Tracts)
                </Text>
                <Text>
                    <b>Elements/Moods:</b> Temporal Anomalies; Ontological Crossings; Unbound War
                </Text>
                <Text pb={8}>
                    (The Seer; The Alchemist; The Outsider)
                </Text>
                <Text>
                    <b>Tactics/Rituals:</b> Treachery; Hyperfiction; Betrayal
                </Text>
                <Text>
                    (Reality-Apocrypha; Sociolinguistic/Bio-Hacking)
                </Text>
                <Text py={10}>*</Text>
            </Box>
            <Box textAlign="left" pl="2rem" fontStyle="italic">
                <Text pb={2}>
                    If you are having doubts about our deprogramming methods, the main thing you need to keep in mind is that reality itself is a type of fiction.
                </Text>
                <Text pb={8}>
                    —Yves Cross, “Time War//Briefing for Neolemurian Agents”
                </Text>
                <Text pb={2}>
                    If history aligns with the State and its memory-order, then the nomads and minoritarians find themselves swept up in the turbulent flux of becoming, passing from the State’s homeostatic order to creative disequilibrium predicated on an anti-memory. It is clear that art plays an essential role in this forgetting. 
                </Text>
                <Text pb={8}>
                    —Edmund Berger, “Synthetic Fabrication: The Myth of the Politics-to-Come”
                </Text>
                <Text pb={2}>
                    The city presented its hidden face of indomitable stone as marauders ceaselessly violated the prairie overhead in great warbands. Long sluices through solid rock become spines of communication networks populated by chains of callers using the natural reverberating properties of the caves as a public announcement system to communicate information and coordinate tactics, lending their fast voices to the slow muttering of tectonics. By speaking with the Earth, the cave dwellers achieved an efficacy in the transmission of data that, to surface enemies, must have appeared nearly instantaneous. Hic et ubique?
                </Text>
                <Text pb={8}>
                    —KR, “Gateway to the West”
                </Text>
                <Text pb={2}>
                    The tragic voyage of transcendental time loops asymmetry infinitely back to initiation, and the subject limps through its circuitry, replaying the silence of the gods, until it learns how to betray not only their law, but its own.
                </Text>
                <Text pb={8}>
                    —Amy Ireland, “The Revolving Door and the Straight Labyrinth: An Initiation in Occult Time”
                </Text>
            </Box>
            <ImageWithCaption src={session.image2} alt={session.imageAlt2} caption={session.photographer2} link={session.photographerLink2} />
            <Box textAlign="left" pl="2rem">
                <Text pb={6} pt={20}>
                    The Vast Abrupt is an anonymous online publisher focusing on works ranging from the examination of temporal anomalies, the occult, myth, madness, treachery, and betrayal to their perverse intersections with modernity, capital, geopolitics, human history and geotrauma. These radically experimental tracts corrode and detract from any static and linear understanding not only of time, truth, and identity, but also of history, the human, and the solid earth.
                </Text>
                <Text pb={6}>
                    Even though its archives hold the most detailed field guides on navigating the treacheries of time, in resisting the repressive reterritorializing mechanisms of pure identitarian borders through its apocryphal narratives, VA’s demoniac screeds transform themselves into illegible maps, insane scribbles, enigmatic schemata, and fragmented palimpsests, frantically eroding and reordering their own conceptual corridors. Its pathways are blind. One must first lose one’s eyesight to receive the seer’s gift.
                </Text>
                <Text pb={6}>
                    And yet, further risks must be taken in order to traverse the treacherous underpasses of its hyperfictions, for as one learns, “reality itself is a type of fiction”, and here the delusions that prop up the real are dismantled at the hands of more sinister and devastating illusions. This imperceptible betrayal of the real sets the stage for an alchemical game of ontological crossings, causing a rift through which all sorts of outsider figures force their way in to lay waste to the system. And so, one is unsure whether these are the ravings of the raider or the madman, that bring the cacophonous din of unbound war.
                </Text>
            </Box>

            <ImageWithCaption src={session.image3} alt={session.imageAlt3} caption={session.photographer3} link={session.photographerLink3} />
            <InterviewWithVastAbrupt />
        </Box>
    )
}