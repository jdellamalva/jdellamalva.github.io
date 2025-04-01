import { Metadata } from "next";
// import { getProjects } from "@/lib/data/projects";
import projects from "@/lib/data/projects.json";

import styles from "./page.module.css";
import ProjectGrid from "./ProjectGrid";

export const metadata: Metadata = {
    title: "JDM | Projects",
    description: "My Projects",
};

// export default async function Projects() {
//     const projects = await getProjects();
//     return (
//         <div className={styles.container}>
//             <ProjectGrid projects={projects} />
//         </div>
//     );
// }

export default function ProjectsPage() {
    return (
        <div className={styles.container}>
            <ProjectGrid projects={projects} />
        </div>
    );
}
