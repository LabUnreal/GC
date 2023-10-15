import projectsData from "../../../components/projectsData";
import styles from "../../../styles/AnonStyles/FrontPage.module.css";
import { Grid, GridItem, Box, Flex, Heading, Text, Divider } from "@chakra-ui/react";
import Link from "next/link";

export default function AnonymousSessionsPage() {
    const project = projectsData[0];  // Directly access the first item

    return (
        <Grid pt="8rem" templateColumns={{ base: "1fr", md: "3fr 2fr" }} >
            <GridItem colSpan={{ base: 1, md: 1 }} ml={{base: "none", lg: 40}}>
                <Box>
                    <Heading size="lg" fontWeight={400}>{project.title}</Heading>
                    <Box as="span" position="relative" d="inline-block">
                        <Heading 
                            size="md" 
                            fontWeight={200}
                            display="inline-block" 
                            textDecoration="underline" 
                            textUnderlineOffset="0.5rem"
                            textDecorationColor="red" 
                            textDecorationThickness="1px"
                        >
                            {project.subtitle}
                        </Heading>
                    </Box>
                </Box>
                <Box className={styles.projectAuthor}>
                    <Heading size="lg" fontWeight="hairline">By {project.auth} & {project.auth2}</Heading>
                </Box>
                <Box className={styles.description}>
                    <Text fontSize={14}>
                    <Link href={project.description.link} target="_blank" rel="noopener noreferrer">{project.description.isSup && <sup>*</sup>} {project.description.text}</Link>
                    </Text>
                </Box>
            </GridItem>
            <GridItem colSpan={{ base: 1, md: 1 }}>
                <Flex>
                    <Divider orientation="vertical" borderColor="yellow.500" h="15rem" mr="1rem" />
                    <Box>
                        <Heading size="lg" fontWeight={200} pb={4}>Sessions</Heading>
                        {project.sessions.map(session => (
                            <Text key={session.link}><Link href={session.link}>{session.title}</Link></Text>
                        ))}
                    </Box>
                </Flex>
            </GridItem>
        </Grid>
    )
}