export function getApiBase() {
  const env = process.env.NEXT_PUBLIC_API_BASE?.trim();
  return env?.replace(/\/+$/,'') || "";
}
export async function apiGet<T>(path: string, init?: RequestInit): Promise<T> {
  const base = getApiBase();
  const url = base ? `${base}${path}` : path;
  const res = await fetch(url, { ...init, cache: "no-store" });
  if (!res.ok) throw new Error(`API ${res.status} ${res.statusText}`);
  return res.json() as Promise<T>;
}
