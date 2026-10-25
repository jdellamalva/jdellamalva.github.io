import styles from "./Experience.module.css";
import BulletPoint from "../BulletPoint";
import type { ExperienceProps } from ".";
import ScrollContainer from "@/components/ScrollContainer";

export default function Experience({ data }: { data: ExperienceProps }) {
    return (
        <div className={styles.resumeEntry}>
            <div className={styles.titleRow}>
                <h2 className={styles.title}>{data.title}</h2>
                <div className={styles.jobInfoContainer}>
                    <p className={styles.employer}>{data.employer}</p>
                    <p className={styles.location}>{data.location}</p>
                    <p className={styles.dateContainer}>{data.start} to {data.end}</p>
                </div>
            </div>
            <div className={styles.divider} />
            <ScrollContainer>
                <ul className={styles.bulletPoints}>
                    {data.bulletPoints.map((point, index) => (
                        <BulletPoint key={`${data.id}-${index}`}
                            text={point.text} highlights={point.highlights}
                            emphasisDelay={300 + index * 50}
                            style={{ animationDelay: `${0.05 * index}s` }} />
                    ))}
                </ul>
            </ScrollContainer>
        </div>
    );
}
