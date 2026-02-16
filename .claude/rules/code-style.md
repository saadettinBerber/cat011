---
paths:
  - "src/**/*.html"
  - "src/**/*.css"
  - "src/**/*.js"
---

# Code Style Rules

## General

- Clean Code principles: single responsibility, meaningful names, small functions
- No unnecessary comments — code should be self-documenting
- DRY (Don't Repeat Yourself) — extract shared patterns into reusable components
- Maximum line length: 100 characters (soft limit)

## HTML

- Semantic HTML5 elements: `<header>`, `<nav>`, `<main>`, `<section>`, `<article>`, `<footer>`
- Accessibility: ARIA labels, alt text, keyboard navigation support
- No inline styles — all styling goes to CSS files
- No inline scripts — all JS goes to JS files
- Bilingual text pattern:
  ```html
  <p>
    <span data-i18n-en>English text here</span>
    <span data-i18n-tr>Turkce metin burada</span>
  </p>
  ```

## CSS

- BEM naming: `.block__element--modifier`
- CSS custom properties for all theme values (colors, fonts, spacing)
- Mobile-first responsive design
- Dark/light theme via `[data-theme="dark"]` / `[data-theme="light"]`
- No `!important` unless absolutely necessary
- Group properties: positioning → display → box model → typography → visual

## JavaScript

- ES6+ modules with `import`/`export`
- Pure functions where possible — no side effects
- No global variables — use module scope
- Event delegation over individual event listeners
- Descriptive function names: `toggleLanguage()`, `renderBitDiagram()`, `decodHexExample()`
- Error handling at boundaries only

## File Organization

- One HTML page per data item
- Shared CSS in `src/css/style.css`
- Shared JS modules in `src/js/`
- Each file has a single, clear responsibility
