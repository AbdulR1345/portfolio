# Personal Portfolio Website

A modern, single-page portfolio for full stack developers. No build step — open `index.html` in a browser or deploy to GitHub Pages, Netlify, or Vercel.

## Quick start

1. Open `index.html` in your browser, or run a local server:
   ```bash
   npx serve .
   ```
2. Edit **`js/config.js`** with your name, bio, projects, links, and skills.

## Customize

| What to change                       | File                                 |
| ------------------------------------ | ------------------------------------ |
| Name, email, social, about text      | `js/config.js` → `PORTFOLIO` object  |
| Projects (title, images, tags, URLs) | `js/config.js` → `projects` array    |
| Skills                               | `js/config.js` → `skills` array      |
| Colors & fonts                       | `css/styles.css` → `:root` variables |

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

The form uses Netlify Forms and submits without leaving the page. Deploy this project through Netlify, then enable form email notifications in the Netlify dashboard for `rahamanrahi13@gmail.com`. If Netlify is unavailable, the form displays a direct email fallback.

## Deploy

- **Netlify**: Connect the repository and publish the project root (`.`). Netlify Forms must be enabled for contact submissions.
- **GitHub Pages / Vercel**: The portfolio will render, but Netlify Forms will not process submissions there.

## Structure

```
├── index.html
├── css/styles.css
├── js/config.js    ← your content
├── js/main.js      ← behavior (usually leave as-is)
└── README.md
```
