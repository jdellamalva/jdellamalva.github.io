"use client";

import { useState, useEffect } from "react";
import ProjectCard from "./ProjectCard";
import type { Project } from "./ProjectCard";
import styles from "./ProjectGrid.module.css";

export default function ProjectGrid({ projects }: { projects: Project[] }) {
    const [selectedProject, setSelectedProject] = useState<number | null>(null);
    const [fade, setFade] = useState(false);

    useEffect(() => {
        setFade(true);
    }, []);

    const handleCardClick = (id: number) => {
        setSelectedProject(selectedProject === id ? null : id);
    };

    return (
        <div
            className={`${styles.grid} ${
                fade ? styles.fadeIn : styles.fadeOut
            } ${selectedProject !== null ? styles.focusMode : ""}`}>
            {projects.map((project) => (
                <div
                    key={project.id}
                    className={`${styles.gridItem} ${
                        selectedProject === project.id ? styles.selected : ""
                    }`}
                    //   onClick={() => handleCardClick(project.id)}
                >
                    <ProjectCard {...project} />
                </div>
            ))}
        </div>
    );
}
