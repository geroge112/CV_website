# Interactive Portfolio Website

React + Vite portfolio/CV system with modular frontend structure, dynamic project pages, project themes, reusable components and a placeholder admin route.

## Ready Now

- Homepage with CV summary.
- Reusable project cards.
- Dynamic route: `/project/:slug`.
- Data-driven project rendering from `src/data/projects.js`.
- Separate folders for `components`, `pages`, `layouts`, `styles`, `data`, `animations`, `api`, `hooks`, `assets`.
- Framer Motion page transitions.
- Tailwind + custom CSS styling.

## Commands

```bash
npm run dev
npm run build
npm run preview
```

## Next Architecture Steps

- Replace `src/api/projectsApi.js` mock functions with real backend requests.
- Add `backend/src/routes`, `controllers`, `services`, `middleware`, `db`.
- Store projects and contact messages in PostgreSQL or Supabase.
- Connect `/admin` to login and project CRUD.
