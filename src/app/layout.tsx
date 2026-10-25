import type { Metadata } from "next";
import "./globals.css";
import NavBar from "@/components/NavBar";

export const metadata: Metadata = {
    title: "jdellamalva",
    description: "Joseph D. Della Malva's portfolio",
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
