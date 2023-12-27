// pages/publishers.js

import PublisherCard from '@components/PublisherCard';

const publishersData = [
    {
        name: "Ↄalamari Arɔhive, Ink.",
        email: "submission@calamaripress.com",
        twitter: "CalamariArchive",
        description: `Calamari Archive is a repository of literature, art and music. Since 2002, Calamari Archive has quietly published 75+ book and album objects (including *Sleepingfish* magazine and the acquired *3rd bed* imprint). Some of these have been first books by emerging writers such as Brandon Hobson, Miranda Mellis, Robert Lopez, Blake Butler and Chiara Barzini, while others have been resurrected reprints of out-of-print cult classics by established authors such as David Ohle, Gary Lutz, Stanley Crawford and Scott Bradfield.

        Calamari Archive does not publish copyrighted works, and encourages posthumanistic and anon/pseudonymous works, with an emphasis more on the art itself than on the humans making it.`
    },
    {
        name: "gnOme books",
        email: "gnOmebooks@gmail.com",
        twitter: "gnOmebooks",
        facebook: "Gnome-Books-100783536763101/",
        tumblr: "https://torpekonyvek.tumblr.com/",
        description: `gnOme is a secret press specializing in the publication of anonymous, pseudepigraphical, and apocryphal works from the past, present, and future.

        gnOme is acephalic. Profits from print sales support the authors.

        For inquiries and submissions use the email form above. No need to identify yourself.`
    },
    {
        name: "HWORDE",
        email: "hworde@gmail.com",
        description: `HWORDE, as well as their books, such as, *Bergmetal: Oro-Emblems of the Musical Beyond* and *Hemisphere Eleven*, can be found on the gnOme books site, while their site is marked as private.

        In their own rant-like description: HWORDE is a brief incantatory house of the opus, its salient bidder openly buries and consecrates the authorial regime of identity with the recess of inauthentic compositional processes and exhumatory reformation ordered towards the sonic and linguistical disintegration of discourse. `
    },
    {
        name: "VAST ABRUPT",
        email: "vastabrupt@gmail.com",
        twitter: "vastabrupt",
        facebook: "vastabrupt/",
        description: `Vast Abrupt is an online publisher. Although they are themselves anonymous they will accept works by both known and anonymous authors as well as translations.

        They focus on works ranging from the examination of temporal anomalies, the occult, myth, madness, treachery, and betrayal to their perverse intersections with modernity, capital, geopolitics, human history and geotrauma.
        
        Read our interview with Vast Abrupt {link|https://www.guerrillaconcepts.com/chamber-iv|**here**}.`
    }
];

export default function Publishers() {
    return (
        <div>
            {publishersData.map((publisher, index) => (
                <PublisherCard key={index} publisher={publisher} />
            ))}
        </div>
    );
}
