export async function getResume() {
    const baseUrl =
        process.env.NODE_ENV === "development"
            ? "http://localhost:3000"
            : "https://jdellamalva.github.io";

    const res = await fetch(`${baseUrl}/resume.json`);
    if (!res.ok) throw new Error("Failed to fetch resume");

    const resume = await res.json();
    return resume;
}
