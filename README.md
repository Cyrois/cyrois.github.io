# Software Engineer Portfolio

A modern, responsive portfolio website built with Nuxt.js and Tailwind CSS, featuring a dark theme inspired by premium web design aesthetics.

## Features

- Dark modern design with smooth animations
- Fully responsive (mobile, tablet, desktop)
- Static site generation for optimal performance
- GitHub Pages deployment ready
- Sections: Hero, About, Skills, Projects, Contact

## Setup

Make sure to install dependencies:

```bash
# npm
npm install

# pnpm
pnpm install

# yarn
yarn install

# bun
bun install
```

## Development Server

Start the development server on `http://localhost:3000`:

```bash
# npm
npm run dev

# pnpm
pnpm dev

# yarn
yarn dev

# bun
bun run dev
```

## Production

Build the application for production:

```bash
# npm
npm run build

# pnpm
pnpm build

# yarn
yarn build

# bun
bun run build
```

Locally preview production build:

```bash
# npm
npm run preview

# pnpm
pnpm preview

# yarn
yarn preview

# bun
bun run preview
```

## Static Site Generation

Generate static files for deployment:

```bash
npm run generate
```

The static files will be generated in `.output/public/`

## Deploy to GitHub Pages

### Setup

1. Go to your GitHub repository settings
2. Navigate to Pages section
3. Under "Build and deployment", select "GitHub Actions" as the source

### Deployment

The site will automatically deploy to GitHub Pages when you push to the `main` branch. The GitHub Actions workflow is already configured in `.github/workflows/deploy.yml`.

### Custom Domain or Repository Path

- **Custom domain**: Leave `baseURL: '/'` in `nuxt.config.ts`
- **Repository path** (e.g., username.github.io/repo-name): Update `baseURL` in `nuxt.config.ts` to `'/repo-name/'`

## Customization

Update the following files to personalize your portfolio:

- `components/Hero.vue` - Update your title and tagline
- `components/About.vue` - Add your bio
- `components/Skills.vue` - List your technical skills
- `components/Projects.vue` - Showcase your projects
- `components/Contact.vue` - Update contact links (email, GitHub, LinkedIn)
- `nuxt.config.ts` - Update meta tags and site title

Check out the [Nuxt documentation](https://nuxt.com/docs/getting-started/deployment) for more information.
