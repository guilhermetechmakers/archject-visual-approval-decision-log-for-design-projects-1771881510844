import { useState } from 'react'
import { Link, useLocation } from 'react-router-dom'
import { Menu, X } from 'lucide-react'
import { Button } from '@/components/ui/button'
import { cn } from '@/lib/utils'

const navItems = [
  { label: 'Features', href: '/#features' },
  { label: 'How it works', href: '/#how-it-works' },
  { label: 'Templates', href: '/#templates' },
  { label: 'Pricing', href: '/#pricing' },
]

export function NavigationHeader() {
  const location = useLocation()
  const isLanding = location.pathname === '/'
  const [mobileOpen, setMobileOpen] = useState(false)

  return (
    <header
      className="sticky top-0 z-50 w-full border-b border-border bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60"
      role="banner"
    >
      <div className="container flex h-16 items-center justify-between px-4 md:px-6">
        <Link
          to="/"
          className="flex items-center gap-2 text-xl font-semibold text-foreground transition-opacity hover:opacity-90"
          aria-label="Archject home"
        >
          Archject
        </Link>

        {/* Desktop nav: pill-shaped tabs */}
        <nav
          className="hidden items-center gap-1 md:flex"
          aria-label="Main navigation"
        >
          {navItems.map(({ label, href }) => {
            const section = href.includes('#') ? href.split('#')[1] : ''
            const isActive =
              isLanding &&
              section &&
              typeof window !== 'undefined' &&
              window.location.hash === '#' + section
            return (
              <Link
                key={href}
                to={href}
                className={cn(
                  'rounded-full px-4 py-2 text-sm font-medium transition-colors',
                  isActive
                    ? 'bg-primary text-primary-foreground'
                    : 'text-muted-foreground hover:bg-secondary hover:text-foreground'
                )}
              >
                {label}
              </Link>
            )
          })}
        </nav>

        {/* User actions */}
        <div className="flex items-center gap-2">
          <Button variant="ghost" size="sm" className="hidden sm:inline-flex" asChild>
            <Link to="/login">Log in</Link>
          </Button>
          <Button size="sm" className="rounded-full" asChild>
            <Link to="/signup">Start free</Link>
          </Button>

          {/* Mobile menu toggle */}
          <Button
            variant="ghost"
            size="icon"
            className="md:hidden"
            onClick={() => setMobileOpen((o) => !o)}
            aria-label={mobileOpen ? 'Close menu' : 'Open menu'}
            aria-expanded={mobileOpen}
          >
            {mobileOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
          </Button>
        </div>
      </div>

      {/* Mobile nav drawer */}
      {mobileOpen && (
        <div
          className="animate-fade-in border-t border-border bg-background px-4 py-4 md:hidden"
          role="dialog"
          aria-label="Mobile navigation"
        >
          <nav className="flex flex-col gap-1" aria-label="Main navigation">
            {navItems.map(({ label, href }) => (
              <Link
                key={href}
                to={href}
                onClick={() => setMobileOpen(false)}
                className="rounded-lg px-4 py-3 text-sm font-medium text-foreground hover:bg-secondary"
              >
                {label}
              </Link>
            ))}
            <div className="mt-2 flex flex-col gap-2 border-t border-border pt-4">
              <Button variant="outline" className="w-full rounded-full" asChild>
                <Link to="/login" onClick={() => setMobileOpen(false)}>Log in</Link>
              </Button>
              <Button className="w-full rounded-full" asChild>
                <Link to="/signup" onClick={() => setMobileOpen(false)}>Start free</Link>
              </Button>
            </div>
          </nav>
        </div>
      )}
    </header>
  )
}
