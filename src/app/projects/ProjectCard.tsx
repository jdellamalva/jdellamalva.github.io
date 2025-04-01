import React from "react";
import Image from "next/image";

import styles from "./ProjectCard.module.css";

export interface Project {
    id: number;
    title: string;
    description: string;
    mediaType?: "image" | "gif" | "video" | "none";
    mediaSrc?: string;
    videoUrl?: string;
    isSelected: boolean;
    onClick: () => void;
}

export default function ProjectCard(props: Project) {
    const {
        title,
        description,
        mediaType = "none",
        mediaSrc,
        videoUrl,
        isSelected,
        onClick,
    } = props;

    return (
        <div
            className={`${styles.card} ${isSelected ? styles.selected : ""} ${
                mediaType === "none" ? styles.noMedia : ""
            }`}
            onClick={onClick}>
            {mediaType !== "none" && mediaSrc && (
                <div className={styles.mediaContainer}>
                    {mediaType === "image" || mediaType === "gif" ? (
                        <Image
                            src={mediaSrc}
                            alt={title}
                            layout="fill"
                            objectFit="cover"
                        />
                    ) : mediaType === "video" && videoUrl ? (
                        <div>
                            <button
                                className={styles.videoButton}
                                onClick={() => window.open(videoUrl, "_blank")}>
                                Play Video
                            </button>
                        </div>
                    ) : null}
                </div>
            )}
            <div className={styles.caption}>
                <h3 className={styles.title}>{title}</h3>
                <p className={styles.description}>{description}</p>
            </div>
        </div>
    );
}
