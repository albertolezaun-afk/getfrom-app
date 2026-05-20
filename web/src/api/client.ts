const BASE = import.meta.env.DEV
  ? '/api'
  : 'https://from-server-production.up.railway.app'

let _accessToken: string | null = localStorage.getItem('from_access_token')
let _refreshToken: string | null = localStorage.getItem('from_refresh_token')

export function getToken() { return _accessToken }

export function setTokens(access: string, refresh: string) {
  _accessToken = access
  _refreshToken = refresh
  localStorage.setItem('from_access_token', access)
  localStorage.setItem('from_refresh_token', refresh)
}

export function clearTokens() {
  _accessToken = null
  _refreshToken = null
  localStorage.removeItem('from_access_token')
  localStorage.removeItem('from_refresh_token')
}

async function refreshAccessToken(): Promise<string | null> {
  if (!_refreshToken) return null
  try {
    const res = await fetch(`${BASE}/auth/refresh`, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ refreshToken: _refreshToken }),
    })
    if (!res.ok) { clearTokens(); return null }
    const data = await res.json()
    setTokens(data.accessToken, data.refreshToken)
    return data.accessToken
  } catch {
    clearTokens()
    return null
  }
}

export async function apiRequest<T>(
  path: string,
  options: RequestInit = {}
): Promise<T> {
  const makeRequest = async (token: string | null) => {
    const headers: Record<string, string> = {
      'Content-Type': 'application/json',
      ...(options.headers as Record<string, string> || {}),
    }
    if (token) headers['Authorization'] = `Bearer ${token}`
    return fetch(`${BASE}${path}`, { ...options, headers })
  }

  let res = await makeRequest(_accessToken)

  if (res.status === 401 && _refreshToken) {
    const newToken = await refreshAccessToken()
    if (newToken) {
      res = await makeRequest(newToken)
    } else {
      throw new Error('UNAUTHORIZED')
    }
  }

  if (!res.ok) {
    const body = await res.json().catch(() => ({}))
    throw new Error(body.error || `HTTP ${res.status}`)
  }

  return res.json()
}

// Auth
export async function login(email: string, password: string) {
  const data = await apiRequest<{ accessToken: string; refreshToken: string; user: { id: string; email: string } }>(
    '/auth/login',
    { method: 'POST', body: JSON.stringify({ email, password }) }
  )
  setTokens(data.accessToken, data.refreshToken)
  return data
}

export async function register(email: string, password: string) {
  const data = await apiRequest<{ accessToken: string; refreshToken: string; user: { id: string; email: string } }>(
    '/auth/register',
    { method: 'POST', body: JSON.stringify({ email, password }) }
  )
  setTokens(data.accessToken, data.refreshToken)
  return data
}

export async function logout() {
  clearTokens()
}

// Sync
export async function syncNodes(payload: {
  lastSyncAt: string | null
  workspaces: unknown[]
  nodes: unknown[]
  deletedWorkspaceIds: string[]
}) {
  return apiRequest<{ syncAt: string; nodes: unknown[]; workspaces: unknown[] }>(
    '/sync',
    { method: 'POST', body: JSON.stringify(payload) }
  )
}
