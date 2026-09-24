# Personal Portfolio Website

A modern, single-page portfolio for full stack developers. No build step — open `index.html` in a browser or deploy to GitHub Pages, Netlify, or Vercel.

## Quick start

1. Open `index.html` in your browser, or run a local server:
   ```bash
   npx serve .
   ```
2. Edit **`js/config.js`** with your name, bio, projects, links, and skills.

## Customize

| What to change | File |
|----------------|------|
| Name, email, social, about text | `js/config.js` → `PORTFOLIO` object |
| Projects (title, images, tags, URLs) | `js/config.js` → `projects` array |
| Skills | `js/config.js` → `skills` array |
| Colors & fonts | `css/styles.css` → `:root` variables |

### Adding a project

```js
{
  id: "my-app",
  title: "My App",
  category: "fullstack", // fullstack | frontend | backend
  description: "Short description.",
  image: "path/or/url/to/image.jpg",
  tags: ["React", "Node.js"],
  liveUrl: "https://...",
  repoUrl: "https://github.com/...",
  featured: true, // larger card on desktop
}
```

### Contact form

The form uses `mailto:` by default. For serverless handling, use [Formspree](https://formspree.io) or [Netlify Forms](https://docs.netlify.com/forms/setup/) and update the form `action` in `index.html`.

## Deploy

- **GitHub Pages**: Push repo → Settings → Pages → deploy from `main` branch root.
- **Netlify / Vercel**: Drag the folder or connect the repo; no build command needed.

## Structure

```
├── index.html
├── css/styles.css
├── js/config.js    ← your content
├── js/main.js      ← behavior (usually leave as-is)
└── README.md
```
