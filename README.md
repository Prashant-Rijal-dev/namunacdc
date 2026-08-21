# NCDC NGO Website

Production-ready React/Vite website for **Namuna Community Development Center (NCDC)**.

## 1. Run locally

Requirements:
- Node.js 18+
- npm

```bash
npm install
npm run dev
```

Open the local URL shown by Vite.

## 2. Build for production

```bash
npm run build
npm run preview
```

The production files are generated in `dist/`.

## 3. Where to edit website content

### ⭐ `src/content.js` — START HERE

Almost all organization information is intentionally stored in this one file.

You can edit:

- Organization name, phone, email and address
- Hero text and homepage copy
- Images
- Team members
- Advisors
- Projects
- Success stories
- Resources
- Impact statistics
- Focus areas
- About-page values
- Social-media links

### Adding a project

Find `projects` in `src/content.js`, copy an existing object and change the values.

```js
{
  title: "Your new project",
  status: "Agriculture",
  location: "Your location",
  image: images.farming,
  text: "Your project description",
  tags: ["Agriculture", "Livelihoods"]
}
```

The project will automatically appear on the Projects page and, where applicable, the homepage.

### Adding a success story

Copy an object inside `stories` and update its title, excerpt, image and category.

### Adding a resource

Copy an object inside `resources`.

For a local PDF:

1. Put the PDF in `public/resources/`.
2. Set `file: "/resources/your-file.pdf"`.

For an external document:

```js
url: "https://example.com/document.pdf"
```

### Adding local images

Put images in `public/images/`, then use paths such as:

```js
image: "/images/project-1.jpg"
```

For production, NCDC's own photographs are recommended instead of the current Unsplash placeholders.

## 4. Hosting

### Vercel

Import the project into Vercel. The included `vercel.json` handles React Router routes.

Build command:

```text
npm run build
```

Output directory:

```text
dist
```

### Netlify

The included `public/_redirects` file handles React Router routes automatically.

Build command:

```text
npm run build
```

Publish directory:

```text
dist
```

## 5. Important production items

The website is frontend-only and can be hosted immediately, but before the final public launch:

- Replace placeholder Unsplash photos with NCDC-owned images.
- Replace `#` social links in `src/content.js` with the real profiles.
- Add the final office map location.
- Connect the contact form to Formspree, Resend, a custom backend, or another mail service if server-side form delivery is required.
- Connect the newsletter button to the chosen mailing platform.
- Add real downloadable PDFs/resources.
- Add the final NCDC logo if available.
- Run `npm run build` before deployment.

## Project structure

```text
src/
├── App.jsx          # Layout, components, routes and functionality
├── content.js       # ⭐ Organization content / easy editing area
├── main.jsx         # React entry point
└── styles.css       # Website styling
public/
└── _redirects       # Netlify SPA routing
index.html            # SEO/meta information
vercel.json           # Vercel SPA routing
```
