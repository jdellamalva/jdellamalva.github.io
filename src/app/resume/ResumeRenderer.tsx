"use client";

import { useRef, useState, type KeyboardEvent, type TouchEvent } from "react";
import styles from "./Resume.module.css";
import TitleBar from "./TitleBar";
import type { TitleBarProps } from "./TitleBar";
import Experience from "./Experience";
import type { ExperienceProps } from "./Experience";

type ResumeProps = TitleBarProps & {
    summary: string;
    experience: ExperienceProps[];
};

export default function ResumeRenderer(resume: ResumeProps) {
    const [currentIndex, setCurrentIndex] = useState(0);
    const touchStart = useRef<{ x: number; y: number } | null>(null);
    const entry = resume.experience[currentIndex];

    const handleNavigationKey = (event: KeyboardEvent<HTMLElement>) => {
        if (event.altKey || event.ctrlKey || event.metaKey || event.shiftKey) return;
        const buttons = Array.from(event.currentTarget.querySelectorAll("button"));
        const focusedIndex = buttons.indexOf(event.target as HTMLButtonElement);
        if (focusedIndex < 0) return;
        let nextIndex: number;
        switch (event.key) {
            case "ArrowRight": nextIndex = (focusedIndex + 1) % buttons.length; break;
            case "ArrowLeft": nextIndex = (focusedIndex - 1 + buttons.length) % buttons.length; break;
            case "Home": nextIndex = 0; break;
            case "End": nextIndex = buttons.length - 1; break;
            default: return;
        }
        event.preventDefault();
        setCurrentIndex(nextIndex);
        buttons[nextIndex].focus();
    };

    const handleTouchStart = (event: TouchEvent<HTMLElement>) => {
        if (event.touches.length !== 1) {
            touchStart.current = null;
            return;
        }
        touchStart.current = { x: event.touches[0].clientX, y: event.touches[0].clientY };
    };

    const handleTouchEnd = (event: TouchEvent<HTMLElement>) => {
        const start = touchStart.current;
        touchStart.current = null;
        if (!start || event.touches.length) return;
        const dx = event.changedTouches[0].clientX - start.x;
        const dy = event.changedTouches[0].clientY - start.y;
        if (Math.abs(dx) < 50 || Math.abs(dx) <= Math.abs(dy)) return;
        setCurrentIndex(index => (index + (dx < 0 ? 1 : -1) + resume.experience.length) % resume.experience.length);
    };

    return (
        <main id="main-content" className={styles.container} tabIndex={-1}>
            <div className={styles.resume}>
                <TitleBar {...resume} />
                <nav className={styles.resumeNav} aria-label="Work experience" onKeyDown={handleNavigationKey}>
                    {resume.experience.map((experience, i) => (
                        <button key={experience.id} type="button"
                            className={`${styles.resumeItem} ${i === currentIndex ? styles.active : ""}`}
                            aria-label={`${experience.title} at ${experience.employer}`}
                            aria-pressed={i === currentIndex}
                            aria-controls="experience-panel"
                            title={`${experience.title} at ${experience.employer}`}
                            onClick={() => setCurrentIndex(i)} />
                    ))}
                </nav>
                {entry && (
                    <section id="experience-panel" className={styles.experienceContainer}
                        aria-label={`${entry.title} at ${entry.employer}`}
                        onTouchStart={handleTouchStart} onTouchEnd={handleTouchEnd}
                        onTouchCancel={() => { touchStart.current = null; }}>
                        <Experience key={entry.id} data={entry} />
                    </section>
                )}
            </div>
        </main>
    );
}
