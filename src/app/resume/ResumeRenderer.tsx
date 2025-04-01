"use client";

import { useEffect, useState } from "react";

import styles from "./Resume.module.css";

import TitleBar from "./TitleBar/TitleBar";
import Experience from "./Experience/Experience";

interface ResumeProps {
    name: string;
    headline: string;
    location: string;
    email: string;
    phone: string;
    website: string;
    summary: string;
    experience: ExperienceEntry[];
}

interface ExperienceEntry {
    id: string;
    category: string;
    title: string;
    employer: string;
    location: string;
    start: string;
    end: string;
    bulletPoints: BulletPoint[];
}

interface BulletPoint {
    text: string;
    highlights: string[];
}

export default function ResumeRenderer(resume: ResumeProps) {
    const [currentIndex, setCurrentIndex] = useState(0);
    const [fade, setFade] = useState(false);
    const [experienceFade, setExperienceFade] = useState(true);

    useEffect(() => {
        setTimeout(() => setFade(true), 25);
    }, []);

    const handleClick = (index: number) => {
        if (index === currentIndex) return;

        setExperienceFade(false);

        setTimeout(() => {
            setCurrentIndex(index);
            setExperienceFade(true);
        }, 300);
    };

    useEffect(() => {
        const handleKeyPress = (event: KeyboardEvent) => {
            if (event.key === "d" || event.key === "ArrowRight") {
                handleClick((currentIndex + 1) % resume.experience.length);
            } else if (event.key === "a" || event.key === "ArrowLeft") {
                handleClick(
                    (currentIndex - 1 + resume.experience.length) %
                        resume.experience.length
                );
            }
        };

        let touchStartX: number;
        let touchEndX: number;

        const handleTouchStart = (event: TouchEvent) => {
            touchStartX = event.touches[0].clientX;
        };

        const handleTouchEnd = (event: TouchEvent) => {
            touchEndX = event.changedTouches[0].clientX;
            handleSwipe();
        };

        const handleSwipe = () => {
            const swipeThreshold = 50;
            if (touchStartX - touchEndX > swipeThreshold) {
                handleClick((currentIndex + 1) % resume.experience.length);
            } else if (touchEndX - touchStartX > swipeThreshold) {
                handleClick(
                    (currentIndex - 1 + resume.experience.length) %
                        resume.experience.length
                );
            }
        };

        window.addEventListener("keydown", handleKeyPress);
        window.addEventListener("touchstart", handleTouchStart);
        window.addEventListener("touchend", handleTouchEnd);

        return () => {
            window.removeEventListener("keydown", handleKeyPress);
            window.removeEventListener("touchstart", handleTouchStart);
            window.removeEventListener("touchend", handleTouchEnd);
        };
    }, [currentIndex, handleClick, resume.experience.length]);

    return (
        <div className={styles.container}>
            <div className={`${styles.resume} ${fade ? "fadeIn" : "fadeOut"}`}>
                <TitleBar
                    name={resume.name}
                    headline={resume.headline}
                    location={resume.location}
                    email={resume.email}
                    phone={resume.phone}
                    website={resume.website}
                />
                <div className={styles.resumeNav}>
                    {resume.experience.map((_, i) => (
                        <div
                            key={i}
                            className={`${styles.resumeItem} ${
                                i === currentIndex ? styles.active : ""
                            }`}
                            onClick={() => handleClick(i)}
                        />
                    ))}
                </div>
                <div
                    className={`${styles.experienceContainer} ${
                        experienceFade ? "fadeIn" : "fadeOut"
                    }`}>
                    <Experience data={resume.experience[currentIndex]} />
                </div>
            </div>
        </div>
    );
}
