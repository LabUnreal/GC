import projectsData from "../../../components/projectsData";
import ImageWithCaption from "../../../components/ImageWithCaption";
import { Box, Flex, Heading, Text, Divider } from "@chakra-ui/react";
import { IoReturnUpBack, IoReturnUpForwardOutline } from 'react-icons/io5';
import Link from "next/link";

export default function IntroPage() {
    const project = projectsData[0];
    const session = project.sessions[0];

    return (
        <Box align="center" w="60%" m="auto" pb={40}>
            <Flex alignItems="center" m="auto" justifyContent="center">
                <Link href="/projects/anonymous-sessions"><IoReturnUpBack size="28px" /></Link>
                <Heading size="xl" pl="1rem">{project.title}</Heading>
            </Flex> 
            <Heading size="lg" pl="2rem" fontWeight={200}>{project.subtitle}</Heading>
            <Heading size="xl" pl="2rem" fontWeight={200} pt="4rem">{session.title}</Heading>
            <ImageWithCaption src={session.image1} alt={session.imageAlt1} caption={session.photographer} link={session.photographerLink} />
            <Box textAlign="justify" pl="2rem">
                <Text pb={6} pt={20} id="anchor_two">
                    In a short essay on anonymous authorship in early twentieth century Britain, Emily Kopley suggests that the decline of anonymous writing as practiced from marginalized groups stimulated its prizing among British modernist authors as an aesthetic ideal.<a style={{color: "#5C9DCA"}} href="#anchor_one">[1]</a> But what does anonymity mean aesthetically? The surprising reluctance to allow literary aesthetics to come into proximity with the peripheral badlands even when anonymity itself was eyed as a desirable, or at least effective, literary device, implies that marginalized groups were perceived as attaching more value to the pragmatic than the aesthetic ideals of literature and art, in which case association with them would brand art as ignoble. Distanced from the base creatures swarming the wildly entwined roots of these impassable dark forests, the privileged mainstream viewed them under a clinical lens and, fearing contagion, quarantined itself from them. In marginalized spaces, then, art is seldom permitted to manifest itself as anything more than a political vessel, and therefore stigmatised for not yet having eviscerated itself to more sublime and vertiginous heights.
                </Text>
                <Text pb={6}>
                    On the other side of that fence, if indeed such puristic states can exist, stands the aesthetic warrior, completely detached from the material world, making art for art’s sake, which is to say, art that carries no consequence and, if it communicates at all, does so only on some abstract, ethereal, and innocuous level. Pure light, viz., intelligence in a state of perpetual enlightenment and autotelic contentment. Ironically, the sole reason politically obedient or gentrified art is perceived as non-political is because, finding itself within the city walls and observing all the rules of good grammar and behavior, it causes no friction. Nevertheless, it betrays its political nature as soon as it panics at the prospect of being perceived as such, for that is its own sort of political correctness. Its domestic character can be clearly observed in its ambiguous attitude towards the literary anonymous slums, whose turbulent vitality it covets, but whose ill repute it must distance itself from. It suspects this domesticity, however, and for that reason it often dissembles feigning controversy, aiming to evoke strong reactions from its audience. Its controversial guise is defined solely by the form it takes, as in many instances of shock art for example, which proclaims itself as “a way to disturb smug, complacent, and hypocritical people”, as a quick Wiki search will show. The dissimulation, then, consists precisely in the disturbance, which has even become an accepted social norm and will allow both the artist and the audience to experience a feeling of ‘living on the edge’ while at the same time affording them all the security, comfort, and warmth of the center. One accepts a slight momentary discomfort to experience the thrills that can be purchased at an amusement park. One watches a horror movie on the weekend. One pinches oneself in the arm to see if one is still alive.
                </Text>
                <Text pb ={10}>
                    Another function of these civilizational trances is the inoculation of the masses from outsider disturbances. This is achieved by hardening the audience to them, administering small doses of carefully excised and polished versions of their rabid and incomprehensible accents, smooth postcard images of toxic wastelands, little commercial apocalypses for atrophied imaginations. The outside is anonymous by default. It is apolitical, not because of a lack of secret orders and violent factions, but because of an overabundance of them. New virulent dialects and pentecostal tongues based on ever more twisted heretical eurythmics of the old ones are splintering and branching off all the time. A history of ideas in these outworlds would be insane. Their epistemological genealogies are fragmented palimpsests—illegible to any civilized history. Still, each of these corridors and alleyways has its own collection of hadiths, its own guardians and transmitters, and can be navigated by the rare few who are willing to pay the necessary blood tribute. For these gatekeepers, then, anonymity is often inadvertent, having little to do with a will to concealment. Like Nereus, the old man of the sea, or his daughter Thetis, they wish for someone to come steal their secrets. But in order to fully master their protean transformations, one must first pass through the consecutive chambers laid out in the labyrinth in front of them, each unique space demanding the strict observance of its own elemental moods, tactics, and rituals.
                </Text>
                <Divider borderTopWidth="thin" w="15rem" mb={1} />
                <Text fontSize="smaller" id="anchor_one" pb={10}>
                    <a style={{color: "#5C9DCA"}} href="#anchor_two">[1]</a> Emily Kopley, <Link style={{fontWeight: "600"}} href="https://www.erudit.org/fr/revues/memoires/2016-v7-n2-memoires02575/1036861ar/" target="_blank">‘Anon is Not Dead: Towards a History of Anonymous Authorship in Early-Twentieth-Century Britain’.</Link>
                </Text>
                <Flex alignItems="center">
                <Text pr="1rem">Chamber I: Interview with [x]</Text><Link href="/projects/anonymous-sessions/chamber-i"><IoReturnUpForwardOutline size="28px" /></Link></Flex>
            </Box>
        </Box>
    )
}