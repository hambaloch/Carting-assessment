# Shopping Cart

A full-stack shopping cart (React + Vite frontend, Node/Express backend, MongoDB, Stripe checkout).

## Running it locally

**Quick start:**  
Copy `.env.example` to `.env` in both the project root and the `server/` folder, fill in the values, then:

```bash
npm install
cd server && npm install && cd ..
docker-compose up -d   # MongoDB
npm run dev
```

Frontend: http://localhost:5173 · Backend: http://localhost:3000

---

## Setup issues we ran into (and fixes)

- **"No versions available" / broken installs**  
  A couple of dependencies in `package.json` pointed to packages that don’t exist on npm anymore. We swapped them for working alternatives (e.g. `react-hot-toast`, `nodemailer`) so `npm install` succeeds.

- **Requests going to `undefined/api/..."**  
  The app expects a backend URL from `VITE_SERVER_URL`. If that’s not set, the frontend was literally calling `undefined/api/...`. We added a small config that falls back to `http://localhost:3000` when the env var is missing, but **the app runs more reliably if you set the API URL in `.env`** (see `.env.example`).

- **CORS errors on login/register**  
  The server only allows requests from `ORIGIN`. If that wasn’t set, the browser blocked the calls. We added a fallback so `http://localhost:5173` is allowed when `ORIGIN` is unset—again, **setting `ORIGIN` in `server/.env` is the right way** so you’re not relying on defaults.

- **"secretOrPrivateKey must have a value"**  
  Login uses JWT and needs `JWT_SECRET` in `server/.env`. Without it, sign-in fails. Add a long random string there (and keep it secret).

- **MongoDB not running**  
  Auth and cart need MongoDB. We added a `docker-compose.yml` so you can run MongoDB locally with `docker-compose up -d` and point the server at it via `MONGO_URI` in `server/.env`.

**TL;DR:** Copy the `.env.example` files, add your real values (especially the API endpoint and server env vars), and you’ll avoid most of these issues and have a smoother run.

## Env files (for the team)

- **Root:** `.env.example` – frontend (e.g. `VITE_SERVER_URL`). Copy to `.env` and set your backend URL.
- **Server:** `server/.env.example` – backend (MongoDB, JWT, CORS, Stripe, optional email). Copy to `server/.env` and fill in.

Never commit real `.env` files; the examples are there so everyone knows what’s needed.
