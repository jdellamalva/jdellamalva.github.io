import type { CSSProperties } from "react";
import styles from "./BulletPoint.module.css";
import type { BulletPointProps } from ".";

export default function BulletPoint({ text, highlights, emphasisDelay = 500, style }: BulletPointProps) {
    const formattedText = text.split(/(\{\d+\})/g).map((part, i) => {
        const match = part.match(/^\{(\d+)\}$/);
        if (!match) return <span key={i}>{part}</span>;
        return (
            <span key={i} className={styles.emphasize}>
                {highlights[Number(match[1])] ?? part}
            </span>
        );
    });
    return (
        <li className={styles.bulletPoint}
            style={{ ...style, "--emphasis-delay": `${emphasisDelay}ms` } as CSSProperties}>
            {formattedText}
        </li>
    );
}
