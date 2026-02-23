import { Link } from 'react-router-dom'
import { cn } from '@/lib/utils'

export interface FooterNavProps {
  className?: string
}

/** Minimal footer links: help, privacy, terms. */
export function FooterNav({ className }: FooterNavProps) {
  return (
    <nav
      className={cn('flex flex-wrap items-center justify-center gap-4 pt-6 text-sm text-muted-foreground', className)}
      aria-label="Footer"
    >
      <Link
        to="/help"
        className="hover:text-foreground focus:outline-none focus-visible:ring-2 focus-visible:ring-ring rounded"
      >
        Help
      </Link>
      <Link
        to="/privacy"
        className="hover:text-foreground focus:outline-none focus-visible:ring-2 focus-visible:ring-ring rounded"
      >
        Privacy
      </Link>
      <Link
        to="/terms"
        className="hover:text-foreground focus:outline-none focus-visible:ring-2 focus-visible:ring-ring rounded"
      >
        Terms
      </Link>
    </nav>
  )
}
