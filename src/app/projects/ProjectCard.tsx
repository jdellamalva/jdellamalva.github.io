import styles from "./ProjectCard.module.css";

export interface Project {
    id: number;
    title: string;
    description: string;
    url?: string;
}

export default function ProjectCard({ title, description, url }: Project) {
    return (
        <article className={styles.card}>
            <h2 className={styles.title}>{title}</h2>
            <p className={styles.description}>{description}</p>
            {url && <a className={styles.link} href={url}>View source on GitHub</a>}
        </article>
    );
}
