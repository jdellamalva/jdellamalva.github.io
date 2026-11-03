import data from "./projects.json";
import type { Project } from "@/app/projects/ProjectCard";

export const projects: Project[] = data.map(project => {
    const { sourceVisibility } = project;
    if (sourceVisibility !== "public" && sourceVisibility !== "private") {
        throw new Error("Projects must explicitly declare public or private source visibility.");
    }
    if (sourceVisibility === "private" && project.url) {
        throw new Error("Private projects must not include source URLs in public data.");
    }
    return { ...project, sourceVisibility };
});
