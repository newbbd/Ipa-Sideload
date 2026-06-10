# Ipa Sideload

Static GitHub Pages site for iOS signer install pages and DNS setup links.

Live site: https://newbbd.github.io/Ipa-Sideload/

## Project structure

```txt
.
├── index.html
├── dns.html
├── esign.html
├── ksign.html
├── styles.css
├── script.js
└── .nojekyll
```

## Pages deployment

This repository is currently published from the `gh-pages` branch using GitHub Pages' branch-based deployment.

If the live site needs to be refreshed:

1. Update the static files on `main`.
2. Copy the published site files to `gh-pages`.
3. Push both branches.

The `gh-pages` branch should contain the same site files that should appear at:

`https://newbbd.github.io/Ipa-Sideload/`

## How the site is organized

- `index.html` is the landing page.
- `dns.html` contains DNS profile alternatives and manual blocklist instructions.
- `esign.html` loads the E-Sign install list.
- `ksign.html` loads the Ksign install list.
- `script.js` stores the signer data in the `installGroups` array and renders the dedicated install pages.
- `styles.css` provides the shared styling for all pages.

## Notes

- The site is plain HTML, CSS, and JavaScript.
- `.nojekyll` is included so GitHub Pages serves the files as-is.
