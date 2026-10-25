import type { Metadata } from "next";
import projects from "@/lib/data/projects.json";
import styles from "./page.module.css";
import ProjectGrid from "./ProjectGrid";

export const metadata: Metadata = {
    title: "JDM | Projects",
    description: "My Projects",
};

export default function ProjectsPage() {
    return (
        <main id="main-content" className={styles.container} tabIndex={-1}>
            <h1 className={styles.title}>Projects & interests</h1>
            <ProjectGrid projects={projects} />
        </main>
    );
}
