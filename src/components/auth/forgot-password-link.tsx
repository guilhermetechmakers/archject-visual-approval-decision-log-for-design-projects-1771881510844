import { Link } from 'react-router-dom'
import { cn } from '@/lib/utils'

export interface ForgotPasswordLinkProps {
  className?: string
}

/** Link from login form to Password Reset page. */
export function ForgotPasswordLink({ className }: ForgotPasswordLinkProps) {
  return (
    <div className={cn('text-sm', className)}>
      <Link
        to="/password-reset"
        className="text-primary hover:underline font-medium focus:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 rounded"
      >
        Forgot password?
      </Link>
    </div>
  )
}
