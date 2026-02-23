import { Card, CardContent } from '@/components/ui/card'
import type { FeatureItem } from './types'
import { cn } from '@/lib/utils'

export interface FeatureCardGridProps {
  features: FeatureItem[]
  id?: string
}

export function FeatureCardGrid({ features, id = 'features' }: FeatureCardGridProps) {
  return (
    <section
      id={id}
      className="scroll-mt-20 border-b border-border bg-background px-4 py-16 md:py-24"
      aria-labelledby="features-heading"
    >
      <div className="container mx-auto max-w-6xl">
        <h2
          id="features-heading"
          className="text-center text-3xl font-bold text-foreground md:text-4xl"
        >
          Built for design teams
        </h2>
        <p className="mx-auto mt-4 max-w-xl text-center text-muted-foreground">
          Visual decisions, client links, audit trail, and exports—all in one place.
        </p>
        <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {features.map((feature, index) => {
            const Icon = feature.icon
            return (
              <Card
                key={feature.title}
                className={cn(
                  'transition-all duration-200 hover:shadow-card-hover animate-fade-in-up'
                )}
                style={{ animationDelay: `${index * 50}ms` }}
              >
                <CardContent className="p-6">
                  <div
                    className="flex h-12 w-12 items-center justify-center rounded-xl bg-primary/10 text-primary"
                    aria-hidden
                  >
                    <Icon className="h-6 w-6" />
                  </div>
                  <h3 className="mt-4 text-lg font-semibold text-foreground">
                    {feature.title}
                  </h3>
                  <p className="mt-2 text-sm text-muted-foreground">
                    {feature.description}
                  </p>
                </CardContent>
              </Card>
            )
          })}
        </div>
      </div>
    </section>
  )
}
