import { Card, CardContent } from '@/components/ui/card'
import type { HowItWorksStep } from './types'

export interface HowItWorksSectionProps {
  steps: HowItWorksStep[]
  id?: string
}

export function HowItWorksSection({
  steps,
  id = 'how-it-works',
}: HowItWorksSectionProps) {
  return (
    <section
      id={id}
      className="scroll-mt-20 border-b border-border bg-secondary/30 px-4 py-16 md:py-24"
      aria-labelledby="how-it-works-heading"
    >
      <div className="container mx-auto max-w-5xl">
        <h2
          id="how-it-works-heading"
          className="text-center text-3xl font-bold text-foreground md:text-4xl"
        >
          How it works
        </h2>
        <p className="mx-auto mt-4 max-w-xl text-center text-muted-foreground">
          Create decisions, share a link, capture approvals—then export your audit trail.
        </p>

        {/* Horizontal flow with connectors on desktop */}
        <div className="mt-12 grid gap-8 md:grid-cols-4 md:gap-4">
          {steps.map((step, index) => {
            const Icon = step.icon
            return (
              <div key={step.title} className="relative flex flex-col">
                <Card className="h-full transition-shadow duration-200 hover:shadow-card-hover animate-fade-in-up">
                  <CardContent className="flex flex-col p-6">
                    <span
                      className="text-sm font-medium text-primary"
                      aria-hidden
                    >
                      Step {index + 1}
                    </span>
                    <div className="mt-2 flex h-12 w-12 items-center justify-center rounded-xl bg-primary/10 text-primary">
                      <Icon className="h-6 w-6" />
                    </div>
                    <h3 className="mt-4 text-lg font-semibold text-foreground">
                      {step.title}
                    </h3>
                    <p className="mt-2 flex-1 text-sm text-muted-foreground">
                      {step.description}
                    </p>
                  </CardContent>
                </Card>
                {/* Connector line between steps (desktop) */}
                {index < steps.length - 1 && (
                  <div
                    className="absolute left-full top-1/2 hidden h-0.5 w-full -translate-y-1/2 bg-border md:block"
                    style={{ width: 'calc(50% + 1rem)' }}
                    aria-hidden
                  />
                )}
              </div>
            )
          })}
        </div>
      </div>
    </section>
  )
}
