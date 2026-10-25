"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import styles from "./NavBar.module.css";

const links = [
    { href: "/resume", label: "Resume" },
    { href: "/projects", label: "Projects" },
];

export default function NavBar() {
    const pathname = usePathname().replace(/\/+$/, "") || "/";

    return (
        <header className={styles.container}>
            <nav className={styles.nav} aria-label="Main navigation">
                <ul>
                    {links.map(({ href, label }) => (
                        <li key={href}>
                            <Link href={href}
                                className={pathname === href ? styles.active : undefined}
                                aria-current={pathname === href ? "page" : undefined}>
                                {label}
                            </Link>
                        </li>
                    ))}
                </ul>
            </nav>
        </header>
    );
}
