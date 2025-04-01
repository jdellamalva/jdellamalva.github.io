"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useRef, useState } from "react";

import styles from "./NavBar.module.css";

export default function NavBar() {
    const pathname = usePathname();
    const navRef = useRef<HTMLDivElement>(null);
    const [scrolled, setScrolled] = useState(false);

    useEffect(() => {
        const updateNavHeight = () => {
            if (navRef.current) {
                document.documentElement.style.setProperty(
                    "--navbar-height",
                    `${navRef.current.offsetHeight}px`
                );
            }
        };

        const observer = new ResizeObserver(updateNavHeight);
        if (navRef.current) observer.observe(navRef.current);

        return () => observer.disconnect();
    }, []);

    useEffect(() => {
        const onScroll = () => {
            setScrolled(window.scrollY > 0);
        };

        window.addEventListener("scroll", onScroll);
        return () => window.removeEventListener("scroll", onScroll);
    }, []);

    return (
        <div
            className={`${styles.container} ${
                scrolled ? styles.scrolled : ""
            }`}>
            {" "}
            <nav
                ref={navRef}
                className={`${styles.nav} ${
                    pathname === "/about" ? styles.glassEffect : ""
                }`}>
                <ul>
                    <li className={pathname === "/resume" ? styles.active : ""}>
                        <Link href="/resume">Resume</Link>
                    </li>
                    <li
                        className={
                            pathname === "/projects" ? styles.active : ""
                        }>
                        <Link href="/projects">Projects</Link>
                    </li>
                </ul>
            </nav>
        </div>
    );
}
