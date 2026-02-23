import { Link } from 'react-router-dom'
import { ArrowRight } from 'lucide-react'
import { Button } from '@/components/ui/button'
import type { CTAItem } from './types'
import { cn } from '@/lib/utils'

export interface CTABarProps {
  title: string
  subtitle?: string
  ctaPrimary: CTAItem
  ctaSecondary?: CTAItem
  className?: string
}

export function CTABar({
  title,
  subtitle,
  ctaPrimary,
  ctaSecondary,
  className,
}: CTABarProps) {
  return (
    <section
      className={cn(
        'border-b border-border bg-gradient-to-b from-secondary/30 to-background px-4 py-16 md:py-24',
        className
      )}
      aria-labelledby="cta-bar-title"
    >
      <div className="container mx-auto max-w-3xl text-center">
        <h2
          id="cta-bar-title"
          className="text-2xl font-bold text-foreground md:text-3xl"
        >
          {title}
        </h2>
        {subtitle && (
          <p className="mt-4 text-muted-foreground">{subtitle}</p>
        )}
        <div className="mt-8 flex flex-wrap items-center justify-center gap-4">
          <Button size="lg" className="min-h-[44px] rounded-full px-8" asChild>
            <Link to={ctaPrimary.href}>
              {ctaPrimary.label}
              <ArrowRight className="ml-2 h-4 w-4" aria-hidden />
            </Link>
          </Button>
          {ctaSecondary && (
            <Button
              variant="outline"
              size="lg"
              className="min-h-[44px] rounded-full px-8"
              asChild
            >
              <Link to={ctaSecondary.href}>{ctaSecondary.label}</Link>
            </Button>
          )}
        </div>
      </div>
    </section>
  )
}
