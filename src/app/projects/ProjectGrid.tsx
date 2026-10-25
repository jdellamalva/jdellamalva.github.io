import ProjectCard from "./ProjectCard";
import type { Project } from "./ProjectCard";
import styles from "./ProjectGrid.module.css";
import ScrollContainer from "@/components/ScrollContainer";

export default function ProjectGrid({ projects }: { projects: Project[] }) {
    return (
        <ScrollContainer>
            <div className={styles.grid}>
                {projects.map(project => <ProjectCard key={project.id} {...project} />)}
            </div>
        </ScrollContainer>
    );
}
