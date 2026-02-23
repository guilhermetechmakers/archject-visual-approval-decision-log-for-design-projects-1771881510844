const API_BASE = import.meta.env.VITE_API_URL ?? '/api'

export type ApiError = {
  message: string
  code?: string
  status?: number
}

async function handleResponse<T>(res: Response): Promise<T> {
  const text = await res.text()
  const data = text ? (JSON.parse(text) as T) : ({} as T)
  if (!res.ok) {
    const err = (data as unknown as { error?: string; message?: string }) ?? {}
    throw new Error(err.message ?? err.error ?? res.statusText)
  }
  return data
}

export async function api<T>(
  path: string,
  options?: RequestInit
): Promise<T> {
  const url = path.startsWith('http') ? path : `${API_BASE}${path}`
  const res = await fetch(url, {
    ...options,
    headers: {
      'Content-Type': 'application/json',
      ...options?.headers,
    },
  })
  return handleResponse<T>(res)
}

export async function apiGet<T>(path: string): Promise<T> {
  return api<T>(path, { method: 'GET' })
}

export async function apiPost<T>(path: string, body?: unknown): Promise<T> {
  return api<T>(path, { method: 'POST', body: body ? JSON.stringify(body) : undefined })
}

export async function apiPut<T>(path: string, body?: unknown): Promise<T> {
  return api<T>(path, { method: 'PUT', body: body ? JSON.stringify(body) : undefined })
}

export async function apiPatch<T>(path: string, body?: unknown): Promise<T> {
  return api<T>(path, { method: 'PATCH', body: body ? JSON.stringify(body) : undefined })
}

export async function apiDelete<T>(path: string): Promise<T> {
  return api<T>(path, { method: 'DELETE' })
}
