# Project Architecture Guide

This document explains how the **Nosy** website is structured and how its various parts work together. It is designed to help you understand the codebase, manage content, and maintain the site.

## 1. Technology Stack

The website is built using a modern, performance-focused stack:

-   **React**: The core library for building the user interface.
-   **Vite**: A super-fast build tool and development server.
-   **TypeScript**: Adds type safety to JavaScript, preventing many common bugs.
-   **Tailwind CSS**: A utility-first CSS framework for styling.
-   **Shadcn UI**: A collection of accessible, reusable components (buttons, cards, etc.) built on top of Tailwind and Radix UI.
-   **React Router**: Handles navigation between pages (SPA routing).

## 2. Folder Structure

Here is a high-level overview of the project's organization:

```
/
├── public/              # Static assets (images, favicon, robots.txt)
├── scripts/             # Build scripts (e.g., sitemap generation)
├── src/                 # Source code (where 99% of work happens)
│   ├── components/      # Reusable UI building blocks
│   ├── data/            # The website's content (Articles, Conditions)
│   ├── lib/             # Utility functions
│   ├── pages/           # Full page components (Home, About, ArticleDetail)
│   ├── App.tsx          # Main application component & Routing
│   └── main.tsx         # Entry point
├── index.html           # The main HTML file
├── package.json         # Project dependencies and scripts
└── vite.config.ts       # Configuration for Vite
```

## 3. Key Directories Explained

### `src/data/` (The Content Engine)
This is the most important folder for content management. We moved away from hardcoded text in components to a centralized data approach.

-   **`articles/`**: Contains individual TypeScript files for each article.
    -   `index.ts`: Aggregates all articles and exports helper functions (`getAllArticles`, `getArticleById`).
    -   `types.ts`: Defines the `Article` structure (title, content, tags, etc.).
-   **`conditions.ts`**: Contains the data for all medical conditions (Anosmia, Parosmia, etc.).
-   **`science101.ts`**: Stores the educational content for the Science 101 page.

**How it works**: When you add a new file to `src/data/articles/` and register it in `index.ts`, it automatically appears on the website. No need to touch the UI code.

### `src/pages/` (The Views)
These are the actual pages users see. They fetch data from `src/data/` and display it.

-   **`Index.tsx`**: The homepage.
-   **`AllArticlesPage.tsx`**: Lists all articles. It imports `getAllArticles()` to get the data.
-   **`ArticlePage.tsx`**: The detail view for a single article. It uses the URL ID to find the correct article via `getArticleById()`.
-   **`AllConditionsPage.tsx`** & **`ConditionDetailPage.tsx`**: Similar structure for conditions.

### `src/components/` (The Building Blocks)
These are small, reusable pieces of UI.

-   **`ui/`**: Contains Shadcn UI components (Button, Card, Input, etc.).
-   **`SEO.tsx`**: Manages meta tags (title, description) for search engines.
-   **`ModeToggle.tsx`**: The button that switches between Light and Dark mode.
-   **`LoadingSpinner.tsx`**: Shows a spinner while pages are loading.

## 4. How It All Connects

### The Routing Flow
1.  **User visits `/articles/1`**.
2.  **`src/App.tsx`** sees this URL and matches it to the `<ArticlePage />` component.
3.  **`src/pages/ArticlePage.tsx`** loads. It grabs the ID (`1`) from the URL.
4.  It calls `getArticleById(1)` from **`src/data/articles/index.ts`**.
5.  It receives the article data (Title, Content, Author, etc.).
6.  It renders the page using components like `<SEO />`, `<Card />`, and `<Badge />`.

### Dark Mode
-   We use a `ThemeProvider` (in `App.tsx`) that wraps the entire app.
-   It adds a `dark` class to the HTML `<html>` tag when dark mode is active.
-   Tailwind CSS sees this class and applies styles prefixed with `dark:` (e.g., `dark:bg-slate-950`).

## 5. Maintenance & Common Tasks

### Adding a New Article
1.  Create a new file in `src/data/articles/` (e.g., `6-new-topic.ts`).
2.  Copy the structure from an existing article.
3.  Fill in your content.
4.  Open `src/data/articles/index.ts`.
5.  Import your new file and add it to the `articlesData` object.
6.  **Done!** It's now live on the site.

### Updating Static Content
-   To change the "About Us" text, edit `src/pages/AboutPage.tsx`.
-   To update "Science 101" facts, edit `src/data/science101.ts`.

### Deploying
When you run `npm run build`:
1.  Vite compiles all your code into optimized JavaScript and CSS in the `dist/` folder.
2.  The `scripts/generate-sitemap.ts` runs to create a `sitemap.xml` for Google.
3.  The `dist/` folder is what gets uploaded to your web host (Netlify, Vercel, etc.).

## 6. Performance Features
-   **Code Splitting**: We use `React.lazy` to only load the code needed for the current page. If a user only visits the Home page, they don't download the code for the Contact page.
-   **PWA (Progressive Web App)**: The site can be installed on phones like a native app, thanks to `vite-plugin-pwa`.
