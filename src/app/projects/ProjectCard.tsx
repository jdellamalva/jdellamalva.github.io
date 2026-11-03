import styles from "./ProjectCard.module.css";

export interface Project {
    id: number;
    title: string;
    description: string;
    sourceVisibility: "public" | "private";
    url?: string;
}

export default function ProjectCard({ title, description, sourceVisibility, url }: Project) {
    return (
        <article className={styles.card}>
            <h2 className={styles.title}>{title}</h2>
            <p className={styles.description}>{description}</p>
            {sourceVisibility === "private" && <p className={styles.sourceStatus}>Private source</p>}
            {sourceVisibility === "public" && url && (
                <a className={styles.link} href={url}>View source on GitHub</a>
            )}
        </article>
    );
}
