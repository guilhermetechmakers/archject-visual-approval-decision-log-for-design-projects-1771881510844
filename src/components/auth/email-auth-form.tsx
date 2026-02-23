import * as React from 'react'
import { Eye, EyeOff } from 'lucide-react'
import { useFormContext } from 'react-hook-form'
import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { Label } from '@/components/ui/label'
import { getPasswordStrength, PASSWORD_STRENGTH_LABELS } from '@/lib/password-strength'
import { cn } from '@/lib/utils'
import { TermsCheckbox } from './terms-checkbox'

export interface PasswordStrengthMeterProps {
  password: string
  id?: string
  className?: string
}

export function PasswordStrengthMeter({ password, id, className }: PasswordStrengthMeterProps) {
  const strength = getPasswordStrength(password)
  const label = PASSWORD_STRENGTH_LABELS[Math.min(strength, 4)]
  const width = password.length === 0 ? 0 : ((strength + 1) / 5) * 100
  const barColor =
    strength <= 1 ? 'bg-destructive' : strength === 2 ? 'bg-warning' : strength === 3 ? 'bg-success' : 'bg-primary'
  return (
    <div id={id} className={cn('space-y-1', className)} aria-live="polite">
      <div className="h-1.5 w-full overflow-hidden rounded-full bg-muted">
        <div
          className={cn('h-full rounded-full transition-all duration-300', barColor)}
          style={{ width: `${width}%` }}
          role="progressbar"
          aria-valuenow={strength + 1}
          aria-valuemin={0}
          aria-valuemax={5}
          aria-label={`Password strength: ${label}`}
        />
      </div>
      {password.length > 0 && (
        <p className="text-xs text-muted-foreground">
          Strength: <span className="font-medium text-foreground">{label}</span>
        </p>
      )}
    </div>
  )
}

export interface EmailAuthFormProps {
  mode: 'login' | 'signup'
  onSubmit: (data: EmailAuthFormValues) => void
  isLoading?: boolean
  /** Sign up only: show workspace name field */
  showWorkspaceName?: boolean
  /** Sign up only: show terms checkbox */
  showTerms?: boolean
  /** Preserved when switching tabs */
  defaultEmail?: string
  defaultPassword?: string
  defaultRememberMe?: boolean
  defaultWorkspaceName?: string
  defaultAcceptTerms?: boolean
}

export interface EmailAuthFormValues {
  email: string
  password: string
  rememberMe?: boolean
  workspaceName?: string
  acceptTerms?: boolean
}

export function EmailAuthForm({
  mode,
  onSubmit,
  isLoading = false,
  showWorkspaceName = false,
  showTerms = true,
  defaultEmail: _defaultEmail = '',
  defaultPassword = '',
  defaultRememberMe: _defaultRememberMe = false,
  defaultWorkspaceName: _defaultWorkspaceName = '',
  defaultAcceptTerms: _defaultAcceptTerms = false,
}: EmailAuthFormProps) {
  const [showPassword, setShowPassword] = React.useState(false)
  const { register, handleSubmit, watch, formState: { errors } } = useFormContext<EmailAuthFormValues>()
  const password = watch('password', defaultPassword)

  return (
    <form onSubmit={handleSubmit(onSubmit)} className="space-y-4" noValidate>
      <div className="space-y-2">
        <Label htmlFor="auth-email">Email</Label>
        <Input
          id="auth-email"
          type="email"
          placeholder="you@studio.com"
          autoComplete="email"
          aria-invalid={!!errors.email}
          aria-describedby={errors.email ? 'auth-email-error' : undefined}
          {...register('email', {
            required: 'Email is required',
            pattern: {
              value: /^[^\s@]+@[^\s@]+\.[^\s@]+$/,
              message: 'Enter a valid email address',
            },
          })}
        />
        {errors.email && (
          <p id="auth-email-error" className="text-sm text-destructive" role="alert">
            {errors.email.message}
          </p>
        )}
      </div>

      <div className="space-y-2">
        <Label htmlFor="auth-password">Password</Label>
        <div className="relative">
          <Input
            id="auth-password"
            type={showPassword ? 'text' : 'password'}
            placeholder={mode === 'signup' ? 'At least 8 characters' : 'Password'}
            autoComplete={mode === 'login' ? 'current-password' : 'new-password'}
            aria-invalid={!!errors.password}
            aria-describedby={
              [errors.password ? 'auth-password-error' : null, mode === 'signup' ? 'auth-password-strength' : null]
              .filter(Boolean)
              .join(' ') || undefined
            }
            className="pr-10"
            {...register('password', {
              required: 'Password is required',
              minLength: mode === 'signup' ? { value: 8, message: 'Password must be at least 8 characters' } : undefined,
            })}
          />
          <Button
            type="button"
            variant="ghost"
            size="icon"
            className="absolute right-0 top-0 h-full rounded-l-none px-3"
            onClick={() => setShowPassword((s) => !s)}
            aria-label={showPassword ? 'Hide password' : 'Show password'}
            tabIndex={-1}
          >
            {showPassword ? <EyeOff className="h-4 w-4" /> : <Eye className="h-4 w-4" />}
          </Button>
        </div>
        {mode === 'signup' && (
          <PasswordStrengthMeter password={password} id="auth-password-strength" />
        )}
        {errors.password && (
          <p id="auth-password-error" className="text-sm text-destructive" role="alert">
            {errors.password.message}
          </p>
        )}
      </div>

      {mode === 'login' && (
        <div className="flex items-center gap-2">
          <input
            type="checkbox"
            id="auth-remember"
            className="h-4 w-4 rounded border-border text-primary focus:ring-2 focus:ring-ring focus:ring-offset-2"
            {...register('rememberMe')}
          />
          <Label htmlFor="auth-remember" className="text-sm font-normal cursor-pointer">
            Remember me
          </Label>
        </div>
      )}

      {mode === 'signup' && showWorkspaceName && (
        <div className="space-y-2">
          <Label htmlFor="auth-workspace">Workspace name</Label>
          <Input
            id="auth-workspace"
            type="text"
            placeholder="My Studio"
            autoComplete="organization"
            aria-invalid={!!errors.workspaceName}
            {...register('workspaceName', {
              maxLength: { value: 64, message: 'Workspace name must be 64 characters or less' },
            })}
          />
          {errors.workspaceName && (
            <p className="text-sm text-destructive" role="alert">{errors.workspaceName.message}</p>
          )}
        </div>
      )}

      {mode === 'signup' && showTerms && (
        <TermsCheckbox
          id="auth-terms"
          {...register('acceptTerms', {
            required: 'You must accept the Terms and Privacy Policy',
          })}
          error={errors.acceptTerms?.message}
        />
      )}

      <Button
        type="submit"
        className="w-full rounded-full"
        disabled={isLoading}
        aria-busy={isLoading}
      >
        {isLoading ? (
          <span className="inline-block h-4 w-4 animate-spin rounded-full border-2 border-current border-t-transparent" aria-hidden />
        ) : mode === 'login' ? (
          'Log in'
        ) : (
          'Create account'
        )}
      </Button>
    </form>
  )
}

