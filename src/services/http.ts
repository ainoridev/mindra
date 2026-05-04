function apiBase(): string {
  const raw = import.meta.env.VITE_API_BASE_URL?.trim() ?? ''
  return raw.replace(/\/$/, '')
}

function resolveUrl(path: string): string {
  if (path.startsWith('http://') || path.startsWith('https://')) return path
  const base = apiBase()
  const p = path.startsWith('/') ? path : `/${path}`
  return base ? `${base}${p}` : p
}

export async function getJson<T>(path: string, init?: RequestInit): Promise<T> {
  const res = await fetch(resolveUrl(path), {
    ...init,
    method: init?.method ?? 'GET',
    headers: {
      Accept: 'application/json',
      ...init?.headers,
    },
  })
  if (!res.ok) {
    throw new Error(`HTTP ${res.status} ${res.statusText}`)
  }
  return res.json() as Promise<T>
}
