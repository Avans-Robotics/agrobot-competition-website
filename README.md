# Agrobotcompetitie

Website for the Agrobotcompetitie — a competition challenging students to build innovative agricultural robots. Hosted at [agrobot.alexandrien.com](https://agrobot.alexandrien.com/).

## Tech stack

- [Vite](https://vitejs.dev/) + [React 18](https://react.dev/) + TypeScript
- [Tailwind CSS](https://tailwindcss.com/) with [shadcn/ui](https://ui.shadcn.com/) components
- [React Router](https://reactrouter.com/) for routing
- [Vitest](https://vitest.dev/) for unit tests

## Local development

Requires [Node.js](https://nodejs.org/) (LTS).

```bash
npm install
npm run dev
```

The dev server runs at http://localhost:8080.

## Scripts

| Command | Description |
|---------|-------------|
| `npm run dev` | Start the dev server with hot reload |
| `npm run build` | Build for production |
| `npm run preview` | Preview the production build locally |
| `npm run lint` | Run ESLint |
| `npm run test` | Run the test suite |

## Deployment

Deployed on [Vercel](https://vercel.com/) — pushes to `main` are built and deployed automatically.
