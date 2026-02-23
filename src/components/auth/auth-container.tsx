import * as React from 'react'
import { Link } from 'react-router-dom'
import { cn } from '@/lib/utils'

export interface AuthContainerProps {
  children: React.ReactNode
  /** Right-side illustration or marketing panel (hidden on small screens) */
  illustration?: React.ReactNode
  className?: string
}

export function AuthContainer({ children, illustration, className }: AuthContainerProps) {
  return (
    <div
      className={cn(
        'min-h-screen flex flex-col bg-background',
        'md:grid md:grid-cols-[1fr_1fr] lg:grid-cols-[minmax(0,0.55fr)_minmax(0,1fr)]',
        className
      )}
    >
      <div className="flex flex-1 flex-col items-center justify-center p-4 md:p-6 lg:p-8">
        <div className="w-full max-w-md">
          <Link
            to="/"
            className="inline-block text-xl font-semibold text-foreground transition-opacity hover:opacity-90 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 rounded-sm mb-8"
            aria-label="Archject home"
          >
            Archject
          </Link>
          {children}
        </div>
      </div>
      {illustration && (
        <div
          className="hidden md:flex flex-1 flex-col items-center justify-center p-8 lg:p-12 bg-secondary/30 border-l border-border"
          aria-hidden
        >
          <div className="w-full max-w-md text-center space-y-6">
            <div className="rounded-2xl bg-gradient-to-br from-primary/20 to-primary/5 border border-primary/10 p-12">
              <div className="text-6xl font-bold text-primary/40 tracking-tight">“</div>
              <p className="text-lg font-medium text-foreground mt-2">
                Streamline approvals and keep every design decision in one place.
              </p>
            </div>
            <p className="text-sm text-muted-foreground">
              Join architecture and design studios who ship decisions faster with Archject.
            </p>
          </div>
        </div>
      )}
    </div>
  )
}
