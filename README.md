# portfolio

My personal portfolio: a minimalist single page (about, projects, contact) in English and Spanish, plus an
interactive Linux-style terminal to browse the same content with `ls`, `cd`, `cat` and friends.

**Live:** https://mvrtin64.github.io/portfolio

## Stack

React 19 · TypeScript · Vite · Emotion · Motion · Vitest

## How it works

- `src/content.ts` is the single source of truth. The page sections and the terminal's virtual file system are
  both built from it, so a project is added in one place.
- `src/terminal/commands.ts` is the terminal itself, written as pure functions: a command goes in, output lines
  and an optional effect (open a link, scroll to a section, switch language) come out. The React component only
  renders lines and applies effects, which keeps the logic easy to test.
- Everything runs in the browser, so the site is fully static.

Terminal commands: `help`, `ls`, `cd`, `cat`, `pwd`, `whoami`, `open`, `goto`, `lang`, `clear`, `history`,
`echo`, `date`. Tab autocompletes and ↑/↓ go through the history.

## Development

```bash
npm install
npm run dev     # local server
npm test        # terminal tests
npm run lint
npm run build
```

Every push to `master` is linted, tested, built and deployed to GitHub Pages by
[`.github/workflows/deploy.yml`](.github/workflows/deploy.yml).
