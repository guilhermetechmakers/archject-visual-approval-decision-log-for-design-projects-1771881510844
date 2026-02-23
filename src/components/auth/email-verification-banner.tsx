import * as React from 'react'
import { Mail, CheckCircle } from 'lucide-react'
import { Button } from '@/components/ui/button'
import { cn } from '@/lib/utils'

export interface EmailVerificationBannerProps {
  email: string
  onResend: () => void | Promise<void>
  resendCooldownSeconds?: number
  className?: string
}

/**
 * Post-signup banner: verification status and "Resend verification email" action.
 */
export function EmailVerificationBanner({
  email,
  onResend,
  resendCooldownSeconds = 60,
  className,
}: EmailVerificationBannerProps) {
  const [cooldown, setCooldown] = React.useState(0)
  const [isResending, setIsResending] = React.useState(false)

  const handleResend = async () => {
    if (cooldown > 0 || isResending) return
    setIsResending(true)
    try {
      await onResend()
      setCooldown(resendCooldownSeconds)
      const interval = setInterval(() => {
        setCooldown((c) => {
          if (c <= 1) {
            clearInterval(interval)
            return 0
          }
          return c - 1
        })
      }, 1000)
    } finally {
      setIsResending(false)
    }
  }

  return (
    <div
      role="status"
      className={cn(
        'rounded-xl border border-border bg-muted/50 p-4 space-y-3',
        className
      )}
    >
      <div className="flex gap-3">
        <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-primary/10 text-primary">
          <Mail className="h-5 w-5" aria-hidden />
        </div>
        <div className="min-w-0 flex-1">
          <p className="font-medium text-foreground">Verify your email</p>
          <p className="text-sm text-muted-foreground">
            We sent a verification link to <strong>{email}</strong>. Click the link to activate your account.
          </p>
        </div>
      </div>
      <Button
        type="button"
        variant="outline"
        size="sm"
        className="rounded-full"
        onClick={handleResend}
        disabled={cooldown > 0 || isResending}
      >
        {isResending
          ? 'Sending…'
          : cooldown > 0
            ? `Resend in ${cooldown}s`
            : 'Resend verification email'}
      </Button>
      <p className="flex items-center gap-2 text-xs text-muted-foreground">
        <CheckCircle className="h-3.5 w-3.5 text-success" aria-hidden />
        Check your inbox and spam folder.
      </p>
    </div>
  )
}
