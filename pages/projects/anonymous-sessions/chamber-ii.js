import projectsData from "../../../components/projectsData";
import ImageWithCaption from "../../../components/ImageWithCaption";
import InterviewWithTheSwarm from "../../../components/interviews/interviewWithTheSwarm";
import { Box, Flex, Heading, Text, Divider } from "@chakra-ui/react";
import { IoReturnUpBack, IoReturnUpForwardOutline } from 'react-icons/io5';
import Link from "next/link";

export default function ChamberII() {
    const project = projectsData[0];
    const session = project.sessions[2];

    return (
        <Box 
            align="center" 
            w={{base: "100%", md: "80%", lg: "60%"}}
            m="auto" 
            pb={40}
        >
            <Flex alignItems="center" m="auto" justifyContent="center">
                <Link href="/projects/anonymous-sessions/chamber-i"><IoReturnUpBack size="28px" /></Link>
                <Heading size="xl" pl="1rem">{session.title}</Heading>
            </Flex> 
            <Heading size="xl" pl="2rem" fontWeight={200} pt="4rem">{session.subtitle}</Heading>
            <Heading size="lg" fontStyle="italic" pl="2rem" fontWeight={200}>{session.subtitleAlt}</Heading>
            <ImageWithCaption src={session.image1} alt={session.imageAlt1} caption={session.photographer} link={session.photographerLink} />
            <Box textAlign="center" pl="2rem" pt={20}>
                <Text>
                    <b>(non)Objects / (non)Spaces:</b> The Sepulcher; The Void; Xenodimensions
                </Text>
                <Text pb={8}>
                    (Bodies w/o Organs; Heads w/o Bodies; The Blade of Thought)
                </Text>
                <Text>
                    <b>Elements/Moods:</b> Cosmic Noise; Deafness; Silence
                </Text>
                <Text pb={8}>
                    (Voice-without-a-source; Pure/Mute Being; Silent Sigh)
                </Text>
                <Text>
                    <b>Tactics/Rituals:</b> Echopraxia; Hallucinations; Autoscopy, Cosmic Amnesia
                </Text>
                <Text>
                    (Intensity w/o Difference; Stasis/Repetition; Apocryphal Narration)
                </Text>
                <Text py={10}>*</Text>
            </Box>
            <Box textAlign="left" pl="2rem" fontStyle="italic">
                <Text pb={8}>
                    …so narrow is the thought, that it chops like a blade the one that thinks it. Absolute headlessness, enhanced with idealism, the pride of the beheaded head, and a sort of arcane heritage that makes every innovation a repetition of stasis. (DNS p. 10).
                </Text>
                <Text pb={8}>
                    If the body without organs speaks primeval sounds of earthly sorrows and desires, the head without body murmurs hushed words that are alien to this world. (p. 12).
                </Text>
                <Text pb={8}>
                    We invited a few severed heads to utter their litany, to tell us how they fell and which wrong words they found. (p. 12).
                </Text>
            </Box>
            <ImageWithCaption src={session.image2} alt={session.imageAlt2} />
            <Box textAlign="left" pl="2rem">
                <Text pb={6} pt={20}>
                    <em>The Depressive Noise Symposium</em> is a document of an actual secret symposium which took place at some unknown location/time in Italy; a zine-like experimental approach to theory fiction—a work which refuses categorization, aggressively and purposefully deflating its own philosophies and zeroed avant-gardisms.
                </Text>
                <Text pb={6}>
                    Its authors, known as The Syndicate, are a literary collective who scout out a readership via social media—“gifting” their dark, absurdist, zine-like book to those deemed “relative”. Nevertheless, this invitation is deceptive for this is not a welcoming thoughtspace. In proximity with the void, thoughts splinter—multiplying, amplifying, and replaying themselves ad infinitum; they turn up loud, concrete, dagger-like. Madness embodied in the form of the disembodied guest-visitor.
                </Text>
                <Text pb ={6}>
                    This is a non-dimension which one can neither easily find nor comfortably inhabit, nor even effortlessly depart from. Here inertia reigns supreme even though its architects seem to move about with great agility and deftness. Every movement in this space is a contradiction, for every outrageous or ridiculous uttering becomes law and every new echo an eternal proclamation of stasis. The architects can move while constantly uttering new arbitrary laws because they are afflicted with a certain cosmic amnesia—where the head no longer remembers the chthonic logic of the body.
                </Text>
            </Box>

            <ImageWithCaption src={session.image3} alt={session.imageAlt3} />
            <InterviewWithTheSwarm />
            
            <Flex alignItems="center" pt={10}>
                <Text pr="1rem">Chamber III: Interview with Maure Coise</Text><Link href="/projects/anonymous-sessions/chamber-iii"><IoReturnUpForwardOutline size="28px" /></Link>
            </Flex>
        </Box>
    )
}