import type { Metadata } from "next";
import { projects } from "@/lib/data/projects";
import styles from "./page.module.css";
import ProjectGrid from "./ProjectGrid";

export const metadata: Metadata = {
    title: "JDM | Projects",
    description: "Selected software projects, with public source links where available.",
};

export default function ProjectsPage() {
    return (
        <main id="main-content" className={styles.container} tabIndex={-1}>
            <h1 className={styles.title}>Projects</h1>
            <ProjectGrid projects={projects} />
        </main>
    );
}
