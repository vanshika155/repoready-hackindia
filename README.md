# RepoReady

RepoReady is a small, responsive checklist app that helps developers prepare a GitHub repository before sharing it with teammates, reviewers, or hackathon judges.

## Features

- Eight practical repository-readiness checks
- Live completion count and progress bar
- Checklist progress saved in the browser with `localStorage`
- Reset control
- Responsive layout for mobile and desktop
- No framework or dependency installation required

## Tech stack

- HTML
- CSS
- Vanilla JavaScript

## Run locally

1. Download or clone this repository.
2. Open `index.html` in a modern web browser.

For a local development server, you can optionally use:

```bash
python3 -m http.server 8000
```

Then visit `http://localhost:8000`.

## Project structure

```text
repoready-hackindia/
├── index.html
├── src/
│   ├── app.js
│   └── styles.css
├── .env.example
├── .gitignore
└── README.md
```

## Git workflow

Review files before staging:

```bash
git status
```

Stage and commit your work:

```bash
git add .
git status
git commit -m "Add RepoReady checklist app"
```

Push your branch:

```bash
git push -u origin main
```

If you accidentally stage a file but want to keep it on your computer:

```bash
git restore --staged path/to/file
```

If a bad commit has already been shared, prefer `git revert <commit-hash>` rather than rewriting shared history.

## Environment variables and secrets

This project does not currently require API keys. `.env.example` is included as a safe template. Never commit real `.env` files, passwords, tokens, or API keys.

## Verify before submitting

- [ ] Open `index.html` and test the checklist.
- [ ] Confirm progress changes when boxes are checked.
- [ ] Confirm progress remains after refreshing the page.
- [ ] Run `git status` and inspect files before committing.
- [ ] Add your own commits using the GitHub account required by your event.
- [ ] Make the GitHub repository public and test its URL in an incognito/private window.

## Author

Add your name and project details here before submitting to HackIndia.
