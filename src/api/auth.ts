/**
 * Auth API layer. Uses fetch via api.ts.
 * When VITE_API_URL is not set or mock is enabled, auth calls use mockAuth.
 */

import {
  apiPost,
  apiGet,
} from '@/lib/api'
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
import { mockAuth } from '@/lib/mock-auth'

const USE_MOCK = !import.meta.env.VITE_API_URL || import.meta.env.VITE_USE_MOCK_AUTH === 'true'

export async function register(body: RegisterBody): Promise<RegisterResponse> {
  if (USE_MOCK) return mockAuth.register(body)
  return apiPost<RegisterResponse>('/auth/register', body)
}

export async function login(body: LoginBody): Promise<LoginResponse> {
  if (USE_MOCK) return mockAuth.login(body)
  return apiPost<LoginResponse>('/auth/login', body)
}

export async function googleSignIn(body: GoogleSignInBody): Promise<LoginResponse> {
  if (USE_MOCK) return mockAuth.googleSignIn(body)
  return apiPost<LoginResponse>('/auth/google-signin', body)
}

export async function verifyEmail(body: VerifyEmailBody): Promise<{ success: boolean }> {
  if (USE_MOCK) return mockAuth.verifyEmail(body)
  return apiPost<{ success: boolean }>('/auth/verify-email', body)
}

export async function resendVerification(body: ResendVerificationBody): Promise<{ success: boolean }> {
  if (USE_MOCK) return mockAuth.resendVerification(body)
  return apiPost<{ success: boolean }>('/auth/resend-verification', body)
}

export async function forgotPassword(body: ForgotPasswordBody): Promise<{ success: boolean }> {
  if (USE_MOCK) return mockAuth.forgotPassword(body)
  return apiPost<{ success: boolean }>('/auth/forgot-password', body)
}

export async function resetPassword(body: ResetPasswordBody): Promise<{ success: boolean }> {
  if (USE_MOCK) return mockAuth.resetPassword(body)
  return apiPost<{ success: boolean }>('/auth/reset-password', body)
}

export async function changePassword(body: ChangePasswordBody): Promise<{ success: boolean }> {
  if (USE_MOCK) return mockAuth.changePassword(body)
  return apiPost<{ success: boolean }>('/auth/change-password', body)
}

export async function createWorkspace(body: CreateWorkspaceBody): Promise<{ id: string; name: string }> {
  if (USE_MOCK) return mockAuth.createWorkspace(body)
  return apiPost<{ id: string; name: string }>('/workspaces/create', body)
}

export async function getWorkspace(workspaceId: string): Promise<{ id: string; name: string; domain?: string }> {
  if (USE_MOCK) return mockAuth.getWorkspace(workspaceId)
  return apiGet<{ id: string; name: string; domain?: string }>(`/workspaces/${workspaceId}`)
}
