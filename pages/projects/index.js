import projectsData from "@components/projectsData";
import styles from "@styles/Lists.module.css";
import { Box, Heading } from "@chakra-ui/react";
import Link from "next/link";

function RenderProjects(props) {
    return (
        <ul className={styles.list}>
            <li>
                {props.projectPage && (
                    <Link href={props.projectPage}>{props.title}</Link>
                )}
                {" by "}
                {props.auth}
                {props.auth2 && (
                    <>
                        {" & "}
                        {props.auth2}
                    </>
                )}
            </li>
        </ul>
    )
}

export default function ProjectsPage() {
    return (
        <Box>
            <Box className={styles.divider}>
                <Heading size="lg">Projects</Heading>
            </Box>
            <Box className={styles.diagonalBox}>
                <Box className={styles.content}>
                    <Box className={styles.border}>
                        {projectsData.map((entry) => {
                            const uniqueKey = `${entry.title}-${entry.auth}`;
                            return (
                                <RenderProjects 
                                    key={uniqueKey}
                                    title={entry.title}
                                    projectPage={entry.projectPage}
                                    auth={entry.auth}
                                    auth2={entry.auth2}
                                />
                            );
                        })}
                    </Box>
                </Box>
            </Box>
        </Box>
    )
}
