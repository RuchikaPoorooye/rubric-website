# Rubric — Website

Marketing site for **Rubric Consulting**, built with **React.js + Vite**.

> Helping our customers deliver better software, faster.

## Features

- ⚛️ **React.js** (Vite) component-based build
- 🌗 **Dark / light theme toggle** — defaults to dark, remembers your choice (`localStorage`), switchable from the navbar
- 🎨 **Brand-accurate styling** using the Rubric colour system (Graphite + Signal Red, with department impact colours)
- 🧩 **Swappable logo** kept in one folder — see `src/assets/logo/`
- 📱 Responsive layout with a mobile menu

## Getting started

```bash
npm install      # install dependencies
npm run dev      # start the dev server (http://localhost:5173)
npm run build    # production build into /dist
npm run preview  # preview the production build
```

## Project structure

```
public/
  rubric-logo.svg            # favicon / static logo
src/
  assets/logo/               # 👈 the brand mark lives here
    RubricLogo.jsx           #    theme-aware inline-SVG component
    rubric-logo.svg          #    static version
    README.md                #    how to swap in the official logo
  components/                # Navbar, Hero, About, Services, Departments,
                             # BrandStatement, Contact, Footer, ThemeToggle
  context/
    ThemeContext.jsx         # dark / light theme provider + useTheme() hook
  index.css                  # global styles + both theme token sets
  App.jsx                    # page composition
  main.jsx                   # entry point (wraps App in ThemeProvider)
```

## Updating the logo

The logo is referenced from a single component, so you only change it in one
place. Full instructions are in [`src/assets/logo/README.md`](src/assets/logo/README.md).

## Theming

Theme tokens are CSS variables defined in `src/index.css` under
`[data-theme='dark']` and `[data-theme='light']`. The active theme is set on the
`<html>` element by `src/context/ThemeContext.jsx`.

---

Content adapted from [rubric.co.za](https://rubric.co.za) and the Rubric brand guide.
