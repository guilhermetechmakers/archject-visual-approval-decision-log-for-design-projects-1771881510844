import * as React from 'react'
import { Link, useNavigate, useLocation } from 'react-router-dom'
import { useForm, FormProvider } from 'react-hook-form'
import { zodResolver } from '@hookform/resolvers/zod'
import { z } from 'zod'
import { toast } from 'sonner'
import {
  AuthContainer,
  AuthTabs,
  EmailAuthForm,
  GoogleOAuthButton,
  ForgotPasswordLink,
  SecurityHintsPanel,
  FooterNav,
} from '@/components/auth'
import type { AuthTabValue } from '@/components/auth'
import type { EmailAuthFormValues } from '@/components/auth'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card'
import { useAuth } from '@/contexts/auth-context'

const loginSchema = z.object({
  email: z.string().min(1, 'Email is required').email('Enter a valid email'),
  password: z.string().min(1, 'Password is required'),
  rememberMe: z.boolean().optional(),
  workspaceName: z.string().max(64).optional(),
  acceptTerms: z.boolean().optional(),
})

type AuthFormValues = z.infer<typeof loginSchema> & EmailAuthFormValues

export function LoginPage() {
  const navigate = useNavigate()
  const location = useLocation()
  const { login, register: doRegister, googleSignIn } = useAuth()
  const initialTab = (location.state as { tab?: AuthTabValue } | null)?.tab ?? 'login'
  const [activeTab, setActiveTab] = React.useState<AuthTabValue>(initialTab)
  const [isLoading, setIsLoading] = React.useState(false)
  const [googleLoading, setGoogleLoading] = React.useState(false)

  const form = useForm<AuthFormValues>({
    resolver: zodResolver(loginSchema),
    defaultValues: {
      email: '',
      password: '',
      rememberMe: false,
      workspaceName: '',
      acceptTerms: false,
    },
    mode: 'onBlur',
  })

  const onLogin = React.useCallback(
    async (data: AuthFormValues) => {
      setIsLoading(true)
      try {
        await login(data.email, data.password, data.rememberMe ?? false)
        toast.success('Welcome back!')
        navigate('/dashboard', { replace: true })
      } catch (err) {
        toast.error(err instanceof Error ? err.message : 'Sign in failed')
      } finally {
        setIsLoading(false)
      }
    },
    [login, navigate]
  )

  const onSignup = React.useCallback(
    async (data: AuthFormValues) => {
      if (data.password.length < 8) {
        form.setError('password', { message: 'Password must be at least 8 characters' })
        return
      }
      if (!data.acceptTerms) {
        form.setError('acceptTerms', { message: 'You must accept the Terms and Privacy Policy' })
        return
      }
      setIsLoading(true)
      try {
        await doRegister({
          email: data.email,
          password: data.password,
          workspaceName: data.workspaceName?.trim() || undefined,
          agreeToTerms: !!data.acceptTerms,
        })
        toast.success('Account created. Please verify your email.')
        navigate('/verify-email', { replace: true })
      } catch (err) {
        toast.error(err instanceof Error ? err.message : 'Sign up failed')
      } finally {
        setIsLoading(false)
      }
    },
    [doRegister, navigate, form]
  )

  const onGoogleSignIn = React.useCallback(async () => {
    setGoogleLoading(true)
    try {
      await googleSignIn('mock_google_id_token')
      toast.success('Signed in with Google')
      navigate('/dashboard', { replace: true })
    } catch (err) {
      toast.error(err instanceof Error ? err.message : 'Google sign-in failed')
    } finally {
      setGoogleLoading(false)
    }
  }, [googleSignIn, navigate])

  return (
    <AuthContainer>
      <Card className="w-full shadow-card rounded-xl border-border bg-card">
        <CardHeader className="space-y-1">
          <CardTitle className="text-2xl font-semibold">Welcome</CardTitle>
          <CardDescription>Sign in or create an account to continue.</CardDescription>
        </CardHeader>
        <CardContent className="space-y-6">
          <GoogleOAuthButton onClick={onGoogleSignIn} loading={googleLoading} />

          <div className="relative">
            <div className="absolute inset-0 flex items-center">
              <span className="w-full border-t border-border" />
            </div>
            <div className="relative flex justify-center text-xs uppercase">
              <span className="bg-card px-2 text-muted-foreground">Or continue with email</span>
            </div>
          </div>

          <FormProvider {...form}>
            <AuthTabs
              value={activeTab}
              onValueChange={setActiveTab}
              loginContent={
                <>
                  <EmailAuthForm
                    mode="login"
                    onSubmit={onLogin}
                    isLoading={isLoading}
                    showWorkspaceName={false}
                    showTerms={false}
                  />
                  <div className="mt-4">
                    <ForgotPasswordLink />
                  </div>
                </>
              }
              signupContent={
                <EmailAuthForm
                  mode="signup"
                  onSubmit={onSignup}
                  isLoading={isLoading}
                  showWorkspaceName={true}
                  showTerms={true}
                />
              }
            />
          </FormProvider>

          <SecurityHintsPanel className="mt-6" />
        </CardContent>
      </Card>

      <FooterNav className="mt-8" />

      <p className="mt-6 text-center text-sm text-muted-foreground">
        <Link
          to="/"
          className="font-medium text-primary hover:underline focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 rounded-sm"
        >
          Back to home
        </Link>
      </p>
    </AuthContainer>
  )
}
