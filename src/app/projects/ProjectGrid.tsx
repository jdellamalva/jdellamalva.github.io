"use client";

import { useEffect, useState } from "react";
import ProjectCard from "./ProjectCard";
import type { Project } from "./ProjectCard";
import styles from "./ProjectGrid.module.css";
import ScrollContainer from "@/components/ScrollContainer"

export default function ProjectGrid({ projects }: { projects: Project[] }) {
    const [fade, setFade] = useState(false);

    useEffect(() => {
        setFade(true);
    }, []);

    return (
        <ScrollContainer buffer={24}>
        <div
            className={`${styles.grid} ${
                fade ? styles.fadeIn : styles.fadeOut
            }`}>
            {projects.map((project) => (
                <div key={project.id} className={styles.gridItem}>
                    <ProjectCard {...project} />
                </div>
            ))}
        </div>
        </ScrollContainer>    );
}
