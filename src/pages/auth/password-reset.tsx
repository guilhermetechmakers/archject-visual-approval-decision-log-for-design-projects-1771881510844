import * as React from 'react'
import { Link, useSearchParams } from 'react-router-dom'
import { useForm } from 'react-hook-form'
import { zodResolver } from '@hookform/resolvers/zod'
import { z } from 'zod'
import { toast } from 'sonner'
import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { Label } from '@/components/ui/label'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card'
import { AuthContainer, FooterNav } from '@/components/auth'
import * as authApi from '@/api/auth'

const requestSchema = z.object({
  email: z.string().min(1, 'Email is required').email('Enter a valid email'),
})

const resetSchema = z.object({
  token: z.string().min(1, 'Token is required'),
  newPassword: z.string().min(8, 'Password must be at least 8 characters'),
})

type RequestForm = z.infer<typeof requestSchema>
type ResetForm = z.infer<typeof resetSchema>

export function PasswordResetPage() {
  const [searchParams] = useSearchParams()
  const tokenFromUrl = searchParams.get('token') ?? ''
  const [sent, setSent] = React.useState(false)
  const [resetSuccess, setResetSuccess] = React.useState(false)

  const requestForm = useForm<RequestForm>({
    resolver: zodResolver(requestSchema),
    defaultValues: { email: '' },
  })

  const resetForm = useForm<ResetForm>({
    resolver: zodResolver(resetSchema),
    defaultValues: { token: tokenFromUrl, newPassword: '' },
  })

  React.useEffect(() => {
    if (tokenFromUrl) resetForm.setValue('token', tokenFromUrl)
  }, [tokenFromUrl, resetForm])

  const onRequest = async (data: RequestForm) => {
    try {
      await authApi.forgotPassword({ email: data.email })
      setSent(true)
      toast.success('If an account exists, we sent a reset link to your email.')
    } catch {
      setSent(true)
      toast.success('If an account exists, we sent a reset link to your email.')
    }
  }

  const onReset = async (data: ResetForm) => {
    try {
      await authApi.resetPassword({ token: data.token, newPassword: data.newPassword })
      setResetSuccess(true)
      toast.success('Password updated. You can sign in now.')
    } catch (err) {
      toast.error(err instanceof Error ? err.message : 'Reset link may be invalid or expired.')
    }
  }

  if (resetSuccess) {
    return (
      <AuthContainer>
        <Card className="w-full shadow-card rounded-xl border-border bg-card">
          <CardHeader>
            <CardTitle className="text-xl">Password updated</CardTitle>
            <CardDescription>Your password has been reset. Sign in with your new password.</CardDescription>
          </CardHeader>
          <CardContent>
            <Button asChild className="w-full rounded-full">
              <Link to="/login">Sign in</Link>
            </Button>
          </CardContent>
        </Card>
        <FooterNav className="mt-8" />
      </AuthContainer>
    )
  }

  if (tokenFromUrl) {
    return (
      <AuthContainer>
        <Card className="w-full shadow-card rounded-xl border-border bg-card">
          <CardHeader>
            <CardTitle className="text-xl">Set new password</CardTitle>
            <CardDescription>Enter your new password below.</CardDescription>
          </CardHeader>
          <CardContent>
            <form onSubmit={resetForm.handleSubmit(onReset)} className="space-y-4">
              <input type="hidden" {...resetForm.register('token')} />
              <div className="space-y-2">
                <Label htmlFor="new-password">New password</Label>
                <Input
                  id="new-password"
                  type="password"
                  placeholder="At least 8 characters"
                  autoComplete="new-password"
                  {...resetForm.register('newPassword')}
                />
                {resetForm.formState.errors.newPassword && (
                  <p className="text-sm text-destructive">{resetForm.formState.errors.newPassword.message}</p>
                )}
              </div>
              <Button type="submit" className="w-full rounded-full">
                Reset password
              </Button>
            </form>
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

  return (
    <AuthContainer>
      <Card className="w-full shadow-card rounded-xl border-border bg-card">
        <CardHeader>
          <CardTitle className="text-xl">Password reset</CardTitle>
          <CardDescription>
            {sent
              ? 'Check your email for a reset link. It may take a few minutes to arrive.'
              : 'Enter your email and we’ll send you a link to reset your password.'}
          </CardDescription>
        </CardHeader>
        <CardContent>
          {sent ? (
            <div className="space-y-4">
              <p className="text-sm text-muted-foreground">
                Didn’t receive an email? Check spam or{' '}
                <button
                  type="button"
                  className="text-primary font-medium hover:underline"
                  onClick={() => setSent(false)}
                >
                  try again
                </button>
              </p>
              <Button variant="outline" asChild className="w-full rounded-full">
                <Link to="/login">Back to log in</Link>
              </Button>
            </div>
          ) : (
            <form onSubmit={requestForm.handleSubmit(onRequest)} className="space-y-4">
              <div className="space-y-2">
                <Label htmlFor="email">Email</Label>
                <Input
                  id="email"
                  type="email"
                  placeholder="you@studio.com"
                  autoComplete="email"
                  {...requestForm.register('email')}
                />
                {requestForm.formState.errors.email && (
                  <p className="text-sm text-destructive">{requestForm.formState.errors.email.message}</p>
                )}
              </div>
              <Button type="submit" className="w-full rounded-full">
                Send reset link
              </Button>
            </form>
          )}
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
