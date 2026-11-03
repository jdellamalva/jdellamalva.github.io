# Repository portfolio

Live site: [jdellamalva.github.io](https://jdellamalva.github.io).

Built with Next.js, TypeScript, and CSS Modules. The homepage and `/projects/`
show the same manually curated software projects. Content lives in
`src/lib/data/projects.json`.

## Project content

Each card has an ID, title, description, and explicit `sourceVisibility` of
`public` or `private`. Public projects may include a GitHub source `url`.
Private-source projects display a label and must omit the URL. Include only
information intentionally selected for public sharing. No GitHub API access or
private repository discovery is used during builds or in the browser.

## Development

```sh
npm ci
npm run dev
```

## Validation and deployment

```sh
npm run lint
npm run typecheck
npm run build
npm run verify:portfolio
python3 -m http.server 4173 --directory out
```

The build exports a static site to `out/`. Start from clean build output, then
preview that output to verify the same files GitHub Pages serves. The verification
command checks project visibility, rendered cards, and absence of removed routes.
Motion follows the visitor's reduced-motion preference.

Pull requests run validation. Pushing to `main` validates and publishes `out/`
to the `gh-pages` branch through GitHub Actions. Publishing replaces generated
files so obsolete pages are not retained.

## Rollback

Prepare and validate a corrective commit on `main`, then push it to republish.
Before reverting older changes, check that the result still meets the current
public-content boundaries. Git history is preserved.

The original April 2025 version is also preserved at
`backup/before-portfolio-fixes-2026-10-25` (commit `cfe4955`).
