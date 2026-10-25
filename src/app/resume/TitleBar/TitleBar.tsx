import { FaLinkedin } from "react-icons/fa";
import styles from "./TitleBar.module.css";
import type { TitleBarProps } from ".";

export default function TitleBar({ name, headline, location, email, phone, website }: TitleBarProps) {
    return (
        <div className={styles.titleBar}>
            <div className={styles.nameContainer}>
                <h1 className={styles.name}>{name}</h1>
                <p className={styles.headline}>{headline}</p>
            </div>
            <ul className={styles.details}>
                <li className={styles.location}>{location}</li>
                <li><a href={`mailto:${email}`}>{email}</a></li>
                <li><a href={`tel:${phone.replace(/[^+\d]/g, "")}`}>{phone}</a></li>
                <li className={styles.website}>
                    <a href={website.startsWith("http") ? website : `https://${website}`}
                        target="_blank" rel="noreferrer" aria-label="LinkedIn profile (opens in a new tab)">
                        <span className={styles.websiteText}>{website}</span>
                        <FaLinkedin size={24} className={styles.websiteIcon} aria-hidden="true" />
                    </a>
                </li>
            </ul>
        </div>
    );
}
