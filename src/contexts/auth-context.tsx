/**
 * Auth context: session, workspace, login/logout/register.
 * Token stored in memory; optional persistence via sessionStorage key for "remember me".
 */

import * as React from 'react'
import type { AuthSession } from '@/types/auth'
import * as authApi from '@/api/auth'

const STORAGE_KEY = 'archject_session'

interface AuthContextValue {
  session: AuthSession | null
  isLoading: boolean
  login: (email: string, password: string, rememberMe?: boolean) => Promise<void>
  register: (params: {
    email: string
    password: string
    workspaceName?: string
    agreeToTerms: boolean
  }) => Promise<{ requiresEmailVerification: boolean }>
  googleSignIn: (idToken: string) => Promise<void>
  logout: () => void
  setSession: (session: AuthSession | null) => void
  setEmailVerified: (verified: boolean) => void
  createWorkspace: (name: string) => Promise<void>
}

const AuthContext = React.createContext<AuthContextValue | null>(null)

function loadStoredSession(): AuthSession | null {
  try {
    const raw = sessionStorage.getItem(STORAGE_KEY)
    if (!raw) return null
    const data = JSON.parse(raw) as AuthSession
    if (data?.token && data?.userId) return data
  } catch {
    // ignore
  }
  return null
}

function saveSession(session: AuthSession | null, rememberMe: boolean): void {
  if (!session) {
    sessionStorage.removeItem(STORAGE_KEY)
    return
  }
  if (rememberMe) {
    sessionStorage.setItem(STORAGE_KEY, JSON.stringify(session))
  } else {
    sessionStorage.removeItem(STORAGE_KEY)
  }
}

export function AuthProvider({ children }: { children: React.ReactNode }) {
  const [session, setSessionState] = React.useState<AuthSession | null>(null)
  const [isLoading, setIsLoading] = React.useState(true)

  React.useEffect(() => {
    const stored = loadStoredSession()
    if (stored) setSessionState(stored)
    setIsLoading(false)
  }, [])

  const setSession = React.useCallback((next: AuthSession | null) => {
    setSessionState(next)
    if (!next) sessionStorage.removeItem(STORAGE_KEY)
  }, [])

  const setEmailVerified = React.useCallback((verified: boolean) => {
    setSessionState((prev) => (prev ? { ...prev, emailVerified: verified } : null))
  }, [])

  const login = React.useCallback(
    async (email: string, password: string, rememberMe = false) => {
      const res = await authApi.login({ email, password })
      const session: AuthSession = {
        token: res.token,
        userId: res.userId,
        workspaceId: res.workspaceId,
        emailVerified: res.emailVerified,
        email,
      }
      setSessionState(session)
      saveSession(session, rememberMe)
    },
    []
  )

  const register = React.useCallback(
    async (params: {
      email: string
      password: string
      workspaceName?: string
      agreeToTerms: boolean
    }) => {
      const res = await authApi.register({
        email: params.email,
        password: params.password,
        workspaceName: params.workspaceName,
        agreeToTerms: params.agreeToTerms,
      })
      const session: AuthSession = {
        token: res.token,
        userId: res.userId,
        workspaceId: res.workspaceId,
        emailVerified: false,
        email: params.email,
      }
      setSessionState(session)
      saveSession(session, false)
      return { requiresEmailVerification: res.requiresEmailVerification }
    },
    []
  )

  const googleSignIn = React.useCallback(async (idToken: string) => {
    const res = await authApi.googleSignIn({ idToken })
    const session: AuthSession = {
      token: res.token,
      userId: res.userId,
      workspaceId: res.workspaceId,
      emailVerified: res.emailVerified,
      email: 'oauth@example.com',
    }
    setSessionState(session)
    saveSession(session, false)
  }, [])

  const logout = React.useCallback(() => {
    setSessionState(null)
    sessionStorage.removeItem(STORAGE_KEY)
  }, [])

  const createWorkspace = React.useCallback(async (name: string) => {
    const current = session?.userId
    if (!current) throw new Error('Not logged in')
    const ws = await authApi.createWorkspace({ accountId: current, workspaceName: name })
    setSessionState((prev) =>
      prev ? { ...prev, workspaceId: ws.id } : null
    )
  }, [session?.userId])

  const value: AuthContextValue = {
    session,
    isLoading,
    login,
    register,
    googleSignIn,
    logout,
    setSession,
    setEmailVerified,
    createWorkspace,
  }

  return (
    <AuthContext.Provider value={value}>
      {children}
    </AuthContext.Provider>
  )
}

export function useAuth(): AuthContextValue {
  const ctx = React.useContext(AuthContext)
  if (!ctx) throw new Error('useAuth must be used within AuthProvider')
  return ctx
}

export function useAuthOptional(): AuthContextValue | null {
  return React.useContext(AuthContext)
}
