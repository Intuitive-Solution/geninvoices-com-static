# Geninvoices - Smart Invoice Generation

A modern, responsive website for Geninvoices built with Nuxt.js, featuring smart invoice generation capabilities.

Look at the [Nuxt documentation](https://nuxt.com/docs/getting-started/introduction) to learn more.

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

Check out the [deployment documentation](https://nuxt.com/docs/getting-started/deployment) for more information.

## Netlify Deployment

This project is configured for static generation and deployment on Netlify.

### Prerequisites
- A Netlify account
- Your project pushed to a Git repository (GitHub, GitLab, or Bitbucket)

### Deployment Steps

1. **Connect your repository to Netlify:**
   - Go to [Netlify](https://netlify.com) and sign in
   - Click "New site from Git"
   - Choose your Git provider and select your repository
   - The build settings are already configured in `netlify.toml`

2. **Build Settings (automatically configured):**
   - **Build command:** `rm -rf node_modules package-lock.json && npm install && npm run generate`
   - **Publish directory:** `.output/public`
   - **Node version:** 20

3. **Deploy:**
   - Click "Deploy site"
   - Netlify will automatically build and deploy your site
   - You'll get a random subdomain (e.g., `amazing-name-123456.netlify.app`)

### Custom Domain (Optional)
- In your Netlify dashboard, go to Site settings > Domain management
- Add your custom domain
- Configure DNS settings as instructed by Netlify

### Environment Variables (if needed)
If you need environment variables:
- Go to Site settings > Environment variables
- Add any required variables (e.g., API keys, database URLs)

### Automatic Deployments
- Every push to your main branch will trigger a new deployment
- Pull requests can be deployed as preview deployments
- You can configure branch-specific build settings if needed

### Local Testing
To test the static build locally:
```bash
npm run generate
npm run preview
```

The site will be available at `http://localhost:3000` with the same behavior as the Netlify deployment.
