/**
 * Auth and workspace types for Archject.
 * Aligns with API design: User, Workspace, tokens, sessions.
 */

export interface User {
  id: string
  email: string
  emailVerified: boolean
  workspaceIds: string[]
  createdAt: string
}

export interface Workspace {
  id: string
  name: string
  domain?: string
  accountOwnerId: string
  memberUserIds: string[]
  createdAt: string
}

export interface RegisterBody {
  email: string
  password: string
  workspaceName?: string
  agreeToTerms: boolean
}

export interface RegisterResponse {
  userId: string
  workspaceId: string
  requiresEmailVerification: boolean
  token: string
}

export interface LoginBody {
  email: string
  password: string
}

export interface LoginResponse {
  token: string
  userId: string
  workspaceId: string | null
  emailVerified: boolean
}

export interface GoogleSignInBody {
  idToken: string
}

export interface VerifyEmailBody {
  userId: string
  token: string
}

export interface ResendVerificationBody {
  email: string
}

export interface ForgotPasswordBody {
  email: string
}

export interface ResetPasswordBody {
  token: string
  newPassword: string
}

export interface ChangePasswordBody {
  currentPassword: string
  newPassword: string
}

export interface CreateWorkspaceBody {
  accountId: string
  workspaceName: string
}

export interface AuthSession {
  token: string
  userId: string
  workspaceId: string | null
  emailVerified: boolean
  email?: string
}
