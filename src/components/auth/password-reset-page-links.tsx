import { Link } from 'react-router-dom'
import { cn } from '@/lib/utils'

export interface PasswordResetPageLinksProps {
  variant?: 'link' | 'text'
  className?: string
}

export function PasswordResetPageLinks({ variant = 'link', className }: PasswordResetPageLinksProps) {
  return (
    <p className={cn('text-sm text-muted-foreground', className)}>
      <Link
        to="/password-reset"
        className={cn(
          variant === 'link'
            ? 'text-primary font-medium hover:underline focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 rounded-sm'
            : 'text-muted-foreground hover:text-foreground'
        )}
      >
        Forgot password?
      </Link>
    </p>
  )
}
