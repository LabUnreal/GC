// components/PublisherCard.js

import { Flex, Box, Image, Link, Text, Heading } from '@chakra-ui/react';

// This function handles bold and italic formatting.
function formatReplacer(string) {
    const formattedElements = [];
    let lastPos = 0;

    string.replace(/(\*\*(.*?)\*\*)|(\*(.*?)\*)/g, (match, _, boldText, __, italicText, offset) => {
        if (offset > lastPos) {
            formattedElements.push(string.substring(lastPos, offset));
        }
        
        if (boldText) {
            formattedElements.push(<strong key={`bold-${boldText}`}>{boldText}</strong>);
        } else if (italicText) {
            formattedElements.push(<em key={`italic-${italicText}`}>{italicText}</em>);
        }

        lastPos = offset + match.length;
    });

    if (lastPos < string.length) {
        formattedElements.push(string.substring(lastPos));
    }

    return formattedElements.length ? formattedElements : [string];
}

// This component creates a link, and also allows for bold and italic text within the link.
function CustomLink({ url, textContent }) {
    const formattedText = formatReplacer(textContent);
    return <Link href={url} fontWeight={textContent.includes('**') ? 'bold' : 'normal'}>{formattedText}</Link>;
}

function parseText(text) {
    const elements = [];
    let lastIndex = 0;

    text.replace(/\{link\|([^|]+)\|([^}]+)\}/g, (match, url, textContent, offset) => {
        if (offset > lastIndex) {
            elements.push(text.substring(lastIndex, offset));
        }

        elements.push(<CustomLink key={offset} url={url} textContent={textContent} />);
        lastIndex = offset + match.length;
    });

    if (lastIndex < text.length) {
        elements.push(...formatReplacer(text.substring(lastIndex)));
    }

    return elements;
}

export default function PublisherCard({ publisher }) {
    return (
        <Box 
            py="2rem"
            pr={{ base: "0.5rem", md: "12rem", lg: "30rem" }}  
            pl={{ base: "1rem", md: "5rem", lg: "5rem" }} 
            // Responsive padding
        >
            <Flex
                flexDirection={["column", "row"]}  // column for small screens, row for medium and large screens
                alignItems={["flex-start", "center"]}  // center alignment for row layout
                py="1rem"
            >
                <Heading 
                    as='h3' 
                    size='lg' 
                    pr="1rem" 
                    mb={["0.5rem", "0"]} // Add margin-bottom for small screens
                > 
                    {publisher.name}
                </Heading>

                <Box display="flex">
                    
                    {publisher.email && (
                        <Box mr="1rem">
                            <Link href={`mailto:${publisher.email}`} isExternal>
                                <Image src="/images/email.png" alt="Email" boxSize="24px" />
                            </Link>
                        </Box>
                    )}
                    
                    {publisher.twitter && (
                        <Box mr="1rem">
                            <Link href={`https://twitter.com/${publisher.twitter}`} isExternal>
                                <Image src="/images/twitter.png" alt="Twitter" boxSize="24px" />
                            </Link>
                        </Box>
                    )}
                    
                    {publisher.facebook && (
                        <Box mr="1rem">
                            <Link href={`https://facebook.com/${publisher.facebook}`} isExternal>
                                <Image src="/images/facebook.png" alt="Twitter" boxSize="24px" />
                            </Link>
                        </Box>
                    )}
                    
                    {publisher.tumblr && (
                        <Box mr="1rem">
                            <Link href={publisher.tumblr} isExternal>
                                <Image src="/images/tumblr.png" alt="Tumblr" boxSize="24px" />
                            </Link>
                        </Box>
                    )}
                    
                    {publisher.wordpress && (
                        <Box mr="1rem">
                            <Link href={`https://wordpress.com/${publisher.wordpress}`} isExternal>
                                <Image src="/images/wordpress.png" alt="Wordpress" boxSize="24px" />
                            </Link>
                        </Box>
                    )}
                </Box>
            </Flex>

            <Box>
                {publisher.description.split('\n').map((line, index) => (
                    <Text key={index}>
                        {parseText(line)}
                        {index !== publisher.description.split('\n').length - 1 && <br />}
                    </Text>
                ))}
            </Box>
        </Box>
    );
}