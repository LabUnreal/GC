import projectsData from "@components/projectsData";
import ImageWithCaption from "@components/ImageWithCaption";
import InterviewWithX from "@components/interviews/InterviewWithX";
import { Box, Flex, Heading, Text, Divider } from "@chakra-ui/react";
import { IoReturnUpBack, IoReturnUpForwardOutline } from 'react-icons/io5';
import Link from "next/link";

export default function ChamberI() {
    const project = projectsData[0];
    const session = project.sessions[1];

    return (
        <Box 
            align="center" 
            w={{base: "100%", md: "80%", lg: "60%"}}
            m="auto" 
            pb={40}
        >
            <Flex alignItems="center" m="auto" justifyContent="center">
                <Link href="/projects/anonymous-sessions/intro"><IoReturnUpBack size="28px" /></Link>
                <Heading size="xl" pl="1rem">{session.title}</Heading>
            </Flex> 
            <Heading size="xl" pl="2rem" fontWeight={200} pt="4rem">{session.subtitle}</Heading>
            <Heading size="lg" fontStyle="italic" pl="2rem" fontWeight={200}>{session.subtitleAlt}</Heading>
            <ImageWithCaption src={session.image1} alt={session.imageAlt1} caption={session.photographer} link={session.photographerLink} />
            <Box textAlign="center" pl="2rem" pt={20}>
                <Text>
                    <b>Objects/Spaces:</b> The Garden; The Mirror; The Crack
                </Text>
                <Text pb={8}>
                    (Anguish; Asphyxiation; Burning/Drowning)
                </Text>
                <Text>
                    <b>Elements/Moods:</b> Dissimulation; Vulnerability; Seduction
                </Text>
                <Text pb={8}>
                    (Memories; Dreams; Sleep paralysis)
                </Text>
                <Text>
                    <b>Tactics/Rituals:</b> Outsider dialects; Hypnosis
                </Text>
                <Text>
                    (Echos; Chants; Spells; Curses; Counter-Revelations)
                </Text>
                <Text py={10}>*</Text>
            </Box>
            <Box textAlign="left" pl="2rem" fontStyle="italic">
                <Text pb={8}>
                    My veins are black and perfect, my veins are absolution and I am waiting for the overdose and the annunciation so I can enter in without forgiveness.
                </Text>
                <Text pb={8}>
                    I reach further and my body&apos;s slick with it, the scent of paradise ripe and rotting and precious, some sacred thing spilled out so I can taste it. I&apos;m inside it now.
                </Text>
                <Text pb={8}>
                    I break the surface and I lean in, my mouth wet, the capillaries inside you bright and desperate and now I&apos;ve got your pulse between my teeth. I think about the end of this.
                </Text>
            </Box>
            <ImageWithCaption src={session.image2} alt={session.imageAlt2} />
            <Box textAlign="left" pl="2rem">
                <Text pb={6} pt={20}>
                    To enter the vampiric asphyxiating dreamscapes of [x]&apos;s world requires the ability to open up and expose oneself to all the lacerations that the text demands. One must relearn to read here, for her counter-prophetic incantations are spoken in the irresistible hypnotic tones of countless/timeless monsters. To name them &#8211; from nymphs to sorceresses to succubi &#8211; would be to take certain risks. [x] herself says, “I stay nameless because my pseudonyms reveal too much.”
                </Text>
                <Text pb={6}>
                    This is the writing of radical vulnerability &#8211; “this was a loveletter, once” &#8211; where the nameless author morphs into space, into memory, suffusing with an atmosphere of total loss, until affliction itself becomes the creative force etching out the cavernous architecture of anguish throughout the text. Here the fates of reader and writer unfold together in a lethal dance of seduction, for they follow the same irreversible laws, the same tortuous pathways.
                </Text>
                <Text pb ={6}>
                    The warning sign, though, is at the door: “The ink here is less a means and more a threat,” [x] writes from the start. “It cuts close because the agony isn&apos;t measured in the passage but the permanence.” At the same time, only loss is permanent, the text erasing and undermining itself at every turn, in a strange, delirious stream of writing and unwriting.
                </Text>
            </Box>

            <ImageWithCaption src={session.image3} alt={session.imageAlt3} />
            <InterviewWithX />
            
            <Flex alignItems="center" pt={10}>
                <Text pr="1rem">Chamber II: Interview with The Swarm</Text><Link href="/projects/anonymous-sessions/chamber-ii"><IoReturnUpForwardOutline size="28px" /></Link>
            </Flex>
        </Box>
    )
}