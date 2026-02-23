import { Navigate, useLocation } from 'react-router-dom'
import { useAuthOptional } from '@/contexts/auth-context'

export interface ProtectedRouteProps {
  children: React.ReactNode
}

/**
 * Wraps content that requires authentication. Redirects to /login if not authenticated.
 */
export function ProtectedRoute({ children }: ProtectedRouteProps) {
  const auth = useAuthOptional()
  const location = useLocation()

  if (!auth || !auth.session?.token) {
    return <Navigate to="/login" state={{ from: location }} replace />
  }

  return <>{children}</>
}
