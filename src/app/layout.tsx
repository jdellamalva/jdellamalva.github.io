import type { Metadata } from "next";
import "./globals.css";
import NavBar from "@/components/NavBar";

export const metadata: Metadata = {
    title: "jdellamalva | Projects",
    description: "Selected software projects and repositories by jdellamalva.",
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
    return (
        <html lang="en">
            <body>
                <a className="skipLink" href="#main-content">Skip to content</a>
                <NavBar />
                {children}
            </body>
        </html>
    );
}
