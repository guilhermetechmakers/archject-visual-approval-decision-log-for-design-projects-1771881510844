import { Link } from 'react-router-dom'
import { ArrowRight } from 'lucide-react'
import { Button } from '@/components/ui/button'
import type { HeroBlockProps } from './types'

export function HeroBlock({
  title,
  subtitle,
  ctaPrimary,
  ctaSecondary,
  media,
}: HeroBlockProps) {
  return (
    <section
      className="relative overflow-hidden border-b border-border bg-gradient-to-b from-secondary/50 to-background px-4 py-16 md:py-24 lg:py-32"
      aria-labelledby="hero-title"
    >
      <div className="container relative mx-auto max-w-6xl">
        <div className="mx-auto max-w-3xl text-center lg:text-left">
          <h1
            id="hero-title"
            className="text-4xl font-bold tracking-tight text-foreground md:text-5xl lg:text-6xl animate-fade-in-up"
          >
            {title}
          </h1>
          <p className="mx-auto mt-6 max-w-2xl text-lg text-muted-foreground animate-fade-in-up animation-delay-100 lg:mx-0">
            {subtitle}
          </p>
          <div className="mt-10 flex flex-wrap items-center justify-center gap-4 animate-fade-in-up animation-delay-200 lg:justify-start">
            <Button size="lg" className="min-h-[44px] rounded-full px-8" asChild>
              <Link to={ctaPrimary.href}>
                {ctaPrimary.label}
                <ArrowRight className="ml-2 h-4 w-4" aria-hidden />
              </Link>
            </Button>
            <Button
              variant="outline"
              size="lg"
              className="min-h-[44px] rounded-full px-8 transition-colors hover:bg-secondary"
              asChild
            >
              <Link to={ctaSecondary.href}>{ctaSecondary.label}</Link>
            </Button>
          </div>
        </div>

        {media && (
          <div className="relative mt-12 lg:absolute lg:right-0 lg:top-1/2 lg:mt-0 lg:-translate-y-1/2 lg:max-w-xl">
            <div className="overflow-hidden rounded-2xl border border-border shadow-card">
              {media.type === 'image' ? (
                <img
                  src={media.src}
                  alt={media.alt ?? 'Product overview'}
                  className="h-auto w-full object-cover"
                  loading="lazy"
                  decoding="async"
                />
              ) : (
                <video
                  src={media.src}
                  className="h-auto w-full object-cover"
                  muted
                  loop
                  playsInline
                  aria-label={media.alt ?? 'Product demo'}
                />
              )}
            </div>
          </div>
        )}
      </div>
    </section>
  )
}
