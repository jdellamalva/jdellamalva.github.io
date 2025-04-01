export async function getResume() {
    const baseUrl =
        process.env.NODE_ENV === "development"
            ? "http://localhost:3000"
            : process.env.NEXT_PUBLIC_BASE_URL;

    const res = await fetch(`${baseUrl}/resume.json`);
    if (!res.ok) throw new Error("Failed to fetch resume");

    const resume = await res.json();

    return resume;
}
