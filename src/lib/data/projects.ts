import type { Project } from "@/app/projects/ProjectCard";

export async function getProjects(): Promise<Project[]> {
    const baseUrl =
        process.env.NODE_ENV === "development"
            ? "http://localhost:3000"
            : "https://jdellamalva.github.io";

    const res = await fetch(`${baseUrl}/projects.json`);
    if (!res.ok) throw new Error("Failed to fetch projects");

    return res.json();
}
