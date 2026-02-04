/**
 * Backend API base URL.
 * Set VITE_SERVER_URL in .env (e.g. VITE_SERVER_URL=http://localhost:3000) or it defaults to localhost:3000.
 */
export const API_BASE =
  import.meta.env.VITE_SERVER_URL || "http://localhost:3000";
