import { useEffect } from 'react'
import { useNavigate } from 'react-router-dom'

/**
 * Signup route: redirects to login with signup tab active for unified auth experience.
 */
export function SignupPage() {
  const navigate = useNavigate()

  useEffect(() => {
    navigate('/login', { replace: true, state: { tab: 'signup' } })
  }, [navigate])

  return (
    <div className="min-h-screen flex items-center justify-center bg-background">
      <p className="text-muted-foreground">Redirecting to sign up…</p>
    </div>
  )
}
