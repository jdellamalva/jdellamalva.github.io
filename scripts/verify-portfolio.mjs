import assert from "node:assert/strict";
import { existsSync, readFileSync, readdirSync } from "node:fs";
import { join } from "node:path";

const projects = JSON.parse(readFileSync("src/lib/data/projects.json", "utf8"));
assert(projects.length > 0, "The portfolio must contain projects.");
assert.equal(new Set(projects.map(project => project.id)).size, projects.length, "Project IDs must be unique.");
for (const project of projects) {
    assert(project.title && project.description, "Projects need titles and descriptions.");
    assert(["public", "private"].includes(project.sourceVisibility), "Explicit source visibility is required.");
    if (project.sourceVisibility === "private") {
        assert(!project.url, "Private-source cards must not contain source URLs.");
    } else if (project.url) {
        const url = new URL(project.url);
        assert.equal(url.protocol, "https:");
        assert.equal(url.hostname, "github.com");
        assert(!url.username && !url.password, "Source URLs must not contain credentials.");
    }
}

assert(!existsSync("src/app/resume"), "The removed route must not be restored.");
assert(!existsSync("src/lib/data/resume.json"), "Personal data must not be included.");
assert(!existsSync("out/resume"), "Stale removed pages must not be exported.");

function checkExport(directory) {
    for (const entry of readdirSync(directory, { withFileTypes: true })) {
        const path = join(directory, entry.name);
        if (entry.isDirectory()) checkExport(path);
        else if (/\.(html|js|json|txt)$/.test(entry.name)) {
            const content = readFileSync(path, "utf8");
            assert(!/\/(?:resume)(?:[\/"'?#]|$)/i.test(content), `Removed route referenced in ${path}`);
        }
    }
}
checkExport("out");

for (const path of ["out/index.html", "out/projects/index.html"]) {
    const html = readFileSync(path, "utf8");
    for (const project of projects) assert(html.includes(project.title), `Project missing from ${path}`);
    assert.equal((html.match(/<article\b/g) ?? []).length, projects.length);
    const privateCount = projects.filter(project => project.sourceVisibility === "private").length;
    assert.equal((html.match(/>Private source</g) ?? []).length, privateCount);
}
console.log("Portfolio export verified: routes, source visibility, and project cards.");
