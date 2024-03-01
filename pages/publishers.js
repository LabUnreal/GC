// pages/publishers.js

import { Box, Divider, Text } from '@chakra-ui/react';
import PublisherCard from '@components/PublisherCard';

const publishersData = [
    {
        type: "anonymous",
        name: "Ↄalamari Arɔhive, Ink.",
        site: "https://www.calamaripress.com/submit.htm",
        email: "submission@calamaripress.com",
        twitter: "CalamariArchive",
        description: `Calamari Archive is a repository of literature, art and music. Since 2002, Calamari Archive has quietly published 75+ book and album objects (including *Sleepingfish* magazine and the acquired *3rd bed* imprint). Some of these have been first books by emerging writers such as Brandon Hobson, Miranda Mellis, Robert Lopez, Blake Butler and Chiara Barzini, while others have been resurrected reprints of out-of-print cult classics by established authors such as David Ohle, Gary Lutz, Stanley Crawford and Scott Bradfield.

        Calamari Archive does not publish copyrighted works, and encourages posthumanistic and anon/pseudonymous works, with an emphasis more on the art itself than on the humans making it.`
    },
    {
        type: "anonymous",
        name: "gnOme books",
        site: "https://gnomebooks.wordpress.com/",
        email: "gnOmebooks@gmail.com",
        twitter: "gnOmebooks",
        facebook: "Gnome-Books-100783536763101/",
        tumblr: "https://torpekonyvek.tumblr.com/",
        description: `gnOme is a secret press specializing in the publication of anonymous, pseudepigraphical, and apocryphal works from the past, present, and future.

        gnOme is acephalic. Profits from print sales support the authors.

        For inquiries and submissions use the email form above. No need to identify yourself.`
    },
    {
        type: "anonymous",
        name: "HWORDE",
        site: "https://gnomebooks.wordpress.com/hworde/",
        email: "hworde@gmail.com",
        description: `HWORDE, as well as their books, such as, *Bergmetal: Oro-Emblems of the Musical Beyond* and *Hemisphere Eleven*, can be found on the gnOme books site, while their site is marked as private.

        In their own rant-like description: HWORDE is a brief incantatory house of the opus, its salient bidder openly buries and consecrates the authorial regime of identity with the recess of inauthentic compositional processes and exhumatory reformation ordered towards the sonic and linguistical disintegration of discourse. `
    },
    {
        type: "anonymous",
        name: "VAST ABRUPT",
        site: "https://vastabrupt.com/",
        email: "vastabrupt@gmail.com",
        twitter: "vastabrupt",
        facebook: "vastabrupt/",
        description: `Vast Abrupt is an online publisher. Although they are themselves anonymous they will accept works by both known and anonymous authors as well as translations.

        They focus on works ranging from the examination of temporal anomalies, the occult, myth, madness, treachery, and betrayal to their perverse intersections with modernity, capital, geopolitics, human history and geotrauma.
        
        Read our interview with Vast Abrupt {link|/projects/anonymous-sessions/chamber-iv|**here**}.`
    },
    // {
    //     type: "anonymous",
    //     name: "The Anonymous Publishing House",
    //     site: "https://www.anonymouspublishinghouse.com/",
    //     email: "info@anonymouspublishinghouse.com",
    //     twitter: "anonpubhouse",
    //     facebook: "anonymouspublishinghouse",
    //     description: "Nestled in the heart of controversy, The Anonymous Publishing House emerges as a bastion for the unspoken and the provocative. With its roots spreading from New York to London and Sydney, this publisher has dedicated nearly seven years to curating a collection of works that challenge the status quo. Through a blend of social media advocacy and traditional print, it champions the cause of free thought across the political divide, ensuring that every story, no matter how contentious, finds its way to the public eye. In a world where the author's identity can often overshadow content, The Anonymous Publishing House stands firm in its belief that the message is what truly matters, fostering a sanctuary for critical thinking and, who knows, perhaps even mad expression."
    // },

    // Other Publishers
    {
        type: "other",
        name: "Les Figues Press",
        site: "https://punctumbooks.com/imprints/les-figues/",
        email: "info@punctumbooks.com",
        twitter: "punctum_books",
        description: 'An independent, nonprofit publisher based in Los Angeles, Les Figues Press publishes innovative literary work, often focusing on experimental poetry, prose, and visual art. Les Figues Press supports works that push the boundaries of form, and while they do not exclusively publish anonymous works, their commitment to avant-garde literature aligns with the ethos of our anonymous selection. They are now part of Punctum Books.'
    },
    {
        type: "other",
        name: "Anomie Publishing",
        site: "https://www.anomie-publishing.com/",
        email: "info@anomie-publishing.com",
        twitter: "AnomiePub",
        description: "Anomie publishes contemporary art and artists' books, including monographs, artists’ books, critical texts, and more. While focusing more on the visual arts, their approach to publishing and support for artists' voices can sometimes intersect with the interests of those looking for publishers of anonymous or pseudonymous literature."
    },
];

export default function Publishers() {
    let isOtherPublisherHeaderRendered = false; // Flag to check if the "Other Publishers" heading has been rendered

    return (
        <Box>
            {publishersData.map((publisher, index) => {
                // Check if we're at the first "other" publisher and if the header has not been rendered yet
                if (publisher.type === "other" && !isOtherPublisherHeaderRendered) {
                    isOtherPublisherHeaderRendered = true; // Set the flag to true
                    return (
                        <Box 
                            key={index} 
                            pt={20}
                        >
                            <Box pl={{ base: "1rem", md: "5rem", lg: "5rem" }} maxW="600px">
                                <Divider />
                            </Box>
                            <Text 
                                pl={{ base: "1rem", md: "5rem", lg: "5rem" }}
                                fontSize="2xl" 
                                fontWeight="hairline"
                                fontStyle="italic"
                            >
                            Other Publishers
                            </Text>
                            <PublisherCard publisher={publisher} />
                        </Box>
                    );
                } else {
                    return <PublisherCard key={index} publisher={publisher} />;
                }
            })}
        </Box>
    );
}
