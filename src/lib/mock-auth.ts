/**
 * Mock auth backend for MVP demo when no API is configured.
 * Stores users/workspaces/sessions in memory; tokens are opaque.
 */

import type {
  RegisterBody,
  RegisterResponse,
  LoginBody,
  LoginResponse,
  GoogleSignInBody,
  VerifyEmailBody,
  ResendVerificationBody,
  ForgotPasswordBody,
  ResetPasswordBody,
  ChangePasswordBody,
  CreateWorkspaceBody,
} from '@/types/auth'

const users = new Map<
  string,
  { email: string; passwordHash: string; emailVerified: boolean; workspaceIds: string[] }
>()
const workspaces = new Map<
  string,
  { name: string; accountOwnerId: string; memberUserIds: string[]; domain?: string }
>()
const sessions = new Map<string, { userId: string; workspaceId: string | null; emailVerified: boolean }>()

function mockToken(): string {
  return `mock_${Math.random().toString(36).slice(2)}_${Date.now()}`
}

function mockId(): string {
  return `id_${Math.random().toString(36).slice(2, 11)}`
}

export const mockAuth = {
  register(body: RegisterBody): Promise<RegisterResponse> {
    if (!body.agreeToTerms) {
      return Promise.reject(new Error('You must accept the terms'))
    }
    const userId = mockId()
    const workspaceId = mockId()
    users.set(userId, {
      email: body.email,
      passwordHash: `hash_${body.password}`,
      emailVerified: false,
      workspaceIds: [workspaceId],
    })
    workspaces.set(workspaceId, {
      name: body.workspaceName ?? `${body.email.split('@')[0]}'s workspace`,
      accountOwnerId: userId,
      memberUserIds: [userId],
    })
    const token = mockToken()
    sessions.set(token, { userId, workspaceId, emailVerified: false })
    return Promise.resolve({
      userId,
      workspaceId,
      requiresEmailVerification: true,
      token,
    })
  },

  login(body: LoginBody): Promise<LoginResponse> {
    for (const [userId, user] of users) {
      if (user.email === body.email && user.passwordHash === `hash_${body.password}`) {
        const workspaceId = user.workspaceIds[0] ?? null
        const token = mockToken()
        sessions.set(token, {
          userId,
          workspaceId,
          emailVerified: user.emailVerified,
        })
        return Promise.resolve({
          token,
          userId,
          workspaceId,
          emailVerified: user.emailVerified,
        })
      }
    }
    return Promise.reject(new Error('Invalid email or password'))
  },

  googleSignIn(_body: GoogleSignInBody): Promise<LoginResponse> {
    const userId = mockId()
    const workspaceId = mockId()
    users.set(userId, {
      email: 'oauth@example.com',
      passwordHash: '',
      emailVerified: true,
      workspaceIds: [workspaceId],
    })
    workspaces.set(workspaceId, {
      name: 'My workspace',
      accountOwnerId: userId,
      memberUserIds: [userId],
    })
    const token = mockToken()
    sessions.set(token, { userId, workspaceId, emailVerified: true })
    return Promise.resolve({
      token,
      userId,
      workspaceId,
      emailVerified: true,
    })
  },

  verifyEmail(_body: VerifyEmailBody): Promise<{ success: boolean }> {
    return Promise.resolve({ success: true })
  },

  resendVerification(_body: ResendVerificationBody): Promise<{ success: boolean }> {
    return Promise.resolve({ success: true })
  },

  forgotPassword(_body: ForgotPasswordBody): Promise<{ success: boolean }> {
    return Promise.resolve({ success: true })
  },

  resetPassword(_body: ResetPasswordBody): Promise<{ success: boolean }> {
    return Promise.resolve({ success: true })
  },

  changePassword(_body: ChangePasswordBody): Promise<{ success: boolean }> {
    return Promise.resolve({ success: true })
  },

  createWorkspace(body: CreateWorkspaceBody): Promise<{ id: string; name: string }> {
    const id = mockId()
    const user = users.get(body.accountId)
    if (user) user.workspaceIds.push(id)
    workspaces.set(id, {
      name: body.workspaceName,
      accountOwnerId: body.accountId,
      memberUserIds: [body.accountId],
    })
    return Promise.resolve({
      id,
      name: body.workspaceName,
    })
  },

  getWorkspace(workspaceId: string): Promise<{ id: string; name: string; domain?: string }> {
    const w = workspaces.get(workspaceId)
    if (!w) return Promise.reject(new Error('Workspace not found'))
    return Promise.resolve({
      id: workspaceId,
      name: w.name,
      domain: w.domain,
    })
  },
}
