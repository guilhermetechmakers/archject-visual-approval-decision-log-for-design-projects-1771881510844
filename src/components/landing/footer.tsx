import { Link } from 'react-router-dom'
import { Twitter, Linkedin, Github } from 'lucide-react'
import { cn } from '@/lib/utils'

const footerLinks = [
  { label: 'About', href: '/#features' },
  { label: 'Help', href: '/help' },
  { label: 'Privacy', href: '/privacy' },
  { label: 'Terms', href: '/terms' },
  { label: 'Contact', href: '/#pricing' },
]

const socialIcons = [
  { label: 'Twitter', href: '#', icon: Twitter },
  { label: 'LinkedIn', href: '#', icon: Linkedin },
  { label: 'GitHub', href: '#', icon: Github },
]

export function Footer({ className }: { className?: string }) {
  return (
    <footer
      className={cn(
        'border-t border-border bg-background px-4 py-12',
        className
      )}
      role="contentinfo"
    >
      <div className="container mx-auto flex flex-col gap-8 md:flex-row md:items-center md:justify-between">
        <div className="flex flex-col gap-4">
          <Link
            to="/"
            className="text-lg font-semibold text-foreground hover:opacity-90"
          >
            Archject
          </Link>
          <nav
            className="flex flex-wrap gap-6"
            aria-label="Footer navigation"
          >
            {footerLinks.map(({ label, href }) => (
              <Link
                key={href}
                to={href}
                className="text-sm text-muted-foreground transition-colors hover:text-foreground focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2 rounded-sm"
              >
                {label}
              </Link>
            ))}
          </nav>
        </div>
        <div className="flex items-center gap-4">
          {socialIcons.map(({ label, href, icon: Icon }) => (
            <a
              key={label}
              href={href}
              target="_blank"
              rel="noopener noreferrer"
              className="text-muted-foreground transition-colors hover:text-foreground focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2 rounded-full p-2"
              aria-label={label}
            >
              <Icon className="h-5 w-5" />
            </a>
          ))}
        </div>
      </div>
      <div className="container mx-auto mt-8 border-t border-border pt-8">
        <p className="text-sm text-muted-foreground">
          © {new Date().getFullYear()} Archject. All rights reserved.
        </p>
      </div>
    </footer>
  )
}
