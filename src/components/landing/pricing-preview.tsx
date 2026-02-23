import { Link } from 'react-router-dom'
import { Check } from 'lucide-react'
import { Button } from '@/components/ui/button'
import { Card, CardContent } from '@/components/ui/card'
import type { PricingTier } from './types'
import { cn } from '@/lib/utils'

export interface PricingPreviewProps {
  tiers: PricingTier[]
  id?: string
}

export function PricingPreview({
  tiers,
  id = 'pricing',
}: PricingPreviewProps) {
  return (
    <section
      id={id}
      className="scroll-mt-20 border-b border-border bg-secondary/30 px-4 py-16 md:py-24"
      aria-labelledby="pricing-heading"
    >
      <div className="container mx-auto max-w-5xl">
        <h2
          id="pricing-heading"
          className="text-center text-3xl font-bold text-foreground md:text-4xl"
        >
          Simple pricing
        </h2>
        <p className="mx-auto mt-4 max-w-xl text-center text-muted-foreground">
          Start free. Upgrade when you need more projects and team members.
        </p>
        <div className="mt-12 grid gap-8 md:grid-cols-2">
          {tiers.map((tier) => (
            <Card
              key={tier.id}
              className={cn(
                'transition-all duration-200 hover:shadow-card-hover',
                tier.recommended && 'ring-2 ring-primary'
              )}
            >
              <CardContent className="p-6">
                {tier.recommended && (
                  <span className="inline-block rounded-full bg-primary px-3 py-1 text-xs font-medium text-primary-foreground">
                    Recommended
                  </span>
                )}
                <h3 className="mt-4 text-xl font-semibold text-foreground">
                  {tier.name}
                </h3>
                <p className="mt-2 text-3xl font-bold text-foreground">
                  {tier.price}
                </p>
                <ul className="mt-6 space-y-3" role="list">
                  {tier.features.map((feature) => (
                    <li
                      key={feature}
                      className="flex items-center gap-2 text-sm text-muted-foreground"
                    >
                      <Check className="h-4 w-4 shrink-0 text-primary" aria-hidden />
                      {feature}
                    </li>
                  ))}
                </ul>
                <Button
                  className="mt-8 w-full rounded-full"
                  variant={tier.recommended ? 'default' : 'outline'}
                  asChild
                >
                  <Link to={tier.cta.href}>{tier.cta.label}</Link>
                </Button>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}
