import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import { DashboardLayout } from '@/components/layout/dashboard-layout'
import { ProtectedRoute } from '@/components/auth/protected-route'
import { LandingPage } from '@/pages/landing'
import { LoginPage } from '@/pages/auth/login'
import { SignupPage } from '@/pages/auth/signup'
import { DemoRequestPage } from '@/pages/demo-request'
import { PricingPage } from '@/pages/pricing'
import { PasswordResetPage } from '@/pages/auth/password-reset'
import { EmailVerificationPage } from '@/pages/auth/email-verification'
import { DashboardPage } from '@/pages/dashboard'
import { ProjectWorkspacePage } from '@/pages/projects/workspace'
import { ProjectsListPage } from '@/pages/projects/list'
import { CreateDecisionPage } from '@/pages/decisions/create'
import { DecisionDetailPage } from '@/pages/decisions/detail'
import { ClientPortalPage } from '@/pages/portal/client'
import { FilesLibraryPage } from '@/pages/files/library'
import { SettingsPage } from '@/pages/settings'
import { BillingPage } from '@/pages/billing'
import { CheckoutPage } from '@/pages/billing/checkout'
import { TransactionHistoryPage } from '@/pages/billing/transactions'
import { DecisionsListPage } from '@/pages/decisions/list'
import { EditDecisionPage } from '@/pages/decisions/edit'
import { TeamUsersPage } from '@/pages/team'
import { AdminDashboardPage } from '@/pages/admin/dashboard'
import { AdminUsersPage } from '@/pages/admin/users'
import { AnalyticsPage } from '@/pages/analytics'
import { HelpPage } from '@/pages/help'
import { PrivacyPage } from '@/pages/legal/privacy'
import { TermsPage } from '@/pages/legal/terms'
import { CookiePolicyPage } from '@/pages/legal/cookies'
import { NotFoundPage } from '@/pages/errors/not-found'
import { ServerErrorPage } from '@/pages/errors/server-error'
import { SuccessPage } from '@/pages/success'

const router = createBrowserRouter([
  { path: '/', element: <LandingPage /> },
  { path: '/login', element: <LoginPage /> },
  { path: '/signup', element: <SignupPage /> },
  { path: '/auth/login', element: <LoginPage /> },
  { path: '/auth/signup', element: <SignupPage /> },
  { path: '/auth/password-reset', element: <PasswordResetPage /> },
  { path: '/demo-request', element: <DemoRequestPage /> },
  { path: '/pricing', element: <PricingPage /> },
  { path: '/password-reset', element: <PasswordResetPage /> },
  { path: '/verify-email', element: <EmailVerificationPage /> },
  {
    path: '/dashboard',
    element: (
      <ProtectedRoute>
        <DashboardLayout />
      </ProtectedRoute>
    ),
    children: [
      { index: true, element: <DashboardPage /> },
      { path: 'projects', element: <ProjectsListPage /> },
      { path: 'projects/:projectId', element: <ProjectWorkspacePage /> },
      { path: 'decisions', element: <DecisionsListPage /> },
      { path: 'decisions/new', element: <CreateDecisionPage /> },
      { path: 'decisions/:decisionId', element: <DecisionDetailPage /> },
      { path: 'decisions/:decisionId/edit', element: <EditDecisionPage /> },
      { path: 'projects/:projectId/files', element: <FilesLibraryPage /> },
      { path: 'team', element: <TeamUsersPage /> },
      { path: 'settings', element: <SettingsPage /> },
      { path: 'billing', element: <BillingPage /> },
      { path: 'checkout', element: <CheckoutPage /> },
      { path: 'transactions', element: <TransactionHistoryPage /> },
      { path: 'analytics', element: <AnalyticsPage /> },
      { path: 'admin', element: <AdminDashboardPage /> },
      { path: 'admin/users', element: <AdminUsersPage /> },
    ],
  },
  { path: '/p/:token', element: <ClientPortalPage /> },
  { path: '/help', element: <HelpPage /> },
  { path: '/privacy', element: <PrivacyPage /> },
  { path: '/terms', element: <TermsPage /> },
  { path: '/cookies', element: <CookiePolicyPage /> },
  { path: '/success', element: <SuccessPage /> },
  { path: '/500', element: <ServerErrorPage /> },
  { path: '*', element: <NotFoundPage /> },
])

export function AppRouter() {
  return <RouterProvider router={router} />
}
