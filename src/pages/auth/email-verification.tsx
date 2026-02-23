import * as React from 'react'
import { Link } from 'react-router-dom'
import { Mail } from 'lucide-react'
import { Button } from '@/components/ui/button'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card'
import { AuthContainer, EmailVerificationBanner, FooterNav } from '@/components/auth'
import { useAuth } from '@/contexts/auth-context'
import * as authApi from '@/api/auth'
import { toast } from 'sonner'

const RESEND_COOLDOWN_SECONDS = 60

export function EmailVerificationPage() {
  const { session } = useAuth()
  const [resendCooldown, setResendCooldown] = React.useState(0)

  const email = session?.email ?? ''

  const handleResend = React.useCallback(async () => {
    if (!email) return
    try {
      await authApi.resendVerification({ email })
      setResendCooldown(RESEND_COOLDOWN_SECONDS)
      toast.success('Verification email sent. Check your inbox.')
    } catch {
      toast.error('Could not send verification email. Try again later.')
    }
  }, [email])

  React.useEffect(() => {
    if (resendCooldown <= 0) return
    const t = setInterval(() => setResendCooldown((c) => c - 1), 1000)
    return () => clearInterval(t)
  }, [resendCooldown])

  return (
    <AuthContainer>
      <Card className="w-full shadow-card rounded-xl border-border bg-card">
        <CardHeader>
          <div className="flex h-12 w-12 items-center justify-center rounded-full bg-primary/10 text-primary">
            <Mail className="h-6 w-6" aria-hidden />
          </div>
          <CardTitle className="text-xl">Verify your email</CardTitle>
          <CardDescription>
            We’ve sent a verification link to your email. Click the link to activate your account and access all
            features.
          </CardDescription>
        </CardHeader>
        <CardContent className="space-y-6">
          <EmailVerificationBanner
            email={email}
            onResend={handleResend}
            resendCooldownSeconds={resendCooldown}
          />
          <Button asChild className="w-full rounded-full">
            <Link to="/dashboard">
              Continue to dashboard
            </Link>
          </Button>
        </CardContent>
      </Card>
      <FooterNav className="mt-8" />
      <p className="mt-6 text-center text-sm text-muted-foreground">
        <Link to="/login" className="font-medium text-primary hover:underline">
          Back to log in
        </Link>
      </p>
    </AuthContainer>
  )
}
