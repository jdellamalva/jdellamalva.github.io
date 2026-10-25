# Joseph D. Della Malva's portfolio

Live site: [jdellamalva.github.io](https://jdellamalva.github.io).

Built with Next.js, TypeScript, and CSS Modules. Content lives in
`src/lib/data/resume.json` and `src/lib/data/projects.json`. Project cards can
include an optional `url` linking to a public repository or demo.

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
python3 -m http.server 4173 --directory out
```

The build exports a static site to `out/`. Preview that output to verify the same
files GitHub Pages serves. The résumé selectors support Tab, Enter/Space, arrow
keys, Home, and End. Horizontal swipes change jobs; vertical gestures scroll.
Motion follows the visitor's reduced-motion preference.

Pull requests run validation. Pushing to `main` validates and publishes `out/`
to the `gh-pages` branch through GitHub Actions.

## Rollback

Revert the published change's commit on `main` and push the revert. The same
workflow republishes the previous source without rewriting Git history.

The original April 2025 version is also preserved at
`backup/before-portfolio-fixes-2026-10-25` (commit `cfe4955`).
