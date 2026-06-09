# Ipa Sideload

A safety-first static directory for legit iOS sideloading tools, IPA installers, signing options, and official download links.

Live site: https://newbbd.github.io/Ipa-Sideload/

## What this is

Ipa Sideload helps users find safer iOS sideloading resources without relying on random mirrors, Telegram links, or sketchy certificate drops.

The site is built with plain HTML, CSS, and JavaScript so it can run for free on GitHub Pages.

## Current features

- Clean landing page
- Searchable tool directory
- Tool type filtering
- Safety rules section
- Signing options guide section
- GitHub Pages deployment workflow

## Safety rules

This project should stay clean and useful.

Do not add:

- Pirated IPAs
- Paid app cracks
- Leaked certificates
- Random P12 files
- Enterprise certificate drops
- Malware, spyware, or suspicious profiles
- Links that hide the real source

Prefer:

- Official websites
- Verified GitHub repositories
- Apple developer documentation
- Clear risk notes
- Manual review before adding new tools

## Project structure

```txt
.
├── index.html
├── styles.css
├── script.js
├── .nojekyll
└── .github/workflows/pages.yml
```

## How to edit tools

Tool cards are currently stored in `script.js` inside the `tools` array.

Example:

```js
{
  name: "AltStore",
  type: "installer",
  risk: "safe",
  summary: "A popular sideloading app store with official downloads and clear setup docs.",
  tags: ["iOS", "macOS", "Windows", "Apple ID", "Refresh required"],
  url: "https://altstore.io/"
}
```

## GitHub Pages setup

This repo includes a GitHub Actions workflow for Pages deployment.

If the live site does not load yet, go to:

`Settings > Pages > Build and deployment > Source`

Then select:

`GitHub Actions`

After that, push to `main` or run the workflow manually.

## Roadmap

- Move tool data into a separate JSON file
- Add trust score labels
- Add last checked dates
- Add region support notes
- Add a submission issue template
- Add official source verification checklist

## Disclaimer

Ipa Sideload is an informational directory. Always verify official links before installing anything on an iOS device.
