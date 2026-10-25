import type { PropsWithChildren } from "react";
import styles from "./ScrollContainer.module.css";

export default function ScrollContainer({
    children,
    className = "",
}: PropsWithChildren<{ className?: string }>) {
    return <div className={`${styles.scrollable} ${className}`}>{children}</div>;
}
