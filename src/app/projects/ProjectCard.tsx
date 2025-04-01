import React from "react";
import styles from "./ProjectCard.module.css";

export interface Project {
    id: number;
    title: string;
    description: string;
}

export default function ProjectCard({ title, description }: Project) {
    return (
        <div className={styles.card}>
            <div className={styles.caption}>
                <h3 className={styles.title}>{title}</h3>
                <p className={styles.description}>{description}</p>
            </div>
        </div>
    );
}
