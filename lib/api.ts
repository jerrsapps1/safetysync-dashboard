export function getApiBase(): string {
  const envBase = process.env.NEXT_PUBLIC_API_BASE?.trim();
  if (envBase) return envBase.replace(/\/+$/,''); // from .env when deployed

  // Vercel (server)
  if (process.env.VERCEL_URL) return `https://${process.env.VERCEL_URL}`;

  // GitHub Codespaces or local dev: Next dev listens on 3000 inside the container
  const port = process.env.PORT || '3000';
  return `http://localhost:${port}`;
}

export async function apiGet<T = any>(path: string, init?: RequestInit): Promise<T> {
  const base = getApiBase();
  const url = `${base}${path.startsWith('/') ? path : `/${path}`}`;
  const res = await fetch(url, { ...init, cache: "no-store" });
  if (!res.ok) throw new Error(`API ${res.status} ${res.statusText}`);
  return res.json() as Promise<T>;
}
