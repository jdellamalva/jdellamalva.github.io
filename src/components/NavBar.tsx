"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import styles from "./NavBar.module.css";

const links = [
    { href: "/", label: "Projects" },
];

export default function NavBar() {
    const pathname = usePathname().replace(/\/+$/, "") || "/";

    return (
        <header className={styles.container}>
            <nav className={styles.nav} aria-label="Main navigation">
                <ul>
                    {links.map(({ href, label }) => {
                        const active = pathname === href || (href === "/" && pathname === "/projects");
                        return (
                            <li key={href}>
                                <Link href={href}
                                    className={active ? styles.active : undefined}
                                    aria-current={active ? "page" : undefined}>
                                    {label}
                                </Link>
                            </li>
                        );
                    })}
                </ul>
            </nav>
        </header>
    );
}
